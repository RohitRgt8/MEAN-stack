var mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Task', taskSchema);