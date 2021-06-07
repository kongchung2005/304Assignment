const mongoose  = require('mongoose')
const Schema    = mongoose.Schema
const COLLECTION_NAME = "films"

const filmSchema  = new Schema({
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

const Film = mongoose.model(COLLECTION_NAME, filmSchema)
module.exports = Film