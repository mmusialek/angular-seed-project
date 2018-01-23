import { Component } from '@angular/core';
import { CarDictionary2Service } from './car-dictionary-2.service';

@Component({
  moduleId: module.id,
  selector: 'vth-car-model-method-2',
  templateUrl: 'car-model.component.html'
})

export class CarModelMethod2Component {

  addedMakes: string[] = [];

  constructor(private _carDictionaryService: CarDictionary2Service) {

  }

  loadData() {
    this.addedMakes = this._carDictionaryService.getMakeFromList();
  }

}
