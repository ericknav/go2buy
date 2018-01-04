//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/*
  Generated class for the CategoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryProvider {

  private url: string = "http://dummy:8080/api/v1/product";
  //private url: string = "https://restcountries.eu/rest/v2/alpha/col";
  
  //constructor(private http: HttpClient) {
  constructor(private http: Http) {
    //console.log('Hello CategoryProvider Provider');
  }

  getCategory(){
    //return this.http.get(this.url).map(res => res.json());
    return this.http.get(this.url)
    .map(this.extracData)
    //.do(this.logResponse)
    .catch(this.catchError)
    ;
  }

  private catchError(error: Response | any){
    return Observable.throw(error.json().error || "Server error.");
  }

  private logResponse(res: Response){
    console.log(res);
  }

  private extracData(res: Response){
    return res.json();
  }
}
