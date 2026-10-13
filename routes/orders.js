import express from 'express';
const router = express.Router();
import OrderController  from '../controllers/OrderController.js';
import { isAuthenticated } from '../middleware/auth.js';

router.get('/', isAuthenticated, OrderController.getUserOrders);
router.get('/:orderId', isAuthenticated, OrderController.getOrderDetail);
router.post('/:orderId/cancel', isAuthenticated, OrderController.cancelOrder);
export default router;
