import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private authService: AuthService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.authService.signupUser(username, password);
  }

}
