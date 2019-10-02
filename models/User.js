const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userId: { // Link this to createdBy key
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    password2: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = User = mongoose.model("User", UserSchema);

// How the export works with mongoose.model: https://mongoosejs.com/docs/api.html#model_Model