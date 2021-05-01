const mongoose = require('mongoose');

const userMeasurementSchema = mongoose.Schema({

    uname:{
        type:String,
        required:true
    },
    height:{
        type:Number,
        required:true
    },
    bustGirth:{
        type:Number,
        required:true
    },
    waistGirth:{
        type:Number,
        required:true
    },
    hipGirth:{
        type:Number,
        required:true
    },
    insideLegLength:{
        type:Number,
        required:true
    },
    armLength:{
        type:Number,
        required:true
    },
    neckBaseLength:{
        type:Number,
        required:true
    }

});

module.exports = mongoose.model("userMeasurement",userMeasurementSchema);