import { Component } from '@angular/core';
import { CarDictionary2Service } from './car-dictionary-2.service';

@Component({
  moduleId: module.id,
  selector: 'vth-car-make-method-2',
  templateUrl: 'car-make.component.html'
})

export class CarMakeMethod2Component {
  carMake: string;
  addedMakes: string[] = [];

  constructor(private _carDictionaryService: CarDictionary2Service) { }

  addCarMake() {
    this._carDictionaryService.setMakeToList(this.carMake);

    this.addedMakes = this._carDictionaryService.getMakeFromList();
  }
}
