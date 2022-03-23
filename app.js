const express=require("express")
const port=3000
const fetch=require("node-fetch");
const db=require("./config/mongoose")
const ejs=require("ejs")
const path=require("path")

const Crypto=require("./model/crypto");

const main_router=require("./routes/index")

const app=express();

const public_path=path.join(__dirname,"./public");

app.set("view engine","ejs");
app.use(express.static(public_path));
app.use(express.json());
app.use(express.urlencoded());

app.use(main_router);

app.listen(port,()=>{

    fetch("https://api.wazirx.com/api/v2/tickers")
    .then(res => res.json())
    .then(async(data) => {
        let i=0;
        for(let obj in data){
            await Crypto.create(data[obj]);
            i++;
            if(i==10){
                break;
            }
        }
    });
    console.log("Server listening on port-"+port);
})
