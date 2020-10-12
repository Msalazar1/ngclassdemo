import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit {
  @Input() header = "Greetings";
  @Output() callParent = new EventEmitter<string>();
  firstName = "";
  lastName = "";
  constructor() { }

  ngOnInit(): void {
  }

  clickResults = function(){
    //alert(`Welcome ${this.firstName} ${this.lastName}`);
    this.callParent.emit(`${this.firstName} ${this.lastName}`);
  }

  clickTest = function(){
    this.firstName = 'Please enter first name';
    this.lastName = 'Please enter last name';
  }

}
