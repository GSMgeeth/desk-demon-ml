const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


//import routes
const productRoute = require('./Routes/product');
const predictionRoute = require('./Routes/prediction');
const userMeasurementsRoute = require('./Routes/userMeasurements');
const userRoute = require('./Routes/users');
const dressPropertiesRoute = require('./Routes/dressProperties');


//middleware
app.use(bodyparser.json());
app.use(cors());
app.use('/product',productRoute);;
app.use('/user', userRoute);
app.use('/clothProperties',dressPropertiesRoute);
app.use('/salesPrediction',predictionRoute);
app.use('/userMeasurements',userMeasurementsRoute);

//db
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser:true,useUnifiedTopology: true},
    ()=>console.log('Database connected!')
)

app.listen(4000);
