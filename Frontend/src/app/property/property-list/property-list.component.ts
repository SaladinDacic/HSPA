import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Birla House",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 2,
      "Name": "Husos Villa",
      "Type": "Villa",
      "Price": 20000
    },
    {
      "Id": 3,
      "Name": "Međis Apartman",
      "Type": "Apartman",
      "Price": 18000
    },
    {
      "Id": 4,
      "Name": "Omčos House",
      "Type": "House",
      "Price": 13000
    },
    {
      "Id": 5,
      "Name": "Salas Apartman",
      "Type": "Apartman",
      "Price": 15000
    },
    {
      "Id": 6,
      "Name": "Ramzis Villa",
      "Type": "Villa",
      "Price": 50000
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
