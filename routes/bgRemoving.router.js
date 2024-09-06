const express = require("express");
const { bgremovePost } = require("../controllers/bgRemove.controllers");

const router = express.Router();

router.post("/bgremovePost",bgremovePost);

module.exports = router