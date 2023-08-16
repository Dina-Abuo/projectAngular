import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Modules/icategory';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})

export class OrderMasterComponent implements OnInit, AfterViewInit {

  public cateogrsOfProducts: ICategory[];
  public slectedCateogryId: number = 0;
  public receivedOrderTotalPrice: number = 0;

  //clientNameInput: ElementRef = new ElementRef();
  //clientNameInput: ElementRef = {} as ElementRef();
  //clientNameInput: ElementRef |null =null;
  //clientNameInput: ElementRef | undefined = undefined;
  //clientNameInput?: ElementRef ; // optional
  @ViewChild('userName') clientNameInput!: ElementRef;
  @ViewChild(ProductsComponent) prdlistCompObj!: ProductsComponent;
  constructor() {
    this.cateogrsOfProducts = [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Phone' },
      { id: 3, name: 'Tablet' }
    ]

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.clientNameInput.nativeElement.value = "youer name "
    this.clientNameInput.nativeElement.style.border = " 2px solid red"
    console.log(this.prdlistCompObj.allOfProducts)
  }

  onTotalPriceChanged(totalPrcice: number) {
    this.receivedOrderTotalPrice = totalPrcice;
  }

  completeOrder() {
    
    this.prdlistCompObj.allOfProducts[0].quantity -= 1;
  }

}
