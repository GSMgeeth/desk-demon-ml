const mongoose = require('mongoose');

const patternSchema = mongoose.Schema({

    patternId:{
        type:Number,
        required:true
    },
    pattern:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('pattern',patternSchema);