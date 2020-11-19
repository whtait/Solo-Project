const User = require('../db/userModel.js');
const mongoose = require('mongoose');

const userController = {};

userController.createUser = (req, res, next) => {
  User.create(
    { pfp: req.body.pfp, username: req.body.username, password: req.body.password }, 
    (err, userRes) => {
      if (err) console.log('Error:', err);
      res.locals.userRes = userRes;
      return next();
    }
  )
}

userController.verifyUser = (req, res, next) => {

}

userController.getAllUsers = (req, res, next) => {
  User.find({}, (err, userRes) => {
    if (err)
    return next(
      'Error in userController.getAllUsers: ' + JSON.stringify(err)
    );
    res.locals.users = userRes;
    return next();
  })
}



module.exports = userController;