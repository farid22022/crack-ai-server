const express = require("express");
const { uncropPost, uncropGet } = require("../controllers/uncrop.controllers");

const router = express.Router();
console.log("inside the uncrop route")

router.post("/uncroppost",uncropPost);
router.get("/uncropget",uncropGet)

module.exports = router