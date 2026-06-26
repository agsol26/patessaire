/* ==========================================================================
   MediCare Pro - Central Scheduling & Simulator Engine
   ========================================================================== */

// Translation Dictionary (French / English)
const translations = {
    fr: {
        nav_home: "Accueil",
        nav_services: "Services",
        nav_booking: "Prendre RDV",
        nav_pricing: "Tarifs",
        nav_portal: "Espace Patient",
        nav_admin: "Espace Praticien",
        btn_book_now: "Prendre RDV",
        hero_title: "Votre sourire, notre priorité scientifique",
        hero_desc: "Cabinet dentaire moderne à Paris. Nous combinons l'expertise clinique, les technologies de pointe et une approche humaine pour des soins bucco-dentaires d'excellence.",
        badge_sec1: "Tarifs conventionnés",
        badge_vitale: "Carte Vitale Acceptée",
        badge_zero_reste: "Reste à charge zéro",
        dentist_title: "Chirurgien-Dentiste conventionnée",
        services_title: "Soins & Spécialités",
        serv1_title: "Bilan & Prévention",
        serv1_desc: "Examen bucco-dentaire annuel complet pour détecter et prévenir l'apparition des caries et des maladies parodontales. Recommandé une fois par an.",
        serv2_title: "Urgences Dentaires",
        serv2_desc: "Douleurs aiguës, abcès, dent cassée ou traumatisme. Nous réservons chaque jour des plages horaires spécifiques pour vous soulager en priorité.",
        serv3_title: "Détartrage & Hygiène",
        serv3_desc: "Élimination du tartre et polissage des taches pour des gencives saines et une haleine fraîche.",
        serv4_title: "Esthétique & Blanchiment",
        serv4_desc: "Traitements d'éclaircissement dentaire et facettes en céramique pour illuminer votre sourire.",
        serv5_title: "Dispositif M'T Dents",
        serv5_desc: "Rendez-vous de prévention gratuit offert par l'Assurance Maladie pour les enfants et jeunes adultes de 3 à 24 ans. 100% pris en charge, sans avance de frais.",
        serv_conv: "Tarif Conventionné",
        serv_urg: "Prise en charge rapide",
        serv_free: "100% Remboursé",
        booking_section_title: "Prendre un Rendez-vous",
        step1_title: "Choisissez le motif de consultation",
        opt1_name: "Consultation Dentaire",
        opt1_desc: "Examen initial et diagnostic",
        opt2_name: "Détartrage",
        opt2_desc: "Élimination du tartre supra-gingival",
        opt3_name: "Urgence Dentaire",
        opt3_desc: "Douleur, rage de dent, traumatisme",
        opt4_name: "Blanchiment Dentaire",
        opt4_desc: "Soin esthétique (non remboursé)",
        step2_title: "Sélectionnez une date",
        calendar_help: "* Les dimanches et jours fériés sont fermés. Les cases sombres ne sont pas disponibles.",
        step3_title: "Sélectionnez une heure",
        step4_title: "Informations personnelles",
        form_lastname: "Nom de famille *",
        form_firstname: "Prénom *",
        form_email: "Adresse E-mail *",
        form_phone: "Numéro de téléphone portable (WhatsApp) *",
        form_lang: "Langue préférée pour les notifications *",
        form_gdpr: "En cochant cette case, j'accepte que le cabinet stocke mes données personnelles à des fins médicales et m'envoie des confirmations et rappels de rendez-vous par e-mail et WhatsApp conformément au RGPD. *",
        step5_success: "Rendez-vous confirmé !",
        step5_desc: "Votre demande de rendez-vous a bien été enregistrée dans notre système.",
        step5_alerts: "Une notification de confirmation instantanée a été envoyée sur votre téléphone. Vous recevrez également un e-mail de confirmation avec un fichier calendrier (.ics).",
        btn_prev: "Précédent",
        btn_next: "Suivant",
        pricing_section_title: "Tarifs & Remboursements",
        table_act: "Acte Clinique",
        table_tariff: "Tarif de Convention",
        table_remb: "Remboursement Sécu (60%)",
        table_class: "Secteur",
        pricing_legal_note: "* Les tarifs ci-dessus correspondent à la convention nationale de l'Assurance Maladie. Le cabinet est conventionné de Secteur 1. Il accepte la Carte Vitale et propose le tiers payant sur la part obligatoire pour les soins conventionnés. Pour les actes prothétiques ou esthétiques, un devis écrit vous sera systématiquement remis.",
        foot_legal: "Mentions Légales",
        foot_privacy: "Politique de Confidentialité",
        foot_rgpd: "Accès données RGPD"
    },
    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_booking: "Book Appointment",
        nav_pricing: "Pricing",
        nav_portal: "Patient Portal",
        nav_admin: "Practitioner Portal",
        btn_book_now: "Book Now",
        hero_title: "Your smile, our <span>scientific priority</span>",
        hero_desc: "Modern dental clinic in Paris. We combine clinical expertise, cutting-edge technologies, and a human-centered approach for excellent oral health care.",
        badge_sec1: "Regulated rates",
        badge_vitale: "Carte Vitale Accepted",
        badge_zero_reste: "Zero out-of-pocket costs",
        dentist_title: "Regulated Dentist (Secteur 1)",
        services_title: "Care & Specialties",
        serv1_title: "Check-up & Prevention",
        serv1_desc: "Complete annual dental exam to detect and prevent the appearance of cavities and periodontal diseases. Recommended once a year.",
        serv2_title: "Dental Emergencies",
        serv2_desc: "Acute pain, abscesses, broken teeth, or trauma. We reserve specific daily slots to prioritize relieving your pain.",
        serv3_title: "Scaling & Hygiene",
        serv3_desc: "Removal of tartar and polishing of stains for healthy gums and fresh breath.",
        serv4_title: "Cosmetic & Whitening",
        serv4_desc: "Teeth whitening treatments and ceramic veneers to brighten your smile.",
        serv5_title: "M'T Dents Youth Plan",
        serv5_desc: "Free preventive check-up offered by Social Security for children and young adults aged 3 to 24. 100% reimbursed, no upfront payment.",
        serv_conv: "Regulated Tarif",
        serv_urg: "Priority treatment",
        serv_free: "100% Reimbursed",
        booking_section_title: "Book an Appointment",
        step1_title: "Choose the reason for consultation",
        opt1_name: "Dental Check-up",
        opt1_desc: "Initial exam and diagnostics",
        opt2_name: "Dental Scaling",
        opt2_desc: "Removal of dental tartar",
        opt3_name: "Dental Emergency",
        opt3_desc: "Severe pain, swelling, fracture",
        opt4_name: "Teeth Whitening",
        opt4_desc: "Esthetic treatment (not reimbursed)",
        step2_title: "Select a date",
        calendar_help: "* Closed on Sundays and public holidays. Darker squares are unavailable.",
        step3_title: "Select a time slot",
        step4_title: "Personal Information",
        form_lastname: "Last Name *",
        form_firstname: "First Name *",
        form_email: "Email Address *",
        form_phone: "Mobile Phone Number (WhatsApp) *",
        form_lang: "Preferred Notification Language *",
        form_gdpr: "By checking this box, I consent to the clinic storing my personal details for medical purposes and sending booking confirmations/reminders via Email and WhatsApp in compliance with GDPR. *",
        step5_success: "Appointment Confirmed!",
        step5_desc: "Your booking request has been successfully recorded in our system.",
        step5_alerts: "An instant confirmation alert has been sent to your phone. You will also receive a confirmation email with a calendar invite file (.ics).",
        btn_prev: "Previous",
        btn_next: "Next",
        pricing_section_title: "Tariffs & Reimbursement",
        table_act: "Clinical Procedure",
        table_tariff: "Official Fee",
        table_remb: "Social Security Refund (60%)",
        table_class: "Sector",
        pricing_legal_note: "* The tariffs listed above correspond to the French National Health Insurance convention. The clinic is Secteur 1. We accept the Carte Vitale and offer direct billing for mandatory insurance. A detailed written quote is systematically provided for prosthetic or aesthetic treatments.",
        foot_legal: "Legal Notice",
        foot_privacy: "Privacy Policy",
        foot_rgpd: "GDPR Data Access"
    }
};

// Global State
let selectedService = {
    id: 'consultation',
    price: 23.00,
    name: 'Bilan & Consultation Dentaire'
};
let selectedDate = '';
let selectedTime = '';
let currentStep = 1;
let currentLang = 'fr';
let currentSimChannel = 'whatsapp';
let activeSimApptId = null;

// Simulated OTP Code storage
let generatedOtp = "";
let loginEmailInProgress = "";

// ==========================================================================
// 1. DUMMY DATA SEEDING (If localStorage is empty)
// ==========================================================================
function seedDummyData() {
    const appts = localStorage.getItem('dentist_appointments');
    if (!appts) {
        const dummyAppointments = [
            {
                id: "RDV-5392",
                patientLastName: "Dupont",
                patientFirstName: "Jean",
                patientEmail: "jean.dupont@email.fr",
                patientPhone: "+33 6 12 34 56 78",
                patientLang: "fr",
                serviceName: "Bilan & Consultation Dentaire",
                serviceId: "consultation",
                price: 23.00,
                date: getRelativeDateString(1), // Tomorrow
                time: "10:00",
                status: "confirmed",
                timestamp: Date.now()
            },
            {
                id: "RDV-2841",
                patientLastName: "Smith",
                patientFirstName: "Sarah",
                patientEmail: "sarah.smith@example.com",
                patientPhone: "+44 7911 123456",
                patientLang: "en",
                serviceName: "Détartrage & Polissage",
                serviceId: "detartrage",
                price: 28.92,
                date: getRelativeDateString(2), // In 2 days
                time: "14:30",
                status: "confirmed",
                timestamp: Date.now() - 3600000
            },
            {
                id: "RDV-9012",
                patientLastName: "Gomez",
                patientFirstName: "Carlos",
                patientEmail: "carlos.g@email.es",
                patientPhone: "+33 7 98 76 54 32",
                patientLang: "fr",
                serviceName: "Urgence Dentaire",
                serviceId: "urgence",
                price: 23.00,
                date: getRelativeDateString(0), // Today
                time: "11:30",
                status: "confirmed",
                timestamp: Date.now() - 7200000
            }
        ];
        localStorage.setItem('dentist_appointments', JSON.stringify(dummyAppointments));
    }
}

// Utility to get date relative to today (e.g. +1 = tomorrow)
function getRelativeDateString(daysOffset) {
    const date = new Date();
    date.setDate(date.getDate() + daysOffset);
    // Format YYYY-MM-DD
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

// ==========================================================================
// 2. MULTI-LANGUAGE TRANSLATION ENGINE
// ==========================================================================
function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-tr]').forEach(element => {
        const key = element.getAttribute('data-tr');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update active state in nav dropdown
    const select = document.getElementById('langSelect');
    if (select) select.value = lang;
    
    // Rerender dynamically generated items if visible
    if (document.getElementById('step2') && document.getElementById('step2').classList.contains('active')) {
        renderCalendar();
    }
}

// ==========================================================================
// 3. BOOKING WIZARD PORTAL (index.html)
// ==========================================================================
function selectService(id, price, name) {
    selectedService = { id, price, name };
    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    
    // Pre-select phone layout
    const patientLangField = document.getElementById('patientLang');
    if (patientLangField) {
        patientLangField.value = currentLang;
    }
}

function renderCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    if (!calendarGrid) return;
    calendarGrid.innerHTML = '';
    
    // Render Days of Week headers
    const daysOfWeek = currentLang === 'fr' 
        ? ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'] 
        : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        
    daysOfWeek.forEach(day => {
        const header = document.createElement('div');
        header.className = 'calendar-header-day';
        header.textContent = day;
        calendarGrid.appendChild(header);
    });

    // Generate next 14 calendar cells (including today)
    const today = new Date();
    
    // Start rendering from the current week's Monday
    const startOfWeek = new Date(today);
    const dayOfWeek = startOfWeek.getDay(); // 0=Sun, 1=Mon...
    const diff = startOfWeek.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // adjust to Monday
    startOfWeek.setDate(diff);

    for (let i = 0; i < 14; i++) {
        const cellDate = new Date(startOfWeek);
        cellDate.setDate(startOfWeek.getDate() + i);
        
        const dayCell = document.createElement('div');
        dayCell.className = 'calendar-day';
        
        const formattedDateString = `${cellDate.getFullYear()}-${String(cellDate.getMonth() + 1).padStart(2, '0')}-${String(cellDate.getDate()).padStart(2, '0')}`;
        
        // Label date number
        dayCell.textContent = cellDate.getDate();
        
        // Logic check: past dates, Sundays are disabled
        const isPast = cellDate < new Date().setHours(0,0,0,0);
        const isSunday = cellDate.getDay() === 0;
        
        if (isPast || isSunday) {
            dayCell.classList.add('disabled');
        } else {
            dayCell.setAttribute('data-date', formattedDateString);
            if (selectedDate === formattedDateString) {
                dayCell.classList.add('selected');
            }
            dayCell.onclick = () => {
                document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('selected'));
                dayCell.classList.add('selected');
                selectedDate = formattedDateString;
            };
        }
        
        calendarGrid.appendChild(dayCell);
    }
}

function renderTimeSlots() {
    const slotGrid = document.getElementById('slotGrid');
    if (!slotGrid) return;
    slotGrid.innerHTML = '';
    
    const standardSlots = [
        "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
        "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
    ];
    
    // Get existing bookings for selected date to prevent double-booking
    const appts = JSON.parse(localStorage.getItem('dentist_appointments') || '[]');
    const bookedTimes = appts
        .filter(a => a.date === selectedDate && a.status === 'confirmed')
        .map(a => a.time);

    standardSlots.forEach(time => {
        const btn = document.createElement('button');
        btn.className = 'slot-btn';
        btn.textContent = time;
        
        const isBooked = bookedTimes.includes(time);
        
        if (isBooked) {
            btn.classList.add('disabled');
            btn.title = "Déjà réservé / Booked";
        } else {
            if (selectedTime === time) {
                btn.classList.add('selected');
            }
            btn.onclick = () => {
                document.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedTime = time;
            };
        }
        
        slotGrid.appendChild(btn);
    });
}

function updateWizardProgressBar() {
    const progress = document.getElementById('wizardProgress');
    const totalSteps = 5;
    const percentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
    if (progress) progress.style.width = `${percentage}%`;
    
    // Update step indicators
    for (let i = 1; i <= 5; i++) {
        const indicator = document.getElementById(`indicator${i}`);
        if (indicator) {
            indicator.className = 'step-indicator';
            if (i < currentStep) indicator.classList.add('completed');
            if (i === currentStep) indicator.classList.add('active');
        }
    }
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = 'toast-alert glass-card';
    toast.style.borderColor = type === 'error' ? '#ff3b30' : 'var(--accent-teal)';
    
    const icon = type === 'error' ? 'fa-triangle-exclamation' : 'fa-circle-check';
    const iconColor = type === 'error' ? '#ff3b30' : 'var(--accent-teal)';
    
    toast.innerHTML = `
        <i class="fa-solid ${icon}" style="color: ${iconColor};"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s forwards';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

function nextStep() {
    if (currentStep === 1) {
        currentStep = 2;
        renderCalendar();
    } else if (currentStep === 2) {
        if (!selectedDate) {
            showToast(currentLang === 'fr' ? "Veuillez sélectionner une date." : "Please select a date.", 'error');
            return;
        }
        currentStep = 3;
        renderTimeSlots();
    } else if (currentStep === 3) {
        if (!selectedTime) {
            showToast(currentLang === 'fr' ? "Veuillez choisir un créneau horaire." : "Please select a time slot.", 'error');
            return;
        }
        currentStep = 4;
    } else if (currentStep === 4) {
        // Validate form
        const form = document.getElementById('bookingForm');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        
        // Submit Booking
        saveBooking();
        currentStep = 5;
        document.getElementById('prevBtn').style.display = 'none';
        document.getElementById('nextBtn').style.display = 'none';
    }
    
    // Toggle active classes
    document.querySelectorAll('.wizard-step-content').forEach(step => step.classList.remove('active'));
    document.getElementById(`step${currentStep}`).classList.add('active');
    
    if (currentStep > 1 && currentStep < 5) {
        document.getElementById('prevBtn').style.display = 'inline-block';
    }
    
    updateWizardProgressBar();
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        document.querySelectorAll('.wizard-step-content').forEach(step => step.classList.remove('active'));
        document.getElementById(`step${currentStep}`).classList.add('active');
        
        if (currentStep === 1) {
            document.getElementById('prevBtn').style.display = 'none';
        }
        
        updateWizardProgressBar();
    }
}

function saveBooking() {
    const lastName = document.getElementById('patientLastName').value;
    const firstName = document.getElementById('patientFirstName').value;
    const email = document.getElementById('patientEmail').value;
    const phone = document.getElementById('patientPhone').value;
    const lang = document.getElementById('patientLang').value;
    
    const rdvId = "RDV-" + Math.floor(1000 + Math.random() * 9000);
    
    const newAppointment = {
        id: rdvId,
        patientLastName: lastName,
        patientFirstName: firstName,
        patientEmail: email,
        patientPhone: phone,
        patientLang: lang,
        serviceName: selectedService.name,
        serviceId: selectedService.id,
        price: selectedService.price,
        date: selectedDate,
        time: selectedTime,
        status: "confirmed",
        timestamp: Date.now()
    };
    
    // Write to LocalStorage
    const appts = JSON.parse(localStorage.getItem('dentist_appointments') || '[]');
    appts.push(newAppointment);
    localStorage.setItem('dentist_appointments', JSON.stringify(appts));
    
    // Render confirmation text details
    document.getElementById('confCode').textContent = rdvId;
    document.getElementById('confService').textContent = selectedService.name;
    document.getElementById('confDate').textContent = formatDateFrench(selectedDate);
    document.getElementById('confTime').textContent = selectedTime;
    document.getElementById('confName').textContent = `${firstName} ${lastName}`;
    
    showToast(currentLang === 'fr' ? "Rendez-vous enregistré avec succès !" : "Appointment booked successfully!");
}

function formatDateFrench(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

// ==========================================================================
// 4. PRACTITIONER DASHBOARD & LIVE SIMULATOR (dashboard.html)
// ==========================================================================
function initDashboard() {
    seedDummyData();
    renderDashboardAppointments();
    updateDashboardStats();
    
    // Simulate real clock ticking
    setInterval(() => {
        const timeSpan = document.getElementById('phoneTime');
        if (timeSpan) {
            const now = new Date();
            timeSpan.textContent = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        }
    }, 1000);
}

function updateDashboardStats() {
    const appts = JSON.parse(localStorage.getItem('dentist_appointments') || '[]');
    
    // Stats today
    const todayStr = getRelativeDateString(0);
    const countToday = appts.filter(a => a.date === todayStr && a.status === 'confirmed').length;
    
    const statsToday = document.getElementById('statsToday');
    if (statsToday) statsToday.textContent = countToday;
}

function renderDashboardAppointments() {
    const container = document.getElementById('apptList');
    if (!container) return;
    container.innerHTML = '';
    
    const appts = JSON.parse(localStorage.getItem('dentist_appointments') || '[]');
    
    // Sort appointments: latest bookings first
    appts.sort((a, b) => b.timestamp - a.timestamp);
    
    if (appts.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 2rem;">Aucun rendez-vous planifié.</p>';
        return;
    }
    
    appts.forEach(appt => {
        const item = document.createElement('div');
        item.className = 'glass-card appt-item';
        item.style.marginBottom = '1rem';
        item.style.background = 'rgba(255,255,255,0.01)';
        
        const dateFormatted = appt.date === getRelativeDateString(0) 
            ? "Aujourd'hui" 
            : appt.date === getRelativeDateString(1) 
                ? "Demain" 
                : formatDateFrench(appt.date);
                
        item.innerHTML = `
            <div class="appt-details">
                <h4 style="color: var(--text-primary);">${appt.patientFirstName} ${appt.patientLastName} <span style="font-size: 0.75rem; background: rgba(0,0,0,0.05); padding: 0.15rem 0.4rem; border-radius: 4px; color: var(--accent-teal);">${appt.id}</span></h4>
                <p><i class="fa-solid fa-tooth" style="color: var(--accent-teal);"></i> ${appt.serviceName} | <strong>${appt.price} €</strong></p>
                <p><i class="fa-regular fa-clock"></i> ${dateFormatted} à <strong>${appt.time}</strong></p>
                <p style="font-size: 0.75rem; color: var(--text-muted);"><i class="fa-regular fa-envelope"></i> ${appt.patientEmail} | <i class="fa-solid fa-mobile-screen-button"></i> ${appt.patientPhone} [${appt.patientLang.toUpperCase()}]</p>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
                <button class="btn-primary" style="font-size: 0.75rem; padding: 0.4rem 0.8rem;" onclick="openReminderModal('${appt.id}')"><i class="fa-solid fa-bell"></i> Simuler Rappel</button>
                <button class="btn-secondary" style="font-size: 0.75rem; padding: 0.4rem 0.8rem; border-color: rgba(255, 59, 48, 0.4); color: #ff3b30;" onclick="cancelAppointment('${appt.id}')"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `;
        
        container.appendChild(item);
    });
}

function cancelAppointment(id) {
    if (confirm("Voulez-vous vraiment annuler ce rendez-vous ?")) {
        let appts = JSON.parse(localStorage.getItem('dentist_appointments') || '[]');
        appts = appts.filter(a => a.id !== id);
        localStorage.setItem('dentist_appointments', JSON.stringify(appts));
        
        renderDashboardAppointments();
        updateDashboardStats();
        showToast("Rendez-vous annulé.");
    }
}

function openReminderModal(apptId) {
    activeSimApptId = apptId;
    const modal = document.getElementById('reminderMenuModal');
    if (modal) {
        modal.style.display = 'flex';
        document.getElementById('modalTitle').innerHTML = `Simuler pour le RDV <span style="color:var(--text-primary);">${apptId}</span>`;
    }
}

function closeReminderModal() {
    const modal = document.getElementById('reminderMenuModal');
    if (modal) modal.style.display = 'none';
}

function setChannel(channel) {
    currentSimChannel = channel;
    
    // Toggle active state in buttons
    const waBtn = document.getElementById('chanWhatsAppBtn');
    const emBtn = document.getElementById('chanEmailBtn');
    
    if (channel === 'whatsapp') {
        if (waBtn) waBtn.className = 'btn-primary';
        if (emBtn) emBtn.className = 'btn-secondary';
        document.getElementById('phoneWhatsAppScreen').style.display = 'flex';
        document.getElementById('phoneEmailScreen').style.display = 'none';
    } else {
        if (waBtn) waBtn.className = 'btn-secondary';
        if (emBtn) emBtn.className = 'btn-primary';
        document.getElementById('phoneWhatsAppScreen').style.display = 'none';
        document.getElementById('phoneEmailScreen').style.display = 'block';
    }
    
    // If we have an active simulation, refresh views
    if (activeSimApptId) {
        showSimulationResult();
    }
}

// Generate the simulator content based on trigger type (confirm, 24h, 2h, post)
function triggerSimulation(type) {
    closeReminderModal();
    
    const appts = JSON.parse(localStorage.getItem('dentist_appointments') || '[]');
    const appt = appts.find(a => a.id === activeSimApptId);
    
    if (!appt) return;
    
    const lang = appt.patientLang;
    
    // Notification Payloads in FR/EN
    const notifications = {
        fr: {
            confirm_wa: `✅ *Rendez-vous Confirmé !*\n\nBonjour ${appt.patientFirstName},\n\nvotre rendez-vous de *${appt.serviceName}* au Cabinet du Dr. Élise Martin est bien confirmé pour le *${formatDateFrench(appt.date)} à ${appt.time}*.\n\n📍 *Adresse :* 75 Route de la Reine, Boulogne-Billancourt.\n🏥 N'oubliez pas votre *Carte Vitale*.\n\nPour déplacer ou annuler ce rendez-vous, merci de répondre :\n*1* - Confirmer la présence\n*2* - Modifier\n*3* - Annuler`,
            confirm_email_subject: "Confirmation de votre rendez-vous dentaire",
            confirm_email_body: `
                <h3 style="color:#0ea5e9; font-family:'Playfair Display',serif; margin-top:0;">Confirmation de RDV</h3>
                <p>Bonjour <strong>${appt.patientFirstName} ${appt.patientLastName}</strong>,</p>
                <p>Nous vous confirmons que votre rendez-vous dentaire est bien programmé dans notre agenda :</p>
                <div style="background:#f1f5f9; padding:12px; border-radius:6px; margin:15px 0; border-left: 3px solid #0ea5e9;">
                    <p style="margin:4px 0;">🦷 <strong>Soin:</strong> ${appt.serviceName}</p>
                    <p style="margin:4px 0;">📅 <strong>Date:</strong> ${formatDateFrench(appt.date)} à <strong>${appt.time}</strong></p>
                    <p style="margin:4px 0;">📍 <strong>Lieu:</strong> 75 Route de la Reine, 92100 Boulogne-Billancourt</p>
                </div>
                <p style="font-size:0.75rem; color:#64748b;">Un fichier d'invitation calendrier (.ics) est joint à cet e-mail pour synchroniser vos agendas Outlook/Google.</p>
            `,
            
            h24_wa: `⏰ *Rappel de Rendez-vous (Demain)*\n\nBonjour ${appt.patientFirstName},\n\npetit rappel : vous avez rendez-vous *demain à ${appt.time}* pour votre soin : *${appt.serviceName}*.\n\nMerci de confirmer votre présence en répondant :\n*1* - Confirmer\n*2* - Annuler`,
            h24_email_subject: "Rappel de rendez-vous dans 24 heures",
            h24_email_body: `
                <h3 style="color:#eab308; font-family:'Playfair Display',serif; margin-top:0;">Rappel de Soin (J-1)</h3>
                <p>Bonjour ${appt.patientFirstName},</p>
                <p>Ceci est un rappel automatique pour votre consultation dentaire prévue <strong>demain à ${appt.time}</strong>.</p>
                <p>Veuillez apporter vos derniers clichés radiographiques ou examens si vous en disposez.</p>
                <p>Si vous avez un empêchement, merci de nous contacter au plus vite.</p>
            `,
            
            h2: `🚨 *Votre rendez-vous est dans 2 heures !*\n\nBonjour ${appt.patientFirstName},\n\nnous vous attendons à *${appt.time}* au cabinet. Si vous êtes en retard, merci de nous prévenir.\n\nBonne route ! 🚲`,
            h2_email_subject: "Votre rendez-vous dans 2 heures",
            h2_email_body: `
                <h3 style="color:#6366f1; font-family:'Playfair Display',serif; margin-top:0;">Rendez-vous dans 2 heures</h3>
                <p>Bonjour ${appt.patientFirstName},</p>
                <p>Votre rendez-vous est prévu dans deux heures à <strong>${appt.time}</strong> au cabinet.</p>
                <p>Accès métro : Ligne 9 (Marcel Sembat) ou Ligne 10 (Boulogne-Jean Jaurès).</p>
            `,
            
            post_wa: `⭐ *Votre avis nous intéresse !*\n\nBonjour ${appt.patientFirstName},\n\nle Dr. Martin espère que vos soins dentaires se sont bien déroulés.\n\nComment évaluez-vous votre visite aujourd'hui ? Répondez avec un chiffre de *1 à 5* (5 étant excellent).`,
            post_email_subject: "Suivi post-consultation et ordonnance",
            post_email_body: `
                <h3 style="color:#0ea5e9; font-family:'Playfair Display',serif; margin-top:0;">Suivi de votre visite</h3>
                <p>Bonjour ${appt.patientFirstName},</p>
                <p>Merci pour votre confiance. Vous trouverez ci-joint votre note d'honoraires pour votre mutuelle ainsi que vos conseils d'hygiène post-opératoire.</p>
                <p>Si des douleurs persistent plus de 48 heures, n'hésitez pas à appeler le secrétariat.</p>
            `
        },
        en: {
            confirm_wa: `✅ *Appointment Confirmed !*\n\nHello ${appt.patientFirstName},\n\nyour appointment for *${appt.serviceName}* at Dr. Élise Martin's office is confirmed for *${appt.date} at ${appt.time}*.\n\n📍 *Location :* 75 Route de la Reine, Boulogne-Billancourt.\n🏥 Please bring your ID or health card.\n\nTo manage this appointment, reply:\n*1* - Confirm Attendance\n*2* - Reschedule\n*3* - Cancel`,
            confirm_email_subject: "Dental Appointment Confirmation",
            confirm_email_body: `
                <h3 style="color:#0ea5e9; font-family:'Playfair Display',serif; margin-top:0;">Appointment Confirmed</h3>
                <p>Hello <strong>${appt.patientFirstName} ${appt.patientLastName}</strong>,</p>
                <p>This is to confirm that your dental appointment is scheduled in our diary:</p>
                <div style="background:#f1f5f9; padding:12px; border-radius:6px; margin:15px 0; border-left: 3px solid #0ea5e9;">
                    <p style="margin:4px 0;">🦷 <strong>Procedure:</strong> ${appt.serviceName}</p>
                    <p style="margin:4px 0;">📅 <strong>Date:</strong> ${appt.date} at <strong>${appt.time}</strong></p>
                    <p style="margin:4px 0;">📍 <strong>Address:</strong> 75 Route de la Reine, 92100 Boulogne-Billancourt</p>
                </div>
                <p style="font-size:0.75rem; color:#64748b;">A calendar invitation file (.ics) has been attached to this email to sync with Google/Apple Calendar.</p>
            `,
            
            h24_wa: `⏰ *Appointment Reminder (Tomorrow)*\n\nHello ${appt.patientFirstName},\n\nquick reminder: you have an appointment *tomorrow at ${appt.time}* for: *${appt.serviceName}*.\n\nPlease confirm your attendance by replying:\n*1* - Confirm\n*2* - Cancel`,
            h24_email_subject: "Appointment Reminder in 24 hours",
            h24_email_body: `
                <h3 style="color:#eab308; font-family:'Playfair Display',serif; margin-top:0;">Reminder (24h before)</h3>
                <p>Hello ${appt.patientFirstName},</p>
                <p>This is an automated reminder for your dental appointment scheduled for <strong>tomorrow at ${appt.time}</strong>.</p>
                <p>Please contact us as soon as possible if you need to reschedule.</p>
            `,
            
            h2_wa: `🚨 *Your appointment is in 2 hours !*\n\nHello ${appt.patientFirstName},\n\nwe look forward to seeing you at *${appt.time}*. Please let us know if you are running late.\n\nSafe travels! 🚲`,
            h2_email_subject: "Your appointment in 2 hours",
            h2_email_body: `
                <h3 style="color:#6366f1; font-family:'Playfair Display',serif; margin-top:0;">Appointment in 2 hours</h3>
                <p>Hello ${appt.patientFirstName},</p>
                <p>Your appointment is scheduled in two hours at <strong>${appt.time}</strong>.</p>
                <p>Subway access: Line 9 (Marcel Sembat) or Line 10 (Boulogne-Jean Jaurès).</p>
            `,
            
            post_wa: `⭐ *Your feedback matters !*\n\nHello ${appt.patientFirstName},\n\nDr. Martin hopes your dental care went smoothly.\n\nHow would you rate your visit today? Reply with a number from *1 to 5* (5 being excellent).`,
            post_email_subject: "Post-visit follow-up and prescription",
            post_email_body: `
                <h3 style="color:#0ea5e9; font-family:'Playfair Display',serif; margin-top:0;">Post-Visit Follow-Up</h3>
                <p>Hello ${appt.patientFirstName},</p>
                <p>Thank you for choosing our clinic. Attached are your invoice and post-care hygiene recommendations.</p>
                <p>Please reach out if you experience persistent pain.</p>
            `
        }
    };
    
    // Store active simulation state
    window.activeSimulationData = {
        appt,
        texts: notifications[lang],
        type
    };
    
    // Increment logs count
    let logsCount = parseInt(document.getElementById('statsReminders').textContent);
    document.getElementById('statsReminders').textContent = logsCount + 1;
    
    showSimulationResult();
    
    // Play check notification sound
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.15);
    } catch(e) {}
    
    showToast("Alerte simulée sur l'appareil.");
}

function showSimulationResult() {
    const sim = window.activeSimulationData;
    if (!sim) return;
    
    const container = document.getElementById('whatsappBubblesContainer');
    const apiPayload = document.getElementById('apiPayload');
    
    // 1. Render simulated mobile notification
    if (currentSimChannel === 'whatsapp') {
        let text = '';
        if (sim.type === 'confirm') text = sim.texts.confirm_wa;
        if (sim.type === '24h') text = sim.texts.h24_wa;
        if (sim.type === '2h') text = sim.texts.h2_wa;
        if (sim.type === 'post') text = sim.texts.post_wa;
        
        // Convert \n to <br> for HTML rendering
        const htmlText = text.replace(/\n/g, '<br>').replace(/\*(.*?)\*/g, '<strong>$1</strong>');
        
        container.innerHTML = `
            <div class="whatsapp-bubble" style="align-self: flex-start;">
                ${htmlText}
                <span class="whatsapp-time">Maintenant</span>
            </div>
        `;
    } else {
        // Email mode
        document.getElementById('simEmailTo').textContent = sim.appt.patientEmail;
        
        let subject = '';
        let body = '';
        if (sim.type === 'confirm') {
            subject = sim.texts.confirm_email_subject;
            body = sim.texts.confirm_email_body;
        }
        if (sim.type === '24h') {
            subject = sim.texts.h24_email_subject;
            body = sim.texts.h24_email_body;
        }
        if (sim.type === '2h') {
            subject = sim.texts.h2_email_subject;
            body = sim.texts.h2_email_body;
        }
        if (sim.type === 'post') {
            subject = sim.texts.post_email_subject;
            body = sim.texts.post_email_body;
        }
        
        document.getElementById('simEmailSubject').textContent = subject;
        document.getElementById('simEmailBody').innerHTML = body;
    }
    
    // 2. Render simulated API Payload (JSON)
    let payload = {};
    if (currentSimChannel === 'whatsapp') {
        let msgBody = '';
        if (sim.type === 'confirm') msgBody = sim.texts.confirm_wa;
        if (sim.type === '24h') msgBody = sim.texts.h24_wa;
        if (sim.type === '2h') msgBody = sim.texts.h2_wa;
        if (sim.type === 'post') msgBody = sim.texts.post_wa;
        
        payload = {
            api: "twilio_whatsapp_v1",
            method: "POST",
            url: "https://api.twilio.com/2010-04-01/Accounts/AC.../Messages.json",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic [Auth_Token]"
            },
            body: {
                From: "whatsapp:+33644648792",
                To: `whatsapp:${sim.appt.patientPhone}`,
                Body: msgBody,
                StatusCallback: "https://votre-cabinet.fr/api/v1/notifications/status"
            }
        };
    } else {
        let mailBody = '';
        let mailSubject = '';
        if (sim.type === 'confirm') {
            mailSubject = sim.texts.confirm_email_subject;
            mailBody = sim.texts.confirm_email_body;
        }
        if (sim.type === '24h') {
            mailSubject = sim.texts.h24_email_subject;
            mailBody = sim.texts.h24_email_body;
        }
        if (sim.type === '2h') {
            mailSubject = sim.texts.h2_email_subject;
            mailBody = sim.texts.h2_email_body;
        }
        if (sim.type === 'post') {
            mailSubject = sim.texts.post_email_subject;
            mailBody = sim.texts.post_email_body;
        }
        
        payload = {
            api: "sendgrid_v3_mail",
            method: "POST",
            url: "https://api.sendgrid.com/v3/mail/send",
            headers: {
                "Authorization": "Bearer SG.ApiKey...",
                "Content-Type": "application/json"
            },
            body: {
                personalizations: [{
                    to: [{ email: sim.appt.patientEmail, name: `${sim.appt.patientFirstName} ${sim.appt.patientLastName}` }],
                    subject: mailSubject
                }],
<<<<<<< HEAD
                from: { email: "sales@theweb.ink", name: "Cabinet Médical Dr. Martin" },
=======
                from: { email: "no-reply@dentiste-martin.fr", name: "Cabinet Dentaire Dr. Martin" },
>>>>>>> d690aec48539834ed6f5ed162795762e3b48a46f
                content: [{
                    type: "text/html",
                    value: mailBody
                }],
                attachments: sim.type === 'confirm' ? [{
                    content: "QkVHSU46VkNBTEVOREFSDQpWRVJTSU9OOjIuMA0KQkVHSU46VkVWRU5UDQpEVFNUQVJUOjIwMjYwNjI0VDA4MDAwWg0K...",
                    filename: "invite_rdv.ics",
                    type: "text/calendar",
                    disposition: "attachment"
                }] : []
            }
        };
    }
    
    apiPayload.textContent = JSON.stringify(payload, null, 2);
}

// ==========================================================================
// 5. PATIENT PORTAL CODE (portal.html)
// ==========================================================================
function initPortal() {
    seedDummyData();
    
    // Check if patient is already logged in
    const loggedInUser = localStorage.getItem('portal_logged_in_patient');
    if (loggedInUser) {
        showPortalDashboard(JSON.parse(loggedInUser));
    } else {
        showPortalLogin();
    }
}

function showPortalLogin() {
    document.getElementById('portalLoginSection').style.display = 'block';
    document.getElementById('portalDashboardSection').style.display = 'none';
    document.getElementById('portalOtpForm').style.display = 'none';
    document.getElementById('portalLoginForm').style.display = 'block';
}

function showPortalDashboard(patient) {
    document.getElementById('portalLoginSection').style.display = 'none';
    document.getElementById('portalDashboardSection').style.display = 'block';
    
    // Set greeting
    document.getElementById('portalWelcome').textContent = currentLang === 'fr' 
        ? `Bonjour, ${patient.firstName} ${patient.lastName} !`
        : `Hello, ${patient.firstName} ${patient.lastName}!`;
        
    // Set sidebar profile
    document.getElementById('profileEmail').textContent = patient.email;
    document.getElementById('profilePhone').textContent = patient.phone;
    
    loadPortalAppointmentsAndHistory(patient.email);
}

function changePortalLang(lang) {
    currentLang = lang;
    
    // Translate portal titles and texts
    const portalWelcomeText = document.getElementById('portalWelcome');
    const loggedInUser = localStorage.getItem('portal_logged_in_patient');
    if (loggedInUser && portalWelcomeText) {
        const p = JSON.parse(loggedInUser);
        portalWelcomeText.textContent = lang === 'fr' ? `Bonjour, ${p.firstName} ${p.lastName} !` : `Hello, ${p.firstName} ${p.lastName}!`;
    }
    
    const transMap = {
        fr: {
            loginTitle: "Connexion Espace Patient",
            loginDesc: "Accédez à votre historique, vos ordonnances et vos prochains rendez-vous.",
            lblLoginEmail: "Adresse E-mail du dossier *",
            btnLoginSend: "Recevoir mon code OTP",
            loginNote: "* Un code de connexion à usage unique (OTP) sera envoyé sur votre téléphone portable (WhatsApp) ou votre e-mail pour sécuriser l'accès à vos données de santé.",
            lblLoginOtp: "Entrez le code OTP à 6 chiffres reçu *",
            btnLoginVerify: "Valider & Se connecter",
            btnResendOtp: "Renvoyer le code",
            portalSubWelcome: "Bienvenue dans votre espace santé sécurisé HDS.",
            lblLogout: "Se déconnecter",
            lblUpcoming: "Mes Prochains Rendez-vous",
            lblHistory: "Historique des Soins",
            lblProfile: "Mon Dossier Patient",
            lblDocuments: "Mes Documents & Ordonnances"
        },
        en: {
            loginTitle: "Patient Portal Login",
            loginDesc: "Access your treatment history, prescriptions, and upcoming bookings.",
            lblLoginEmail: "Dossier Email Address *",
            btnLoginSend: "Get OTP code",
            loginNote: "* A one-time connection password (OTP) will be sent to your mobile phone (WhatsApp) or email to secure access to your health details.",
            lblLoginOtp: "Enter the received 6-digit OTP code *",
            btnLoginVerify: "Verify & Connect",
            btnResendOtp: "Resend code",
            portalSubWelcome: "Welcome to your secure HDS health dashboard.",
            lblLogout: "Sign Out",
            lblUpcoming: "My Upcoming Bookings",
            lblHistory: "Treatment History",
            lblProfile: "My Patient File",
            lblDocuments: "My Documents & Prescriptions"
        }
    };
    
    const labels = transMap[lang];
    for (const [id, value] of Object.entries(labels)) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }
    
    // Also update form inputs placeholders
    const emailField = document.getElementById('loginEmail');
    if (emailField) {
        emailField.placeholder = lang === 'fr' ? "jean.dupont@email.fr" : "john.doe@email.com";
    }
    
    // Reload lists to update language
    if (loggedInUser) {
        loadPortalAppointmentsAndHistory(JSON.parse(loggedInUser).email);
    }
}

function handlePortalLoginSubmit(event) {
    event.preventDefault();
    const emailInput = document.getElementById('loginEmail').value.trim().toLowerCase();
    
    // Verify if patient record exists in our mock database
    const appts = JSON.parse(localStorage.getItem('dentist_appointments') || '[]');
    const patientRecord = appts.find(a => a.patientEmail.trim().toLowerCase() === emailInput);
    
    if (!patientRecord) {
        showToast(currentLang === 'fr' 
            ? "Aucun dossier trouvé pour cet e-mail. Veuillez d'abord prendre un rendez-vous." 
            : "No record found for this email. Please book an appointment first.", 'error');
        return;
    }
    
    // Record exists! Start passwordless simulated OTP flow
    generatedOtp = String(Math.floor(100000 + Math.random() * 900000)); // 6-digit OTP
    loginEmailInProgress = emailInput;
    
    // Show OTP field
    document.getElementById('portalLoginForm').style.display = 'none';
    document.getElementById('portalOtpForm').style.display = 'block';
    
    // Show notification prompt with the OTP code
    showToast(currentLang === 'fr' 
        ? `Code OTP envoyé ! (Simulé : ${generatedOtp})` 
        : `OTP Code Sent! (Simulated: ${generatedOtp})`);
        
    console.log(`[HDS PASSWORDSLESS AUTH] Code OTP généré pour ${emailInput} : ${generatedOtp}`);
}

function handlePortalOtpSubmit(event) {
    event.preventDefault();
    const enteredOtp = document.getElementById('loginOtp').value.trim();
    
    if (enteredOtp !== generatedOtp) {
        showToast(currentLang === 'fr' ? "Code OTP incorrect. Veuillez réessayer." : "Invalid OTP code. Please try again.", 'error');
        return;
    }
    
    // OTP matches! Get patient name details from records
    const appts = JSON.parse(localStorage.getItem('dentist_appointments') || '[]');
    const record = appts.find(a => a.patientEmail.toLowerCase() === loginEmailInProgress.toLowerCase());
    
    const patientObj = {
        email: loginEmailInProgress,
        firstName: record.patientFirstName,
        lastName: record.patientLastName,
        phone: record.patientPhone
    };
    
    localStorage.setItem('portal_logged_in_patient', JSON.stringify(patientObj));
    showToast(currentLang === 'fr' ? "Connexion réussie !" : "Login successful!");
    showPortalDashboard(patientObj);
}

function handlePortalLogout() {
    localStorage.removeItem('portal_logged_in_patient');
    showPortalLogin();
    showToast(currentLang === 'fr' ? "Déconnexion réussie." : "Logged out successfully.");
}

function resendOtp() {
    generatedOtp = String(Math.floor(100000 + Math.random() * 900000));
    showToast(currentLang === 'fr' 
        ? `Nouveau code OTP envoyé ! (Simulé : ${generatedOtp})` 
        : `New OTP Code Sent! (Simulated: ${generatedOtp})`);
    console.log(`[HDS PASSWORDSLESS AUTH] Code OTP régénéré pour ${loginEmailInProgress} : ${generatedOtp}`);
}

function loadPortalAppointmentsAndHistory(email) {
    const appts = JSON.parse(localStorage.getItem('dentist_appointments') || '[]');
    
    // Filter patient's appointments
    const myAppts = appts.filter(a => a.patientEmail.toLowerCase() === email.toLowerCase() && a.status === 'confirmed');
    
    const upcomingContainer = document.getElementById('portalUpcomingList');
    const historyContainer = document.getElementById('portalHistoryList');
    const docContainer = document.getElementById('portalDocList');
    
    if (!upcomingContainer || !historyContainer || !docContainer) return;
    
    upcomingContainer.innerHTML = '';
    historyContainer.innerHTML = '';
    docContainer.innerHTML = '';
    
    const todayStr = getRelativeDateString(0);
    
    // 1. Upcoming Appointments
    const upcoming = myAppts.filter(a => a.date >= todayStr);
    upcoming.sort((a,b) => a.date.localeCompare(b.date));
    
    if (upcoming.length === 0) {
        upcomingContainer.innerHTML = `<p style="color:var(--text-muted); font-size:0.9rem;">${currentLang === 'fr' ? 'Aucun rendez-vous à venir.' : 'No upcoming appointments.'}</p>`;
    } else {
        upcoming.forEach(appt => {
            const card = document.createElement('div');
            card.className = 'glass-card';
            card.style.padding = '1.2rem';
            card.style.background = 'rgba(0, 0, 0, 0.01)';
            card.style.marginBottom = '1rem';
            card.style.display = 'flex';
            card.style.justifyContent = 'space-between';
            card.style.alignItems = 'center';
            
            card.innerHTML = `
                <div>
                    <h4 style="color:var(--text-primary); font-size:1rem;">🦷 ${appt.serviceName}</h4>
                    <p style="font-size:0.85rem; color:var(--text-muted); margin-top:0.2rem;"><i class="fa-regular fa-calendar"></i> ${formatDateFrench(appt.date)} à <strong>${appt.time}</strong></p>
                </div>
                <button class="btn-secondary" style="color:#ff3b30; border-color:rgba(255,59,48,0.2); font-size:0.8rem; padding:0.4rem 0.8rem;" onclick="cancelPortalAppointment('${appt.id}')">${currentLang === 'fr' ? 'Annuler' : 'Cancel'}</button>
            `;
            upcomingContainer.appendChild(card);
        });
    }
    
    // 2. Treatment History (Seeded past items + older local bookings)
    const localPast = myAppts.filter(a => a.date < todayStr);
    
    // We add static seeded history to show a realistic clinical record
    const seededHistory = [
        { date: "2025-09-12", serviceName: "Examen Initial & Bilan", doctor: "Dr. Élise Martin", cost: "23.00 €" },
        { date: "2026-02-15", serviceName: "Détartrage & Polissage", doctor: "Dr. Élise Martin", cost: "28.92 €" }
    ];
    
    const fullHistory = [...localPast.map(a => ({ date: a.date, serviceName: a.serviceName, doctor: "Dr. Élise Martin", cost: `${a.price} €` })), ...seededHistory];
    fullHistory.sort((a,b) => b.date.localeCompare(a.date)); // Latest treatments first
    
    fullHistory.forEach(item => {
        const histCard = document.createElement('div');
        histCard.className = 'glass-card';
        histCard.style.padding = '1rem';
        histCard.style.background = 'rgba(0,0,0,0.01)';
        histCard.style.display = 'flex';
        histCard.style.justifyContent = 'space-between';
        histCard.style.alignItems = 'center';
        
        histCard.innerHTML = `
            <div>
                <p style="font-weight:600; font-size:0.9rem;">${item.serviceName}</p>
                <p style="font-size:0.75rem; color:var(--text-muted);"><i class="fa-solid fa-user-doctor"></i> ${item.doctor} | ${formatDateFrench(item.date)}</p>
            </div>
            <span style="font-size:0.8rem; font-weight:bold; color:var(--accent-teal);">${item.cost}</span>
        `;
        historyContainer.appendChild(histCard);
    });
    
    // 3. Documents (E-Prescriptions, Mutuelle Invoices)
    const documents = [
        { name: "Ordonnance - Soin Carie.pdf", type: "prescription", date: "15 Février 2026" },
        { name: "Note d'honoraires - Détartrage.pdf", type: "invoice", date: "15 Février 2026" },
        { name: "Fiche Conseils Post-Opératoires.pdf", type: "advice", date: "12 Septembre 2025" }
    ];
    
    documents.forEach(doc => {
        const docLink = document.createElement('div');
        docLink.className = 'glass-card';
        docLink.style.padding = '0.75rem 1rem';
        docLink.style.background = 'rgba(0,0,0,0.01)';
        docLink.style.display = 'flex';
        docLink.style.justifyContent = 'space-between';
        docLink.style.alignItems = 'center';
        
        const iconClass = doc.type === 'prescription' ? 'fa-file-prescription' : doc.type === 'invoice' ? 'fa-file-invoice-dollar' : 'fa-file-shield';
        
        docLink.innerHTML = `
            <div style="display:flex; align-items:center; gap:0.75rem;">
                <i class="fa-solid ${iconClass}" style="color:var(--accent-teal); font-size:1.2rem;"></i>
                <div>
                    <p style="font-size:0.85rem; font-weight:600; color:var(--text-primary);">${doc.name}</p>
                    <p style="font-size:0.7rem; color:var(--text-muted);">${doc.date}</p>
                </div>
            </div>
            <button class="btn-secondary" style="font-size:0.7rem; padding:0.35rem 0.6rem;" onclick="simulatePdfDownload('${doc.name}')"><i class="fa-solid fa-download"></i></button>
        `;
        docContainer.appendChild(docLink);
    });
}

function cancelPortalAppointment(id) {
    if (confirm(currentLang === 'fr' ? "Voulez-vous vraiment annuler ce rendez-vous ?" : "Are you sure you want to cancel this appointment?")) {
        let appts = JSON.parse(localStorage.getItem('dentist_appointments') || '[]');
        appts = appts.filter(a => a.id !== id);
        localStorage.setItem('dentist_appointments', JSON.stringify(appts));
        
        // Reload dashboard
        const loggedInUser = localStorage.getItem('portal_logged_in_patient');
        if (loggedInUser) {
            loadPortalAppointmentsAndHistory(JSON.parse(loggedInUser).email);
        }
        showToast(currentLang === 'fr' ? "Rendez-vous annulé." : "Appointment cancelled.");
    }
}

function simulatePdfDownload(filename) {
    showToast(currentLang === 'fr' 
        ? `Téléchargement du fichier : ${filename} (Simulé)` 
        : `Downloading file: ${filename} (Simulated)`);
}

function exportRgpdData() {
    const loggedInUser = localStorage.getItem('portal_logged_in_patient');
    if (!loggedInUser) return;
    
    const patient = JSON.parse(loggedInUser);
    const appts = JSON.parse(localStorage.getItem('dentist_appointments') || '[]');
    const myAppts = appts.filter(a => a.patientEmail.toLowerCase() === patient.email.toLowerCase());
    
    const seededHistory = [
        { date: "2025-09-12", serviceName: "Examen Initial & Bilan", doctor: "Dr. Élise Martin", cost: "23.00 €" },
        { date: "2026-02-15", serviceName: "Détartrage & Polissage", doctor: "Dr. Élise Martin", cost: "28.92 €" }
    ];
    
    const exportPayload = {
        export_date: new Date().toISOString(),
        rgpd_compliance: "EU GDPR Article 20 - Right to Data Portability",
        patient_profile: {
            first_name: patient.firstName,
            last_name: patient.lastName,
            email: patient.email,
            phone: patient.phone,
            social_security_number: "1 89 12 75 123 456 78",
            health_insurance: "ALAN Assurances (100% Santé)",
            allergies: ["Pénicilline"]
        },
        appointments: myAppts.map(a => ({
            id: a.id,
            date: a.date,
            time: a.time,
            service: a.serviceName,
            price: `${a.price} €`,
            status: a.status
        })),
        past_clinical_history: seededHistory
    };
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportPayload, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `dossier_medical_rgpd_${patient.lastName.toLowerCase()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    
    showToast(currentLang === 'fr' 
        ? "Export de vos données RGPD réussi (Fichier téléchargé) !" 
        : "GDPR data export successful (File downloaded)!");
}

// ==========================================================================
// 6. EVENT LISTENERS
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
    // Check if we are on landing page or dashboard or portal
    const langSelect = document.getElementById('langSelect');
    if (langSelect && document.getElementById('indicator1')) { // indicator1 is only on booking portal
        langSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
        
        // Seed database
        seedDummyData();
        
        // Render initial values
        renderCalendar();
        renderTimeSlots();
    }
    
    const bellBtn = document.getElementById('bellBtn');
    if (bellBtn) {
        bellBtn.addEventListener('click', () => {
            showToast(currentLang === 'fr' ? "Pas de nouvelles notifications." : "No new notifications.");
        });
    }
});
