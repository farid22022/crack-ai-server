const express = require("express");
const { upscalPost, upscalGet } = require("../controllers/paintings.controller");
const router = express.Router();

router.post("/uppost",upscalPost);
router.get("/upget",upscalGet)

module.exports = router