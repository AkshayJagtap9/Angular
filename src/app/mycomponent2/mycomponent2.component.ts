import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent2',
  templateUrl: './mycomponent2.component.html',
  styleUrls: ['./mycomponent2.component.css']
})
export class Mycomponent2Component implements OnInit {

  buttonpress = false;

  constructor() 
  {
    setTimeout(() =>{
      this.buttonpress = true;
    },5000)
   }

  ngOnInit(): void {
  }

}
