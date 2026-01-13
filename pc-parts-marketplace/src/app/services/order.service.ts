import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';

export interface Order {
  id: number;
  items: CartItem[];
  date: string;
  total: number;
}

@Injectable({ providedIn: 'root' })
export class OrderService {
  private orders: Order[] = [];

  constructor() {}

  placeOrder(cartItems: CartItem[]): Order {
    const newOrder: Order = {
      id: this.orders.length + 1,
      items: cartItems,
      date: new Date().toISOString(),
      total: cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  getUserOrders(): Order[] {
    return this.orders;
  }
}
