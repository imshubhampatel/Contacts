const express = require('express');
const app = express();
const port = 8000;


app.get("/",function(req ,res){
    res.send("<h1>It's me_shubham_007 </h1>")
})




app.listen(port, function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log('Server is running on http://localhost:8000');
})
