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
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Congrats, form submitted");
    console.log(this.addPropertyForm);
  }

}
