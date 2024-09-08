//Jab request server tak jaati hai toh server tk pahuchne se pehle usko rok kr kuch perform krne ko middleware bolte hai.

//And hum ek se zyada middleware bna sakte hai.

const express=require('express');
const app=express();
const port=3000;

app.use(function(req,res,next){
    console.log('First middleware');
    next(); //Yeh btata hai ki next pr jump kr jao
})


app.get("/",function (req,res) {
    res.send("hello");
})

app.listen(port);