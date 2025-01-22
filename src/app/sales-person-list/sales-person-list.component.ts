import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  standalone: true, // Mark it as a standalone component
  imports: [CommonModule], // Module here
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {
  // Create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Tobi", "Foko", "tobi.foko@gmail.com", 50000),
    new SalesPerson("Alex", "Johnson", "alex.johnson@example.com", 60000),
    new SalesPerson("Maria", "Smith", "maria.smith@example.com", 70000),
    new SalesPerson("John", "Doe", "john.doe@example.com", 40000),
    new SalesPerson("Jane", "Brown", "jane.brown@example.com", 55000),
    new SalesPerson("Chris", "Davis", "chris.davis@example.com", 65000),
    new SalesPerson("Emily", "White", "emily.white@example.com", 72000),
    new SalesPerson("Michael", "Green", "michael.green@example.com", 48000),
    new SalesPerson("Sarah", "Lewis", "sarah.lewis@example.com", 53000),
    new SalesPerson("David", "Clark", "david.clark@example.com", 62000)
  ];

  constructor() { }

  ngOnInit() { }
}
