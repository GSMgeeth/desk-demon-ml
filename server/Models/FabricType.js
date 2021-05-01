const mongoose = require('mongoose');

const fabricTypeSchema = mongoose.Schema({

    fabricTypeId:{
        type:Number,
        required:true
    },
    fabricType:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('fabricType',fabricTypeSchema);