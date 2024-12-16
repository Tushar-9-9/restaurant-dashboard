const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    storeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
    aggregator: { type: String, required: true },
    items: { type: Array, required: true },
    netAmount: { type: Number, required: true },
    grossAmount: { type: Number, required: true },
    tax: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    eventLog: { type: Array, default: [] },
    status: { type: String, enum: ['delivered', 'pending'], default: 'pending' },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);
