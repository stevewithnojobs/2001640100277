const express=require("express")
const axios = require('axios');
const route=new express.Router()


const _ = require('underscore');


route.get("/numbers",async function(req,res){
    
        let list = [];
        let params = req.query.url;
        const findit = async (url) => {
          const response = await axios(url);
          response.data.numbers.forEach((element) => {
            list.push(element);
          });
          return list;
        };
        console.log(typeof params);

      await findit(params);


        res.json(list);
      
    
})



   

module.exports=route