import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  btnmsg = '';
  inputData = '';
  // twoWay = "Check Two Way Binding";
  
  constructor() { }

  ngOnInit(): void {
  }

  onClickBtn1(event:Event){
    this.btnmsg =(<HTMLInputElement>event.target).value;
  }

  courseName(event:Event){
    this.inputData  =(<HTMLInputElement>event.target).value;
  }

  
 
}
