/* 
Import & config
*/
    const express = require('express');
    const authRouter = express.Router();
    const checkFields = require('../../services/request.checker');
    const { register, login } = require('./auth.ctrl');
//

/* 
Definition
*/
    class AuthRouterClass {
        constructor(){}

        routes(){
            // Create
            authRouter.post( '/register', (req, res) => {
                res.json( { msg: "Create Post", req: req.body } )
            })

            // Read
            authRouter.post( '/login', (req, res) => {
                // Error: no body present
                if (typeof req.body === 'undefined' || req.body === null) { 
                    return res.json( { msg: 'No body data provided', data: null } )
                }
                
                // Check fields in the body
                const { ok, extra, miss } = checkFields( ['email', 'password' ], req.body )

                //=> Error: bad fields provided
                if( !ok ) res.json( { msg: 'Bad fields provided', data: { miss: miss, extra: extra } } )
                else{
                    // Try log user
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