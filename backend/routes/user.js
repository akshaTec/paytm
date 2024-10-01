const express= require("express")
const zod= require("zod")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")
const {User} = require("../db")

const router = express.Router()

const signupSchema= {
    username: zod.string().email(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string()
}

router.post("/signup" ,async (req,res)=>{
    const body= req.body
    const {success} = signupSchema.safeParse(req.body)

    if(!success){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = User.findOne({
        username: body.username
    })

    if(user._id){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const dbUser = await User.create(body)

    const token= jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET)

    res.json({
        message: "User created successfully",
        token: token
    })

})



module.exports= router