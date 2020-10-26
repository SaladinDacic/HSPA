import { HousingService } from './../../services/housing.service';
import { Property } from './../../model/property';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId: number;
  property = new Property();

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute, private router: Router, private housingService: HousingService) { }



  ngOnInit(): void {
    this.propertyId = +this.route.snapshot.params["id"];
    this.route.data.subscribe(
      (data: Property)=> {
        this.property = data['prp'];
      }
    )



    /* this.route.params.subscribe(
      (params) =>{
        this.propertyId = +params["id"];
        this.housingService.getProperty(this.propertyId).subscribe(
          (data: Property)=>{
            this.property = data;
          }, error => this.router.navigate(["/"])

          // data => {
          //   this.property.Name = data.Name;
          //   this.property.BHK = data.BHK;
          //   this.property.PType = data.PType;
          //   this.property.Price = data.Price;
          //   this.property.City = data.City;
          //   this.property.BuiltArea = data.BuiltArea;
          //   this.property.FType = data.FType;
          //   this.property.CarpetArea = data.CarpetArea;
          // }
        )
      }
    ) */


    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },

      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: "../../assets/images/image1.jpg",
        medium: "../../assets/images/image1.jpg",
        big: "../../assets/images/image1.jpg"
      },
      {
        small: "../../assets/images/image2.jpg",
        medium: "../../assets/images/image2.jpg",
        big: "../../assets/images/image2.jpg"
      },
      {
        small: "../../assets/images/image3.jpg",
        medium: "../../assets/images/image3.jpg",
        big: "../../assets/images/image3.jpg"
      },
      {
        small: "../../assets/images/image4.jpg",
        medium: "../../assets/images/image4.jpg",
        big: "../../assets/images/image4.jpg"
      },
      {
        small: "../../assets/images/image5.jpg",
        medium: "../../assets/images/image5.jpg",
        big: "../../assets/images/image5.jpg"
      }



    ];


  }



}
