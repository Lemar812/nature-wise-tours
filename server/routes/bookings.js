const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');
const { sendBookingEmail, sendWhatsApp } = require('../utils/notify');
router.post('/', async (req, res) => {
  try{
    const booking = new Booking(req.body);
    await booking.save();
    // notifications (non-blocking)
    sendBookingEmail(req.body);
    sendWhatsApp(`New booking from ${req.body.fullName} - ${req.body.email}`);
    res.json({ message: 'Booking created', booking });
  }catch(err){
    res.status(400).json({ message: err.message });
  }
});
router.get('/', auth, async (req, res) => {
  const list = await Booking.find().populate('tour').sort({ createdAt: -1 });
  res.json(list);
});
router.put('/:id', auth, async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(booking);
});
module.exports = router;
