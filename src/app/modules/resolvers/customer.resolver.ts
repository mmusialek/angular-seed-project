import { Observable } from 'rxjs/Rx';
import { CustomerListViewModel } from './customer-list.view-model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CustomerService } from './customer.service';

@Injectable()
export class CustomerResolverService implements Resolve<CustomerListViewModel> {

  // tslint:disable:max-line-length
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    CustomerListViewModel | Observable<CustomerListViewModel> | Promise<CustomerListViewModel> {

    return this._customerService.getCustomers();

  }

  constructor(private _customerService: CustomerService) { }

}
