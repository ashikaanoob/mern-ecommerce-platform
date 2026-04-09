const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(express.json());
let db = require('./db');
const bodyparser=require('body-parser')
app.use(cors());
app.use(bodyparser.json())

const route = require('./route');
app.use('/', route);


app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/about', (req, res) => {
    res.send('This is the about page.');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




