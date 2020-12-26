import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Album } from './album';

@Injectable()
export class ProductService {
  private _albumUrl: string = '../assets/album.json';

  constructor(private _http: HttpClient) { }

  getAlbum(id: number) : Observable<Album>{
    return this._http.get<Album>(this._albumUrl);
  }

}
