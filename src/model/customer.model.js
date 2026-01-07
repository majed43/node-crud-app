const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName:String,
  
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  age:Number,
  telNumber:String,
  gender:String,
  country:String,
},
  {
    timestamps: true
  });
const Customer=mongoose.model("customer",customerSchema);
module.exports=Customer;