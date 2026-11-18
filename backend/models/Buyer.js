const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    procurementTarget: {
        type: String
    },
    companyType: {
        type: String
    }
});

module.exports = mongoose.model("Buyer", buyerSchema);
