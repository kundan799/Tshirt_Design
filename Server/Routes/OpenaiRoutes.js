const express = require('express');
const router=express.Router();
const {genrateImage}=require("../Controler/openaiControler")

router.post("/genrateImage",genrateImage)

module.exports=router;