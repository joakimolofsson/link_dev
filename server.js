const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const api = require('./routes/api');

mongoose.connect("mongodb+srv://joakimolofsson:clulosen123!@devcluster-oioh2.gcp.mongodb.net/test?retryWrites=true", { useNewUrlParser: true }, function(err) {
    console.log(err);
});

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