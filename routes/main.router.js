/*
Imports
*/
    // Nodejs
    const { Router } = require('express');

    // Inner
    const FrontRouterClass = require('./front/front.routes');
    const PostRouterClass = require('./post/post.routes');
//

/* 
Definition des router
*/  
    // Parent
    const mainRouter = Router();
    const apiRouter = Router();

    // Child
    const frontRouter = new FrontRouterClass();
    const postRouter = new PostRouterClass();
//

/* 
Définition des routes
*/
    mainRouter.use( '/api', apiRouter );
    apiRouter.use( '/post', postRouter.init() );
    mainRouter.use( '/', frontRouter.init() );
//

/* 
Export
*/
    module.exports = mainRouter;
//