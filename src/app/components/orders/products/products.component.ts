import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DiscountOffers } from 'src/app/Modules/discount-offers';
import { ICategory } from 'src/app/Modules/icategory';
import { Iproduct } from 'src/app/Modules/iproduct';
import { IUsers } from 'src/app/Modules/iusers';
import { StaticProductsService } from 'src/app/Services/static-products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges {

  public discountOffersEnum = DiscountOffers;
  public DiscountOffers = DiscountOffers.SecondOffer;



  public prodListOfCat: Iproduct[] = [];

  public allTotalPrice: number = 0;

  @Output() TotalPriceChange: EventEmitter<number>;
  @Input() sentCateogryId: number = 0;

  constructor(private staticProcductService: StaticProductsService, private router: Router) {

    this.TotalPriceChange = new EventEmitter<number>;

  }
  ngOnInit(): void {
    this.prodListOfCat = this.staticProcductService.getAllProducts()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.prodListOfCat = this.staticProcductService.getProductsByCateogryId(this.sentCateogryId)
  }
  ;



  buyProduct(prodPrice: number, count: string, prodQuantity: number) {
    // طرق تحويل السترنج لرقم
    // this.allTotalPrice = parseInt(count) + 10
    // this.allTotalPrice = Number(count) + 10;
    this.allTotalPrice += +count * prodPrice;

    prodQuantity += 1;
    // Execute Event
    this.TotalPriceChange.emit(this.allTotalPrice)

  }

  openProductDetalis(prdId: number) {
    // this.router.navigateByUrl('/product'+prdId)

    this.router.navigate(['/product', prdId]);

  }

  ProdtrackByFun(index: number, prd: Iproduct): number {
    return prd.id;
  }

}
