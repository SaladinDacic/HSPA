import { IUser } from './../../model/IUser';
import { UserServiceService } from './../../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup;
  userSubmitted: boolean;
  user: IUser;
  constructor(private fb: FormBuilder, private userService: UserServiceService) { }

  ngOnInit(): void {
    /* this.registrationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, Validators.required),
      mobile: new FormControl(null, [Validators.required, Validators.minLength(9)])
    }, this.passwordMatchingValidators);
    this.registrationForm.controls['userName'].setValue("Saladin"); */
    this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.registrationForm = this.fb.group({
      userName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.minLength(9)]],
    },{validators: this.passwordMatchingValidators});
  }

  passwordMatchingValidators(fg: FormGroup): Validators{
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
    {notMatched: true}
  }




  // getter methods for all FormControlls
  get userName(){
    return this.registrationForm.get('userName') as FormControl
  }
  get email(){
    return this.registrationForm.get('email') as FormControl
  }
  get password(){
    return this.registrationForm.get('password') as FormControl
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl
  }


  onSubmit(){
    console.log(this.registrationForm.value);
    this.userSubmitted = true;
    if(this.registrationForm.valid){
      // this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
    }
  }

  userData(): IUser{
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }

  /* addUser(user){
    let users = [];
    if(localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users'));
      users = [...users, user]
    }else{
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  } */

}
