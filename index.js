const express = require('express');
const app = express();
const port = 8000;


// calling router at this Point

app.use("/", require("./routes"));



app.listen(port, (err) => {
    if (err) {
        console.log(`Error in running server is : ${port}`);
        return;

    }
    console.log(`Sever is Successfylly running on http://localhost:8000`);
})