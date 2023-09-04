import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authentication(username: string, password: string){
    console.log('before ' + this.isUserLoggedIn())
    if(username==="user" && password==="hello"){
      sessionStorage.setItem('authenticaterUser', username);
      console.log('after' + this.isUserLoggedIn());      return true;
    }
    return false;
  }


  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

}