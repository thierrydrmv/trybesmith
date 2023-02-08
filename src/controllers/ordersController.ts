import { Request, Response } from 'express';
import OrderService from '../services/ordersService';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public allOrders = async (_req: Request, res: Response) => {
    const orders = await this.orderService.AllOrders();
    return res.status(200).json(orders);
  };
}

export default OrderController;