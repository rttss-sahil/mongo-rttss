const data = require('../data/data');

const dbGEThandler = (req, res) => {
    res.json(data.database.DB)
}

const dbPOSThandler = (req, res) => {
    if (req.body.URL) {
        data.database.DB = req.body.DB
        res.json("Registered the 'DB' Successfully !!!")
    } else {
        res.json('DB not registered. Please try again!!')
    }
}

const dbHandler = {
    dbGEThandler,
    dbPOSThandler
}

module.exports = dbHandler;