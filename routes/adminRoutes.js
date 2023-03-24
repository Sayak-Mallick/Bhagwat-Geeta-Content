const express = require('express');
const admin_route = express();
const adminController = require("../controllers/adminController");
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');


admin_route.use(bodyParser.json());
admin_route.use(bodyParser.urlencoded({extended:true}));
admin_route.use(express.static('public'));

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public/images'));
    },
    filename:function(req,file,cb){
       const name = Date.now()+'-'+file.originalname;
       cb(null,name);
    }
})

admin_route.set('view engine', 'ejs');
admin_route.set("views","./views");


admin_route.get('/login', adminController.geetaOne);
admin_route.get('/geeta-setup', adminController.geetaSetup);

module.exports = admin_route;