import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CarMake } from '../models/car-make.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CarDictionaryService {

  makes: BehaviorSubject<string>;

  makeList: string[] = [];

  constructor() {
    this.makes = new BehaviorSubject<string>('');
  }


  addMake(make: string) {
    this.makes.next(make);
  }

  setMakeToList(make: string) {
    this.makeList.push(make);
  }

  getMakeFromList(make: string) {
    return this.makeList.find(p => p === name);
  }


}
