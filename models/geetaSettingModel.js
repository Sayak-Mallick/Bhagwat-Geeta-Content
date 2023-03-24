const mongoose = require("mongoose");

const geetaSettingSchema = mongoose.Schema({
    geeta_chapter:{
        type:String,
        required:true
    },
    geeta_Summary:{
        type:String,
        required:true
    },
    geeta_Image:{
        type:String,
        required:true
    },
    geeta_verses:{
        type:String,
        required:true
    },
    geeta_translation:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model('GeetaSetting',geetaSettingSchema);
