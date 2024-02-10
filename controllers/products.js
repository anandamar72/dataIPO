const Product = require("../models/products");

const getAllProducts = async (req, res) => {
    try {
        const myData = await Product.find({});
        
        // Map MongoDB document fields to match the expected JSON structure
        const formattedData = myData.map(data => ({
            company_name: data.name,
            security_type: data.securityType,
            issue_price: parseFloat(data.issuePrice),
            symbol: data.symbol,
            issue_start_date: data.issueStartDate,
            issue_end_date: data.issueEndDate,
            price_range: data.priceRange,
            date_of_listing: data.dateOfListing
        }));
        
        res.status(200).json(formattedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

module.exports = { getAllProducts };
