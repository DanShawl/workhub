const mongoose = require('mongoose');

const workOrderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: [true, 'Please add a title value'],
    },
    // description: {
    //   type: String,
    //   required: [true, 'Please add a category value.'],
    // },
    // priority: {
    //   type: String,
    //   required: [true, 'Please add a priority level.'],
    // },
    // cost: {
    //   type: String,
    //   required: [true, 'Please add a priority level.'],
    // },
    // servicer: {
    //   type: String,
    //   required: [true, 'Please add servicer name.'],
    // },
    status: {
      type: String,
      required: [true, 'Please add a status.'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Work-Order', workOrderSchema);
