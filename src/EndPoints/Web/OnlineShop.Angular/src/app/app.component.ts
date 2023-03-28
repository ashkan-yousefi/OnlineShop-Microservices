import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ICategory } from 'src/Interfaces/ICategory';
import { IProduct } from '../Interfaces/IProduct';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../assets/shop/css/media-queries.css']
})
export class AppComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

  title = 'OnlineShop';
}
