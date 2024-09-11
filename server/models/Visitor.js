const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
    ipAddress: String,
    userAgent: String,
    visitTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Visitor', visitorSchema);
