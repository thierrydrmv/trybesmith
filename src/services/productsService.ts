import connection from '../models/connection';
import ProductModel from '../models/productsModel';
import Product from '../interfaces/productInterface';

class ProductService {
  public model: ProductModel;
  
  constructor() {
    this.model = new ProductModel(connection);
  }

  public async allProducts(): Promise<Product[]> {
    const products = await this.model.allProducts();
    return products;
  }

  public async newProduct(product: Product): Promise<Product> {
    const newProduct = await this.model.create(product);
    return newProduct;
  }
}

export default ProductService;