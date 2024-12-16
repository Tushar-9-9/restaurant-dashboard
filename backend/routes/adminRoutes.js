const express = require('express');
const { createAdmin, editAdmin, getOrders } = require('../controllers/adminController');
const router = express.Router();

router.post('/create-store', createAdmin);
router.put('/edit-store/:id', editAdmin);
router.get('/orders', getOrders);

module.exports = router;
