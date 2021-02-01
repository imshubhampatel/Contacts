const express = require('express');


const router = express.Router();
const homeController = require("../controllers/home_controller");

// controlling home router function here comes form controller/index.js

router.get('/', homeController.home);

//further routes can be accessabel form here
router.use("/profile", require("./user"))




module.exports = router;