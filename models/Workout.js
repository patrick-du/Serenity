const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Workout = new Schema({
    info: {
        createdBy: {
            type: Number, 
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        }
    },
    
    exercises: [{
        name: {
            type: String,
            required: true
        },
        sets: {
            type: Number,
            required: false
        },
        reps: {
            type: Number,
            required: false
        }s
    }]
});

module.exports = Workout = mongoose.model("Workout", WorkoutSchema);