import { Component } from '@angular/core';

@Component({
  selector: 'app-estructural',
  templateUrl: './estructural.component.html',
  styleUrls: ['./estructural.component.css']
})
export class EstructuralComponent {

  isError = false;

  showError(){
    this.isError = true;
  }

  sections = [
    'Python',
    'Java',
    'PHP',
    'Angular'
  ];
}
