const data = require('../data/data');

sessionGEThandler = (req, res) => {
    // console.log(data.session.code)
    res.json(data.session.code)
}


sessionPOSThandler = (req, res) => {
    if (req.body.code) {
        data.session = {
            code: req.body.code,
            OK: true
        }
        // res.OK = true;
        res.json(data.session.code)
    } else {
        res.json('Please try Again...')
    }
}

const sessionHandler = {
    sessionGEThandler,
    sessionPOSThandler
}

module.exports = sessionHandler;