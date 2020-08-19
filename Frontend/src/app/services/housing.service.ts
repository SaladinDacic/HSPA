import { IProperty } from './../property/Iproperty.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent: number):Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map(data=>{
        const propertiesArray: Array<IProperty> = [];
        for (const i in data){
          if(data.hasOwnProperty(i) && data[i].SellRent === SellRent ){
            propertiesArray.push(data[i])
          }
        }
        return propertiesArray;
      })
    )
  }
}
