import { Component } from '@angular/core';

@Component({
  selector: 'app-atributo',
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.css']
})
export class AtributoComponent {

  messageType: number = 1;

  inputValue = 'Escribe algo';
}
