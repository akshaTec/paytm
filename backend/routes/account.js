const express= require("express")
const zod= require("zod")
const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../config")
const {User ,Account} = require("../db")
const {authMiddleware} = require("../middleware")
const mongoose = require("mongoose")

const router= express.Router()


router.get("/balance", authMiddleware,async (req,res)=>{

    const account=await Account.findOne({
        userId: req.userId
    })

    res.json({
        balance: account.balance
    })

})

const transferSchema= zod.object({
    to: zod.string(),
    amount: zod.number()
})

router.post("/transfer",authMiddleware,async (req,res)=>{

    const {success}= transferSchema.safeParse(req.body)
    if(!success){
        return res.status(402).json({
            msg:"Invalid input for transfer"
        })
    }

    const session = await mongoose.startSession()

    session.startTransaction()

    const {to , amount} = req.body
    if(amount<0){
        await session.abortTransaction()
        return res.status(400).json({
            msg:"Amount can't be negative"
        })
    }
    const account = await Account.findOne({
        userId: req.userId
    }).session(session)

    if(!account || account.balance<amount){
        await session.abortTransaction()
        return res.status(400).json({
            msg:"Insufficient balance"
        })
    }

    const to_account= await Account.findOne({
        userId:to
    }).session(session)

    if(!to_account){
        await session.abortTransaction()
        return res.status(400).json({
            msg:"Invalid To account"
        })
    }

    // performing transaction

    await Account.updateOne({
        userId:req.userId
    },{
        $inc:{
            balance: -amount
        }
    }).session(session)

    await Account.updateOne({
        userId:to
    },{
        $inc:{
            balance: amount
        }
    }).session(session)
    await session.commitTransaction()

    res.json({
        msg:"Transaction Successful"
    })

})



module.exports= router