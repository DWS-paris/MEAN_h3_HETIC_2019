/* 
Import & config
*/
    // NodeJS
    const express = require('express');
    const userRouter = express.Router();

    // Inner
    const checkFields = require('../../services/request.checker');
    const { createItem, readItem, updateItem, deleteItem } = require('./user.ctrl');
//

/* 
Definition
*/
    class UserRouterClass {
        constructor(){}

        routes(){
            // Create
            userRouter.post( '/', (req, res) => {

                // Error: no body present
                if (typeof req.body === 'undefined' || req.body === null) { 
                    return res.json( { msg: 'No body data provided', data: null } )
                }
                
                // Check fields in the body
                const { ok, extra, miss } = checkFields( [ 'name', 'email', 'password' ], req.body )

                //=> Error: bad fields provided
                if( !ok ) res.json( { msg: 'Bad fields provided', data: { miss: miss, extra: extra } } )
                else{
                    // Register new user
                    createItem(req.body)
                    .then( apiResponse => res.json( { msg: 'User created', data: apiResponse } ) )
                    .catch(apiResponse => res.json( { msg: 'User not created', data: apiResponse } ) );
                }
            })

            // Read
            userRouter.get( '/', (req, res) => {
                res.json( { msg: "Read user" } )
            })

            // Update
            userRouter.put( '/', (req, res) => {
                res.json( { msg: "Update user" } )
            })

            // Delete
            userRouter.delete( '/', (req, res) => {
                res.json( { msg: "Delete user" } )
            })
        }

        init(){
            this.routes();
            return userRouter;
        }
    }
//

/* 
Export
*/
    module.exports = UserRouterClass;
//