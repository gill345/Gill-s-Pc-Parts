import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  condition: string;
  description: string;
  imageUrl: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  addProduct(product: Product) {
    product.id = this.products.length + 1; 
    this.products.push(product);
  }

  getUserProducts(userId: number): Product[] {
    
    return this.products;
  }
}
