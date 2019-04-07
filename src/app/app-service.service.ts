import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) {
   }

    public getJSON(): Observable<any> {
      return this.http.get('./assets/data/astros.json');
  }
}
