const  express = require("express");

const app = express();
//add static
app.use(express.static('public'));


app.listen(8080,()=>{console.log("Server is running")})