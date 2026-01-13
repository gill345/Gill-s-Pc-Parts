import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../../models/cart-item.model';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-orders.component.html'
})
export class MyOrdersComponent {
  orders: CartItem[] = [
    { product: { id: 3, name: '16GB DDR4 RAM', price: 70, category: 'Memory', condition: 'Used', description: 'Good speed', imageUrl: '/assets/mock-ram.png' }, quantity: 1 },
    { product: { id: 1, name: 'RTX 3070', price: 450, category: 'GPU', condition: 'Used', description: 'Great condition', imageUrl: '/assets/mock-gpu.png' }, quantity: 2 }
  ];
}
