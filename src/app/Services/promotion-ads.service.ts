import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {

  private adsList: string[]
  constructor() {
    this.adsList = [
      'Big Discounts',
      'Sale Up or 50%',
      'Check our white Friday offers',
      // '',
      'Special white Friday up to 70%'
    ]
  }


  getScheduleAds(intervalInSeconds: number): Observable<string> {
    return new Observable<string>((observer) => {
      let counter = 0;
      let adsTimer = setInterval(() => {
        console.log('in interval')
        if (counter == this.adsList.length) {
          observer.complete();
        } if (this.adsList[counter] == '') {
          observer.error('Error :Empty');
        }
        observer.next(this.adsList[counter]);
        counter++;
      }, intervalInSeconds * 1000);
      return {
        unsubscribe() {
          // will be called :
          // 1-error
          // 2-complete
          // 3-unsubscribe()
          clearInterval(adsTimer)
          console.log('in obs nusubscribe ........')
        }
      }
    });
  }

  getSerialAds(): Observable<string> {
    // return of('ad1', 'ad2', 'ad3');
    return from(this.adsList);

  }

}




