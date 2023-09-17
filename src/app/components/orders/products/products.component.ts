import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DiscountOffers } from 'src/app/Modules/discount-offers';
import { ICategory } from 'src/app/Modules/icategory';
import { Iproduct } from 'src/app/Modules/iproduct';
import { IUsers } from 'src/app/Modules/iusers';
import { ProductsService } from 'src/app/Services/products.service';
import { StaticProductsService } from 'src/app/Services/static-products.service';
import { ShoppingCartItems } from 'src/app/ViewModuls/shopping-cart-items';
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

  // @Output() TotalPriceChange: EventEmitter<number>;
  @Output() ItemBought: EventEmitter<ShoppingCartItems>
  @Input() sentCateogryId: number = 0;

  constructor(
    // private staticProcductService: StaticProductsService,
    private ProcductService: ProductsService,
    private router: Router) {

    this.ItemBought = new EventEmitter<ShoppingCartItems>
    // this.TotalPriceChange = new EventEmitter<number>;

  }
  ngOnInit(): void {
    // this.prodListOfCat = this.staticProcductService.getAllProducts()

    this.ProcductService.getAllProducts().subscribe({
      next: (p) => {
        // if (this.sentCateogryId == 0)
        this.prodListOfCat = p
      },
      error: (e) => { console.log(e) }

    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.prodListOfCat = this.staticProcductService.getProductsByCateogryId(this.sentCateogryId)
    this.ProcductService.getProductCatID(this.sentCateogryId).subscribe((productList) => {
      if (this.sentCateogryId == 0) {
        this.ProcductService.getAllProducts().subscribe({
          next: (p) => {
            // if (this.sentCateogryId == 0)
            this.prodListOfCat = p
          },
          error: (e) => { console.log(e) }

        })
      }
      else
        this.prodListOfCat = productList;
    })
  }
  ;



  buyProduct(prodPrice: number, count: string, prodQuantity: number) {
    // طرق تحويل السترنج لرقم
    // this.allTotalPrice = parseInt(count) + 10
    // this.allTotalPrice = Number(count) + 10;
    this.allTotalPrice += +count * prodPrice;

    prodQuantity += 1;


    // Execute Event
    // this.TotalPriceChange.emit(this.allTotalPrice)
    this.ItemBought.emit()

  }

  openProductDetalis(prdId: number) {
    // this.router.navigateByUrl('/product'+prdId)

    this.router.navigate(['/product', prdId]);

  }

  ProdtrackByFun(index: number, prd: Iproduct): number {
    return prd.id;
  }

}
