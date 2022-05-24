const jwt = require("jsonwebtoken");
require("dotenv").config();


module.exports.verifyJWT = (request, response, next) => {
    try{
        const token = request.header("authorization");
        if (!token) return response.status(404).json({auth: false, message:"Não há token!"});

        jwt.verify(token, process.env.SECRETJWT, (err) => {
            if(err) return response.status(404).json({auth:false, err});

            next();

        })
        
    }catch(err){
        console.log(err);
    }
}