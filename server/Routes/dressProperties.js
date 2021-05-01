const express = require('express');
const router = express.Router();
const District = require('../Models/District');
const ClothType = require('../Models/ClothType');
const SleeveLength =  require('../Models/SleevesLength');
const DressLength = require('../Models/DressLength');
const Sizes = require('../Models/Size');
const Color = require('../Models/Color');
const Patterns = require('../Models/Pattern');
const FabricType = require('../Models/FabricType');
const CollarType = require('../Models/CollarType');
const TrouserType = require('../Models/TrouserType');
const SleeveType = require('../Models/SleeveType');

/**
 * add districts
 */
router.post('/addDistrict',(req,res)=>{
    console.log(req.body);
    const district = new District({
        districtId: req.body.districtId,
        districtName: req.body.districtName,
        areaPopulation: req.body.areaPopulation
    });

    district.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.json({message:err})
        })
});

/**
 * get all districts
 */
router.get('/getDistricts',async(req,res)=>{

    try {

        let districtList = await District.find();

        await res.json(districtList);

    }catch(err){
        await res.json({message: err});
    }

});

/**
 * add cloth types
 */
router.post('/addclothType',(req,res)=>{
    console.log(req.body);
    const clothType = new ClothType({
        clothTypeId: req.body.clothTypeId,
        clothType:req.body.clothType,
    });

    clothType.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.json({message:err})
        })
});

/**
 * get all cloth types
 */
router.get('/getClothTypes',async(req,res)=>{

    try {
        let clothTypeList = await ClothType.find();

        await res.json(clothTypeList);

    }catch(err){
        await res.json({message: err});
    }

});

/**
 * add sleeve lengths
 */
router.post('/addSleeveLength',(req,res)=>{
    console.log(req.body);
    const sleeveLength = new SleeveLength({
        sleevesLengthId: req.body.sleevesLengthId,
        sleevesLength:req.body.sleevesLength,
    });

    sleeveLength.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.json({message:err})
        })
});

/**
 * get all sleeve lengths
 */
router.get('/getSleevesLengths',async(req,res)=>{

    try {
        let sleeveLengthList = await SleeveLength.find();

        await res.json(sleeveLengthList);

    }catch(err){
        await res.json({message: err});
    }

});

/**
 * add dress lengths
 */
router.post('/addDressLength',(req,res)=>{
    console.log(req.body);
    const dressLength = new DressLength({
        dressLengthId: req.body.dressLengthId,
        dressLength:req.body.dressLength,
    });

    dressLength.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.json({message:err})
        })
});

/**
 * get all dress lengths
 */
router.get('/getDressLength',async(req,res)=>{

    try {
        let dressLengthList = await DressLength.find();

        await res.json(dressLengthList);

    }catch(err){
        await res.json({message: err});
    }

});

/**
 * add sizes
 */
router.post('/addSizes',(req,res)=>{
    console.log(req.body);
    const sizes = new Sizes({
        sizeId: req.body.sizeId,
        size:req.body.size,
    });

    sizes.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.json({message:err})
        })
});

/**
 * get all sizes
 */
router.get('/getSizes',async(req,res)=>{

    try {
        let sizesList = await Sizes.find();

        await res.json(sizesList);

    }catch(err){
        await res.json({message: err});
    }

});

/**
 * add colors
 */
router.post('/addColors',(req,res)=>{
    console.log(req.body);
    const colors = new Color({
        colorId: req.body.colorId,
        color:req.body.color,
        hexCode:req.body.hexCode
    });

    colors.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.json({message:err})
        })
});

/**
 * get all colors
 */
router.get('/getColors',async(req,res)=>{

    try {
        let colorsList = await Color.find();

        await res.json(colorsList);

    }catch(err){
        await res.json({message: err});
    }

});

/**
 * add patterns
 */
router.post('/addPattern',(req,res)=>{
    console.log(req.body);
    const pattern = new Patterns({
        patternId: req.body.patternId,
        pattern:req.body.pattern,
    });

    pattern.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.json({message:err})
        })
});

/**
 * get all patterns
 */
router.get('/getPatterns',async(req,res)=>{

    try {
        let patternsList = await Patterns.find();

        await res.json(colorsList);

    }catch(err){
        await res.json({message: err});
    }

});

/**
 * add fabric type
 */
router.post('/addFabricType',(req,res)=>{
    console.log(req.body);
    const fabricType = new FabricType({
        fabricTypeId: req.body.fabricTypeId,
        fabricType:req.body.fabricType,
    });

    fabricType.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.json({message:err})
        })
});

/**
 * get fabric type
 */
router.get('/getFabricType',async(req,res)=>{

    try {
        let fabricTypesList = await FabricType.find();

        await res.json(fabricTypesList);

    }catch(err){
        await res.json({message: err});
    }

});

/**
 * add collar type
 */
router.post('/addCollarType',(req,res)=>{
    console.log(req.body);
    const collarType = new CollarType({
        collarTypeId: req.body.collarTypeId,
        collarType:req.body.collarType,
    });

    collarType.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.json({message:err})
        })
});

/**
 * get collar type
 */
router.get('/getCollarType',async(req,res)=>{

    try {
        let collarTypesList = await CollarType.find();

        await res.json(collarTypesList);

    }catch(err){
        await res.json({message: err});
    }

});

/**
 * add trouser type
 */
router.post('/addTrouserType',(req,res)=>{
    console.log(req.body);
    const trouserType = new TrouserType({
        trouserTypeId: req.body.trouserTypeId,
        trouserType:req.body.trouserType,
    });

    trouserType.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.json({message:err})
        })
});

/**
 * get trouser type
 */
router.get('/getTrouserType',async(req,res)=>{

    try {
        let trouserTypesList = await TrouserType.find();

        await res.json(trouserTypesList);

    }catch(err){
        await res.json({message: err});
    }

});

/**
 * add sleeve type
 */
router.post('/addSleeveType',(req,res)=>{
    console.log(req.body);
    const sleeveType = new SleeveType({
        sleeveTypeId: req.body.sleeveTypeId,
        sleeveType:req.body.sleeveType,
    });

    sleeveType.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.json({message:err})
        })
});

/**
 * get sleeve type
 */
router.get('/getSleeveType',async(req,res)=>{

    try {
        let sleeveTypesList = await SleeveType.find();

        await res.json(sleeveTypesList);

    }catch(err){
        await res.json({message: err});
    }

});


module.exports=router;