import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'vth-car-make-method-4',
  templateUrl: 'car-make.component.html'
})

export class CarMakeMethod4Component {
  carMake: string;
  @Input() makes: string[] = [];

  constructor() {
  }

  addCarMake() {
    this.makes.push(this.carMake);
  }
}
