import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CarDictionary2Service {

  makes: Subject<string>;

  private makeList: string[] = [];

  constructor() {
    this.makes = new Subject<string>();
  }


  addMake(make: string) {
    this.makes.next(make);
  }

  setMakeToList(make: string) {
    this.makeList.push(make);
  }

  getMakeFromList() {
    return this.makeList;
  }

}
