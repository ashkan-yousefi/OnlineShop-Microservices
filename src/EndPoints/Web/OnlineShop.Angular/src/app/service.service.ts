import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/Interfaces/ICategory';
import { IProduct } from '../Interfaces/IProduct';

@Injectable({
   providedIn: 'root'
})
export class ServiceService {
  private urlGetAllProducts: string = 'http://localhost:5010/Product/GetAllProducts';
  private urlGetAllCategories: string = 'http://localhost:5010/Category/GetAllCategory';
  ///
  constructor(private http: HttpClient) {

  }


  public GetProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.urlGetAllProducts);
  }

  public GetAllCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.urlGetAllCategories);
  }
}
