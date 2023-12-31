import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { APIResponseVM } from '../ViewModuls/apiresponse-vm';
@Injectable({
  providedIn: 'root'
})
export class GenericAPIHandlerService {
  httpOption;
  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: 'my-auth-token'
      })
    };
  }

  private setHeader(key: string, value: string) {
    this.httpOption.headers.set(key, value)
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

  getAll(APIRoute: string):Observable<APIResponseVM> {
    return this.httpClient.get<APIResponseVM>(`${environment}/${APIRoute}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  search(searchItems: string[]) {

  }

  getByID(id: number) {

  }

  post(newObject: any) {

  }

  put(id: number, newObject: any) {

  }

  delete(id: number) {

  }

}
