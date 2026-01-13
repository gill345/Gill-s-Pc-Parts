import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-sell-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sell-product.component.html',
  styleUrls: ['./sell-product.component.css']
})
export class SellProductComponent {
  product: Partial<Product> = {};

  conditions = ['New', 'Used', 'Refurbished'];
  categories = ['CPU', 'GPU', 'Memory', 'Storage', 'Motherboard', 'PSU', 'Case', 'Other'];

  selectedFile?: File;

onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.selectedFile = input.files[0];
  }
}


submitProduct() {
  const formData = new FormData();
  formData.append('name', this.product.name!);
  formData.append('price', this.product.price!.toString());
  formData.append('condition', this.product.condition!);
  formData.append('category', this.product.category!);
  formData.append('description', this.product.description || '');
  
  if (this.selectedFile) {
    formData.append('image', this.selectedFile);
  }

  console.log('FormData ready to send:', formData);

  
  // this.http.post('api/products', formData).subscribe(...)
}

}
