const asyncHandler = require('express-async-handler');
// const Task = require('../models/taskModel');
const WorkOrder = require('../models/workOrderModel');
const User = require('../models/userModel');

//  @desc     Get Work Order
//  @route    GET /api/work-orders
//  @access   Private
const getWorkOrders = asyncHandler(async (req, res) => {
  const workOrders = await WorkOrder.find({ user: req.user.id });
  res.status(200).json(workOrders);
});

//  @desc     Set work order
//  @route    POST /api/work-orders
//  @access   Private
const setWorkOrder = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.status) {
    res.status(400);
    throw new Error('Please add all fields.');
  }

  const workOrder = await WorkOrder.create({
    title: req.body.title,
    user: req.user.id,
    status: req.body.status,
  });
  res.status(200).json(workOrder);
});

// //  @desc     Update task
// //  @route    PUT /api/tasks/:id
// //  @access   Private
// const updateTask = asyncHandler(async (req, res) => {
//   const task = await Task.findById(req.params.id);

//   if (!task) {
//     res.status(400);
//     throw new Error('Task not found.');
//   }

//   // const user = await User.findById(req.user.id);

//   if (!req.user) {
//     res.status(401);
//     throw new Error('User not found.');
//   }

//   if (task.user.toString() !== req.user.id) {
//     res.status(401);
//     throw new Error('User not authorized.');
//   }

//   const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });

//   res.status(200).json(updatedTask);
// });

// //  @desc     Delete task
// //  @route    DELETE /api/tasks/:id
// //  @access   Private
// const deleteTask = asyncHandler(async (req, res) => {
//   const task = await Task.findById(req.params.id);

//   if (!task) {
//     res.status(400);
//     throw new Error('Task not found.');
//   }

//   // const user = await User.findById(req.user.id);

//   if (!req.user) {
//     res.status(401);
//     throw new Error('User not found.');
//   }

//   if (task.user.toString() !== req.user.id) {
//     res.status(401);
//     throw new Error('User not authorized.');
//   }

//   await task.remove();
//   res.status(200).json({ id: req.params.id });
// });
module.exports = {
  getWorkOrders,
  setWorkOrder,
  // updateTask,
  // deleteTask,
};
