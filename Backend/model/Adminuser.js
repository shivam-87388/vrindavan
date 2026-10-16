const mongoose = require('mongoose');
const AdminSchema = new mongoose.Schema({
  fullname:{type: String, required: true},
  email:{type: String, required: true},
  password:{type: String, required: true},

})
module.exports = mongoose.model('Adminuser', AdminSchema);