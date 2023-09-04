import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username = ''
  password = ''
  errorMessage='InvalidCredential'
  invalidLogin = false

  private hardcodedAuthenticationService: HardcodedAuthenticationService;

  //dependency injection of router
    constructor(private router : Router, hardcodedAuthenticationService : HardcodedAuthenticationService){
      this.hardcodedAuthenticationService = hardcodedAuthenticationService;
    }

    ngOnInit(): void {
      
    }

    handleLogin(){
      // console.log(this.username);
      if(this.username==="user" && this.password==="hello"){
        //redire ct to welcome page
        this.router.navigate(['welcome'])
        this.invalidLogin = false
      }else{
        this.invalidLogin = true
      }
     
    }
}
