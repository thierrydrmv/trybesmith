import { Router } from 'express';
import OrderController from '../controllers/ordersController';
// import auth from '../middleware/validateJWT';

const router = Router();

const orderController = new OrderController();

router.get('/orders', orderController.allOrders);

// router.post('/orders', auth, orderController.newOrder);

export default router;