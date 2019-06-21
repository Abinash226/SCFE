import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import {HttpClientModule} from "@angular/common/http";
import { EmployeeService } from './employee/employee.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,MatDatepickerModule,MatNativeDateModule,MatSelectModule,MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule,MatTableModule,MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule
  ],
  providers: [EmployeeService,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
