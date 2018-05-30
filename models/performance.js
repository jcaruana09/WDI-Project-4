const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  rating: Number,
  review: String,
  user: {type: mongoose.Schema.ObjectId, ref: 'User'}
});

const performanceSchema = new mongoose.Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  runningTime: Number,
  venue: String,
  image: String,
  description: String,
  reviews: [reviewSchema]
});

module.exports = mongoose.model('Performance', performanceSchema);
