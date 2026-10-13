import express from 'express';
const router = express.Router();
import CartController from '../controllers/CartController.js';

router.get('/', CartController.showCart);
router.get('/count', CartController.getCartCount);
router.post('/add', CartController.addToCart);
router.post('/update', CartController.updateCart);
router.post('/remove', CartController.removeFromCart);
router.post('/clear', CartController.clearCart);

export default router;
