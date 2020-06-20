const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const userApi = require('./routes/auth')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use("/api/user",userApi)

app.listen(5000,(req,res)=>{
    console.log("服务器运行在5000端口");
    
})