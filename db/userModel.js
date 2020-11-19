const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  pfp: {type: String, required: true},
  username: {type: String, required: true},
  password: {type: String, required: true}
})

module.exports = mongoose.model('Users', userSchema)