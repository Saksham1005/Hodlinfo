const mongoose=require("mongoose");

// name, last, buy, Sell, volume, base_unit
const crypto_schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    last:{
        type:String,
        required:true
    },
    buy:{
        type:String,
        required:true
    },
    sell:{
        type:String,
        required:true
    },
    volume:{
        type:String,
        required:true
    },
    base_unit:{
        type:String,
        required:true
    }
})

const Crypto=mongoose.model("Crypto",crypto_schema);
module.exports=Crypto