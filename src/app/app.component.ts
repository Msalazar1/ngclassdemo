import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngclassdemo';
  newName = '';
  isItalic = false;
  isHidden = false;
  secondColor = 'blue';
  doClick = function(){
   this.secondColor = 'red';
    this.isItalic = !this.isItalic;
  }
  doHidden = function(){
    this.isHidden = !this.isHidden;
  }

  updateName = function(str){
    this.newName = str;
  }
}
