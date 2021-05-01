const mongoose = require('mongoose');

const districtSchema = mongoose.Schema({

    districtId:{
        type:Number,
        required:true
    },
    districtName:{
        type:String,
        required:true
    },
    areaPopulation:{
        type:Number,
        required:true
    },

});

module.exports = mongoose.model('district',districtSchema);