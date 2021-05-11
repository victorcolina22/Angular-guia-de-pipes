import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import { AppComponent } from './app.component';

// Cambiar el local (idioma) de la app
import localEs from '@angular/common/locales/es-VE'
import localFr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common'
registerLocaleData( localEs );
registerLocaleData( localFr );




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  // Cambiar el local (idioma) de la app
  providers: [
    { provide: LOCALE_ID, useValue: 'es-VE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
