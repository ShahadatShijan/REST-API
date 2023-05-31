const express = require("express");
const body_parser = require("body-parser")
const cors = require("cors");
const app = express();
const userRoute = require("./routes/user.route")

app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());

app.use(cors());

//home route
app.use(userRoute);

//route not found
app.use((req,res,next)=>{
    res.status(404).json({  
        message: "routes not found"
    })
})


module.exports = app;