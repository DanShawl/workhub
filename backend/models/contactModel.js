const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    firstName: {
      type: String,
      required: [true, 'Please add a first name.'],
    },
    lastName: {
      type: String,
      required: [true, 'Please add a last name.'],
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    emailAddress: {
      type: String,
      required: false,
    },
    company: {
      type: String,
      required: false,
    },
    jobTitle: {
      type: String,
      required: false,
    },
    workOrders: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Contact', contactSchema);
