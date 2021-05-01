const express = require('express');
const router = express.Router();
const Measurements = require('../Models/UserMeasurements');

/**
 * add measurements
 */
router.post('/',(req,res)=>{
    console.log(req.body);
    const measurements = new Measurements({
        uname:req.body.uname,
        height:req.body.height,
        bustGirth: req.body.bustGirth,
        waistGirth: req.body.waistGirth,
        hipGirth: req.body.hipGirth,
        insideLegLength: req.body.insideLegLength,
        armLength: req.body.armLength,
        neckBaseLength: req.body.neckBaseLength
    });

    measurements.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.json({message:err})
        })
});

/**
 * get all measurements
 */
router.get('/',async (req,res)=>{

    try{
        const measurements = await Measurements.find();
        res.json(measurements);
    }catch(err){
        res.json({message:err})
    }
});

/**
 * get specific user measurement
 */
router.get('/:uname',async (req,res)=>{
    try{
        const specificMeasurement = await Measurements.findById(req.params.uname);
        await res.json(specificMeasurement);
    }catch(err){
        await res.json({message: err});
    }
});

/**
 * update user measurements
 */
router.post('/:uname',async (req,res)=>{
    try{
        const updateMeasurements =await Measurements.updateOne({_id:req.params.uname},
            {$set : {
                    height:req.body.height,
                    bustGirth: req.body.bustGirth,
                    waistGirth: req.body.waistGirth,
                    hipGirth: req.body.hipGirth,
                    insideLegLength: req.body.insideLegLength,
                    armLength: req.body.armLength,
                    neckBaseLength: req.body.neckBaseLength
                }});

        res.json(updateMeasurements);


    }catch(err){
        res.json({message:err});
    }
});

/**
 * delete user measurements
 */
router.delete('/:uname',async (req,res)=>{
    try{
        const deleteMeasurement =await Measurements.remove({_id: req.params.uname});
        await res.json(deleteMeasurement);
    }catch(err){
        await res.json({message: err});
    }
});

module.exports=router;