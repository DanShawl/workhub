const express = require('express');
const router = express.Router();
const {
  getWorkOrders,
  setWorkOrder,
} = require('../controllers/workOrderController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getWorkOrders).post(protect, setWorkOrder);
// router.route('/:id').delete(protect, deleteTask).put(protect, updateTask);

module.exports = router;
