import Product, { find, findById } from '../models/Product';

export async function getAllProducts(req, res) {
    const products = await find({});
    res.json(products);
}

export async function getProductById(req, res) {
    const product = await findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
}

export async function createProduct(req, res) {
    const product = new Product(req.body);
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
}

export async function updateProduct(req, res) {
    const product = await findById(req.params.id);
    if (product) {
        Object.assign(product, req.body);
        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
}

export async function deleteProduct(req, res) {
    const product = await findById(req.params.id);
    if (product) {
        await product.remove();
        res.json({ message: 'Product removed' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
}