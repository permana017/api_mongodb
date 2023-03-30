const mongoose = require('mongoose')
require('dotenv').config()

// const db = mongoose
//     .connect(process.env.DB_CONNECTION)
//     .then((dbo) => {
//         console.log("DB connected")
//     }, (err) => {
//         console.log(err)
//     });

const db = mongoose.connect(process.env.DB_CONNECTION)
    .then((dbo) => {
        console.log("DB connected")
    }, (err) => {
        console.log(err)
    });

module.exports = db