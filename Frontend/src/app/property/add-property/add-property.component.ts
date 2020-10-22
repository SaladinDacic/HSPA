import { AlertifyService } from './../../services/alertify.service';
import { HousingService } from './../../services/housing.service';
import { Property } from './../../model/property';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IPropertyBase } from 'src/app/model/ipropertybase';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  //@ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;
  addPropertyForm: FormGroup;
  nextClicked: boolean;
  property = new Property();

  RtmCheck : number;
  SRStatus : boolean = false;
  TabIDCheck : number = 0;

  // Will come from masters
  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex']
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished']

  propertyView: IPropertyBase = {
    Id: null,
    Name: null,
    Price: null,
    SellRent: null,
    PType: null,
    FType: null,
    BHK: null,
    BuiltArea: null,
    City: null,
    RTM: null
  };


  constructor(private fb: FormBuilder,
              private router: Router,
              private housingService: HousingService,
              private alertify: AlertifyService) { }

  ngOnInit() {
    this.CreateAddPropertyForm();
  }

  //#region <CreateAddPropertyForm()>
    CreateAddPropertyForm() {
      this.addPropertyForm = this.fb.group({
        BasicInfo: this.fb.group({
          SellRent: [null, Validators.required],
          PType: [null, Validators.required],
          Name: [null, Validators.required],
          BHK: [null],
          FType: [null],
          City: [null]
        }),
        PriceInfo: this.fb.group({
          Price: [null, Validators.required],
          BuiltArea: [null, Validators.required],
          Security: [null],
          Maintenance: [null],
          CarpetArea: [null]
        }),
        AddressGroup: this.fb.group({
          Address: [null, Validators.required],
          Floor : [null],
          TFloor : [null],
          Landmark : [null]
        }),
        OtherDetails: this.fb.group({
          RtmStatus: [null, Validators.required],
          PossessionON: [null],
          AgeOfProperty: [null],
          GatedCommunity: [null],
          RtmTo: [null],
          Description: [null],
        })
      });
    }
  //#endregion



  //---------------
  //#region <Getter Method>

    //---------------------------
    //#region <BasicInfo Group>
      get BasicInfo(){
        return this.addPropertyForm.controls.BasicInfo as FormGroup;
      }

      get SellRent(){
        return this.BasicInfo.controls.SellRent as FormControl;
      }
      get PType(){
        return this.BasicInfo.controls.PType as FormControl;
      }
      get Name(){
        return this.BasicInfo.controls.Name as FormControl;
      }
      get BHK(){
        return this.BasicInfo.controls.BHK as FormControl;
      }
      get FType(){
        return this.BasicInfo.controls.FType as FormControl;
      }
      get City(){
        return this.BasicInfo.controls.City as FormControl;
      }
    //#endregion

    //---------------------------
    //#region <PriceInfo Group>
      get PriceInfo(){
        return this.addPropertyForm.controls.PriceInfo as FormGroup;
      }

      get Price(){
        return this.PriceInfo.controls.Price as FormControl;
      }
      get BuiltArea(){
        return this.PriceInfo.controls.BuiltArea as FormControl;
      }
      get Security(){
        return this.PriceInfo.controls.Security as FormControl;
      }
      get Maintenance(){
        return this.PriceInfo.controls.Maintenance as FormControl;
      }
      get CarpetArea(){
        return this.PriceInfo.controls.CarpetArea as FormControl;
      }
    //#endregion

    //---------------------------
    //#region <Address Group>
      get AddressGroup(){
        return this.addPropertyForm.controls.AddressGroup as FormGroup;
      }

      get Address(){
        return this.AddressGroup.controls.Address as FormControl;
      }
      get FloorNo(){
        return this.AddressGroup.controls.Floor as FormControl;
      }
      get TFloor(){
        return this.AddressGroup.controls.TFloor as FormControl;
      }
      get Landmark(){
        return this.AddressGroup.controls.Landmark as FormControl;
      }
    //#endregion

    //---------------------------
    //#region <OtherDetails Group>
      get OtherDetails(){
        return this.addPropertyForm.controls.OtherDetails as FormGroup;
      }

      get RtmStatus(){
        return this.OtherDetails.controls.RtmStatus as FormControl;
      }
      get PossessionON(){
        return this.OtherDetails.controls.PossessionON as FormControl;
      }
      get AgeOfProperty(){
        return this.OtherDetails.controls.AgeOfProperty as FormControl;
      }
      get GatedCommunity(){
        return this.OtherDetails.controls.GatedCommunity as FormControl;
      }
      get RtmTo(){
        return this.OtherDetails.controls.RtmTo as FormControl;
      }
      get Description(){
        return this.OtherDetails.controls.Description as FormControl;
      }
    //#endregion
  //#endregion
  //---------------



  onBack() {
    this.router.navigate(['/']);
  }



  onSubmit() {
    this.nextClicked = true;
    if(this.allTabsValid()){
      this.mapProperty();
      this.housingService.addProperty(this.property);
      this.alertify.success('Congrats, your propperty listed successfully on our website');
      console.log(this.addPropertyForm)

      if(this.SellRent.value === "2"){
        this.router.navigate(['/rent-property']);
      }else { this.router.navigate(['/']);}
    }else{
      this.alertify.error('Please review the form and provide all valid enteries');
    }
  }


  mapProperty(): void{
    this.property.Id = this.housingService.newPropID();
    this.property.SellRent = this.SellRent.value;
    this.property.BHK = this.BHK.value;
    this.property.PType = this.PType.value;
    this.property.Name = this.Name.value;
    this.property.City = this.City.value;
    this.property.FType = this.FType.value;
    this.property.Price = this.Price.value;
    this.property.Security = this.Security.value;
    this.property.Maintenance = this.Maintenance.value;
    this.property.BuiltArea = this.BuiltArea.value;
    this.property.CarpetArea = this.CarpetArea.value;
    this.property.FloorNo = this.FloorNo.value
    this.property.TotalFloor = this.TFloor.value;
    this.property.Address = this.Address.value;
    this.property.Address2= this.Landmark.value;
    this.property.RTM = this.RtmStatus.value;
    this.property.AOP = this.AgeOfProperty.value;
    this.property.Gated = this.GatedCommunity.value;
    this.property.MainEntrance = this.Maintenance.value;
    this.property.Possession = this.PossessionON.value;
    this.property.Description = this.Description.value;
    this.property.PostedOn = new Date().toString();
  }


  allTabsValid():boolean{
    if(this.BasicInfo.invalid){
      this.formTabs.tabs[0].active = true;
      this.nextClicked = true;
      return false;
    }

    if(this.PriceInfo.invalid){
      this.formTabs.tabs[1].active = true;
      this.nextClicked = true;
      return false;
    }

    if(this.AddressGroup.invalid){
      this.formTabs.tabs[2].active = true;
      this.nextClicked = true;
      return false;
    }

    if(this.OtherDetails.invalid){
      this.formTabs.tabs[3].active = true;
      this.nextClicked = true;
      return false;
    }
    return true;
  }


  selectTab(tabId: number, IsCurrentTabValid: boolean) {
    this.nextClicked = true;
    this.TabIDCheck = 0;
    if(IsCurrentTabValid){
      this.formTabs.tabs[tabId].active = true;
      this.TabIDCheck = 1;
    }
  }

  radioCheck(Check: number){
    if(Check == 1){
      this.RtmCheck = 1;
    }else if(Check == 2){
      this.RtmCheck = 2;
    }
  }

  SellRentStatus(){
    this.SRStatus = true;
  }

}
