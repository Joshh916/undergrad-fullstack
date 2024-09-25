const express = require('express');
const router = express.Router();
const controller= require('../controllers/error');

/* GET home page. */
router.get('/', controller.error);

module.exports = router;