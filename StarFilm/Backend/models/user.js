const mongoose  = require('mongoose')
const Schema    = mongoose.Schema
const COLLECTION_NAME = "users"

const userSchema  = new Schema({
    name:{              //display name 
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    }
})

const User = mongoose.model(COLLECTION_NAME, userSchema)
module.exports = User