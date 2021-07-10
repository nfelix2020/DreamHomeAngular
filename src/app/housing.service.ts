import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  private url= "/assets/data/properties.json";

  constructor(private http:HttpClient) { }


getAllProperties(){
  return this.http.get(this.url)
}

}
