const mongoose = require('mongoose');

const collarTypeSchema = mongoose.Schema({

    collarTypeId:{
        type:Number,
        required:true
    },
    collarType:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('collarType',collarTypeSchema);