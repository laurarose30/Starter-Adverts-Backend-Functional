const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  name: String,
  location: String,
  summary: String,
  date: Date
})

module.exports.Event = mongoose.model('Event', eventSchema)