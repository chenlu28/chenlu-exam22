import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { employeeService } from '../../employee/employee.service'


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})



export class LoginPageComponent implements OnInit {
  user:any={
    username:"angular",
    password:""
  };

  login(){
    this.user.username = "Ryane";
    this.user.password = "666";
    this.isLogined = true;
  };
  isLogined:boolean = false;
  constructor(meta: Meta, title: Title, private employeeServ:employeeService) {
    this.isLogined = this.employeeServ.isLogined;
    
    title.setTitle('Login Page');

    meta.addTags([ 
      {
        name: 'author', content: 'eddic'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  ngOnInit() {
  }

}
