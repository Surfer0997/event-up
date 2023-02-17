import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  image: String
})

module.exports = mongoose.models.EventsCategory || mongoose.model('EventsCategory', UserSchema)