const express = require('express');
const app = express();
const port = 3000;

app.route('/')
    .get((req, res) => res.send('<h1>API Email</h1><p>API to send email</p>'));

app.route('/send')
    .post( (req, res) => {
        console.log(req.body);
    });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));