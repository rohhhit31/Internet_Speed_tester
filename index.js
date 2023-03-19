const express = require("express");
const app = express();

const {exec} =require('child_process');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
     res.render('index');
});

app.get('/getspeed',(req,res)=>{
     exec('speed-test --json', (err,stdout,stderr)=>{
         if (err) {
             console.log(err);
         }
         console.log(stdout);
         res.json({
             speed:stdout
         })
     })
 })
 

app.listen(5000, function () {
  console.log("Server Started ");
});
