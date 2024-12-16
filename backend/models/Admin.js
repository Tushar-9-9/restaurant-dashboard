const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
  storeName: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  aggregators: { type: [String], default: [] },
});

adminSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

module.exports = mongoose.model('Admin', adminSchema);
