import { Component } from '@angular/core';
import { interval } from 'rxjs';



@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Vero';
  genero: string = 'femenino';
  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Jesus', 'Pedro', 'Miguel', 'Eduardo'];
  clientesMapa = {
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos 1 cliente esperando.',
    'other':`tenemos # clientes esperando.`
  }

  constructor() { }

  cambiarPersona() {

    if( this.genero === 'femenino' ) {
      this.genero = 'masculino';
      this.nombre = 'Victor'
    } else {
      this.genero = 'femenino';
      this.nombre = 'Vero'
    }

  };

  borrarCliente(){
    this.clientes.pop();
  };

  // KeyValuePipe:
  // Este pipe sirve para mostrar en el HTML las propiedades que contenga un objeto.
  persona = {
    nombre: 'Victor',
    edad: 25,
    direccion: 'Santiago, Chile'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Ironman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  // AsyncPipe
  miObservable = interval(1000);

  valorPromesa = new Promise(( resolve, reject ) => {

    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500);

  })

}
