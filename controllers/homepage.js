const Contact = require("../models/contact")

module.exports.home = function (req, res) {
    Contact.find({}, function (err, contacts) {
        if (err) {
            console.log('error in fetching contact', err);
            return;
        }

        return res.render('home', {
            title: "Shubham Contacts",
            myContact: contacts
        })
    })
}

module.exports.createContact = function (req, res) {
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function (err, newContact) {
        if (err) {
            console.log("Error in creating contact");
            return;
        }
        console.log("********+++******", newContact);
    });
    return res.redirect('back')
}

module.exports.deleteContact = function (req, res) {
    let id = req.query.id;
    Contact.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log('error in deleting Contact');
            return;
        }
        return res.redirect('back')
    })
}
