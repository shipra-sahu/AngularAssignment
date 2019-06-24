import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../IProduct';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  productId:number;
  product:IProduct=null;
  isLoaded:boolean=false
  constructor(private route:ActivatedRoute, private productService:ProductService,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>
    {
      this.productId=parseInt(params.get('id'));
      this.productService.getProductList().subscribe(data=>{
        data.forEach(element => {
          if(element.id===this.productId)
          {
            this.product=element;
          } 
        });
        this.isLoaded=true;
      });
    });
  }
}
