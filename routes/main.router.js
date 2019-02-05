/*
Imports
*/
    // Nodejs
    const { Router } = require('express');

    // Inner
    const AuthRouterClass = require('./auth/auth.routes');
    const FrontRouterClass = require('./front/front.routes');
    const PostRouterClass = require('./post/post.routes');
    const UserRouterClass = require('./user/user.routes');
//

/* 
Definition des router
*/  
    // Parent
    const mainRouter = Router();
    const apiRouter = Router();

    // Child
    const authRouter = new AuthRouterClass();
    const frontRouter = new FrontRouterClass();
    const postRouter = new PostRouterClass();
    const userRouter = new UserRouterClass();
//

/* 
Définition des routes
*/
    mainRouter.use( '/api', apiRouter );
    apiRouter.use( '/auth', authRouter.init() );
    apiRouter.use( '/user', userRouter.init() );
    apiRouter.use( '/post', postRouter.init() );
    mainRouter.use( '/', frontRouter.init() );
//

/* 
Export
*/
    module.exports = mainRouter;
//