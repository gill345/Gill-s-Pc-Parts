import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-my-listings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-listings.component.html'
})
export class MyListingsComponent {
  listings: Product[] = [
    { id: 1, name: 'RTX 3070', price: 450, category: 'GPU', condition: 'Used', description: 'Great condition', imageUrl: '/assets/mock-gpu.png' },
    { id: 2, name: 'Ryzen 5 5600X', price: 180, category: 'CPU', condition: 'New', description: 'Boxed', imageUrl: '/assets/mock-cpu.png' }
  ];
}
