import { ChangeDetectorRef, Component, OnInit, Query } from '@angular/core';
import { ICategory } from 'src/Interfaces/ICategory';
import { IProduct } from 'src/Interfaces/IProduct';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _products: ServiceService, private cdRef: ChangeDetectorRef) {
  }
  Products: IProduct[] = [];
  FProducts: IProduct[] = [];
  Categories: ICategory[] = [];
  SubCategories: ICategory[] = [];

  ngOnInit(): void {
    this._products.GetProducts().subscribe(Products => this.Products = Products);
    this._products.GetProducts().subscribe(Products => this.FProducts = Products);
    this._products.GetAllCategories().subscribe(category => this.Categories = category.filter(item => item.parentId == null));
    this._products.GetAllCategories().subscribe(subcategory => this.SubCategories = subcategory.filter(item2 => item2.parentId == "1"));
  }
  filterType = 'normal';

  filterProducts() {
    switch (this.filterType) {
      case 'newest':
        this.FProducts =this.Products.sort((a, b) => a.createDate.getTime() - b.createDate.getTime());
        break;
      case 'oldest':
        this.FProducts = this.Products.sort((a, b) => b.createDate.getTime() - a.createDate.getTime());
        break;
      case 'normal':
        this.FProducts = this.Products;
        break;
      case 'price-desc':
        this.FProducts = this.Products.sort((a, b) => b.price - a.price);
        break;
      case 'price-asc':
        this.FProducts = this.Products.sort((a, b) => a.price - b.price);
        break;
      default:
        this.FProducts = this.Products
        break;
    }
  }
}