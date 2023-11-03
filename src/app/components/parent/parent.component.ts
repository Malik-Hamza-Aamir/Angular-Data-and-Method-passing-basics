import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  // parent data pasing to child 
  products: any[] = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
  ];
  demo: string = "hello world";

  // parent method passing to child 
  addProduct(product: any) {
    this.products.push(product);
  }

  
  constructor() {}
}
