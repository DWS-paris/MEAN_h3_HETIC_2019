/* 
Import & config
*/
    const express = require('express');
    const postRouter = express.Router();
//

/* 
Definition
*/
    class PostRouterClass {
        constructor(){}

        routes(){
            // Create
            postRouter.post( '/', (req, res) => {
                // req.user._id
                
                res.json( { msg: "Create Post", req: req.body } )
            })

            // Read
            postRouter.get( '/', (req, res) => {
                res.json( { msg: "Read Post" } )
            })

            // Update
            postRouter.put( '/', (req, res) => {
                res.json( { msg: "Update Post" } )
            })

            // Delete
            postRouter.delete( '/', (req, res) => {
                res.json( { msg: "Delete Post" } )
            })
        }

        init(){
            this.routes();
            return postRouter;
        }
    }
//

/* 
Export
*/
    module.exports = PostRouterClass;
//