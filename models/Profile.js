const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//创建Schema
const ProfileSchema = new Schema({
    type:{
        type:String,
    },
    describe:{
        type:String,
    },
    incode:{
        type:String,
        required:true
    },
    expend:{
        type:String,
        required:true
    },
    cash:{
        type:String,
        required:true
    },
    remark:{
        type:String,
    },
    date:{
        type:String,
        default:Date.now
    }
});

module.exports = Profile = mongoose.model("profile",ProfileSchema);