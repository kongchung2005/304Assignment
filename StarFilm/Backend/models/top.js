const mongoose  = require('mongoose')
const Schema    = mongoose.Schema
const COLLECTION_NAME = "top"

const topSchema  = new Schema({
    name:{
        type: String
    },
    coll:{              //collection 
        type: String
    },
    mfr:{               //manufacturer
        type: String
    },
    price:{
        type: Number
    },
    size:{
        type: String
    },
    spec:{              //specifications
        type: String
    },
    img:{               //image
        type: String
    }
})

const Figure = mongoose.model(COLLECTION_NAME, topSchema)
module.exports = Figure