const PORT = process.env.PORT || 3333;

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const { setupWebSocket } = require('./webSocket');

const app = express();
const server = http.Server(app);
setupWebSocket(server);

mongoose.connect('mongodb://localhost:27017/findev', { 
    useNewUrlParser: true, useUnifiedTopology: true
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes'));

server.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})