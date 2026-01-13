import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // temp
    const products: Product[] = [
      { id: 1, name: 'RTX 3070', price: 450, condition: 'Used', category: 'GPU' },
      { id: 2, name: 'Ryzen 5 5600X', price: 180, condition: 'New', category: 'CPU' },
      { id: 3, name: '16GB DDR4 RAM', price: 70, condition: 'Used', category: 'Memory' }
    ];

    this.product = products.find(p => p.id === id);
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
      alert(`${this.product.name} added to cart!`);
    }
  }
}
