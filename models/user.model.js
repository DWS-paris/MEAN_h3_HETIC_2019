/* 
Import
*/
    const mongoose = require('mongoose');
    const { Schema } = mongoose;
//


/*
Config
*/
    const userSchema = new Schema({
        email: String,
        password: String,
        name: String
    });
//


/* 
Export
*/
    const UserModel = mongoose.model('user', userSchema);
    module.exports = UserModel;
//