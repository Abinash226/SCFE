import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  private userUrl = '/employee';

  public getEmployee() {
    return this.http.get<Employee[]>(this.userUrl);
  }

  public createEmployee(employee:Employee) {
    return this.http.post<Employee>(this.userUrl, employee);
  }
}
