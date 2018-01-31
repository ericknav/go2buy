import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseProvider } from '../../helpers/base-provider';

@Injectable()
export class CategoryProvider extends BaseProvider {
  constructor(protected http: Http) { 
    super(http,"categoryList");
  }
}
