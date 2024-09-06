const express = require("express");
// import express from 'express';
const app = express();
const cors = require('cors');
require("dotenv").config();
const port = process.env.PORT || 5000;
const { connect } = require("./utils/dbconnect");




//global middleware
app.use(cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:5174',
      'https://ai-crack.web.app',
      'https://ai-crack.firebaseapp.com'
    ],
    credentials: true,
  }));
app.use(express.json());

connect();

//routes
const paintingRoutes = require("./routes/paintings.route");
app.use("/paintings",paintingRoutes)

const upScalingRoute = require("./routes/upScaling.route");
app.use("/upscaling",upScalingRoute)

const unCropRoute = require("./routes/uncroping.route");
app.use("/uncropping",unCropRoute);


const removeBG = require("./routes/bgRemoving.router");
app.use("/bgremoving",removeBG);;

const removeText = require("./routes/textRemoving.route");
app.use("/removingText",removeText);







app.get("/", (req,res) =>{
    res.send({
        data: "Server is running",
        status:200
    });
});

app.listen(port, ()=>{
    console.log("server is running on port "+ port)
});