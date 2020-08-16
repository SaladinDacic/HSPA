import { IProperty } from './../Iproperty.interface';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component(
  {
    selector: 'app-property-card',
    // template: `<h1> The template of card object </h1>`,
    templateUrl: 'property-card.component.html',
    // styles: ['h1 {font-weight: normal;}']
    styleUrls: ['property-card.component.css']

  }
)
export class PropertyCardComponent{
  @Input() property: IProperty

  /* Property: any = {
    "Id": 1,
    "Name": "Birla House",
    "Type": "House",
    "Price": 12000
  } */

}
