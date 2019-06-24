import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent implements OnInit {

  private products:IProduct[];
  private headElements = ['Product ID','Product Name'];
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProductList().subscribe(data=>this.products=data);
  }
}
