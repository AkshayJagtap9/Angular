import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponant1',
  templateUrl: './mycomponant1.component.html',
  styleUrls: ['./mycomponant1.component.css']
})
export class Mycomponant1Component implements OnInit {

  name:string = 'Akshay';
  age:number =25; 

  constructor() { }

  ngOnInit(): void {
  }

}
