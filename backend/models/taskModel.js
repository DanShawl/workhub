const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    category: {
      type: String,
      required: [true, 'Please add a category value.'],
    },
    priority: {
      type: String,
      required: [true, 'Please add a priority level.'],
    },
    // completed: {
    //   type: Boolean,
    // }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Task', taskSchema);
