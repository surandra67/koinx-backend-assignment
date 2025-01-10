const express = require('express');
const dotenv = require("dotenv");  
const database = require("./config/database")
const app= express();

dotenv.config();
const PORT = process.env.PORT || 5000;

//database connect
database.connectDB();


app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`);
})