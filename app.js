require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;  
const products_routes = require('./routes/products');
const connectDB = require('./db/connect');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/products', products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MongoDB_URL);
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();