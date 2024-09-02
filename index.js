const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();
const port = process.env.PORT || 5000;
const { connect } = require("./utils/dbconnect");




//global middleware
app.use(cors());
app.use(express.json());

connect();

//routes
const paintingRoutes = require("./routes/paintings.route");
app.use("/paintings",paintingRoutes)

const upScalingRoute = require("./routes/upScaling.route");
app.use("/upscaling",upScalingRoute)

app.get("/", (req,res) =>{
    res.send({
        data: "Server is running",
        status:200
    });
});

app.listen(port, ()=>{
    console.log("server is running on port "+ port)
});