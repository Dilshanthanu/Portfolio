const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// POST route to handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Create a transporter using Nodemailer
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dilshanthanushka98@gmail.com',  // replace with your email
            pass: 'T*333hanushka',   // replace with your email password or app password
        },
    });

    // Email options
    let mailOptions = {
        from: email,  // sender's email (user's email)
        to: 'dilshanthanushka98@gmail.com',  // your email
        subject: `Message from ${name}`,
        text: `You have a new message from ${name} (${email}): \n\n${message}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'Error sending email', error });
        }
        res.status(200).json({ message: 'Email sent successfully!' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
