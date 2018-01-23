import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'vth-car-viewer-method-4',
  templateUrl: 'car-viewer.component.html'
})

export class CarViewerComponent {
  addedMakes: string[] = [];

  constructor() {
  }
}
