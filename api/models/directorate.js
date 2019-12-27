const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  });

module.exports = mongoose.model('Directorate', schema);