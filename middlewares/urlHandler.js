const data = require('../data/data');

const urlGEThandler = (req, res) => {
    res.json(data.database.URL)
}

const urlPOSThandler = (req, res) => {
    if (req.body.URL) {
        data.database.URL = req.body.URL
        res.json("Registered the 'URL' Successfully !!!")
    } else {
        res.json('URL not registered. Please try again!!')
    }
}

const urlHandler = {
    urlGEThandler,
    urlPOSThandler
}

module.exports = urlHandler;