const express=require('express');
const fs=require('fs');
const cors=require('cors');
const app=express();
app.use(cors());
app.get('/api',(req,res)=>{
    fs.readFile(`dara.json`,'utf-8',(err,data)=>{
        if(err){
            res.status(500);
            return res.json(`Error reading file`);
        }
        res.status(200);
        return res.send(data);

})});


app.listen(8080,()=>{
    console.log('server is running');
});