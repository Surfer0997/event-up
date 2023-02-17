import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  id: String,
  title: String,
  city: String,
  description: String,
  image: String,
  emails_registered: [String]
});

module.exports = mongoose.models.Event || mongoose.model('Event', UserSchema)