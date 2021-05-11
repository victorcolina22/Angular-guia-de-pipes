import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule
  ],
  imports: [
    CommonModule
  ]
})
export class PrimeNgModule { }
