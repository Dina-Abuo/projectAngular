import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Modules/icategory';
import { Iproduct } from 'src/app/Modules/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent implements OnInit {
  cateogrsOfProducts: ICategory[];
  newprd: Iproduct = {} as Iproduct;
  constructor(private productService: ProductsService,
    private router: Router) {
    this.cateogrsOfProducts = [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Phone' },
      { id: 3, name: 'Tablet' }
    ]
  }
  ngOnInit(): void {

  }
  addproduct() {
    // const prd: Iproduct = {
    //   id: 200,
    //   name: 'new tablet',
    //   price: 100,
    //   quantity: 10,
    //   cateogryId: 2,
    //   img: ' '
    // }
    const observer = {
      next: (prd: Iproduct) => {
        alert('product added succeddfuly ')//not recommended
        //use instead  Toast,BS alert, (snackbar:https://material.angular.io/component)
        this.router.navigateByUrl('/product')

      },
      error: (err: Error) => {
        // console.log(err.message)
        alert(err.message)

      }
    }
    this.productService.addProduct(this.newprd).subscribe(observer)

  }




}
