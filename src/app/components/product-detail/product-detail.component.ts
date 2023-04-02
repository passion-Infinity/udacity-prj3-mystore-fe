import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | any;
  @Output() addProductToCart = new EventEmitter<CartItem>();

  quantity: number = 1;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.product = this.productService.productItem;
  }

  onAddCart(product: Product) {
    const cartItem: CartItem = {
      id: product.id,
      product: product,
      quantity: this.quantity
    }
    this.cartService.updateCartItem(cartItem, true);
  }
}
