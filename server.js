'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/', (req, res) => {
    res.send("location news app");
});

app.listen(4000, _=> {
    console.log('Server is up at port 4000');
})