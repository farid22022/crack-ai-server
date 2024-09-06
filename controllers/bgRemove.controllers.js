const { db } = require("../utils/dbconnect");

const bgRemoveCollection = db.collection("bgRemoving");

const bgremovePost = async(req,res) =>{
    const item = req.body;
    const result = await bgRemoveCollection.insertOne(item);
    res.send(result)
}

module.exports = {bgremovePost}