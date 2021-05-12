import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform( valor: string, mayusculas?: boolean ): string {

        return ( mayusculas === false ) 
                ? valor.toLowerCase() 
                : valor.toUpperCase();

    }

}