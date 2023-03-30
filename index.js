const express = require('express')
const {urlencoded, json} = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const router = require("./src/view/index")
const db = require("./helper/connection")


// app.use(express.static('public'))
app.use(urlencoded({extended: true}))
app.use(cors());
app.use(json())


app.use('/api',router )


app.get("*", (req, res) => {
    return res.status(404).send({status: 404, message: "not found"});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})