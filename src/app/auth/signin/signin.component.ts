import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }


  onSignin(form:NgForm) {
    const {email, password} = form.value;
    console.log(email,password)
    //this.authService.signupUser(email,password);
    this.authService.signinUser(email,password);
  }


  
}
