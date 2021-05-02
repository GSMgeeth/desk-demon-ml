const express = require('express');
const router = express.Router();
const ProductDetails = require('../Models/Product');

const GaussianNB = require('ml-naivebayes');
const ml = require("ml-regression");
const csv = require("csvtojson");
const SLR = ml.SLR;

router.get('/', async (req, res) => {
  try {

    const csvFilePath = "Routes/dress_data_with_ref_ids.csv"
    let csvData = [],
      x = [],
      xTest = [],
      y = [],
      yTest = [];

    const jsonArray = await csv().fromFile(csvFilePath);
    csvData.push(jsonArray);

    prepareData();
    await res.json(performRegression());

    /**
     * Prepare data.
     */
    function prepareData() {
      const trainCsvData = csvData[0].slice(0, 800);
      const testCsvData = csvData[0].slice(800, 1000);

      trainCsvData.forEach((row) => {
        x.push(parseInt(row.population));
        y.push(parseInt(row.sales));
      });

      testCsvData.forEach((row) => {
        xTest.push(parseInt(row.population));
        yTest.push(parseInt(row.sales));
      })
    }

    /**
     * Perform regression on data.
     *
     * @return {Array|*}
     */
    function performRegression() {
      let regressionModel = new SLR(x, y);
      console.log(regressionModel);
      console.log(yTest);

      return regressionModel.predict(xTest);
    }
  } catch (err) {
    await res.json({message: err})
  }
});

//get specific product item
router.get('/:id', async (req, res) => {
  try {
    const specificProduct = await ProductDetails.findById(req.params.id);
    await res.json(specificProduct);
  } catch (err) {
    await res.json({message: err});
  }
})

//submit product details
router.post('/', (req, res) => {
  console.log(req.body);
  const product = new ProductDetails({
    productName: req.body.productName,
    clothType: req.body.clothType,
    productImage: req.body.productImage,
    gender: req.body.gender,
    size: req.body.size,
    color: req.body.color,
    ageGroup: req.body.ageGroup,
    sleevesLength: req.body.sleevesLength,
    sleeveType: req.body.sleeveType,
    dressLength: req.body.dressLength,
    pattern: req.body.pattern,
    fabricType: req.body.fabricType,
    collarType: req.body.collarType,
    trouserType: req.body.trouserType,
    price: req.body.price
  });

  console.log(req.body);

  product.save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({message: err})
    })
});

//update product details
router.post('/:id', async (req, res) => {
  try {
    const updateProduct = await ProductDetails.updateOne({_id: req.params.id},
      {
        $set: {
          productName: req.body.productName,
          clothType: req.body.clothType,
          productImage: req.body.productImage,
          gender: req.body.gender,
          size: req.body.size,
          color: req.body.color,
          ageGroup: req.body.ageGroup,
          sleevesLength: req.body.sleevesLength,
          sleeveType: req.body.sleeveType,
          dressLength: req.body.dressLength,
          pattern: req.body.pattern,
          fabricType: req.body.fabricType,
          collarType: req.body.collarType,
          trouserType: req.body.trouserType,
          price: req.body.price
        }
      });

    await res.json(updateProduct);


  } catch (err) {
    await res.json({message: err});
  }
});

//delete product details
router.delete('/:id', async (req, res) => {
  try {
    const deleteProduct = await ProductDetails.remove({_id: req.params.id});
    await res.json(deleteProduct);
  } catch (err) {
    await res.json({message: err});
  }
});


module.exports = router;
