// We just write this code at the end and if some error happen then this message will appear at the frontend.

// You can get the basic code of error from google.

const express=require('express');
const app = express();
const port=4000;

app.use(function(req,res,next){
    console.log("MiddleWare challa");
    next();
})

//We have created some error to check the error handling.
app.get("/",function(req,res){
    return next(new Error("not Implemented"))
})

//Erro handling function
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Something went wrong');
})

app.listen(port);