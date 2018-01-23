import { Component } from '@angular/core';
import { CarDictionary3Service } from './car-dictionary-3.service';

@Component({
  moduleId: module.id,
  selector: 'vth-car-model-method-3',
  templateUrl: 'car-model.component.html'
})

export class CarModelMethod3Component {

  addedMakes: string[] = [];

  constructor(private _carDictionaryService: CarDictionary3Service) {
    this._carDictionaryService.makes.subscribe(p => {
      this.addedMakes.push(p);
    });
  }

}
