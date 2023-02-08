import { Router } from 'express';
import ProductsController from '../controllers/productsController';
import { productsAmount, productsName } from '../middleware/productsMiddleware';

const router = Router();

const productsController = new ProductsController();

router.get('/products', productsController.allProducts);

router.post(
  '/products',
  productsName,
  productsAmount,
  productsController.newProduct,
);

export default router;