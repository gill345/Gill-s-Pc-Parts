import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  constructor() {
    
  }

ngOnInit() {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('cart');
      this.items = stored ? JSON.parse(stored) : [];
    }
  }

private isBrowser(): boolean {
  return typeof window !== 'undefined';
}

private saveToStorage(): void {
  if (this.isBrowser()) {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
}




  getItems(): CartItem[] {
    return this.items;
  }

  addToCart(product: Product): void {
    const item = this.items.find(i => i.product.id === product.id);

    if (item) {
      item.quantity++;
    } else {
      this.items.push({ product, quantity: 1 });
    }

    this.saveToStorage();
  }

  removeFromCart(productId: number): void {
    this.items = this.items.filter(i => i.product.id !== productId);
    this.saveToStorage();
  }

  clearCart(): void {
    this.items = [];
    this.saveToStorage();
  }

  getTotal(): number {
    return this.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }
}
