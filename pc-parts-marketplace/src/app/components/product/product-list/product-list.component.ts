import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'RTX 3070', price: 450, condition: 'Used', category: 'GPU' },
    { id: 2, name: 'Ryzen 5 5600X', price: 180, condition: 'New', category: 'CPU' },
    { id: 3, name: '16GB DDR4 RAM', price: 70, condition: 'Used', category: 'Memory' }
  ];
}
