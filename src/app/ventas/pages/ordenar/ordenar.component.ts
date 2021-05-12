import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';



@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  fuente: boolean = true;
  ordenarPor: string = 'sin valor';
  heroes: Heroe[] = [

    { nombre: 'Superman', vuela: true, color: Color.azul },
    { nombre: 'Batman', vuela: false, color: Color.negro },
    { nombre: 'Robin', vuela: false, color: Color.verde },
    { nombre: 'Daredevil', vuela: false, color: Color.rojo },
    { nombre: 'Linterna Verde', vuela: true, color: Color.verde },
    
  ]

  constructor() { }

  cambiarMayusculas(){
    this.fuente = !this.fuente;
  }

  cambiarOrden( valor: string ) {
    this.ordenarPor = valor;
  }

}
