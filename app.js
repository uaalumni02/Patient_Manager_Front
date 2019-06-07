const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

const port = 8080;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.use(express.static(__dirname + '/views'))

app.get('/', (req, res) => {
    return res.render('newLogin')
});

app.get('/register', (req, res) => {
    return res.render('register')
});

app.get('/patients', (req, res) => {
    return res.render('addPatients')
});

app.get('/update', (req, res) => {
    return res.render('updatePatient')
});

app.get('/schedule', (req, res) => {
    return res.render('addAppts')
});

app.get('/allpatients', (req, res) => {
    return res.render('allPatients')
});

app.get('/search', (req, res) => {
    return res.render('search')
});
    


app.listen(port, () => console.log('server is running'));

