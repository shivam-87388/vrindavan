const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  productname:{type: String, required: true , trim: true},
  productcategory:{type: String, required: true, trim: true},
  productprice:{type: Number, required: true}, 
  productdescription:{type: String, required: true, trim: true},
  createdAt: {
    type: Date,
    default: Date.now, 
  },

})
module.exports = mongoose.model('Product', ProductSchema);