import { IUser } from './../model/IUser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  addUser(user: IUser){
    let users = [];
    if(localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users'));
      users = [...users, user]
    }else{
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }

}
