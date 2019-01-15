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
    


app.post('/search', (req, res) => {
    let id = req.body.id
    // console.log(id)
    const requestUrl = 'http://localhost:3000/api/patient/' + id
    let tokenStr = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRvbSIsInVzZXJJZCI6IjViNTY4NjhmZWI5MTEzMjgyNGZjNDhlOSIsImlhdCI6MTU0NjY0NTYzNywiZXhwIjoxNTc4MTgxNjM3fQ.93TFILTA_2Cy4d_Wt4bAeAFZ45ClVZ9mAfc6CAUCYXs';
    return axios.get(requestUrl, { headers: { "Authorization": `Bearer ${tokenStr}` } })
        .then((response) => {
            var responseData = response.data;
            return res.status(200)
                .render('results', { response: responseData });
        })
        .catch((err) => {
            res.send(err.message);
        });
});



app.listen(port, () => console.log('server is running'));

