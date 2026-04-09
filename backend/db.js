const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/myapp');
var db = mongoose.connection;
db.on('error', (err) => {
    console.error.bind(console, 'connection error:',err);});
db.once('open', () => {
    console.log('Database connection successful');
});
module.exports = db;