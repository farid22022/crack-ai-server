const { db } = require("../utils/dbconnect");

const textRemoveCollection = db.collection("textRemove");

const textRemovePost = async(req,res) =>{
    const item = req.body;
    const result = await textRemoveCollection.insertOne(item);
    res.send(result);
}

module.exports = { textRemovePost }
