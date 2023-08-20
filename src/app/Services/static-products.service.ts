import { Injectable } from '@angular/core';
import { Iproduct } from '../Modules/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {

  private allOfProducts: Iproduct[];

  constructor() {

    this.allOfProducts = [
      { id: 50000, name: 'Laptop', quantity: 0, price: 10000000000, img: 'https://th.bing.com/th/id/OIP.X8KU3mfmKx2t8wS2lDxYbAHaHa?pid=ImgDet&rs=1', cateogryId: 1 },
      { id: 40000, name: "Laptop", quantity: 1, price: 3007780, img: 'https://th.bing.com/th/id/OIP.pRGXh8ZLK9l3EwvaUu5DdwAAAA?pid=ImgDet&w=474&h=474&rs=1', cateogryId: 1 },
      { id: 10, name: 'Phone', quantity: 73, price: 3000, img: 'https://th.bing.com/th/id/R.d8b2c2fc8b2b74ecb1e7ef82406df561?rik=uHl3bANypirsig&pid=ImgRaw&r=0', cateogryId: 2 },
      { id: 40, name: "Phone", quantity: 0, price: 40.5, img: 'https://th.bing.com/th/id/OIP.HrUzLHL4l6ObLAadUo1QHQHaHa?pid=ImgDet&rs=1', cateogryId: 2 },
      { id: 190, name: 'Tablet', quantity: 2, price: 123459, img: 'https://th.bing.com/th/id/R.d3ebb68104bfe5d3fc6bcd115e3bd1c3?rik=tPeyL0%2fku8SgNQ&riu=http%3a%2f%2fwww.bhphotovideo.com%2fimages%2fimages2500x2500%2fsamsung_sm_t713nzkexar_32gb_galaxy_tab_s2_1245718.jpg&ehk=90XyuftAfiHaJdx2eGRfVDO3QeG6mIi%2f3sbJMGcuM6g%3d&risl=&pid=ImgRaw&r=0', cateogryId: 3 },
      { id: 4099, name: "Tablet", quantity: 30, price: 765435, img: 'https://th.bing.com/th/id/R.aa892f524086b53118f0f5dce0572b90?rik=gzBJwRR%2byHQxvA&riu=http%3a%2f%2fimages.fonearena.com%2fblog%2fwp-content%2fuploads%2f2015%2f11%2fXiaomi-Mi-Pad-21.jpg&ehk=J6T0f3g3JlzhZ1DUIfcVG7KxNh0QOIE%2fblWMy8XelVY%3d&risl=&pid=ImgRaw&r=0', cateogryId: 3 },
    ];
  }


  getAllProducts(): Iproduct[] {
    return this.allOfProducts
  }



  getProductsByCateogryId(cID: number): Iproduct[] {
    if (cID == 0) {
      return this.allOfProducts
    }
    else {
      return this.allOfProducts.filter(product => product.cateogryId == cID)
    }
  }


  getProductsById(pID: number): Iproduct | null {
    let foundProduct = this.allOfProducts.find(prd => prd.id == pID);
    return foundProduct ? foundProduct : null
  }

  addNewProduct(prd: Iproduct) {
    this.allOfProducts.push(prd);
  }

  getPrdIDs(): number[] {
    let prodIDs: number[] = this.allOfProducts.map(prd => prd.id)
    return prodIDs;
  }









}
