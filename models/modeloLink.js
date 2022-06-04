const mongoose = require('mongoose')
    
const Linksesquema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descrição: String,
    url: {type: String, required: true},
    click: {type: Number, default: 0},
    
})
module.exports = mongoose.model('link', Linksesquema)