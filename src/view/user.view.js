const express = require("express");
const userRouter = express();


// const userController = require('../controller/user.controller')
// userRouter.get("/", userController)


const userModel = require("../model/user.model")

userRouter.post("/", (req, res) => {
    const post = new userModel(
        {username: req.body.username, email: req.body.email, phone: req.body.phone, address: req.body.address}
    )
    post
        .save()
        .then((result)=>{
            return res.status(200).send(result)
        })
        .catch((error)=>{
            return res.status(500).send(error)
        })
})

userRouter.get("/", (req, res) => {
    userModel.find()
        .then((result)=>{
            return res.status(200).send(result)
        })
        .catch((error)=>{
            return res.status(500).send(error)
        })
})

userRouter.get("/:id", (req, res) => {
    userModel.findById(req.params.id)
    .then((result)=>{
            return res.status(200).send(result)
        })
        .catch((error)=>{
            return res.status(500).send(error)
        })
})

userRouter.delete("/:id", (req, res) => {
    userModel.deleteOne({_id : req.params.id})
    .then((result)=>{
            return res.status(200).send({message: "suscces deleted"})
        })
        .catch((error)=>{
            return res.status(500).send(error)
        })
})

userRouter.put("/:id", (req, res) => {
    console.log("params", req.params.id);
    userModel.updateOne(
        {_id : req.params.id},
        {
            $set:{
                username: req.body.username,
                phone: req.body.phone,
                email: req.body.email,
                address: req.body.address
            }
        }
        )
    .then((result)=>{

            return res.status(200).send({message: "suscces update", data:req.body })
        })
        .catch((error)=>{
            return res.status(500).send(error)
        })
})




module.exports = userRouter