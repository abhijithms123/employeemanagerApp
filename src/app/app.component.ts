import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  public employees!: IEmployee[];
  errorMessage = '';

  constructor(private employeeService: EmployeeService) {}


  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (employees: IEmployee[]) => {
        this.employees = employees;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
