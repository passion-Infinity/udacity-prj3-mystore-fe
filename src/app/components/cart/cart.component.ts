import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/cart.model';
import { Checkout } from 'src/app/models/checkout.model';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  fullName: string | any = null;
  address: string | any = null;
  creditCard: string | any = null;
  cartList: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private checkoutService: CheckoutService, private router: Router) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getCart();
    this.total = Math.round(this.cartService.getTotal() * 100) / 100;
  }

  onSubmit() {
    const model: Checkout = {
      name: this.fullName,
      address: this.address,
      creditCard: this.creditCard,
      total: this.cartService.getTotal()
    }
    this.checkoutService.checkout$.next(model);
    this.router.navigate(['/checkout']);
    this.cartService.clearCart();
  }

  onChangeQuantit(cartItem: CartItem) {
    this.cartService.updateCartItem(cartItem);
    this.total = Math.round(this.cartService.getTotal() * 100) / 100;
  }

}
