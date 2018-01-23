import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CarDictionary3Service {

  makes: Subject<string>;

  constructor() {
    this.makes = new Subject<string>();
  }


  addMake(make: string) {
    this.makes.next(make);
  }

}
