const mongoose = require('mongoose');
const TourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  summary: String,
  priceFrom: Number,
  durationDays: Number,
  images: [String],
  highlights: [String],
  category: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Tour', TourSchema);
