const mongoose = require('mongoose');
const OrderSchemaItems = mongoose.Schema({
productId:{type: mongoose.Schema.Types.ObjectId, ref: 'products'},
userId:{type: mongoose.Schema.Types.ObjectId, ref: 'users'},




});
module.exports = mongoose.model('orders', OrderSchemaItems);
   