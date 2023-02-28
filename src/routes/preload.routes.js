const express = require('express');

const router = express.Router();

const {
    preloadData,
} = require('../controllers/preload.controller');

const {
    codeExists
} = require('../middlewares/isCode')


router.post('/', preloadData);


module.exports = { preloadRouter: router };
