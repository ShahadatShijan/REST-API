let users = require("../models/user.model")
const path = require("path");
const {v4: uuidv4} = require("uuid");

//user form
exports.userForm = (req,res)=>{
    res.sendFile(path.join(__dirname+"/../views/index.html"))
}

//all user
exports.getUser = (req,res) =>{
    res.status(200).send(users);
}

//new user
exports.getPost = (req,res) =>{
    const {name,age} = req.body;
    const user = {
        id: uuidv4(),name,age
    }
    users.push(user)
    res.status(200).json(users)
}

//update user
exports.putUser = (req,res) =>{
    const userId = req.params.id;
    const {name,age} = req.body;
    users.filter((user)=> user.id === userId).map((updateUser) =>{
        updateUser.name = name;
        updateUser.age = age;
    })
    res.status(200).json(users);
}

//delete user
exports.deleteUser = (req,res) =>{
    const userId = req.params.id;
    users = users.filter((user) => user.id !== userId);
    res.status(200).json(users);
}