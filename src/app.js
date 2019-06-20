import express from 'express';
import path from 'path';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import axios from 'axios';
const app = express();

const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/views'))

app.use('/public', express.static(__dirname + '/public'))


app.get('/', (req, res) => {
    return res.render('newLogin')
});

app.get('/register', (req, res) => {
    return res.render('register')
});

app.get('/patients', (req, res) => {
    return res.render('addPatients')
});

app.get('/update/:id', (req, res) => {
    return res.render('updatePatient')
});

app.get('/schedule', (req, res) => {
    return res.render('addAppts');
});

app.get('/allpatients', (req, res) => {
    return res.render('allPatients')
});

app.get('/search', (req, res) => {
    return res.render('search')
});


app.listen(port, () => console.log('server is running'));

