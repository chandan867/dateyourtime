const mongoose=require('mongoose');

const cardScheme=mongoose.Schema({
    name:String,
    link:String,
})

const card = mongoose.model('Cards',cardScheme);

module.exports =card;
//2.01