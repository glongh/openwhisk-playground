const jwt = require('jsonwebtoken');
const credentials = require('../credentials.json');
const loginApi = require('../api/login');

function main(args) {
    return new Promise((resolve, reject) => {

        if(!args.username || !args.password) reject({message:'Invalid auth'});
        
        const { username, password } = loginApi.getUserByUsername(username);

        if(args.username !== username || args.password !== password) reject({message:'Invalid auth'});

        let token = jwt.sign(args.username, credentials.secret);
        resolve({
            token:token
        });
    });

}

exports.main = main;