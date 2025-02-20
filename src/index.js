const express = require('express')
const app = express()
const path= require('path');
const bodyparser = require("body-parser");
// const exp = require('constants');
app.use(bodyparser.urlencoded({extended:true}));


app.set('views', path.join(__dirname, 'views')); //ensure that the path to  the view folder is correct on not.
app.set('view engine', 'ejs');

// app.get('/', (req,res)=>{
//     res.sendFile(path.join(__dirname, 'views/home.ejs'));
// });
app.use(express.static("public/img"));
app.use(express.static(path.join(__dirname, 'public/img')));


app.get('/',function(req,res){ //get the home page connection here.
    res.render("home.ejs");
    // res.send("hello wolrd");
})


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('server runng on : ${port}');
});
