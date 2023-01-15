import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITEM } from '../defibrillateurs/defibrillateurs';

@Injectable({
  providedIn: 'root'
})
export class DefibrillateurDataService {
  private _url: string= "../../assets/data.json";

  constructor(private http: HttpClient) { }

  getData(): Observable<ITEM[]> {
    return this.http.get<ITEM[]>(this._url)
  }
}
