import { Pipe, PipeTransform } from '@angular/core';

import { Heroe } from '../interfaces/ventas.interfaces';



@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( heroe: Heroe[], ordenarPor: string = 'sin valor' ): Heroe[] {

    switch( ordenarPor ) {

      case 'nombre':
        return heroe.sort( (a,b) => ( a.nombre > b.nombre ) ? 1 : -1 );
      case 'vuela':
        return heroe.sort( (a,b) => ( a.vuela > b.vuela ) ? -1 : 1 );
      case 'color':
        return heroe.sort( (a,b) => ( a.color > b.color ) ? 1 : -1 );

      default:
        return heroe;
    }

  }

}
