const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');
const auth = require('../middleware/auth');
router.get('/', async (req, res) => {
  const tours = await Tour.find().sort({ createdAt: -1 });
  res.json(tours);
});
router.get('/:slug', async (req, res) => {
  const tour = await Tour.findOne({ slug: req.params.slug });
  if (!tour) return res.status(404).json({ message: 'Not found' });
  res.json(tour);
});
router.post('/', auth, async (req, res) => {
  const tour = new Tour(req.body);
  await tour.save();
  res.json(tour);
});
router.put('/:id', auth, async (req, res) => {
  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(tour);
});
router.delete('/:id', auth, async (req, res) => {
  await Tour.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});
module.exports = router;
