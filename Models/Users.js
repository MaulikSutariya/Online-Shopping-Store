const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
},{timestamps:true})


mongoose.models={}
export default mongoose.model("Users",UsersSchema)