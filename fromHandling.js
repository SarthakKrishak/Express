const express=require('express');
const app=express();

//We have to write these at the starting of the code to read data in json and the other format.
app.use(express.json());
app.use(express.urlencoded({encoded:true}));

app.get("/",function(req,res){
    res.send("Hello World");
})

app.listen(4000);