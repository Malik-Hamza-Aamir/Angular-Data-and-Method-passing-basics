import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  @Input() products: any;
  @Input() demo: any;
  @Input() addProduct?: (product: any) => void;
  
  constructor() {}

  onAddProduct(product: any) {
    if (this.addProduct) {
      this.addProduct(product);
    } else {
      console.log('addProduct is not defined');
    }
  }
}
