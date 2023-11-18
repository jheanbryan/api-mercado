const express = require('express');
const router = express.router();

const PictureController = require('../controllers/controller');

router.post('/', PictureController.create);

module.exports = router;