import { Component } from '@angular/core';
import { Users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AdminComponent {
  title = 'app';
  public users=USERS;

  doChangeColors(event)
  {
    console.log(event);
  }
}

var USERS:Users[]=[
  { "name": "arch1", "email": "arch@gmail.com","phone":123454567},
  { "name": "bala", "email": "bala@gmail.com","phone":198764567},
  { "name": "raju", "email": "raju@gmail.com","phone":456709823},
  { "name": "tweety", "email": "tweety@gmail.com","phone":8734128709},
  { "name": "krish", "email": "krish@gmail.com","phone":10987456123},
];
