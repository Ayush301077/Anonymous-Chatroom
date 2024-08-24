const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ChatMessage', chatMessageSchema);