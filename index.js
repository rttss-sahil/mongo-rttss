const express = require('express');
const app = express();

const cors = require('cors');
// const mongoose = require('./mongoose');
const bodyParser = require('body-parser');

const sessionHandler = require('./middlewares/sessionHandler');
const urlHandler = require('./middlewares/urlHandler');
const dbHandler = require('./middlewares/dbHandler');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors())

// Routes
app.get('/session', sessionHandler.sessionGEThandler)
app.post('/session', sessionHandler.sessionPOSThandler)

app.get('/url', dbHandler.dbGEThandler)
app.post('/url', dbHandler.dbPOSThandler)

app.get('/db', urlHandler.urlGEThandler)
app.post('/db', urlHandler.urlPOSThandler)


const port = process.env.PORT || 5000
app.listen(port, console.log('Serving on port: ', port));