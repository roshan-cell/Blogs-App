const mongoose = require('mongoose') ;

const Schema = mongoose.Schema ;

const blogSchema = new Schema({
    title : {
        type : String ,
        required : true 
    } ,
    snippet : {
        type : String ,
        required  : true 
    } ,
    body : {
        type : String ,
        required : true 
    } 
}, {timestamps : true}) ;



// Two steps 
// (i) Define a schema that store type of the document we want in our datadase

//(ii) Define a model based on that schema
const Blog = mongoose.model('Blog' , blogSchema) ;

module.exports = Blog ;