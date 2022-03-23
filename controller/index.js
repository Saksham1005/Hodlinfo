const Crypto=require("../model/crypto")

module.exports.index_controller=async(req,res)=>{
    // return res.send("hello");
    const crypto=await Crypto.find({});
    return res.render("index.ejs",{
        crypto
    });
}