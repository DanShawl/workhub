const express = require('express');
const router = express.Router();
const {
  getContacts,
  setContact,
  updateContact,
  deleteContact,
} = require('../controllers/contactController');

// const { protect } = require('../middleware/authMiddleware');

router.get('/', getContacts);
router.route('/').get(getContacts).post(setContact);
router.route('/:id').delete(deleteContact).put(updateContact);

module.exports = router;
