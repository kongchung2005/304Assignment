const express = require('express')
const bodyParser = require(`body-parser`)
const mongoose = require(`mongoose`)
const morgan = require(`morgan`)

const FigureRoute = require(`./routes/figures`)
const FilmRoute = require(`./routes/films`)
const UserRoute     = require('./routes/users')
const TopRoute     = require('./routes/top')

const mongodb = "mongodb://kit:LauChunKit@cluster0-shard-00-00.pzooa.mongodb.net:27017,cluster0-shard-00-01.pzooa.mongodb.net:27017,cluster0-shard-00-02.pzooa.mongodb.net:27017/304Assignment?ssl=true&replicaSet=atlas-ih2jg1-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(mongodb,{ 
    useCreateIndex: true,
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
const db = mongoose.connection
db.once('open', () => {
    console.log('database connected')
})
db.on('error', (err) => {
    console.log(err)
})

const app = express()

app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})
const PORT = process.env.PORT || 10888

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`)
})

app.use('/api/figure', FigureRoute)
app.use('/api/film', FilmRoute)
app.use('/api', UserRoute)
app.use('/api/top', TopRoute)
