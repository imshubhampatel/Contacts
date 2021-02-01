const express = require('express');
const app = express();
const port = 8000;


// using express router routes are there
app.use('/', require("./routes"))


// Express is listening port on 8000;
app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log('Server is running on http://localhost:8000 :) ');
})
