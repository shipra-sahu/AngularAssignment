import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './product/IProduct';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _urlProductList:string='/assets/data/productlist.json';
  constructor(private http:HttpClient) { }
  public getProductList():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this._urlProductList);
  }
}
