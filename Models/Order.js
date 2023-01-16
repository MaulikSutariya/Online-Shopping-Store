const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId:{type:String,require:true},
    products:[{
        productId:{type:String},
        quantity:{type:String,default:1}
    }],
    address:{type:String,required:true},
    amount:{type:Number,required:true},
    status:{type:String,default:"pending",required:true},
},{timestamps:true})

mongoose.models={}

export default mongoose.model("Order",OrderSchema)