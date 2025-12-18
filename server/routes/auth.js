const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
router.post('/login', async (req, res) => {
  try{
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: 'Invalid email' });
    const ok = await admin.comparePassword(password);
    if (!ok) return res.status(400).json({ message: 'Incorrect password' });
    const token = jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token });
  }catch(err){
    res.status(500).json({ message: 'Server error' });
  }
});
module.exports = router;
