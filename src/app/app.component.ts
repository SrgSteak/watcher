import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from './service/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscription: Subscription; // always keep track of your subscriptions!
  topAnime; // this is where we keep our data from the api

  constructor(private apiService: ApiService) { }

  // subscribe to the API and put the "top" data to our property
  ngOnInit() {
    this.subscription = this.apiService.getTopAnime().subscribe((data) => {
      this.topAnime = data.top;
    });
  }

  // always unsubscribe all your subscription!
  ngOnDestroy() {
    if (this.subscription) { this.subscription.unsubscribe(); }
  }
}
