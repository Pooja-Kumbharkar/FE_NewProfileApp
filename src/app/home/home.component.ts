import { Component } from '@angular/core';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
  export class HomeComponent{
 
  title = 'ProfileApp';
  opened;
  
  constructor()
  {
    this.opened = false;
  }
  }
