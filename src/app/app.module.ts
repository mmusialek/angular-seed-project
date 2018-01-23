import { SimpleClockComponent } from './controls/simple-clock/simple-clock.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarMakeComponent } from './controls/car-makes/car-make.component';
import { CarModelComponent } from './controls/car-models/car-model.component';
import { CarDictionaryService } from './services/car-dictionary.service';

@NgModule({
  declarations: [
    AppComponent,
    SimpleClockComponent,
    CarMakeComponent,
    CarModelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CarDictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
