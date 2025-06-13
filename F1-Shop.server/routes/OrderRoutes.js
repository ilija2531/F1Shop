const express = require('express');
const router = express.Router();
const {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus
} = require('../controllers/OrderController');

router.post('/', createOrder);
router.get('/myorders/:userId', getMyOrders);
router.get('/', getAllOrders); 
router.put('/:id/status', updateOrderStatus);

module.exports = router;
