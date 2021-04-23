const mongoose = require('mongoose');
const chalk = require('chalk');
mongoose.connect("mongodb+srv://Admin-shubham:admin123@cluster0.s6i8g.mongodb.net/contact_db");

db  = mongoose.connection;

db.on('error', console.error.bind(console,"connection error"));
db.once('open', function(){
    var space = "                                                               ";
    console.log(chalk.bgMagenta.white.underline(`  we are connected to database successfully :) =>${space}`));
})

module.exports = db;