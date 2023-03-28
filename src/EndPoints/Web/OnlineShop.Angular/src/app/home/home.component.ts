import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { AfterViewInit, OnInit } from '@angular/core';
import { IProduct } from 'src/Interfaces/IProduct';
import { ICategory } from 'src/Interfaces/ICategory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit{

  constructor(private _products: ServiceService) {

  }
  Products: IProduct[] = [];
  Categories: ICategory[] = [];
  SubCategories: ICategory[] = [];

  ngOnInit(): void {
    this._products.GetProducts().subscribe(Products => this.Products = Products);
    this._products.GetAllCategories().subscribe(category => this.Categories = category.filter(item => item.parentId == null));
    this._products.GetAllCategories().subscribe(subcategory => this.SubCategories = subcategory.filter(item2 => item2.parentId == "1"));
  }
}
