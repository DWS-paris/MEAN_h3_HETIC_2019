/* 
Imports
*/
    const mongoose = require('mongoose')
//

/* 
Config
*/
    const dbConnect = () => {
        return new Promise( (resolve, reject) => {

            // Connecter la BDD
            mongoose.connect(
                process.env.MONGO_URL,
                { useNewUrlParser: true }
            )
            .then( db => resolve(process.env.MONGO_URL) )
            .catch( error => reject(error) );
        });
    }
//

/* 
Export
*/
    module.exports = dbConnect;
//