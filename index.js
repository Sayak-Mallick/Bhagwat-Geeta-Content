const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sayak:872320022@cluster0.gos7xop.mongodb.net/ShrimadBhagwatGeetaAi");

const express = require('express');
const app = express();
const PORT = 4001

const isGeeta = require('./middlewares/isGeeta');

app.use(isGeeta.isGeeta);

//for admin routes
const adminRoute = require("./routes/adminRoutes");
app.use('/',adminRoute);


app.listen(PORT, function(){
    console.log(`Server is running on http://localhost:${PORT}`);
})