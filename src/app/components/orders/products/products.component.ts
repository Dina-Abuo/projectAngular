import { Component } from '@angular/core';
import { DiscountOffers } from 'src/app/Modules/discount-offers';
import { ICategory } from 'src/app/Modules/icategory';
import { Iproduct } from 'src/app/Modules/iproduct';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  public discountOffersEnum = DiscountOffers;
  public DiscountOffers = DiscountOffers.SecondOffer;

  public slectedCateogryId: Number = 0;
  public ClientName: string = ''
  public allOfProducts: Iproduct[];
  public cateogrsOfProducts: ICategory[];
  public IsPurshased: boolean = false;
  public allTotalPrice: number = 0;
  public expression: string = 'green'

  constructor() {


    this.cateogrsOfProducts = [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Phone' },
      { id: 3, name: 'Tablet' }

    ]
    this.allOfProducts = [
      { id: 10, name: 'Laptop', quantity: 0, price: 10000000000, img: 'https://th.bing.com/th/id/OIP.X8KU3mfmKx2t8wS2lDxYbAHaHa?pid=ImgDet&rs=1', cateogryId: 1 },
      { id: 40, name: "Laptop", quantity: 1, price: 3007780, img: 'https://th.bing.com/th/id/OIP.pRGXh8ZLK9l3EwvaUu5DdwAAAA?pid=ImgDet&w=474&h=474&rs=1', cateogryId: 1 },
      { id: 10, name: 'Phone', quantity: 73, price: 3000, img: 'https://th.bing.com/th/id/R.d8b2c2fc8b2b74ecb1e7ef82406df561?rik=uHl3bANypirsig&pid=ImgRaw&r=0', cateogryId: 2 },
      { id: 40, name: "Phone", quantity: 0, price: 40.5, img: 'https://th.bing.com/th/id/OIP.HrUzLHL4l6ObLAadUo1QHQHaHa?pid=ImgDet&rs=1', cateogryId: 2 },
      { id: 10, name: 'Tablet', quantity: 2, price: 123459, img: 'https://th.bing.com/th/id/R.d3ebb68104bfe5d3fc6bcd115e3bd1c3?rik=tPeyL0%2fku8SgNQ&riu=http%3a%2f%2fwww.bhphotovideo.com%2fimages%2fimages2500x2500%2fsamsung_sm_t713nzkexar_32gb_galaxy_tab_s2_1245718.jpg&ehk=90XyuftAfiHaJdx2eGRfVDO3QeG6mIi%2f3sbJMGcuM6g%3d&risl=&pid=ImgRaw&r=0', cateogryId: 3 },
      { id: 40, name: "Tablet", quantity: 30, price: 765435, img: 'https://th.bing.com/th/id/R.aa892f524086b53118f0f5dce0572b90?rik=gzBJwRR%2byHQxvA&riu=http%3a%2f%2fimages.fonearena.com%2fblog%2fwp-content%2fuploads%2f2015%2f11%2fXiaomi-Mi-Pad-21.jpg&ehk=J6T0f3g3JlzhZ1DUIfcVG7KxNh0QOIE%2fblWMy8XelVY%3d&risl=&pid=ImgRaw&r=0', cateogryId: 3 },
    ];

  };

  printVlaue() {
    console.log(this.ClientName)
  }

  // buyProduct() {
  //   this.IsPurshased = !this.IsPurshased
  // }

  buyProduct(prodPrice: number, count: string) {

    // طرق تحويل السترنج لرقم
    // this.allTotalPrice = parseInt(count) + 10
    // this.allTotalPrice = Number(count) + 10;
    this.allTotalPrice += +count * prodPrice;

  }

  changeCat() {
    this.slectedCateogryId = 1;
  }


  ProdtrackByFun(index: number, prd: Iproduct): number {
    return prd.id;
  }

}
