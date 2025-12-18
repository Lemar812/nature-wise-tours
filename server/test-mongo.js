const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/nature_wise")
  .then(() => {
    console.log("Connected to MongoDB successfully!");
    process.exit();
  })
  .catch(err => {
    console.error("MongoDB Error:", err);
    process.exit();
  });
