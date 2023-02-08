import { Router } from 'express';
import OrderController from '../controllers/ordersController';

const router = Router();

const orderController = new OrderController();

router.get('/orders', orderController.allOrders);

export default router;