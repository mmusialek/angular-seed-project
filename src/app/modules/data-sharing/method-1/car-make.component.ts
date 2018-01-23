import { Component } from '@angular/core';
import { CarDictionary1Service } from './car-dictionary-1.service';

@Component({
  moduleId: module.id,
  selector: 'vth-car-make-method-1',
  templateUrl: 'car-make.component.html'
})

export class CarMakeMethod1Component {
  carMake: string;
  addedMakes: string[] = [];

  constructor(public carDictionaryService: CarDictionary1Service) { }

  addCarMake() {
    this.carDictionaryService.setMakeToList(this.carMake);
  }
}
