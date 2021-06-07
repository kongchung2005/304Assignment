const Film = require(`../models/film`)
const ErrorMsg = 'An Error Occured!!!'

const showAll = (req, res, next) => {
    Film.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: ErrorMsg
        })
    })
}

const show = (req, res, next) => {
    let filmID = req.body.filmID
    Film.findById(filmID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        console.log(error)
        res.json({
            message: ErrorMsg
        })
    })
}

const add = (req, res, next) => {
    let film = new Film({
        name: req.body.name,
        coll: req.body.coll,
        mfr: req.body.mfr,
        price: req.body.price,
        size: req.body.size,
        spec: req.body.spec,
        img: req.body.img
    })
    film.save()
    .then(response => {
        res.status(201).json({
            message: `Film is Added`
        })
    })
    .catch(error => {
        res.json({
            message: ErrorMsg
        })
        
    })
}


const update = (req, res, next) => {
    let filmID = req.body.filmID
    let updatedData = {
        name: req.body.name,
        price: req.body.price
    }
    Film.findByIdAndUpdate(filmID, {$set: updatedData})
    .then(response => {
        res.json({
            message: 'Data is Updated'
        })
    })
    .catch(error => {
        res.json({
            message: ErrorMsg
        })
        
    })
}

const destroy = (req, res, next) => {
    let filmID = req.body.filmID
    Film.findByIdAndRemove(filmID)
    .then(() => {
        res.status(200).json({
            message: `The Film is Deleted`
        })
    })
    .catch(error => {
        res.json({
            message: ErrorMsg
        })
        
    })
}

module.exports = {
    showAll, show, add, update, destroy
}