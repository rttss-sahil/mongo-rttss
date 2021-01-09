const mongoose = require('mongoose');
const URL = 'mongodb+srv://rttss:incorr348@cluster0.eff5r.mongodb.net/<dbname>?retryWrites=true&w=majority'
if (URL) {
    mongoose.connect(URL, {
        useNewUrlParser: true
    })
    var connection = mongoose.connection;

    connection.on('error', console.error.bind(console, 'connection error:'));
    connection.once('open', function () {

        connection.db.collection("people", function (err, collection) {
            collection.find({}).toArray(function (err, data) {
                // console.log(data); // it will print your collection data
            })
        });

    });

}

// exports.mongoose = mongoose;