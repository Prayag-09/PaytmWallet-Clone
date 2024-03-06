const jwt = require('jsonwebtoken');
require('dotenv').config();
const Secret = process.env.JWT_SECRET;

const authMiddleware = (req,res,next) => {

    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        res.status(411).json({})
    }

    const token = authHeader.split(' ')[1];
    try{
        const decode = jwt.verify(token,Secret);
        req.userId = decode.userId;
        next();
        } catch(err){
            return res.status(403).json({});
        }
}

module.exports = {
    authMiddleware
};
