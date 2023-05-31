require("dotenv").config();
const app = require("./app")

const port = process.env.port || 3000;
app.listen(port,(req,res)=>{
    console.log(`Server is running at http://localhost:${port}`);
})
