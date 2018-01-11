import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user: User;
loggedIn:boolean=false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService

  ) { }

  ngOnInit(): void {

  }

  loginFunc(username,password){
    this.user = this.userService.getUser(username,password);
    console.log(username,password);
    if(username == "user" && password=="password"){
      this.loggedIn = true;
    }
    else{
      this.loggedIn = false;
    }
  }

}
