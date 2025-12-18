const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  tour: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour' },
  travelers: Number,
  startDate: Date,
  duration: String,
  notes: String,
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Booking', BookingSchema);
