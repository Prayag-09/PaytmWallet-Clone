const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGO;
mongoose.connect(mongoURL).then( () => console.log("Connected to Database"))

const userSchema = mongoose.Schema({
    userName : {
        type: String,
        minLength : 5,
        maxLength : 30,
        required : true    
    },
    firstName : {
        type: String,
        minLength : 3,
        maxLength : 10,
        required : true
    },
    lastName : {
        type: String,
        minLength : 3,
        maxLength : 10,
        required : true
    },
    password : {
        type: String,
        minLength : 5,
        maxLength : 30,
        required : true
    }
});

const accountSchema = mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
})

const Account = mongoose.model("Account", accountSchema);
const User = mongoose.model("User",userSchema);


module.exports = ({
    User,
    Account
})