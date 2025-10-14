const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'USer Name is required'],
        trim:true,
        minLength:3,
        maxLength:30,
    },
    email:{
        type:String,
        required:[true, 'User email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        lowercase: true,
        match: [/\S+@\S+\. \S+/,'Please fill a valid address'],
    },
    username:{
        type:String,
        required:[true, 'USer password is required'],
        minLength:6,
    },
    password:{
        type:String,
        required:[true, 'User password is required'],
        minLength:6,
    }
},{
    timestamps:true
});

module.exports=userSchema;