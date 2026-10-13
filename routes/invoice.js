import express from 'express';
const router = express.Router();
import InvoiceController from '../controllers/InvoiceController.js';

router.get('/:orderId/download', InvoiceController.downloadInvoice);

export default router;