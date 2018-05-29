const mongoose = require('mongoose');

const performanceSchema = new mongoose.Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  runningTime: Number,
  venue: String,
  image: String,
  description: String,
  reviews: String
});

module.exports = mongoose.model('Performance', performanceSchema);
