const express = require("express");
const {  generatePaint, singleImageDetail, getAllPaintings } = require("../controllers/paintings.controller");
const router = express.Router();

router.get("/", getAllPaintings)
router.get("/:id",singleImageDetail)
router.post("/generate",generatePaint);

// router.post("/")

module.exports = router