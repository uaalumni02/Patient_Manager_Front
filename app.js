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

app.get('/search', (req, res) => {
    return res.render('home')
});

app.get('/login', (req, res) => {
    return res.render('login')
});

app.post('/login', (req, res) => {
    const userInfo = {
        username: req.body.username,
        password: req.body.password
    }
    axios({
        method: 'post',
        url: 'http://localhost:3000/api/user/login',
        data: userInfo,
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });

});
    


app.listen(port, () => console.log('server is running'));

