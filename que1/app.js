const express= require("express")
const route=require("./route")
const bodyParser=require("body-parser")
const https=require("https")

app=express()
app.use(route)
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))


app.listen(3000,()=>{
    console.log("working on port 3000")
})