import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Subscription } from 'rxjs/Subscription';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  me: any = {};
  meSub: Subscription;

  constructor(private homService: HomeService, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();
    this.meSub = this.homService.getUserInfo().subscribe((data) => {
      this.me = data;
      this.spinnerService.hide();
    });
  }

  ngOnDestroy() {
    this.meSub.unsubscribe();
  }

}
