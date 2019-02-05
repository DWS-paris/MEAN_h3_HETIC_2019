/* 
Import & config
*/
    // NodeJS
    const express = require('express');
    const frontRouter = express.Router();
//

/* 
Definition
*/
    class FrontRouterClass {
        constructor(){}

        routes(){
            // Homepage
            frontRouter.get( '/', (req, res) => {
                res.render('index');
            })

            // Me
            frontRouter.get( '/me', (req, res) => {
                res.render('me');
            })
        }

        init(){
            this.routes();
            return frontRouter;
        }
    }
//

/* 
Export
*/
    module.exports = FrontRouterClass;
//