const Contact = require("../models/contact")

module.exports.database = function (req, res) {
    Contact.find({}, function (err, contacts) {
        if (err) {
            console.log('error in fetching contact', err);
            return;
        }

        return res.render('user', {myContact: contacts})
    })
}

