require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const route = require("./route");
app.use('/api', route);

// Root route
app.get("/", (req, res) => {
  res.send("Ecommerce API Running 🚀");
});

// Extra route
app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

// PORT 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});