const asyncHandler = require('express-async-handler');
const Task = require('../models/taskModel');
const User = require('../models/userModel');

//  @desc     Get tasks
//  @route    GET /api/tasks
//  @access   Private
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.status(200).json(tasks);
});

//  @desc     Set task
//  @route    POST /api/tasks
//  @access   Private
const setTask = asyncHandler(async (req, res) => {
  // if (!req.body.text) {
  //   res.status(400);
  //   throw new Error('Please add text field.');
  // }
  if (!req.body.text || !req.body.category) {
    res.status(400);
    throw new Error('Please add all fields.');
  }

  const task = await Task.create({
    text: req.body.text,
    user: req.user.id,
    category: req.body.category,
    priority: req.body.priority,
    // completed: req.body.completed,
    // ticketNumber: req.body.number // #
    // status: req.body.status // open pending closed
    // quote: req.body.price
    // contractor: req.body.contractor  // name
  });
  res.status(200).json(task);
});

//  @desc     Update task
//  @route    PUT /api/tasks/:id
//  @access   Private
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error('Task not found.');
  }

  // const user = await User.findById(req.user.id);

  if (!req.user) {
    res.status(401);
    throw new Error('User not found.');
  }

  if (task.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized.');
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTask);
});

//  @desc     Delete task
//  @route    DELETE /api/tasks/:id
//  @access   Private
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error('Task not found.');
  }

  // const user = await User.findById(req.user.id);

  if (!req.user) {
    res.status(401);
    throw new Error('User not found.');
  }

  if (task.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized.');
  }

  await task.remove();
  res.status(200).json({ id: req.params.id });
});
module.exports = {
  getTasks,
  setTask,
  updateTask,
  deleteTask,
};
