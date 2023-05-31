const {v4: uuidv4} = require("uuid");

const users = [
    {
        id : uuidv4(),
        name: "Shahadat Hossain",
        age: 25
    },
    {
        id: uuidv4(),
        name: "titumir",
        age: 22
    }
]

module.exports = users;