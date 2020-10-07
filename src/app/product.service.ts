import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
@Injectable()
export class ProductService {
  private _albumUrl: "../assets//album.json";
  constructor(private _http: Http) {}

  getAlbum(id: number): void {
    this._http.get(this._albumUrl).then(response => response.json())
     
  }}