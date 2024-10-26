const express = require('express');

const router = express.Router();

const {processEmailDetails} = require('../controller/EmailService');

router.post('/send-email',processEmailDetails);

module.exports = router;