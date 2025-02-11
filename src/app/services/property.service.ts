import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor(private _http: HttpClient) {}

  //load all properties
  public properties() {
    return this._http.get(`${baseUrl}/property/`);
  }

  //add new property
  public addProperty(property: any) {
    return this._http.post(`${baseUrl}/property/`, property);
  }

  //get a property
  public getProperty(pId: any) {
    return this._http.get(`${baseUrl}/property/${pId}`);
  }

  // Get count of properties by type
  public countPropertiesByType() {
    return this._http.get(`${baseUrl}/property/countByType`);
  }

  // Get count of properties by city
  public countPropertiesByCity() {
    return this._http.get(`${baseUrl}/property/count-by-city`);
  }
}
