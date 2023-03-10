import { Pool } from 'mysql2/promise';
import Order from '../interfaces/orderInterface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async allOrders(): Promise<Order[]> {
    const orders = await this.connection.execute(
      `SELECT o.id, o.user_id userId, JSON_ARRAYAGG(p.id) productsIds
      FROM Trybesmith.orders o
      JOIN Trybesmith.products p on o.id = p.order_id
      GROUP BY o.id`,
    );
    const [rows] = orders;
    return rows as Order[];
  }

  // public async newOrder(): Promise<Order> {
  // }
}