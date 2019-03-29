const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const api = require('./routes/api');

const mongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
        console.log('MongoDB Connected');
    } catch(err) {
        console.log(`MongoDB Error: ${err}`);
    }
}
mongoDb();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api);

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));