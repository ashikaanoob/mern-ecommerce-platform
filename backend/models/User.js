const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    tel:{type: Number},
    email:{type: String},
    address:{type: String},
    password:{type: String}
});

module.exports = mongoose.model('users', UserSchema);