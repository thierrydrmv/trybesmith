import connection from '../models/connection';
import OrderModel from '../models/ordersModel';
import Order from '../interfaces/orderInterface';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async AllOrders(): Promise<Order[]> {
    const orders = await this.model.allOrders();
    return orders;
  }
}

export default OrderService;