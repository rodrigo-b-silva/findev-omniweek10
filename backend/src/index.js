const PORT = process.env.PORT || 3333;

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost:27017/findev', { 
    useNewUrlParser: true, useUnifiedTopology: true
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})