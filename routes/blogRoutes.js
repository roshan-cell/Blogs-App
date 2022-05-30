const express = require('express') ;
const blogController = require('../contrrollers/blogController')


const router = express.Router() ;   //

 
//blog routes
router.get('/' , blogController.blog_index )
  
router.post('/' , blogController.blog_create_post )
  
router.get("/create", blogController.blog_create_get )
  
router.get('/:id' , blogController.blog_details )
  
router.delete('/blogs/:id' , blogController.blog_delete )
  
  

  module.exports = router ;




  // routes foler for routing 
  //models folder for data 
  // and controoler for