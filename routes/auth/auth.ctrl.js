/* 
Imports
*/
    // Node
    const bcrypt = require('bcrypt');
    
    // Inner
    const UserModel = require('../../models/user.model');
//


/* 
Méthodes AUTH
*/
    const register = () => {
        // TODO: add user.ctrl function
    }

    const login = (body, res) => {
        return new Promise( (resolve, reject) => {
            // Search user by email
            UserModel.findOne( {email: body.email}, (error, user) =>{
                if(error) reject(error) // MonngoDB error
                else if(!user) reject('Unknow user')
                else { 
                    // Check password
                    const validPassword = bcrypt.compareSync(body.password, user.password);
                    if( !validPassword ) reject('Password not valid')
                    else {
                        // Création d'un cookie pour envoyer le token utilisateur dans le header de la response
                        const userToken = user.generateJwt();
                        res.cookie('berners', userToken, { httpOnly: true });

                        console.log(userToken);
                        
                        return resolve( user );
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