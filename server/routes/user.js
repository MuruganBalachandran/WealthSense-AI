const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');
const router = express.Router();

// Get profile
router.get('/profile', auth, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
});

// Update profile
router.put('/profile', auth, async (req, res) => {
  const { profile } = req.body;
  const user = await User.findByIdAndUpdate(req.user.id, { profile }, { new: true }).select('-password');
  res.json(user);
});

// Update settings
router.put('/settings', auth, async (req, res) => {
  const { settings } = req.body;
  const user = await User.findByIdAndUpdate(req.user.id, { settings }, { new: true }).select('-password');
  res.json(user);
});

// CRUD for watchlist
router.get('/watchlist', auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user.watchlist);
});

router.post('/watchlist', auth, async (req, res) => {
  const { symbol } = req.body;
  const user = await User.findByIdAndUpdate(req.user.id, { $addToSet: { watchlist: symbol } }, { new: true });
  res.json(user.watchlist);
});

router.delete('/watchlist/:symbol', auth, async (req, res) => {
  const { symbol } = req.params;
  const user = await User.findByIdAndUpdate(req.user.id, { $pull: { watchlist: symbol } }, { new: true });
  res.json(user.watchlist);
});

module.exports = router; 