const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name : String,
    email : String,
    password : String,
    bio: String,
    minAmt: Number,
    avatar: {type : String, default: 'placeholder.jpg'}
});

module.exports = model( 'user', mySchema );