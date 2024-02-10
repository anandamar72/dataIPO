const Product = require("../models/products");

const getAllProducts = async (req, res) => {
    try {
        const myData = await Product.find({});
        
        // Map MongoDB document fields to match the expected JSON structure
        const formattedData = myData.map(data => ({
            company_name: data.company_name,
            security_type: data.security_type,
            issue_price: parseFloat(data.issue_price),
            symbol: data.symbol,
            issue_start_date: data.issue_start_date,
            issue_end_date: data.issue_end_date,
            price_range: data.price_range,
            date_of_listing: data.date_of_listing
        }));
        
        res.status(200).json(formattedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

module.exports = { getAllProducts };
