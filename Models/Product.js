const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{type:String,require:true},
    slug:{type:String,require:true,unique:true},
    desc:{type:String,require:true},
    img:{type:String,require:true},
    category:{type:String,require:true},
    Price:{type:Number,require:true},
    kg:{type:Number,require:true},
    pcs:{type:Number,require:true},
    AvailableQty:{type:Number,require:true},
},{timestamps:true})

mongoose.models={}

export default mongoose.model("Product",ProductSchema)