const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ message: 'Product not found' });
};

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  const created = await product.save();
  res.status(201).json(created);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    Object.assign(product, req.body);
    const updated = await product.save();
    res.json(updated);
  } else res.status(404).json({ message: 'Product not found' });
};

exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else res.status(404).json({ message: 'Product not found' });
};
