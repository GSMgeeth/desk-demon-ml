const mongoose = require('mongoose');

const predictionSchema = mongoose.Schema({

    age:{
        type:Number,
        required:true
    },
    month:{
        type:Number,
        required:true
    },
    district:{
        type:Number,
        required:true
    },
    areaPopulation:{
        type:Number,
        required:true
    },
    clothType:{
        type:Number,
        required:true
    },
    gender:{
        type:Number,
        required:true
    },
    size:{
        type:Number,
        required:true
    },
    color:{
        type:Number,
    },
    sleevesLength:{
        type:Number,
    },
    sleeveType:{
        type:Number,
    },
    dressLength:{
        type:Number,
        required:true
    },
    pattern:{
        type:Number,
        required:true
    },
    fabricType:{
        type:Number

    },
    collarType:{
        type:Number
    },
    trouserType:{
        type:Number
    },
    sales:{
        type:Number
    }
});

module.exports = mongoose.model('predictionSchema',predictionSchema);