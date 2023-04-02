import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];
  constructor() {
    this.getCartFromStorage();
  }

  private getCartFromStorage() {
    this.cart = JSON.parse(window.localStorage.getItem('cart') || '[]');
  }

  updateStorage() {
    window.localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  clearCart() {
    window.localStorage.removeItem('cart');
    this.cart = [];
  }

  getCart() {
    return this.cart;
  }

  updateCartItem(cartItem: CartItem, isAddToCart: boolean = false) {
    let idx = -1;
    if (cartItem) {
      const findItem = this.cart.find((item, index) => {
        if (item.id === cartItem.id) {
          idx = index;
          return item;
        }
        return null;
      });

      if (idx === -1 && isAddToCart) { // Add new
        this.cart.push(cartItem);
        window.alert('Add to cart!!!');
      } else if (isAddToCart) { // Add new but it has been in cart so that updating quantity
        cartItem.quantity += findItem && findItem.quantity || 0;
        this.cart.splice(idx, 1, cartItem);
        window.alert('Add to cart!!!');
      } else if (cartItem.quantity) { // update quantity
        this.cart.splice(idx, 1, cartItem);
      } else { // remove if quantity = 0
        this.cart.splice(idx, 1);
        window.alert('Remove from cart!!!');
      }

      this.updateStorage();
    }
  }

  getTotal() {
    return this.cart.reduce((acc, value) => {
      return acc + value.quantity * value.product.price;
    }, 0);
  }
}
