const express=require("express");
const router=express.Router();
const Crypto=require("../model/crypto")
const controller=require("../controller/index");

router.get("/",controller.index_controller);

module.exports=router;