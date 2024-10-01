
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://akshat_mongodb:MEyuENS2kaEblgKt@cluster0.s4e7d.mongodb.net/Paytm_clone');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
})

const User = mongoose.model('User',userSchema)

module.exports={
    User
}