const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    // Add more fields as needed
});

module.exports = mongoose.model('Inventory', inventorySchema);
