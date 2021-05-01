const mongoose  =  require('mongoose');

const ProductSchema = mongoose.Schema({

    productName:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
    clothType:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    ageGroup:{
        type:String,
        required:true
    },
    sleevesLength:{
        type:String,
    },
    sleeveType:{
        type:String,
    },
    dressLength:{
        type:String,
        required:true
    },
    pattern:{
        type:String,
        required:true
    },
    fabricType:{
        type:String,
        required:true
    },
    collarType:{
        type:String,
    },
    trouserType:{
        type:String,
    },
    price:{
        type:Number,
        required:true
    }

});

module.exports=mongoose.model('product',ProductSchema);