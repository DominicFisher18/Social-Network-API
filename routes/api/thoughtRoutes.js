const router = require('express').Router();

const {
    getThougts,
    getSingleThought,
    newThought,
    updateThought,
    removeThought,
} = require('../../controller/thought-controller.js');

module.exports = router;
