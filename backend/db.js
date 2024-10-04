
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://akshat_mongodb:MEyuENS2kaEblgKt@cluster0.s4e7d.mongodb.net/Paytm_clone');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String
})

const accountSchema= new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const User = mongoose.model('User',userSchema)
const Account = mongoose.model('Account',accountSchema)

module.exports={
    User,
    Account
}