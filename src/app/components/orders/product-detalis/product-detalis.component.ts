import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Modules/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-product-detalis',
  templateUrl: './product-detalis.component.html',
  styleUrls: ['./product-detalis.component.scss']
})
export class ProductDetalisComponent implements OnInit {

  currPrdId: number = 0;
  product: Iproduct | null = null;
  public date = new Date();
  productIdArr: number[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private Router: Router,
    private prdService: StaticProductsService,
    private location: Location
  ) {

  }
  ngOnInit(): void {

    this.productIdArr = this.prdService.getPrdIDs()
    console.log('onInit..........')

    //when navigate to same component , will not reload component
    //event if there's chanes in the route parmeters.

    // this.currPrdId = Number(this.activatedRoute.snapshot.paramMap.get('pid'))
    // this.product = this.prdService.getProductsById(this.currPrdId);

    this.activatedRoute.paramMap.subscribe((paraMap) => {
      this.currPrdId = Number(paraMap.get('pid'))
      this.product = this.prdService.getProductsById(this.currPrdId);
    })
  }
  goBack() {
    this.location.back()
  }



  previousProd() {
    let currIndex = this.productIdArr.findIndex((elem) => elem == this.currPrdId)
    let prevProdID;
    if (currIndex > 0) {
      prevProdID = this.productIdArr[currIndex - 1];
      this.Router.navigate(['/product', prevProdID]);

    }
  }


  nextProd() {
    let currIndex = this.productIdArr.findIndex((elem) => elem == this.currPrdId)
    let nextProdID;
    if (currIndex < this.productIdArr.length) {
      nextProdID = this.productIdArr[currIndex + 1];
      this.Router.navigate(['/product', nextProdID]);
    }
  }


}
