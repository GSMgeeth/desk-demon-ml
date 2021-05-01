const mongoose = require('mongoose');

const dressLengthSchema = mongoose.Schema({

    dressLengthId:{
        type:Number,
        required:true
    },
    dressLength:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('dressLength',dressLengthSchema);