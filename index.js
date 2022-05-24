const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get("/",(req,res) =>
{
    res.send("hello world teste");
});

app.get('/bulce',(req,res)=>{
    
    res.send("https://www.youtube.com/watch?v=s0L56zjg-rM")
})

app.listen(PORT,HOST);