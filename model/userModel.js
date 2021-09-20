const mongoose = require("mongoose");

//connect the local database
const result = mongoose.connect('mongodb://localhost/usermanagmant');
result.then((data)=>{
    console.log("Mongodb is live")
}).catch((err)=>{
    console.error("xatolik ..",err)
})

// create new schema
const user = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        maxlength:100
    },
    email:{
        type:String,
        required:true,
        minlength:9,
        maxlength:1000
    },
    city:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        type:String,
        required:true,
        trim:true
    }

})
// make model
const Users = new mongoose.model('users',user);
