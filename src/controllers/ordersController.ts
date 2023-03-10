import { Request, Response } from 'express';
import OrderService from '../services/ordersService';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public allOrders = async (_req: Request, res: Response) => {
    const orders = await this.orderService.AllOrders();
    return res.status(200).json(orders);
  };

  // public newOrder = async (req: Request, res: Response) => {
  //   const order = await this.orderService.newOrder(req.body);
  //   return res.status(201).json(order);
  // };
}

export default OrderController;