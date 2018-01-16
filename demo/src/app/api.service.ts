import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  private _API = 'https://ghibliapi.herokuapp.com';

  constructor(private http: HttpClient) { }

  // GET films
  getFilms$(): Observable<any[]> {
    return this.http
      .get(`${this._API}/films`)
      .pipe(
        catchError(this._handleError)
      );
  }

  // GET people
  getPeople$(): Observable<any[]> {
    return this.http
      .get(`${this._API}/people`)
      .pipe(
        catchError(this._handleError)
      );
  }

  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    return Observable.throw(errorMsg);
  }
}
