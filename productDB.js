require('dotenv').config();
const connectDB = require('./db/connect');
const Product = require('./models/products');
const jsonProducts = require('./products.json');

const start = async () => { 
    try {
        await connectDB(process.env.MongoDB_URL);
        await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log('Success!');
    } catch (error) {
        console.log(error);
    }  
};

start();