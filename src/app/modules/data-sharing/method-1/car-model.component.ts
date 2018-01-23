import { Component } from '@angular/core';
import { CarDictionary1Service } from './car-dictionary-1.service';

@Component({
  moduleId: module.id,
  selector: 'vth-car-model-method-1',
  templateUrl: 'car-model.component.html'
})

export class CarModelMethod1Component {
  constructor(public carDictionaryService: CarDictionary1Service) { }

}
