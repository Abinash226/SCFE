import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee/employee/employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'add', component: AddEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
