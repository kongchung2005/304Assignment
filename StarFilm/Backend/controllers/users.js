const User = require(`../models/user`)
const bcrypt = require(`bcryptjs`)
const jwt = require(`jsonwebtoken`)
const SECRET = 'PeterLai'

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err) {
            res.status(500).json({
                error: err
            })
        }
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        })
        user.save()
        .then(user =>{
            res.status(201).json({
                message: 'User is Added'
            })
        })
        .catch(error => {
            res.status(500).json({
                message: 'An Error Occured!!!'
            })
        })
    })
}

const login = (req, res, next) => {
    var username = req.body.email
    var password = req.body.password

    User.findOne({email: username})
    .then(user => { //this user is result, so user.name get the displayname
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(err) {
                    res.status(401).json({
                        error: err,
                        message: "Auth failed"
                    })
                }
                if(result){
                    let token = jwt.sign({name: user.name}, SECRET, {expiresIn: `1h`})
                    res.status(200).json({
                        message: `Login Successful`,
                        name: user.name,
                        id:user.id,
                        token
                    })
                }else{
                    res.status(401).json({
                        message: `Password does not Matched`
                    })
                }
            })
        }else{
            res.status(500).json({
                message: 'User not Found'
            })
        }
    })
}

const change = (req, res, next) => {
    let userID = req.body.userID
    let updatedData = {
        password: req.body.password
    }
    Figure.findByIdAndUpdate(userID, {$set: updatedData})
    .then(response => {
        res.json({
            message: 'Password is Updated'
        })
    })
    .catch(error => {
        res.json({
            message: ErrorMsg
        })
        
    })
}

module.exports = {
    register, login, change
}