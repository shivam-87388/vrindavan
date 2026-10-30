const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  productname:{type: String, required: true , trim: true},
  productcategory:{type: String, required: true, trim: true},
  productprice:{type: Number, required: true, min:0}, 
  productquantity:{type: Number, required: true, min: 0}, 
  productdescription:{type: String, required: true, trim: true},
  productrating:{type:Number, default:0, min:0, max:5},
  productdiscount:{type:Number, default:0, min:0, max:100},
  image:{type: String, required: true, trim: true},
},
{
  timestamps: true,

  toJSON: {
    transform: function (doc, ret) {
      if (ret.createdAt) {
        ret.createdAtIST = new Date(ret.createdAt).toLocaleString(
          "en-IN",
          { timeZone: "Asia/Kolkata" }
        );
      }

      if (ret.updatedAt) {
        ret.updatedAtIST = new Date(ret.updatedAt).toLocaleString(
          "en-IN",
          { timeZone: "Asia/Kolkata" }
        );
      }

      return ret;
    }
  }
}
)
module.exports = mongoose.model('Product', ProductSchema);