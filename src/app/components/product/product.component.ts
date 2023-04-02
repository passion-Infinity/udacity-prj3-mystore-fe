import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product | any;
  @Output() addProductToCart = new EventEmitter<CartItem>();

  quantity: number = 1;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
  }

  onAddCart(product: Product) {
    const cartItem: CartItem = {
      id: product.id,
      product: product,
      quantity: this.quantity
    }
    this.addProductToCart.emit(cartItem);
  }

  goToDetail() {
    this.router.navigate(['/product-detail']);
    this.productService.productItem = this.product;
    this.productService.updateStorage();
  }

}
