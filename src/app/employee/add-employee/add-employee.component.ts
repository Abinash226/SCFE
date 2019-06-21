import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee:Employee = new Employee();

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {

    
  }

  createEmployee(): void {
    this.employeeService.createEmployee(this.employee)
        .subscribe( data => {
          alert("Employee created successfully.");
        });

  };

  


}
