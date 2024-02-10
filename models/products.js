const mongoose = require('mongoose');

const ipoSchema = new mongoose.Schema({
     company_name: {
        type: String,
        required: [true, 'Please provide company name'],
        trim: true,
        maxlength: [100, 'Company name cannot be more than 100 characters']   
    },
    security_type: {
        type: String,
        required: [true, 'Please provide security type'],
        trim: true,
        maxlength: [20, 'Security type cannot be more than 20 characters']   
    },
    issue_price: {
        type: Number,
        required: [true, 'Please provide issue price'],
        trim: true,
        maxlength: [20, 'Issue price cannot be more than 20 characters']   
    },  
    symbol: {
        type: String,
        required: [true, 'Please provide symbol'],
        trim: true,
        maxlength: [20, 'Symbol cannot be more than 20 characters']   
    },
    issue_start_date: {
        type: String,
        required: [true, 'Please provide issue start date'],
        trim: true,
        maxlength: [20, 'Issue start date cannot be more than 20 characters']   
    },
    issue_end_date: {
        type: String,
        required: [true, 'Please provide issue end date'],
        trim: true,
        maxlength: [20, 'Issue end date cannot be more than 20 characters']   
    },
    price_range: {
        type: String,
        required: [true, 'Please provide price range'],
        trim: true,
        maxlength: [20, 'Price range cannot be more than 20 characters']   
    },
    date_of_listing: {
        type: String,
        required: [true, 'Please provide date of listing'],
        trim: true,
        maxlength: [20, 'Date of listing cannot be more than 20 characters']   
    }
});

module.exports = mongoose.model('IPO', ipoSchema);
