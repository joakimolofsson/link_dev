const express = require('express');
const bodyParser = require('body-parser');

const app = express(),
port = process.env.port || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({status: 'Working'});
});

app.listen(port, () => {
    console.log(`Server on port: ${port}`);
});