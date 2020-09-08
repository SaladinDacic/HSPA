import { IProperty } from './../Iproperty.interface';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  //Will come from master
  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex']
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished']
  readyToMove: Array<string> = ['East', 'West', 'South', 'North']

  propertyView: IProperty = {
    Id: null,
    SellRent: null,
    Name: null,
    Type: null,
    Price: null
  };

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Congrats, form submitted");
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}
