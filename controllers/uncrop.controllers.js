const { db } = require("../utils/dbconnect");

const uncropCollection = db.collection("uncrop");

const uncropPost = async(req,res) =>{
    console.log("uncropGet is called")
    const item = req.body;
    const result = await uncropCollection.insertOne(item);
    res.send(result)
}

const uncropGet = async(req,res) =>{
    console.log("uncroppdGet is called")
    const result = await uncropCollection.find().toArray();
    res.send(result)
}

module.exports = { uncropPost, uncropGet}