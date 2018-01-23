import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'vth-car-model-method-4',
  templateUrl: 'car-model.component.html'
})

export class CarModelMethod4Component {

  @Input() makes: string[] = [];

  constructor() {
  }

}
