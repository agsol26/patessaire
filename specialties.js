// specialties.js - Multi-Specialty Dynamic Swapper and Scheduler Integration
(function() {
    // 1. Parse URL Parameter or local state
    const urlParams = new URLSearchParams(window.location.search);
    let currentSpec = urlParams.get('spec') || 'dentist';

    // 2. Comprehensive Specialties Database
    const specialties = {
        dentist: {
            doctor: "Dr. Nom Démo",
            fr: {
                dentist_title: "Chirurgien-Dentiste conventionnée",
                hero_title: "Votre sourire, notre <span>priorité scientifique</span>",
                hero_desc: "Cabinet dentaire moderne à Paris. Nous combinons l'expertise clinique, les technologies de pointe et une approche humaine pour des soins d'excellence.",
                pricing_legal_note: "* Tarifs conventionnés de l'Assurance Maladie. Cabinet de Secteur 1. Carte Vitale acceptée."
            },
            en: {
                dentist_title: "Regulated Dentist (Secteur 1)",
                hero_title: "Your smile, our <span>scientific priority</span>",
                hero_desc: "Modern dental clinic in Paris. We combine clinical expertise, cutting-edge technologies, and a human-centered approach.",
                pricing_legal_note: "* Regulated rates of French Social Security. Secteur 1 clinic. Carte Vitale accepted."
            },
            bentoServices: [
                { icon: "fa-teeth", titleFr: "Bilan & Prévention", descFr: "Examen annuel complet pour détecter et prévenir les caries et parodontites.", titleEn: "Check-up & Prevention", descEn: "Complete annual dental exam to detect and prevent cavities.", badgeFr: "Tarif Conventionné", badgeEn: "Regulated Rate", badgeColor: "var(--accent-teal)" },
                { icon: "fa-kit-medical", titleFr: "Urgences Dentaires", descFr: "Prise en charge prioritaire le jour-même pour rage de dent, abcès ou traumatisme.", titleEn: "Dental Emergencies", descEn: "Priority care for severe toothaches, abscesses, or trauma.", badgeFr: "Urgences 24h", badgeEn: "24h Emergencies", badgeColor: "#ff3b30" },
                { icon: "fa-tooth", titleFr: "Détartrage & Hygiène", descFr: "Élimination complète du tartre et polissage des taches pour des gencives saines.", titleEn: "Scaling & Hygiene", descEn: "Complete removal of plaque and polishing to maintain healthy gums.", badgeFr: "", badgeEn: "" },
                { icon: "fa-teeth-open", titleFr: "Esthétique Dentaire", descFr: "Blanchiment dentaire et facettes en céramique pour embellir votre sourire.", titleEn: "Cosmetic Dentistry", descEn: "Teeth whitening treatments and ceramic veneers to brighten your smile.", badgeFr: "", badgeEn: "" }
            ],
            bookingOptions: [
                { id: "consultation", price: 23.00, nameFr: "Consultation Dentaire", descFr: "Bilan initial, diagnostic et conseils", nameEn: "Dental Consultation", descEn: "Initial exam, diagnostics, and advice" },
                { id: "detartrage", price: 28.92, nameFr: "Détartrage & Hygiène", descFr: "Élimination du tartre supra-gingival", nameEn: "Dental Scaling", descEn: "Removal of dental plaque and tartar" },
                { id: "urgence", price: 23.00, nameFr: "Urgence Dentaire", descFr: "Douleur intense, abcès ou fracture", nameEn: "Dental Emergency", descEn: "Severe pain, swelling, or fracture", isUrgent: true },
                { id: "blanchiment", price: 350.00, nameFr: "Blanchiment Dentaire", descFr: "Traitement esthétique (Secteur 2 / Non remboursé)", nameEn: "Teeth Whitening", descEn: "Aesthetic whitening treatment (Non-reimbursed)" }
            ],
            table: {
                fr: [
                    ["Consultation de contrôle (Chirurgien-Dentiste)", "23,00 €", "13,80 €", "Secteur 1"],
                    ["Détartrage & Polissage (supra-gingival)", "28,92 €", "17,35 €", "Secteur 1"],
                    ["Traitement d'une carie (1 face)", "26,97 €", "16,18 €", "Secteur 1"],
                    ["Extraction d'une dent permanente", "33,44 €", "20,06 €", "Secteur 1"],
                    ["Blanchiment Dentaire (esthétique)", "350,00 €", "0,00 € (Non remboursé)", "Secteur 2"],
                    ["Examen bucco-dentaire M'T Dents (3 à 24 ans)", "0,00 €", "Prise en charge à 100%", "Secteur 1"]
                ],
                en: [
                    ["Routine Consultation (Dentist)", "23.00 €", "13.80 €", "Secteur 1"],
                    ["Scaling & Polishing (supra-gingival)", "28.92 €", "17.35 €", "Secteur 1"],
                    ["Treatment of a cavity (1 face)", "26.97 €", "16.18 €", "Secteur 1"],
                    ["Extraction of a permanent tooth", "33.44 €", "20.06 €", "Secteur 1"],
                    ["Teeth Whitening (aesthetic)", "350.00 €", "0.00 € (Not reimbursed)", "Secteur 2"],
                    ["M'T Dents dental exam (ages 3 to 24)", "0.00 €", "100% reimbursed", "Secteur 1"]
                ]
            }
        },
        gp: {
            doctor: "Dr. Lucas Bernard",
            fr: {
                dentist_title: "Médecin Généraliste",
                hero_title: "Votre santé, notre <span>engagement quotidien</span>",
                hero_desc: "Médecine générale et de famille à Paris. Consultations sur rendez-vous, suivi personnalisé et prévention santé pour tous les âges.",
                pricing_legal_note: "* Cabinet conventionné de Secteur 1. Tiers payant intégral avec la Carte Vitale."
            },
            en: {
                dentist_title: "General Practitioner",
                hero_title: "Your health, our <span>daily commitment</span>",
                hero_desc: "Family medicine in Paris. Consultations by appointment, personalized monitoring, and preventive care for all ages.",
                pricing_legal_note: "* Clinic is Secteur 1. We accept Carte Vitale and offer direct billing for mandatory health insurance."
            },
            bentoServices: [
                { icon: "fa-stethoscope", titleFr: "Consultation Générale", descFr: "Examen clinique complet, diagnostic, prescriptions et orientation médicale.", titleEn: "General Consultation", descEn: "Full clinical exam, diagnosis, medical prescriptions, and specialist referral.", badgeFr: "Secteur 1", badgeEn: "Secteur 1", badgeColor: "var(--accent-teal)" },
                { icon: "fa-heart-pulse", titleFr: "Urgences & Soins Aigus", descFr: "Prise en charge rapide pour fièvre, infections urinaires, blessures ou douleurs.", titleEn: "Acute Care & Emergencies", descEn: "Rapid treatment for fevers, infections, acute pain, or minor injuries.", badgeFr: "Urgences Jour", badgeEn: "Same-day slots", badgeColor: "#ff3b30" },
                { icon: "fa-clipboard-list", titleFr: "Bilan de Santé & Prévention", descFr: "Dépistages, suivi de maladies chroniques (diabète, hypertension) et bilans.", titleEn: "Health Check-up & Prevention", descEn: "Screenings, management of chronic conditions, and annual checks.", badgeFr: "", badgeEn: "" },
                { icon: "fa-baby", titleFr: "Suivi Pédiatrique", descFr: "Suivi des nourrissons, pesée, vaccinations et certificats d'aptitude sportive.", titleEn: "Pediatric Care", descEn: "Monitoring of babies, vaccinations, and sports medical certificates.", badgeFr: "", badgeEn: "" }
            ],
            bookingOptions: [
                { id: "gp_consultation", price: 26.50, nameFr: "Consultation de Médecine Générale", descFr: "Consultation standard adulte & enfant > 6 ans", nameEn: "General Medicine Consultation", descEn: "Standard consultation for adults and children > 6 yrs" },
                { id: "gp_pediatric", price: 31.50, nameFr: "Consultation Pédiatrique (< 6 ans)", descFr: "Suivi nourrisson, croissance et vaccins", nameEn: "Pediatric Consultation (< 6 yrs)", descEn: "Baby check-up, growth tracking, and vaccines" },
                { id: "gp_ecg", price: 40.26, nameFr: "Électrocardiogramme (ECG)", descFr: "ECG de contrôle avec tracé", nameEn: "Electrocardiogram (ECG)", descEn: "Routine ECG test and heart rhythm check" },
                { id: "gp_home", price: 35.00, nameFr: "Visite à domicile", descFr: "Uniquement en cas d'incapacité de déplacement", nameEn: "Home Visit", descEn: "Only in case of physical inability to travel" }
            ],
            table: {
                fr: [
                    ["Consultation de Médecine Générale (adulte)", "26,50 €", "15,90 €", "Secteur 1"],
                    ["Consultation pédiatrique (enfant < 6 ans)", "31,50 €", "18,90 €", "Secteur 1"],
                    ["Électrocardiogramme (ECG)", "40,26 €", "24,16 €", "Secteur 1"],
                    ["Frottis cervico-utérin de dépistage", "38,96 €", "23,38 €", "Secteur 1"],
                    ["Visite à domicile (justifiée)", "35,00 €", "21,00 €", "Secteur 1"]
                ],
                en: [
                    ["General Medicine Consultation (adult)", "26.50 €", "15.90 €", "Secteur 1"],
                    ["Pediatric Consultation (child < 6 yrs)", "31.50 €", "18.90 €", "Secteur 1"],
                    ["Electrocardiogram (ECG)", "40.26 €", "24.16 €", "Secteur 1"],
                    ["Cervical smear test screening", "38.96 €", "23.38 €", "Secteur 1"],
                    ["Home Visit (medically justified)", "35.00 €", "21.00 €", "Secteur 1"]
                ]
            }
        },
        cardiologist: {
            doctor: "Dr. Thomas Rousseau",
            fr: {
                dentist_title: "Médecin Cardiologue",
                hero_title: "Prendre soin de votre cœur, <span>notre vocation</span>",
                hero_desc: "Consultations cardiologiques spécialisées à Paris. Diagnostic, traitement et prévention des pathologies cardiovasculaires.",
                pricing_legal_note: "* Consultation spécialisée de Secteur 1 sur adressage de votre médecin traitant."
            },
            en: {
                dentist_title: "Cardiologist",
                hero_title: "Caring for your heart, <span>our calling</span>",
                hero_desc: "Specialized cardiological consultations. Diagnosis, treatment, and prevention of cardiovascular diseases.",
                pricing_legal_note: "* Secteur 1 specialist consultation under referral from your primary doctor."
            },
            bentoServices: [
                { icon: "fa-heart", titleFr: "Bilan Cardiac", descFr: "Examen complet du système cardiovasculaire, auscultation et facteurs de risque.", titleEn: "Cardiology Assessment", descEn: "Complete examination of the cardiovascular system and risk factors.", badgeFr: "Spécialisé", badgeEn: "Specialized", badgeColor: "var(--accent-teal)" },
                { icon: "fa-chart-line", titleFr: "Électrocardiogramme (ECG)", descFr: "Enregistrement électrique cardiaque pour détecter les anomalies de rythme.", titleEn: "Electrocardiogram (ECG)", descEn: "Recording heart's electrical activity to detect rhythm anomalies.", badgeFr: "Inclus", badgeEn: "Included", badgeColor: "var(--accent-teal)" },
                { icon: "fa-gauge-high", titleFr: "Suivi Hypertension", descFr: "Contrôle de la tension artérielle, réglage des traitements et hygiène de vie.", titleEn: "Hypertension Monitoring", descEn: "Blood pressure checks and treatment adjustment.", badgeFr: "", badgeEn: "" },
                { icon: "fa-wave-square", titleFr: "Échographie Cardiaque", descFr: "Visualisation par ultrasons des parois cardiaques et valves pour évaluer la fonction.", titleEn: "Echocardiogram", descEn: "Ultrasound visualization of heart walls and valves to evaluate function.", badgeFr: "", badgeEn: "" }
            ],
            bookingOptions: [
                { id: "cardio_consultation", price: 69.26, nameFr: "Consultation spécialisée avec ECG", descFr: "Avis de consultant et tracé ECG", nameEn: "Specialist Consultation with ECG", descEn: "Specialist consultation and ECG recording" },
                { id: "cardio_echo", price: 96.49, nameFr: "Échographie Cardiaque", descFr: "Échographie transthoracique Doppler", nameEn: "Transthoracic Echocardiogram", descEn: "Doppler ultrasound check of heart valves" },
                { id: "cardio_stress", price: 76.80, nameFr: "Test d'effort cardiaque", descFr: "Épreuve d'effort sur vélo d'appartement", nameEn: "Cardiac Stress Test", descEn: "Stress test on a stationary bicycle" }
            ],
            table: {
                fr: [
                    ["Consultation spécialisée avec ECG (APC)", "69,26 €", "41,56 €", "Secteur 1"],
                    ["Échographie Doppler cardiaque transthoracique", "96,49 €", "57,89 €", "Secteur 1"],
                    ["Épreuve d'effort cardiaque", "76,80 €", "46,08 €", "Secteur 1"],
                    ["Enregistrement Holter ECG (24h)", "77,01 €", "46,21 €", "Secteur 1"],
                    ["Enregistrement Holter tensionnel (MAPA)", "0,00 €", "Non remboursé (Hors nomenclature)", "Secteur 2"]
                ],
                en: [
                    ["Specialist Consultation with ECG (APC)", "69.26 €", "41.56 €", "Secteur 1"],
                    ["Transthoracic Doppler Echocardiography", "96.49 €", "57.89 €", "Secteur 1"],
                    ["Cardiac Stress Test", "76.80 €", "46.08 €", "Secteur 1"],
                    ["24h ECG Holter Monitoring", "77.01 €", "46.21 €", "Secteur 1"],
                    ["Ambulatory Blood Pressure (MAPA)", "0.00 €", "Not reimbursed", "Secteur 2"]
                ]
            }
        },
        dermatologist: {
            doctor: "Dr. Clara Dubois",
            fr: {
                dentist_title: "Médecin Dermatologue",
                hero_title: "La santé et la beauté de <span>votre peau</span>",
                hero_desc: "Dermatologie médicale, chirurgicale et esthétique. Diagnostic rapide des grains de beauté et traitement des maladies cutanées.",
                pricing_legal_note: "* Consultation spécialisée de Secteur 1. Remboursée par l'Assurance Maladie."
            },
            en: {
                dentist_title: "Dermatologist",
                hero_title: "The health and beauty of <span>your skin</span>",
                hero_desc: "Medical, surgical, and cosmetic dermatology. Rapid mole checking and treatment of skin diseases.",
                pricing_legal_note: "* Secteur 1 specialist consultation. Reimbursed by Social Security."
            },
            bentoServices: [
                { icon: "fa-magnifying-glass", titleFr: "Dépistage Mélanome", descFr: "Examen dermatoscopique complet des nævus pour la prévention des cancers.", titleEn: "Melanoma Screening", descEn: "Full dermatoscopic examination of moles for skin cancer prevention.", badgeFr: "Prévention", badgeEn: "Prevention", badgeColor: "var(--accent-teal)" },
                { icon: "fa-droplet", titleFr: "Acné & Inflammations", descFr: "Traitements personnalisés de l'acné sévère, de l'eczéma et du psoriasis.", titleEn: "Acne & Inflammations", descEn: "Personalized treatments for severe acne, eczema, and psoriasis.", badgeFr: "", badgeEn: "" },
                { icon: "fa-snowflake", titleFr: "Cryothérapie", descFr: "Traitement des verrues et lésions cutanées bénignes par azote liquide.", titleEn: "Cryotherapy", descEn: "Treatment of warts and benign lesions using liquid nitrogen.", badgeFr: "", badgeEn: "" },
                { icon: "fa-scalpel", titleFr: "Dermatologie Chirurgicale", descFr: "Exérèse de kystes, grains de beauté suspects ou petites tumeurs sous anesthésie.", titleEn: "Surgical Dermatology", descEn: "Removal of cysts or suspicious lesions under local anesthesia.", badgeFr: "Chirurgie", badgeEn: "Surgery", badgeColor: "#ff3b30" }
            ],
            bookingOptions: [
                { id: "derm_consultation", price: 56.50, nameFr: "Consultation de Dermatologie", descFr: "Consultation médicale standard pour pathologies cutanées", nameEn: "Dermatology Consultation", descEn: "Standard medical consultation for skin diseases" },
                { id: "derm_screening", price: 46.00, nameFr: "Dépistage des grains de beauté", descFr: "Examen dermatoscopique complet du corps", nameEn: "Mole Screening & Check", descEn: "Full-body mole assessment" },
                { id: "derm_cryo", price: 31.50, nameFr: "Séance de cryothérapie", descFr: "Traitement de verrues par azote liquide", nameEn: "Cryotherapy Session", descEn: "Wart treatment with liquid nitrogen" }
            ],
            table: {
                fr: [
                    ["Consultation d'avis ponctuel (APC)", "56,50 €", "33,90 €", "Secteur 1"],
                    ["Examen complet des grains de beauté (dépistage)", "46,00 €", "27,60 €", "Secteur 1"],
                    ["Séance de cryothérapie de verrues (1 à 10)", "31,50 €", "18,90 €", "Secteur 1"],
                    ["Exérèse chirurgicale de lésion cutanée", "68,80 €", "41,28 €", "Secteur 1"],
                    ["Traitement laser esthétique (hors nomenclature)", "120,00 €", "0,00 € (Non remboursé)", "Secteur 2"]
                ],
                en: [
                    ["Specialist Referral Consultation (APC)", "56.50 €", "33.90 €", "Secteur 1"],
                    ["Full Mole Screening & Check", "46.00 €", "27.60 €", "Secteur 1"],
                    ["Cryotherapy Session (1 to 10 warts)", "31.50 €", "18.90 €", "Secteur 1"],
                    ["Surgical Excision of cutaneous lesion", "68.80 €", "41.28 €", "Secteur 1"],
                    ["Aesthetic Laser Treatment", "120.00 €", "0.00 € (Not reimbursed)", "Secteur 2"]
                ]
            }
        },
        pediatrician: {
            doctor: "Dr. Sophie Lefebvre",
            fr: {
                dentist_title: "Médecin Pédiatre",
                hero_title: "Accompagner la croissance de <span>vos enfants</span>",
                hero_desc: "Suivi médical attentionné de la naissance à l'adolescence. Suivi du développement, vaccinations et urgences enfant.",
                pricing_legal_note: "* Consultation pédiatrique conventionnée de Secteur 1. Carte Vitale acceptée."
            },
            en: {
                dentist_title: "Pediatrician",
                hero_title: "Supporting the growth of <span>your children</span>",
                hero_desc: "Attentive medical care from birth to adolescence. Growth monitoring, vaccinations, and childhood emergencies.",
                pricing_legal_note: "* Secteur 1 pediatric consultation. Full reimbursement with Carte Vitale."
            },
            bentoServices: [
                { icon: "fa-baby", titleFr: "Suivi du Nourrisson", descFr: "Examen de croissance, alimentation, sommeil et développement du bébé.", titleEn: "Infant Monitoring", descEn: "Growth assessment, nutrition advice, and developmental milestones.", badgeFr: "0-2 ans", badgeEn: "0-2 yrs", badgeColor: "var(--accent-teal)" },
                { icon: "fa-syringe", titleFr: "Vaccinations", descFr: "Administration des vaccins obligatoires et recommandés selon le calendrier.", titleEn: "Vaccinations", descEn: "Administration of mandatory and recommended vaccines.", badgeFr: "Calendrier", badgeEn: "Schedule", badgeColor: "var(--accent-teal)" },
                { icon: "fa-kit-medical", titleFr: "Urgences Pédiatriques", descFr: "Prise en charge rapide pour fièvre, otite, bronchiolite ou éruptions.", titleEn: "Pediatric Emergencies", descEn: "Fast-tracked care for high fever, ear infections, or respiratory issues.", badgeFr: "Urgences", badgeEn: "Same-day", badgeColor: "#ff3b30" },
                { icon: "fa-arrows-up-down", titleFr: "Suivi Croissance", descFr: "Courbe de poids et de taille, dépistages sensoriels et du langage.", titleEn: "Growth Monitoring", descEn: "Height/weight curves, sensory checks, and language milestones.", badgeFr: "", badgeEn: "" }
            ],
            bookingOptions: [
                { id: "ped_consultation", price: 38.50, nameFr: "Consultation pédiatrique de suivi", descFr: "Contrôle régulier, poids, taille et alimentation", nameEn: "Standard Pediatric Consultation", descEn: "Routine check-up, weight, height, and nutrition" },
                { id: "ped_obligatory", price: 46.00, nameFr: "Examen obligatoire (8ème jour / 9ème mois)", descFr: "Examen complet de développement de l'enfant", nameEn: "Mandatory Infant Exam", descEn: "Comprehensive developmental infant check-up" },
                { id: "ped_urgent", price: 38.50, nameFr: "Urgence Pédiatrique", descFr: "Fièvre, otite ou toux aiguë", nameEn: "Pediatric Emergency", descEn: "Acute fever, earache, or sudden cough", isUrgent: true }
            ],
            table: {
                fr: [
                    ["Consultation de suivi pédiatrique", "38,50 €", "23,10 €", "Secteur 1"],
                    ["Examens obligatoires du nourrisson (certificat)", "46,00 €", "Prise en charge à 100%", "Secteur 1"],
                    ["Consultation d'urgence (fièvre, otite)", "38,50 €", "23,10 €", "Secteur 1"],
                    ["Dépistage sensoriel (vision/audition) complet", "45,30 €", "27,18 €", "Secteur 1"]
                ],
                en: [
                    ["Standard Pediatric Consultation", "38.50 €", "23.10 €", "Secteur 1"],
                    ["Mandatory Infant Examination (with certificate)", "46.00 €", "100% reimbursed", "Secteur 1"],
                    ["Emergency Consultation (fever, earache)", "38.50 €", "23.10 €", "Secteur 1"],
                    ["Sensory Screening (vision/hearing)", "45.30 €", "27.18 €", "Secteur 1"]
                ]
            }
        },
        gynecologist: {
            doctor: "Dr. Julie Moreau",
            fr: {
                dentist_title: "Gynécologue Médicale",
                hero_title: "Un suivi gynécologique <span>bienveillant & sûr</span>",
                hero_desc: "Gynécologie, obstétrique et contraception. Un espace d'écoute et de soins personnalisés pour toutes les étapes de la vie.",
                pricing_legal_note: "* Consultation de Secteur 1. Accès direct autorisé sans médecin traitant."
            },
            en: {
                dentist_title: "Gynecologist",
                hero_title: "Compassionate & secure <span>gynecological care</span>",
                hero_desc: "Gynecology, obstetrics, and contraception. Personalized monitoring and guidance through all stages of life.",
                pricing_legal_note: "* Secteur 1 consultation. Direct access allowed under French health policy."
            },
            bentoServices: [
                { icon: "fa-calendar-check", titleFr: "Consultation Annuelle", descFr: "Contrôle gynécologique systématique, palpation des seins et frottis.", titleEn: "Annual Check-up", descEn: "Routine check-up, breast examination, and cervical smear test.", badgeFr: "Dépistage", badgeEn: "Smear check", badgeColor: "var(--accent-teal)" },
                { icon: "fa-pills", titleFr: "Contraception", descFr: "Prescription de pilule, pose/retrait de stérilet ou d'implant contraceptif.", titleEn: "Contraception Services", descEn: "Pill prescriptions, insertion or removal of IUD and implants.", badgeFr: "", badgeEn: "" },
                { icon: "fa-child", titleFr: "Suivi de Grossesse", descFr: "Consultations prénatales mensuelles, conseils et suivi de grossesse.", titleEn: "Pregnancy Follow-up", descEn: "Monthly prenatal consultations and standard obstetric care.", badgeFr: "Grossesse", badgeEn: "Prenatal", badgeColor: "var(--accent-teal)" },
                { icon: "fa-user-nurse", titleFr: "Ménopause & Cycles", descFr: "Prise en charge des troubles du cycle et traitement hormonal substitutif.", titleEn: "Menopause & Cycle Care", descEn: "Management of cycle disorders and hormone replacement therapies.", badgeFr: "", badgeEn: "" }
            ],
            bookingOptions: [
                { id: "gyn_consultation", price: 30.00, nameFr: "Consultation de gynécologie & frottis", descFr: "Contrôle annuel de routine et prélèvement", nameEn: "Gynecology Consultation & Pap test", descEn: "Routine annual exam and screening test" },
                { id: "gyn_echo", price: 35.65, nameFr: "Échographie obstétricale (1er trim.)", descFr: "Échographie prénatale de datation de grossesse", nameEn: "Pregnancy Ultrasound (1st trimester)", descEn: "Prenatal dating ultrasound for pregnancy" },
                { id: "gyn_iud", price: 38.40, nameFr: "Pose de stérilet ou d'implant", descFr: "Contraception (dispositif intra-utérin ou sous-cutané)", nameEn: "IUD or Implant Insertion", descEn: "Contraception insertion procedure" }
            ],
            table: {
                fr: [
                    ["Consultation de gynécologie avec frottis", "30,00 €", "18,00 €", "Secteur 1"],
                    ["Échographie obstétricale de datation (1er trim.)", "35,65 €", "21,39 €", "Secteur 1"],
                    ["Pose ou changement de stérilet (DIU)", "38,40 €", "23,04 €", "Secteur 1"],
                    ["Ablation ou changement d'implant contraceptif", "41,80 €", "25,08 €", "Secteur 1"],
                    ["Consultation d'avis ponctuel (APC)", "56,50 €", "33,90 €", "Secteur 1"]
                ],
                en: [
                    ["Gynecology Consultation with smear test", "30.00 €", "18.00 €", "Secteur 1"],
                    ["Pregnancy Dating Ultrasound (1st trimester)", "35.65 €", "21.39 €", "Secteur 1"],
                    ["IUD Insertion or replacement", "38.40 €", "23.04 €", "Secteur 1"],
                    ["Contraceptive Implant Removal or replacement", "41.80 €", "25.08 €", "Secteur 1"],
                    ["Specialist Referral Consultation (APC)", "56.50 €", "33.90 €", "Secteur 1"]
                ]
            }
        },
        psychiatrist: {
            doctor: "Dr. Antoine Girard",
            fr: {
                dentist_title: "Médecin Psychiatre",
                hero_title: "Un accompagnement vers <span>le bien-être mental</span>",
                hero_desc: "Psychiatrie médicale et psychothérapie. Diagnostic et accompagnement des troubles anxieux, dépressifs et des étapes de vie.",
                pricing_legal_note: "* Consultation de Secteur 1. Remboursée par l'Assurance Maladie."
            },
            en: {
                dentist_title: "Psychiatrist",
                hero_title: "Support on your journey to <span>mental well-being</span>",
                hero_desc: "Medical psychiatry and psychotherapy. Diagnostic and treatment of anxiety, depression, and life transitions.",
                pricing_legal_note: "* Secteur 1 specialist consultation. Reimbursed by Social Security."
            },
            bentoServices: [
                { icon: "fa-brain", titleFr: "Consultation Psychiatrique", descFr: "Évaluation médicale et diagnostic clinique des troubles psychiques.", titleEn: "Psychiatric Consultation", descEn: "Medical assessment and clinical diagnosis of psychological distress.", badgeFr: "Médical", badgeEn: "Medical", badgeColor: "var(--accent-teal)" },
                { icon: "fa-cloud-rain", titleFr: "Dépression & Anxiété", descFr: "Prise en charge personnalisée des épisodes dépressifs et du burn-out.", titleEn: "Depression & Anxiety", descEn: "Personalized management of depressive episodes and burnout.", badgeFr: "", badgeEn: "" },
                { icon: "fa-moon", titleFr: "Troubles du Sommeil", descFr: "Diagnostic et régulation des insomnies chroniques et troubles du rythme.", titleEn: "Sleep Disorders", descEn: "Diagnosis and regulation of chronic insomnia and sleep issues.", badgeFr: "", badgeEn: "" },
                { icon: "fa-comments", titleFr: "Suivi Psychothérapeutique", descFr: "Entretiens de soutien combinant approche médicale et psychothérapie.", titleEn: "Psychotherapy Follow-up", descEn: "Regular supportive sessions combining medical monitoring and therapy.", badgeFr: "Suivi", badgeEn: "Support", badgeColor: "var(--accent-teal)" }
            ],
            bookingOptions: [
                { id: "psych_consultation", price: 51.70, nameFr: "Consultation de psychiatrie générale", descFr: "Évaluation initiale et gestion des traitements", nameEn: "General Psychiatry Consultation", descEn: "Initial assessment and treatment management" },
                { id: "psych_young", price: 51.70, nameFr: "Consultation jeune (16 - 25 ans)", descFr: "Consultation ciblée pour étudiants et jeunes adultes", nameEn: "Youth Consultation (ages 16 - 25)", descEn: "Specialized check-up for students and young adults" },
                { id: "psych_family", price: 62.50, nameFr: "Thérapie complexe / familiale", descFr: "Séance prolongée de thérapie de couple ou de famille", nameEn: "Family / Complex Psychotherapy", descEn: "Extended therapy session for couples or families" }
            ],
            table: {
                fr: [
                    ["Consultation de psychiatrie générale (adulte)", "51,70 €", "31,02 €", "Secteur 1"],
                    ["Consultation jeune (16 - 25 ans)", "51,70 €", "31,02 €", "Secteur 1"],
                    ["Thérapie familiale ou de couple (par séance)", "62,50 €", "37,50 €", "Secteur 1"],
                    ["Avis de consultant spécialiste (APC)", "62,50 €", "37,50 €", "Secteur 1"]
                ],
                en: [
                    ["General Psychiatry Consultation (adult)", "51.70 €", "31.02 €", "Secteur 1"],
                    ["Youth Psychiatry Consultation (ages 16-25)", "51.70 €", "31.02 €", "Secteur 1"],
                    ["Family / Couple Therapy (per session)", "62.50 €", "37.50 €", "Secteur 1"],
                    ["Specialist Referral Consultation (APC)", "62.50 €", "37.50 €", "Secteur 1"]
                ]
            }
        },
        ent: {
            doctor: "Dr. Nicolas Petit",
            fr: {
                dentist_title: "Médecin ORL",
                hero_title: "Soins spécialisés <span>nez, gorge & oreilles</span>",
                hero_desc: "Explorations ORL complètes. Traitement de la surdité, des sinusites chroniques, des vertiges et de la voix.",
                pricing_legal_note: "* Consultation spécialisée ORL conventionnée de Secteur 1."
            },
            en: {
                dentist_title: "ENT Specialist",
                hero_title: "Specialized care for <span>ear, nose & throat</span>",
                hero_desc: "Comprehensive ENT examinations. Treatment of hearing loss, chronic sinusitis, vertigo, and vocal issues.",
                pricing_legal_note: "* Secteur 1 ENT consultation. Reimbursed by health insurance."
            },
            bentoServices: [
                { icon: "fa-ear-deaf", titleFr: "Bilan Auditif", descFr: "Audiométrie tonale et vocale en cabine insonorisée pour évaluer l'audition.", titleEn: "Hearing Assessment", descEn: "Audiometry in a soundproof booth to evaluate hearing capacity.", badgeFr: "Audiométrie", badgeEn: "Audiometry", badgeColor: "var(--accent-teal)" },
                { icon: "fa-smog", titleFr: "Sinus & Allergies", descFr: "Nez bouché chronique, sinusites récidivantes et rhinites allergiques.", titleEn: "Sinus & Allergy Care", descEn: "Chronic nasal obstruction, recurrent sinusitis, and allergies.", badgeFr: "", badgeEn: "" },
                { icon: "fa-rotate", titleFr: "Vertiges & Équilibre", descFr: "Recherche des causes de vertiges (VPPB) et rééducation vestibulaire.", titleEn: "Vertigo & Balance", descEn: "Investigation of vertigo causes (BPPV) and balance monitoring.", badgeFr: "", badgeEn: "" },
                { icon: "fa-video", titleFr: "Fibroscopie Nasale", descFr: "Examen visuel direct des fosses nasales et cordes vocales par caméra.", titleEn: "Nasal Endoscopy", descEn: "Direct visual examination of cords and sinuses using a camera.", badgeFr: "Inclus", badgeEn: "Included", badgeColor: "var(--accent-teal)" }
            ],
            bookingOptions: [
                { id: "ent_consultation", price: 30.00, nameFr: "Consultation d'oto-rhino-laryngologie", descFr: "Avis spécialisé pour troubles nez, gorge ou oreilles", nameEn: "ENT Specialist Consultation", descEn: "Specialist check-up for ear, nose, or throat issues" },
                { id: "ent_hearing", price: 40.81, nameFr: "Audiométrie vocale et tonale", descFr: "Bilan complet de perte auditive en cabine", nameEn: "Hearing test (Audiometry)", descEn: "Soundproof booth test to evaluate hearing loss" },
                { id: "ent_fibroscopie", price: 44.60, nameFr: "Fibroscopie pharyngo-laryngée", descFr: "Examen direct des cordes vocales par endoscope souple", nameEn: "Pharyngolaryngeal Endoscopy", descEn: "Flexible endoscope examination of vocal cords" }
            ],
            table: {
                fr: [
                    ["Consultation spécialisée ORL (adulte)", "30,00 €", "18,00 €", "Secteur 1"],
                    ["Audiométrie tonale et vocale (test audition)", "40,81 €", "24,49 €", "Secteur 1"],
                    ["Fibroscopie pharyngo-laryngée", "44,60 €", "26,76 €", "Secteur 1"],
                    ["Avis de consultant spécialiste (APC)", "56,50 €", "33,90 €", "Secteur 1"],
                    ["Pose d'aérateurs transtympaniques (yoyos)", "86,40 €", "51,84 €", "Secteur 1"]
                ],
                en: [
                    ["ENT Specialist Consultation (adult)", "30.00 €", "18.00 €", "Secteur 1"],
                    ["Hearing test (Tone and Speech Audiometry)", "40.81 €", "24.49 €", "Secteur 1"],
                    ["Pharyngolaryngeal Endoscopy (Fibroscopy)", "44.60 €", "26.76 €", "Secteur 1"],
                    ["Specialist Referral Consultation (APC)", "56.50 €", "33.90 €", "Secteur 1"],
                    ["Transtympanal aerator insertion (grommets)", "86.40 €", "51.84 €", "Secteur 1"]
                ]
            }
        },
        orthopedist: {
            doctor: "Dr. Pierre Vincent",
            fr: {
                dentist_title: "Chirurgien Orthopédiste",
                hero_title: "Retrouvez votre <span>liberté de mouvement</span>",
                hero_desc: "Chirurgie osseuse, articulaire et traumatologie sportive. Diagnostic et traitement des douleurs des membres et du dos.",
                pricing_legal_note: "* Chirurgien de Secteur 1. Devis obligatoire remis pour tout acte chirurgical."
            },
            en: {
                dentist_title: "Orthopedic Surgeon",
                hero_title: "Regain your <span>freedom of movement</span>",
                hero_desc: "Bone and joint surgery and sports traumatology. Diagnosis and treatment of limb and back pain.",
                pricing_legal_note: "* Secteur 1 Orthopedic Surgeon. Detailed quotes provided for surgeries."
            },
            bentoServices: [
                { icon: "fa-bone", titleFr: "Bilan Ostéo-Articulaire", descFr: "Évaluation clinique des douleurs articulations et du dos.", titleEn: "Joint & Bone Assessment", descEn: "Clinical evaluation of joint pain and spine.", badgeFr: "Pathologies", badgeEn: "Joint pathology", badgeColor: "var(--accent-teal)" },
                { icon: "fa-syringe", titleFr: "Infiltrations Articulaires", descFr: "Injection ciblée anti-inflammatoire pour soulager les douleurs aiguës.", titleEn: "Joint Injections", descEn: "Targeted anti-inflammatory injections to relieve localized joint pain.", badgeFr: "", badgeEn: "" },
                { icon: "fa-crutch", titleFr: "Traumatologie du Sport", descFr: "Prise en charge des entorses, déchirures musculaires et ligaments croisés.", titleEn: "Sports Traumatology", descEn: "Management of sprains, muscle tears, and ligament lesions.", badgeFr: "Sport", badgeEn: "Sports injuries", badgeColor: "#ff3b30" },
                { icon: "fa-file-medical", titleFr: "Suivi Post-Opératoire", descFr: "Contrôle de cicatrisation, ablation de plâtre ou d'attelle et suivi.", titleEn: "Post-Surgery Follow-up", descEn: "Wound care check, removal of plaster casts/splints, and follow-up.", badgeFr: "", badgeEn: "" }
            ],
            bookingOptions: [
                { id: "ortho_consultation", price: 56.50, nameFr: "Consultation orthopédique", descFr: "Avis chirurgical articulations et membres", nameEn: "Specialist Orthopedic Consultation", descEn: "Surgical opinion on joints and limbs" },
                { id: "ortho_injection", price: 30.00, nameFr: "Infiltration articulaire (genou/épaule)", descFr: "Injection locale de corticoïdes sous repère", nameEn: "Corticosteroid Joint Injection", descEn: "Local joint injection under clinical guidance" },
                { id: "ortho_splint", price: 46.00, nameFr: "Confection d'une attelle ou plâtre", descFr: "Immobilisation orthopédique de membre blessé", nameEn: "Plaster Cast or Splint Application", descEn: "Orthopedic immobilization for injured limbs" }
            ],
            table: {
                fr: [
                    ["Consultation orthopédique spécialisée", "56,50 €", "33,90 €", "Secteur 1"],
                    ["Infiltration articulaire (genou/épaule)", "30,00 €", "18,00 €", "Secteur 1"],
                    ["Confection d'une attelle ou plâtre de membre", "46,00 €", "27,60 €", "Secteur 1"],
                    ["Avis de consultant spécialiste (APC)", "56,50 €", "33,90 €", "Secteur 1"],
                    ["Suivi post-opératoire de contrôle", "30,00 €", "18,00 €", "Secteur 1"]
                ],
                en: [
                    ["Specialist Orthopedic Consultation", "56.50 €", "33.90 €", "Secteur 1"],
                    ["Joint Injection (knee/shoulder)", "30.00 €", "18.00 €", "Secteur 1"],
                    ["Plaster Cast or Splint Application", "46.00 €", "27.60 €", "Secteur 1"],
                    ["Specialist Referral Consultation (APC)", "56.50 €", "33.90 €", "Secteur 1"],
                    ["Routine Post-Surgery Follow-up", "30.00 €", "18.00 €", "Secteur 1"]
                ]
            }
        },
        ophthalmologist: {
            doctor: "Dr. Évelyne Renaud",
            fr: {
                dentist_title: "Médecin Ophtalmologue",
                hero_title: "Préserver et améliorer <span>votre vision</span>",
                hero_desc: "Bilan visuel complet, prescription optique et suivi des pathologies de l'œil (glaucome, cataracte, DMLA).",
                pricing_legal_note: "* Médecin conventionné de Secteur 1. Accès direct autorisé (sans médecin traitant)."
            },
            en: {
                dentist_title: "Ophthalmologist",
                hero_title: "Preserve and improve <span>your vision</span>",
                hero_desc: "Complete visual assessment, lens prescriptions, and monitoring of eye diseases (glaucoma, cataract).",
                pricing_legal_note: "* Secteur 1 ophthalmologist. Direct access allowed under French health policy."
            },
            bentoServices: [
                { icon: "fa-eye", titleFr: "Bilan Visuel & Lunettes", descFr: "Mesure de l'acuité visuelle et correction optique pour lunettes ou lentilles.", titleEn: "Vision Check & Lens Fitting", descEn: "Measurement of visual acuity and optical correction for glasses/lenses.", badgeFr: "Optométrie", badgeEn: "Refraction", badgeColor: "var(--accent-teal)" },
                { icon: "fa-gauge", titleFr: "Tension Oculaire", descFr: "Dépistage précoce de la pression intraoculaire pour prévenir le glaucome.", titleEn: "Eye Pressure Check", descEn: "Early screening of intraocular pressure to prevent glaucoma.", badgeFr: "", badgeEn: "" },
                { icon: "fa-magnifying-glass-chart", titleFr: "Fond d'Œil", descFr: "Examen de la rétine pour patients diabétiques ou hypertendus.", titleEn: "Fundoscopy (Retina Exam)", descEn: "Examination of the retina for diabetic or hypertensive patients.", badgeFr: "Dépistage", badgeEn: "Fundus check", badgeColor: "var(--accent-teal)" },
                { icon: "fa-child-reaching", titleFr: "Ophtalmo-Pédiatrie", descFr: "Dépistage précoce des troubles visuels (strabisme) chez l'enfant.", titleEn: "Pediatric Ophthalmology", descEn: "Early screening of visual issues (strabismus) in young children.", badgeFr: "", badgeEn: "" }
            ],
            bookingOptions: [
                { id: "opht_consultation", price: 30.00, nameFr: "Consultation ophtalmo & réfraction", descFr: "Bilan de la vision et ordonnance de lunettes/lentilles", nameEn: "Ophthalmology & Refraction Check", descEn: "Vision check and prescription for glasses/lenses" },
                { id: "opht_glaucoma", price: 30.00, nameFr: "Mesure de la pression oculaire", descFr: "Dépistage ou suivi de la tension oculaire (glaucome)", nameEn: "Intraocular Pressure Test", descEn: "Screening or monitoring of eye pressure" },
                { id: "opht_fundus", price: 30.00, nameFr: "Examen du fond d'œil après dilatation", descFr: "Observation détaillée de la rétine (gouttes préalables)", nameEn: "Fundoscopy Exam (with dilation)", descEn: "Detailed inspection of the retina using dilation drops" }
            ],
            table: {
                fr: [
                    ["Consultation d'ophtalmologie & réfraction", "30,00 €", "18,00 €", "Secteur 1"],
                    ["Dépistage de la tension oculaire (glaucome)", "30,00 €", "18,00 €", "Secteur 1"],
                    ["Examen du fond d'œil après dilatation", "30,00 €", "18,00 €", "Secteur 1"],
                    ["Tomographie par Cohérence Optique (OCT)", "56,54 €", "33,92 €", "Secteur 1"],
                    ["Bilan de strabisme enfant (ophtalmo-pédiatrie)", "30,00 €", "18,00 €", "Secteur 1"]
                ],
                en: [
                    ["Ophthalmology & Refraction Check", "30.00 €", "18.00 €", "Secteur 1"],
                    ["Intraocular Pressure screening (glaucoma)", "30.00 €", "18.00 €", "Secteur 1"],
                    ["Fundoscopy retina exam (dilated)", "30.00 €", "18.00 €", "Secteur 1"],
                    ["Optical Coherence Tomography (OCT)", "56.54 €", "33.92 €", "Secteur 1"],
                    ["Pediatric Strabismus assessment", "30.00 €", "18.00 €", "Secteur 1"]
                ]
            }
        }
    };

    // 3. Main function to update specialty content dynamically
    window.updateSpecialty = function(spec) {
        currentSpec = spec;
        if (!specialties[spec]) return;
        
        const specData = specialties[spec];
        
        // A. Override the global translation dictionary keys in window.translations
        const globalTranslations = window.translations || (typeof translations !== 'undefined' ? translations : null);
        const globalLang = window.currentLang || (typeof currentLang !== 'undefined' ? currentLang : 'fr');

        if (globalTranslations) {
            for (let lang of ['fr', 'en']) {
                if (globalTranslations[lang]) {
                    Object.keys(specData[lang]).forEach(key => {
                        globalTranslations[lang][key] = specData[lang][key];
                    });
                }
            }
        }

        // B. Update DOM Elements
        
        // 1. Doctor Name (Image Alt & Headline)
        const heroImg = document.querySelector('.hero-img-container img');
        if (heroImg) heroImg.alt = specData.doctor;

        const docTitleCard = document.querySelector('.hero-img-container h3');
        if (docTitleCard) docTitleCard.textContent = specData.doctor;

        // 2. Footer Copyright
        const footerDocName = document.querySelector('footer p');
        if (footerDocName) {
            footerDocName.textContent = `© 2026 Cabinet Médical ${specData.doctor}. Tous droits réservés.`;
        }

        // 3. Document Title
        document.title = `${specData[globalLang].dentist_title} - ${specData.doctor}`;

        // 4. Render Bento Services Grid
        const bentoGrid = document.getElementById('bentoGrid');
        if (bentoGrid) {
            bentoGrid.innerHTML = '';
            specData.bentoServices.forEach((service, index) => {
                const item = document.createElement('div');
                const isWide = index === 0 || index === 4;
                item.className = `glass-card bento-item ${isWide ? 'wide' : ''}`;
                
                let badgeHtml = '';
                if (service.badgeFr) {
                    badgeHtml = `<span style="font-size: 0.8rem; color: ${service.badgeColor}; font-weight: bold;">${globalLang === 'fr' ? service.badgeFr : service.badgeEn}</span>`;
                }

                item.innerHTML = `
                    <i class="fa-solid ${service.icon}"></i>
                    <div>
                        <h3>${globalLang === 'fr' ? service.titleFr : service.titleEn}</h3>
                        <p>${globalLang === 'fr' ? service.descFr : service.descEn}</p>
                    </div>
                    ${badgeHtml}
                `;
                bentoGrid.appendChild(item);
            });
        }

        // 5. Render Pricing Table
        const pricingTableBody = document.querySelector('.pricing-table tbody');
        if (pricingTableBody) {
            pricingTableBody.innerHTML = '';
            const rows = specData.table[globalLang] || specData.table['fr'];
            rows.forEach(row => {
                const tr = document.createElement('tr');
                const badgeClass = (row[3] || '').includes('2') ? 'badge-secteur-2' : 'badge-secteur-1';
                tr.innerHTML = `
                    <td>${row[0]}</td>
                    <td>${row[1]}</td>
                    <td>${row[2]}</td>
                    <td><span class="pricing-badge ${badgeClass}">${row[3]}</span></td>
                `;
                pricingTableBody.appendChild(tr);
            });
        }

        // 6. Render Booking Step 1 Options & Link to Core Scheduler State
        const bookingOptionGrid = document.getElementById('bookingOptionGrid');
        if (bookingOptionGrid) {
            bookingOptionGrid.innerHTML = '';
            specData.bookingOptions.forEach((opt, index) => {
                const card = document.createElement('div');
                card.className = `glass-card option-card ${index === 0 ? 'selected' : ''}`;
                if (opt.isUrgent) {
                    card.style.borderColor = 'rgba(255, 59, 48, 0.2)';
                }

                // If selected by default, initialize the core scheduler state inside app.js
                if (index === 0 && typeof window.selectService === 'function') {
                    window.selectService(opt.id, opt.price, globalLang === 'fr' ? opt.nameFr : opt.nameEn);
                }

                card.innerHTML = `
                    <h4 style="${opt.isUrgent ? 'color: #ff3b30;' : ''}">${globalLang === 'fr' ? opt.nameFr : opt.nameEn}</h4>
                    <p>${globalLang === 'fr' ? opt.descFr : opt.descEn}</p>
                    <span style="${opt.isUrgent ? 'color: #ff3b30;' : ''}">${opt.price.toFixed(2)} € ${opt.isUrgent ? '*' : ''}</span>
                `;

                // Bind click event to card
                card.addEventListener('click', (e) => {
                    document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
                    card.classList.add('selected');
                    if (typeof window.selectService === 'function') {
                        window.selectService(opt.id, opt.price, globalLang === 'fr' ? opt.nameFr : opt.nameEn);
                    }
                });

                bookingOptionGrid.appendChild(card);
            });
        }

        // 7. Force translation engine to re-run
        if (typeof window.setLanguage === 'function') {
            window.setLanguage(globalLang);
        }
    };

    // 4. Page Load Bindings
    window.addEventListener('DOMContentLoaded', () => {
        const langSelect = document.getElementById('langSelect');
        if (langSelect) {
            // A. Create the Specialty Select Dropdown dynamically next to the Language Select
            const specSelect = document.createElement('select');
            specSelect.id = 'specSelect';
            specSelect.className = 'lang-select';
            specSelect.style.background = 'rgba(255, 255, 255, 0.7)';
            specSelect.style.marginRight = '0.5rem';
            specSelect.style.maxWidth = '180px';
            specSelect.style.fontSize = '0.8rem';
            specSelect.style.fontWeight = 'bold';

            // Populate specialties select dropdown options
            const options = [
                { value: "dentist", label: "🦷 Dentiste / Dentist" },
                { value: "gp", label: "🩺 Généraliste / GP" },
                { value: "cardiologist", label: "❤️ Cardiologue" },
                { value: "dermatologist", label: "🧴 Dermatologue" },
                { value: "pediatrician", label: "👶 Pédiatre / Pediatrician" },
                { value: "gynecologist", label: "♀️ Gynécologue" },
                { value: "psychiatrist", label: "🧠 Psychiatre" },
                { value: "ent", label: "👂 ORL / ENT" },
                { value: "orthopedist", label: "🦴 Orthopédiste" },
                { value: "ophthalmologist", label: "👁️ Ophtalmologue" }
            ];

            options.forEach(opt => {
                const el = document.createElement('option');
                el.value = opt.value;
                el.textContent = opt.label;
                if (opt.value === currentSpec) el.selected = true;
                specSelect.appendChild(el);
            });

            // Insert dropdown before langSelect in header
            langSelect.parentNode.insertBefore(specSelect, langSelect);

            // B. Listen for dropdown changes to swap specialty in real-time
            specSelect.addEventListener('change', (e) => {
                window.updateSpecialty(e.target.value);
            });
        }

        // C. Initialize with current specialty
        setTimeout(() => {
            window.updateSpecialty(currentSpec);
        }, 100);
        
        // D. Re-render table/motifs if user switches languages
        if (langSelect) {
            langSelect.addEventListener('change', () => {
                setTimeout(() => {
                    window.updateSpecialty(currentSpec);
                }, 50);
            });
        }
    });
})();