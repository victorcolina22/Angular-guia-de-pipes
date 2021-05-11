import { Component } from '@angular/core';



@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'Victor';
  nombreUpper: string = 'VICTOR';
  nombreCompleto: string = 'VIctoR cOlINa';
  fecha: Date = new Date();

  constructor() { }

}
