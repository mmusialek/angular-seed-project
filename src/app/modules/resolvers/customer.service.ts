import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CustomerListViewModel } from './customer-list.view-model';

@Injectable()
export class CustomerService {

  constructor() { }

  getCustomers(): Observable<CustomerListViewModel> {
    const customers = new CustomerListViewModel();
    customers.customers.push({
      firstName: 'Jan',
      lastName: 'Kowalski',
      email: 'jkowalski@gmail.com'
    }, {
        firstName: 'Piotr',
        lastName: 'Nowacki',
        email: 'pnowacki@gmail.com'
      }, {
        firstName: 'Adam',
        lastName: 'Jankowski',
        email: 'ajankowski@gmail.com'
      });

    return new Observable(observer => {

      setTimeout(p => {
        observer.next(customers);
        observer.complete();
      }, 5000);

    });
  }

}
