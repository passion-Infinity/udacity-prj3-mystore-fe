import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Checkout } from 'src/app/models/checkout.model';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  data: Checkout | any;
  destroy$ = new Subject();

  constructor(private checkoutService: CheckoutService, private router: Router) { }

  ngOnInit(): void {
    this.checkoutService.checkout$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        if (data) {
          this.data = data;
        } else {
          this.router.navigate(['/']);
        }
      })
  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }

}
