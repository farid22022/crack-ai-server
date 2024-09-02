const { ObjectId } = require("mongodb");
const { db } = require("../utils/dbconnect");
const { getImageData } = require("../utils/getImageData");
const getImgUrl = require("../utils/getImageUrl");

const paintingCollection = db.collection("paintings");
const upscalingCollection = db.collection("upscaling");

const upscalPost = async(req,res) =>{
    const item = req.body;
    const result = await upscalingCollection.insertOne(item);
    res.send(result)
}


const upscalGet = async(req,res) =>{
    const result = await upscalingCollection.find().toArray();
    res.send(result)
}



const getAllPaintings = async(req,res) =>{
    const result = await paintingCollection.find().toArray();
    res.send(result)
}

const generatePaint = async( req,res ) =>{
    const { body } = req || {};
    const { prompt,email, category, type } = body || {};
    const promptFinal = `generate a beautiful ${type} ${category}  about ${prompt}`
    const buffer = await getImageData(promptFinal);
    console.log(buffer," from controller")
    
    const imageData = await getImgUrl(buffer,prompt);
    console.log(imageData,"from controller")
    // res.send(imageData);
    console.log(imageData)
    const data = {
        tittle: imageData?.data?.tittle,
        prompt:prompt,
        email,
        category,
        type,
        thumb:imageData?.data?.thumb?.url,
        url:imageData?.data?.url,
        medium_url: imageData?.data?.medium?.url,
        detail:prompt,
        date: new Date()
    }
    const result = await paintingCollection.insertOne(data)
    res.send(result)
}

const singleImageDetail = async (req, res) =>{
    console.log("I am called")
    const { id } = req.params;
    console.log(id,"get1ID")
    const query = { _id: new ObjectId(id) };
    console.log(query,"getQuery2")
    const result = await paintingCollection.findOne(query);
    console.log(result)
    res.send(result);
}

module.exports = {upscalGet,upscalPost, getAllPaintings, generatePaint, singleImageDetail}