import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerListViewModel } from './customer-list.view-model';

@Component({
  moduleId: module.id,
  selector: 'vth-customer-list',
  templateUrl: 'customer-list.component.html'
})
export class CustomerListComponent implements OnInit {

  customers: CustomerListViewModel;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.customers = <CustomerListViewModel>this._route.snapshot.data.customers;
  }

}
