import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, catchError, filter, map, retry } from 'rxjs';
import { PromotionAdsService } from 'src/app/Services/promotion-ads.service';
import { StoreData } from 'src/app/ViewModuls/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  // private subscribation!: Subscription;
  private subscribation!: Subscription[];
  storeInfo: StoreData;
  isImageShow: boolean = true;
  constructor(private promoAds: PromotionAdsService) {
    this.storeInfo = new StoreData('Amazon Store', 'https://picsum.photos/seed/picsum/300/300', ['Cairo', 'Alx', 'Qena'])
  }

  ngOnInit(): void {


    let observe = {
      next: (data: string) => { console.log(data) },
      error: (err: string) => { console.log(err) },
      complete: () => { console.log('Ads finished') }
    };

    // let filterObservable = this.promoAds.getScheduleAds(3).pipe(
    // retry(3)
    // );

    
    let filterObservable = this.promoAds.getScheduleAds(3).pipe(
      filter(ad => ad.includes("white Friday")),
      map(ad => "Ad : " + ad),
    );
    let adsSubscribation = filterObservable.subscribe(observe)
    this.subscribation.push(adsSubscribation)

    //  adsSubscribation.unsubscribe();

    // this.promoAds.getScheduleAds(3).subscribe(
    //   (data: string) => { console.log(data) },
    // )


  }

  toggleImage() {
    this.isImageShow = !this.isImageShow;
  }

  ngOnDestroy(): void {
    // this.subscribation.unsubscribe()

    for (let i of this.subscribation) {
      i.unsubscribe();
    }
  }
}
