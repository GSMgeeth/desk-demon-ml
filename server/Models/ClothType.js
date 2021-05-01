const mongoose = require('mongoose');

const clothTypeSchema = mongoose.Schema({

   clothTypeId:{
        type:Number,
        required:true
    },
    clothType:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('clothType',clothTypeSchema);