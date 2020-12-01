var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required:  true,
        unique: true,
        minlength: 3
    },
    password:{
        type: String,
        required: true,
        minlength: 8
    },
    type:{
        type: String,
        required: true,
    }
},{
    timestamps: true
}
);

const User = mongoose.model('User', userSchema);

module.exports = User;