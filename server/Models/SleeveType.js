const mongoose = require('mongoose');

const sleeveTypeSchema = mongoose.Schema({

    sleeveTypeId:{
        type:Number,
        required:true
    },
    sleeveType:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('sleeveType',sleeveTypeSchema);