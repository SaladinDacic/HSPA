import { IPropertyBase } from './../../model/IPropertyBase';
import { HousingService } from './../../services/housing.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<IPropertyBase>;
  SellRent = 1;
  constructor(private route:ActivatedRoute ,private housingService: HousingService) { }

  ngOnInit(): void {

    if(this.route.snapshot.url.toString()){
      this.SellRent = 2; // Means we are on rent-property URL else we are on base URL
    };
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data=> {
        this.properties = data;
        console.log(data);
        /* const newProperty = JSON.parse(localStorage.getItem('newProp'));

        if(newProperty.SellRent == this.SellRent){
          this.properties = [newProperty, ...this.properties];
        } */
      },
      error=>{
        console.log(error);
      }
    )

    /* this.http.get('data/properties.json').subscribe(
      data=>{
        this.properties = data
        console.log(data)
      }
    ) */
  }

}
