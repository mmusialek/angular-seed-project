import { DataSharingComponent } from './modules/data-sharing/data-sharing.component';
import { CustomerListComponent } from './modules/resolvers/customer-list.component';
import { CustomerResolverService } from './modules/resolvers/customer.resolver';
import { SimpleClockComponent } from './controls/simple-clock/simple-clock.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CarMakeMethod1Component } from './modules/data-sharing/method-1/car-make.component';
import { CarModelMethod1Component } from './modules/data-sharing/method-1/car-model.component';
import { CarModelMethod2Component } from './modules/data-sharing/method-2/car-model.component';
import { CarMakeMethod2Component } from './modules/data-sharing/method-2/car-make.component';
import { CarDictionary1Service } from './modules/data-sharing/method-1/car-dictionary-1.service';
import { CarDictionary2Service } from './modules/data-sharing/method-2/car-dictionary-2.service';
import { CarDictionary3Service } from './modules/data-sharing/method-3/car-dictionary-3.service';
import { CarModelMethod3Component } from './modules/data-sharing/method-3/car-model.component';
import { CarMakeMethod3Component } from './modules/data-sharing/method-3/car-make.component';
import { CarModelMethod4Component } from './modules/data-sharing/method-4/car-model.component';
import { CarMakeMethod4Component } from './modules/data-sharing/method-4/car-make.component';
import { CarViewerComponent } from './modules/data-sharing/method-4/car-viewer.component';
import { appRoutes } from './app.routing';
import { CustomerService } from './modules/resolvers/customer.service';


@NgModule({
  declarations: [
    AppComponent,
    SimpleClockComponent,
    CarMakeMethod1Component,
    CarModelMethod1Component,
    CarMakeMethod2Component,
    CarModelMethod2Component,
    CarMakeMethod3Component,
    CarModelMethod3Component,
    CarMakeMethod4Component,
    CarModelMethod4Component,
    CarViewerComponent,
    CustomerListComponent,
    DataSharingComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),

    BrowserModule,
    FormsModule
  ],
  providers: [
    CarDictionary1Service,
    CarDictionary2Service,
    CarDictionary3Service,
    CustomerService,
    CustomerResolverService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
