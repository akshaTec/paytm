const jwt = require("jsonwebtoken")
const JWT_SECRET = require("./config")



const authMiddleware= (req,res,next)=>{
    const auth_header = req.headers.authorization

    if(!auth_header || !auth_header.startsWith('Bearer')){
        return res.status(411).json({
            msg: "Please Sign In to access this!"
        })
    }

    const token= auth_header.split(' ')[1]

    try{
        const decoded= jwt.verify(token,JWT_SECRET)        
        req.userId= decoded.userId
        next()             

    }catch(err){
        return res.status(403).json({
            msg: "Error Signing In"
        })
    }

}

module.exports={
    authMiddleware
}