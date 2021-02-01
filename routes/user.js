const express = require('express');

const router = express.Router();
const userController = require("../controllers/user_controller");


// controlling user router function here comes form controller/user.js
router.get('/', userController.profile);





module.exports = router;