import express from 'express';
const router = express.Router();
import CheckoutController from '../controllers/CheckoutController.js';
import { isAuthenticated } from '../middleware/auth.js';

router.get('/', isAuthenticated, CheckoutController.showCheckout);
router.post('/', isAuthenticated, CheckoutController.processCheckout);

export default router;
