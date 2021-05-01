const mongoose = require('mongoose');

const sizeSchema = mongoose.Schema({

    sizeId:{
        type:Number,
        required:true
    },
    size:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('size',sizeSchema);