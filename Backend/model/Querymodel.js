const mongoose = require('mongoose');
const QuerySchema = new mongoose.Schema({
  fullname:{type: String, required: true},
  email:{type: String, required: true},
  phonenumber:{type: Number , required: true},
  subject:{type: String, required:true},
  message:{type: String, required:true},
 createdAt: {type: String,default: () => new Date().toISOString().split("T")[0]}
})
module.exports = mongoose.model('Querymodel', QuerySchema);