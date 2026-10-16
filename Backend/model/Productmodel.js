const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  productname:{type: String, required: true , trim: true},
  productcategory:{type: String, required: true, trim: true},
  productprice:{type: Number, required: true, min:0}, 
  productquantity:{type: Number, required: true, min: 0}, 
  productdescription:{type: String, required: true, trim: true},
  Image:{type: String, required: true, trim: true},
},
{
timestamps: true,
})
module.exports = mongoose.model('Product', ProductSchema);