/* 
Import & config
*/
    // NodeJS
    const express = require('express');
    const userRouter = express.Router();

    // Inner
    const UserModel = require('../../models/user.model');
//

/* 
Definition
*/
    class UserRouterClass {
        constructor(){}

        routes(){
            // Create
            userRouter.post( '/', (req, res) => {

                console.log(req.body)
                // Vérifier la présence de données dans le body
                if( typeof req.body !== 'undefined' && req.body !== null ){
                    // Inscrire un user
                    UserModel.create( req.body )
                    .then( user =>  res.json( { msg: "User created", data: user } ) )
                    .catch( err => res.json( { msg: 'User not created', data: err } ) );
                } else{
                    res.json( { msg: 'No data provided', data: null } )
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