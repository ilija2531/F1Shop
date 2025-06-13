const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const order = new Order(req.body);
  const created = await order.save();
  res.status(201).json(created);
};

exports.getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.params.userId }).populate('orderItems.product');
  res.json(orders);
};

exports.getAllOrders = async (req, res) => {
  const orders = await Order.find().populate('user', 'name email');
  res.json(orders);
};

exports.updateOrderStatus = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    const updated = await order.save();
    res.json(updated);
  } else res.status(404).json({ message: 'Order not found' });
};
