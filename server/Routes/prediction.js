const express = require('express');
const router = express.Router();
const Prediction = require('../Models/Prediction');

router.post('/',(req,res)=>{
    console.log(req.body);
    const predictionObject = new Prediction({
        district:req.body.district,
        areaPopulation:req.body.areaPopulation,
        month:req.body.month,
        clothType:req.body.clothType,
        gender:req.body.gender,
        size:req.body.size,
        color:req.body.color,
        age:req.body.age,
        sleevesLength:req.body.sleevesLength,
        sleeveType:req.body.sleeveType,
        dressLength:req.body.dressLength,
        pattern:req.body.pattern,
        fabricType:req.body.fabricType,
        collarType:req.body.collarType,
        trouserType:req.body.trouserType,
    });


   /* product.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.json({message:err})
        })*/
});

module.exports=router;