/* 
Imports
*/
    // Node
    const bcrypt = require('bcrypt');
    
    // Inner
    const UserModel = require('../../models/user.model');
//


/* 
Méthodes CRUD
*/
    const register = (body) => {
        return new Promise( (resolve, reject) => {
           
        });
    };

    const login = (body, res) => {
        return new Promise( (resolve, reject) => {
            // Search user by email
            UserModel.findOne( {email: body.email}, (error, user) =>{
                if(error) reject(error) // Mongo error
                else if(!user) reject('Unknow user')
                else{
                    // Check password
                    const validPassword = bcrypt.compareSync(body.password, user.password);
                    if( !validPassword ) reject('Password not valid')
                    else{
                        // Set cookie
                        res.cookie( 'hetic-blog', user.generateJwt() )

                        return resolve(user);
                    };
                };
            });
        });
    };
//

/* 
Exports
*/
    module.exports = {
        register,
        login
    }
//