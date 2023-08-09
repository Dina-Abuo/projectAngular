import { Component } from '@angular/core';
import { StoreData } from 'src/app/ViewModuls/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  storeInfo: StoreData;
  isImageShow: boolean = true;
  constructor() {
    this.storeInfo = new StoreData('Amazon Store', 'https://fakeimg.pl/250x100/', ['Cairo', 'Alx', 'Qena'])
  }

  toggleImage() {
    this.isImageShow = !this.isImageShow;
  }
}
