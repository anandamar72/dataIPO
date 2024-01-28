const mongoose = require('mongoose');

const connectDB = async (uri) => {
    try {
        return mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        
        });
    } catch (err) {
        console.log(err);
        process.exit(1);    
    };  
};

module.exports = connectDB;