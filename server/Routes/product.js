const express = require('express');
const router = express.Router();
const ProductDetails = require('../Models/Product');

//get all product details
router.get('/',async (req,res)=>{
console.log(constant.sleeves);
    try{
        const product = await ProductDetails.find();
       await res.json(product);
    }catch(err){
        await res.json({message: err})
    }
});

//get specific product item
router.get('/:id',async (req,res)=>{
    try{
        const specificProduct = await ProductDetails.findById(req.params.id);
        await res.json(specificProduct);
    }catch(err){
        await res.json({message: err});
    }
})

//submit product details
router.post('/',(req,res)=>{
    console.log(req.body);
    const product = new ProductDetails({
        productName:req.body.productName,
        clothType:req.body.clothType,
        productImage:req.body.productImage,
        gender:req.body.gender,
        size:req.body.size,
        color:req.body.color,
        ageGroup:req.body.ageGroup,
        sleevesLength:req.body.sleevesLength,
        sleeveType:req.body.sleeveType,
        dressLength:req.body.dressLength,
        pattern:req.body.pattern,
        fabricType:req.body.fabricType,
        collarType:req.body.collarType,
        trouserType:req.body.trouserType,
        price:req.body.price
    });

    console.log(req.body);

    product.save()
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        res.json({message:err})
    })
});

//update product details
router.post('/:id',async (req,res)=>{
    try{
        const updateProduct =await ProductDetails.updateOne({_id:req.params.id},
            {$set : {
                    productName:req.body.productName,
                    clothType:req.body.clothType,
                    productImage:req.body.productImage,
                    gender:req.body.gender,
                    size:req.body.size,
                    color:req.body.color,
                    ageGroup:req.body.ageGroup,
                    sleevesLength:req.body.sleevesLength,
                    sleeveType:req.body.sleeveType,
                    dressLength:req.body.dressLength,
                    pattern:req.body.pattern,
                    fabricType:req.body.fabricType,
                    collarType:req.body.collarType,
                    trouserType:req.body.trouserType,
                    price:req.body.price
                }});
        
            await res.json(updateProduct);


    }catch(err){
        await res.json({message: err});
    }
});

//delete product details
router.delete('/:id',async (req,res)=>{
    try{
        const deleteProduct =await ProductDetails.remove({_id: req.params.id});
        await res.json(deleteProduct);
    }catch(err){
        await res.json({message: err});
    }
});


module.exports=router;