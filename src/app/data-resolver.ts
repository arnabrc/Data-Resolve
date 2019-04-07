import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppServiceService } from './app-service.service';

@Injectable()
export class DataResolver implements Resolve<Observable<string>> {

  constructor(public appService: AppServiceService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.appService.getJSON();
  }
}
