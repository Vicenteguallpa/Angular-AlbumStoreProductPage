import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  private _albumUrl: string = '../assets/album.json';

  constructor(private _http: HttpClient) { }

  getAlbum(id: Number) {
    return this._http.get(this._albumUrl);
  }

}
