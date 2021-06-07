const Figure = require(`../models/top`)
const ErrorMsg = 'An Error Occured!!!'

const showAll = (req, res, next) => {
    Figure.find()
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
    let figureID = req.body.figureID
    Figure.findById(figureID)
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
    let figure = new Figure({
        name: req.body.name,
        price: req.body.price,
        img: req.body.img
    })
    figure.save()
    .then(response => {
        res.status(201).json({
            message: `Figure is Added`
        })
    })
    .catch(error => {
        res.json({
            message: ErrorMsg
        })
        
    })
}


const update = (req, res, next) => {
    let figureID = req.body.figureID
    let updatedData = {
        name: req.body.name,
        coll: req.body.coll,
        mfr: req.body.mfr,
        price: req.body.price,
        size: req.body.size,
        spec: req.body.spec,
        img: req.body.img
    }
    Figure.findByIdAndUpdate(figureID, {$set: updatedData})
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
    let figureID = req.body.figureID
    Figure.findByIdAndRemove(figureID)
    .then(() => {
        res.status(200).json({
            message: `The Figure is Deleted`
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