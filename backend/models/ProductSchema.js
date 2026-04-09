const mongoose = require('mongoose');
const ProductSchemaItems = mongoose.Schema({
    name:{type:String},
    description:{type:String},
    price:{type: Number},
    category:{type: String},
    image:{type:String}
    
});
module.exports = mongoose.model('products', ProductSchemaItems);