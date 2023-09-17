import { Injectable } from '@angular/core';
import { Iproduct } from '../Modules/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpOption;
  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: 'my-auth-token'
      })
    };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }


  getAllProducts(): Observable<Iproduct[]> {
    // Repository  Desgin pattern
    // return this.genericAPIHandler.getAll('/product').pipe(
    //   map((APIResponseVM: APIResponseVM) => {
    //     return APIResponseVM.data
    //   })
    // )
    return this.httpClient.get<Iproduct[]>(`${environment.APIURL}/product`)
  }

  getProductCatID(catID: number): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${environment.APIURL}/product?cateogryId=${catID}`)

  }

  getProuctByID(prdID: number): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(`${environment.APIURL}/product/${prdID}`)

  }

  addProduct(newPrd: Iproduct): Observable<Iproduct> {
    // return this.httpClient.post<Iproduct>(`${environment.APIURL}/product`, JSON.stringify(newPrd), this.httpOption)
    // return this.httpClient.post<Iproduct>(`${environment.APIURL}/product`, JSON.stringify(newPrd), this.httpOption).pipe(
    //   retry(2),
    //   catchError((e) => {
    //     console.log(e.status, e.error);
    //     return throwError(() => new Error('post Error'))
    //   })
    // )
    return this.httpClient.post<Iproduct>(`${environment.APIURL}/product`, JSON.stringify(newPrd), this.httpOption)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  updateProduct(prdID: number, updatePrd: Iproduct) {

  }
  deleteProduct(prdID: number) {

  }



}
