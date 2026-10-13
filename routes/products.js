import express from 'express';
const router = express.Router();
import ProductController from '../controllers/ProductController.js';

router.get('/', ProductController.getAllProducts);
router.get('/search', ProductController.searchProducts);
router.get('/category/:categoryId', ProductController.getByCategory);
router.get('/:id', ProductController.getProductDetail);

export default router;
