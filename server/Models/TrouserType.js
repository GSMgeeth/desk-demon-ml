const mongoose = require('mongoose');

const trouserTypeSchema = mongoose.Schema({

    trouserTypeId:{
        type:Number,
        required:true
    },
    trouserType:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('trouserType',trouserTypeSchema);