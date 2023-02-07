import { Request, Response } from 'express';
import ProductService from '../services/productsService';

class ProductsController {
  constructor(private productService = new ProductService()) { }

  public allProducts = async (req: Request, res: Response) => {
    const products = await this.productService.allProducts();
    return res.status(200).json(products);
  };

  public newProduct = async (req: Request, res: Response) => {
    const product = await this.productService.newProduct(req.body);
    return res.status(201).json(product);
  };
}

export default ProductsController;