const { ESRCH } = require("constants");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const { render } = require("ejs");
const blogRoutes = require('./routes/blogRoutes')

const app = express();

//connect to mongoDB
const dbURI =
'mongodb+srv://roshan-1401:d2xqbxpfq8@cluster0.yfbcs.mongodb.net/?retryWrites=true&w=majority' ;

mongoose.connect(dbURI , {useNewUrlParser: true, useUnifiedTopology: true}) 

  .then((result)=> app.listen(3000)) 
  .catch((err)=> console.log(err)) ;

app.set("view engine", "ejs");


//middleware and static files
app.use(express.static("public"));

//this middleware takes all the url encoded data from the create.ejs and pass it as an object to use it
app.use(express.urlencoded({extended:true})) ;

 
//routes
app.get("/", (req, res) => {
  res.redirect('/blogs') ;
});


app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});


//blog routes
app.use( '/blogs'  , blogRoutes) ;




app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
