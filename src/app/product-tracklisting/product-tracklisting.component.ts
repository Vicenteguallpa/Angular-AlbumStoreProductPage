import { Component, OnInit } from '@angular/core';

import { AlbumInfo } from '../album-info';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {
  albumInfo: AlbumInfo;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbumInfo(1).subscribe(
      response => this.albumInfo = response
    );
  }

}
