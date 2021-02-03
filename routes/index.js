const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homepage')

router.get("/", homeController.home)
router.post("/create-contact", homeController.createContact);
router.get("/delete-contact", homeController.deleteContact);
router.use('/user', require('./user'))


module.exports = router;