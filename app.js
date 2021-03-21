const express = require('express');
const app = express();
const port = 3001;
var cors = require('cors');

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

/*app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});*/
  
app.route('/')
    .get((req, res) => res.send('<h1>API Email</h1><p>API to send email</p>'));

app.route('/send')
    .post( (req, res) => {
        console.log(req.body);
    });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));