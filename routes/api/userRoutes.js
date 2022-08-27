const router = require('express').Router();

const {
  getUser,
  getSingleUser,
  getNewUser,
  updateUser,
  removeUser
} = require('../../controller/user-controller');

module.exports = router;