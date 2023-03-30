
const db = require('../../helper/connection')
const mongoose = require('mongoose')


const userModel = mongoose.model('users',{
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
});


// const post = new userModel({
//     username:"ahdi permana",
//     email:'ahdi@gmail.com',
//     phone:'090009990',
//     address:"jawa barat"
// });

// post.save().then((userModel) => console.log(userModel));


module.exports = userModel