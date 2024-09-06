const express = require("express");
const { textRemovePost } = require("../controllers/textRemov.controller");
const router = express.Router();

router.post("/removeText",textRemovePost)

module.exports = router