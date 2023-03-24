const GeetaSetting  = require("../models/geetaSettingModel");

const isGeeta = async(req,res,next)=>{
    try {
       const geetaSetting = await GeetaSetting.find({});

       if(geetaSetting.length == 0 && req.originalUrl != "/geeta-setup"){
        res.redirect('/geeta-setup');
       }
       else {
            next();
       }
        
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    isGeeta,
}