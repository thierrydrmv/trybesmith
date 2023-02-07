import { Router } from 'express';
import ProductsController from '../controllers/productsController';

const router = Router();

const productsController = new ProductsController();

router.get('/products', productsController.allProducts);

router.post('/products', productsController.newProduct);

export default router;