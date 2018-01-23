import { Component } from '@angular/core';
import { CarDictionary3Service } from './car-dictionary-3.service';

@Component({
  moduleId: module.id,
  selector: 'vth-car-make-method-3',
  templateUrl: 'car-make.component.html'
})

export class CarMakeMethod3Component {
  carMake: string;
  addedMakes: string[] = [];

  constructor(private _carDictionaryService: CarDictionary3Service) {

    this._carDictionaryService.makes.subscribe(p => {
      this.addedMakes.push(p);
    });
   }

  addCarMake() {
    this._carDictionaryService.addMake(this.carMake);
  }
}
