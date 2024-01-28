const Product = require("../models/products");

const getAllProducts = async (req, res) => {
    try {
        // Case-Insensitive Search
        const searchQuery = req.query.name
            ? { name: { $regex: new RegExp(req.query.name, 'i') } }
            : {};

        // Sorting
        const sortBy = req.query.sortBy || 'company_name';
        const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;
        const sortOptions = { [sortBy]: sortOrder };

        // Pagination
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const myData = await Product.find(searchQuery)
            .sort(sortOptions)
            .skip(skip)
            .limit(limit);

        res.status(200).json({ success: true, data: myData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};
    const getAllProductsTesting = async (req, res) => {
        res.status(200).json({ success: true, msg: "Show all products testing" });
        };
        
    module.exports = {  getAllProducts, getAllProductsTesting };      