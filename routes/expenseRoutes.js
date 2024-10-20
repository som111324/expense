const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const expenseController = require('../controllers/expenseController');

router.post('/add-expense', auth, expenseController.addExpense);
router.get('/expenses', auth, expenseController.getAllExpenses);

module.exports = router;
