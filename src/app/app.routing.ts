import { DataSharingComponent } from './modules/data-sharing/data-sharing.component';
import { CustomerResolverService } from './modules/resolvers/customer.resolver';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { CustomerListComponent } from './modules/resolvers/customer-list.component';



export const appRoutes: Routes = [
  {
    path: 'main-page',
    component: DataSharingComponent,
    data: { title: 'Main page' }
  },
  {
    path: 'customer-list',
    resolve: { customers: CustomerResolverService },
    component: CustomerListComponent,
    data: { title: 'Customer list' }
  },
  {
    path: '',
    redirectTo: '/main-page',
    pathMatch: 'full'
  },
];
