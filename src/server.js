const express = require('express');
const dotenv = require("dotenv");  
const database = require("./config/database")
const apiRoutes = require('./routes/api');
const app= express();
require('./jobs/fetchPrices');



dotenv.config();
const PORT = process.env.PORT || 5000;

//database connect
database.connectDB();


// Middleware
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

app.get("/", (req, res) =>{
    return res.json({
        success:true,
        message:"Info: Server is up and running",
    })
})

app.listen(PORT,()=>{
    console.log(`Info: Server Started at ${PORT}`);
})

