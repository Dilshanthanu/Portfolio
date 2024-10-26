const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoute = require('../Backend/apiRouts/Routes')

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use("/api",apiRoute);

 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
