const mongoose = require('mongoose');

const colorSchema = mongoose.Schema({

    colorId:{
        type:Number,
        required:true
    },
    color:{
        type:String,
        required:true
    },

    hexCode:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('color',colorSchema);