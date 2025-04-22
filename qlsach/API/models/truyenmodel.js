const mongoose = require('mongoose');

const truyenSchema = new mongoose.Schema({
    tenSach: String,
    tenTacGia: String,
    photos: String,
    description: String
});

const truyenModel = mongoose.model('truyen',truyenSchema);

module.exports = truyenModel;