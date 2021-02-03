const express = require("express");
const path = require('path');
const chalk = require('chalk');
const app = express();
const port = 8000;
const db = require("./config/mongoose")

// setup the static files
app.use(express.static('assets'));

// setting up body req reader 
app.use(express.urlencoded());

//setting  up view engine ejs
app.set('view engine' ,'ejs');
app.set("views" , path.join(__dirname,'views'))

// every routes goes in the routes folder
app.use("/", require('./routes'));

// settiong up sever running port
app.listen(port, (err)=>{
    if(err) {
        console.log(`Error in running up sever: ${err}`);
        return;
    }
    var space = '                                                               ';
    console.log(chalk.bgWhite.red.underline(`  Server is on port http://localhost:8000   :) =>${space}`));

})
