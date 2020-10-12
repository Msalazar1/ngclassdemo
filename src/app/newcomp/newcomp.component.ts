import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit {
  @Input() header = "Greetings";
  firstName = "";
  lastName = "";
  constructor() { }

  ngOnInit(): void {
  }

  clickResults = function(){
    alert(`Welcome ${this.firstName} ${this.lastName}`);
  }

  clickTest = function(){
    this.firstName = 'Please enter first name';
    this.lastName = 'Please enter last name';
  }

}
