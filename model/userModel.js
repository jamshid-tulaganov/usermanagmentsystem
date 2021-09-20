const mongoose = require("mongoose");

//connect the local database
const database = mongoose.connect('mongodb://localhost/usermanagmant');
database.then((data)=>{
    console.log("Mongodb is live")
}).catch((err)=>{
    console.error("xatolik ..",err)
})

