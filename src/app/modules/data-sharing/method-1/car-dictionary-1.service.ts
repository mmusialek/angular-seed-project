import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CarDictionary1Service {

  makeList: string[] = [];

  constructor() {
  }

  setMakeToList(make: string) {
    this.makeList.push(make);
  }

  getMakeFromList() {
    return this.makeList;
  }

}
