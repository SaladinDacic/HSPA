import { HousingService } from './../../services/housing.service';
import { Property } from './../../model/property';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId: number;
  property = new Property();


  constructor(private route: ActivatedRoute, private router: Router, private housingService: HousingService) { }



  ngOnInit(): void {
    this.propertyId = +this.route.snapshot.params["id"];

    this.route.params.subscribe(
      (params) =>{
        this.propertyId = +params["id"];
        this.housingService.getProperty(this.propertyId).subscribe(
          (data: Property)=>{
            this.property = data;
          }

          /* data => {
            this.property.Name = data.Name;
            this.property.BHK = data.BHK;
            this.property.PType = data.PType;
            this.property.Price = data.Price;
            this.property.City = data.City;
            this.property.BuiltArea = data.BuiltArea;
            this.property.FType = data.FType;
            this.property.CarpetArea = data.CarpetArea;
          } */
        )
      }
    )

  }



}
