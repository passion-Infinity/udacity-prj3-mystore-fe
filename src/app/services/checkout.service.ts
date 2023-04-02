import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Checkout } from '../models/checkout.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  checkout$ = new BehaviorSubject<Checkout | any>(null);

  constructor() { }

}
