const express= require("express")
const zod= require("zod")
const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../config")
const {User} = require("../db")

const router = express.Router()

const signupSchema= zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string()
})

const signinSchema= zod.object({
    username: zod.string().email(),
    password: zod.string()
})

router.post("/signup" ,async (req,res)=>{

    const body= req.body
    const {success} = signupSchema.safeParse(req.body)

    if(!success){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: body.username
    })

    if(user){
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

router.post("/signin" ,async (req,res)=>{
    const body = req.body
    const {success} = signinSchema.safeParse(req.body)

    if(!success){
        return res.status(411).json({
            message: "Email not found / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: body.username,
        password: body.password
    })

    if(!user){
        return res.status(411).json({
            message: "Error while logging in"
        })
    }

    const token = jwt.sign({
        userId: user._id
    },JWT_SECRET)
    
    res.json({
        token: token
    })

})



module.exports= router