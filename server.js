const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// File path for mock database
const DB_FILE = path.join(__dirname, 'database.json');

// Ensure DB file exists
if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2));
}

// API: Get all appointments
app.get('/api/appointments', (req, res) => {
    try {
        const data = fs.readFileSync(DB_FILE, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: 'Failed to read database' });
    }
});

// API: Create appointment
app.post('/api/appointments', (req, res) => {
    try {
        const newAppt = req.body;
        const data = fs.readFileSync(DB_FILE, 'utf8');
        const appts = JSON.parse(data);
        
        // Generate random ID if not provided
        if (!newAppt.id) {
            newAppt.id = "RDV-" + Math.floor(1000 + Math.random() * 9000);
        }
        newAppt.timestamp = Date.now();
        newAppt.status = "confirmed";
        
        appts.push(newAppt);
        fs.writeFileSync(DB_FILE, JSON.stringify(appts, null, 2));
        
        // --- SIMULATED SOVEREIGN ROUTING LOGIC ---
        console.log(`\n==================================================`);
        console.log(`[HDS SOVEREIGN ROUTER] New Appointment booked: ${newAppt.id}`);
        console.log(`[ROUTING ALERT] Patient preferred language: ${newAppt.patientLang.toUpperCase()}`);
        console.log(`--------------------------------------------------`);
        console.log(`[WHATSAPP ROUTING] Triggering Twilio API...`);
        console.log(`To: ${newAppt.patientPhone}`);
        console.log(`Message: Confirmation template sent in ${newAppt.patientLang}`);
        console.log(`--------------------------------------------------`);
        console.log(`[EMAIL ROUTING] Triggering SendGrid v3 API...`);
        console.log(`To: sales@theweb.ink`);
        console.log(`Attachment: invite_rdv.ics successfully generated`);
        console.log(`==================================================\n`);
        
        res.status(201).json(newAppt);
    } catch (error) {
        res.status(500).json({ error: 'Failed to write database' });
    }
});

// Catch-all to serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`\n==================================================`);
    console.log(`🦷 Cabinet Dentaire App is running!`);
    console.log(`🌍 Main landing page: http://localhost:${PORT}`);
    console.log(`🩺 Doctor's dashboard: http://localhost:${PORT}/dashboard.html`);
    console.log(`==================================================\n`);
});
