const mongoose = require('mongoose');

const sleevesLengthSchema = mongoose.Schema({

    sleevesLengthId:{
        type:Number,
        required:true
    },
    sleevesLength:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('sleeveLength',sleevesLengthSchema);