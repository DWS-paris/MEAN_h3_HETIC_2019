/* 
Import & config
*/
    // NodeJS
    const express = require('express');
    const authRouter = express.Router();

    // Inner
    const checkFields = require('../../services/request.checker');
    const { register, login } = require('./auth.ctrl');
//

/* 
Definition
*/
    class AuthRouterClass {
        constructor(){}

        routes(){
            // Update
            authRouter.post( '/register', (req, res) => {
                res.json( { msg: "Register user" } )
            })

            // Delete
            authRouter.post( '/login', (req, res) => {
                // Error: no body present
                if (typeof req.body === 'undefined' || req.body === null) { 
                    return res.json( { msg: 'No body data provided', data: null } )
                }
                
                // Check fields in the body
                const { ok, extra, miss } = checkFields( [ 'password', 'email'], req.body )

                //=> Error: bad fields provided
                if( !ok ) res.json( { msg: 'Bad fields provided', data: { miss: miss, extra: extra } } )
                else{
                    // Register new user
                    login(req.body, res)
                    .then( apiResponse => res.json( { msg: 'User logged', data: apiResponse } ) )
                    .catch(apiResponse => res.json( { msg: 'User not logged', data: apiResponse } ) );
                }
            })
        }

        init(){
            this.routes();
            return authRouter;
        }
    }
//

/* 
Export
*/
    module.exports = AuthRouterClass;
//