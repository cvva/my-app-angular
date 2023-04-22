import { Component, OnInit } from '@angular/core';
// import { Persona} from '../persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor(){ }

  ngOnInit():void{

  }

  persona = {
    name: "Juan Perez",
    email: "jperez@gmail.com",
    age: 20

  };

  num: number = 0;
  increment(){
    this.num++;
  }
  decrement(){
    this.num--;
  }
}
