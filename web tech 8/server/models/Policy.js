const mongoose = require('mongoose');

// Define the Policy Schema
const policySchema = new mongoose.Schema({
  policyNumber: {
    type: String,
    required: [true, 'Policy number is required'],
    unique: true,
    trim: true
  },
  customerName: {
    type: String,
    required: [true, 'Customer name is required'],
    trim: true
  },
  policyType: {
    type: String,
    required: [true, 'Policy type is required'],
    enum: ['Life Insurance', 'Health Insurance', 'Vehicle Insurance', 'Home Insurance', 'Travel Insurance']
  },
  premium: {
    type: Number,
    required: [true, 'Premium amount is required'],
    min: [0, 'Premium cannot be negative']
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required']
  },
  endDate: {
    type: Date,
    required: [true, 'End date is required'],
    validate: {
      validator: function(value) {
        return value > this.startDate;
      },
      message: 'End date must be after start date'
    }
  },
  status: {
    type: String,
    required: true,
    enum: ['Active', 'Expired', 'Cancelled'],
    default: 'Active'
  }
}, {
  timestamps: true  // Adds createdAt and updatedAt fields automatically
});

// Create and export the Policy model
const Policy = mongoose.model('Policy', policySchema);

module.exports = Policy;
