# SalesProject

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Angular - Create New Component

### Our Goal
- Create a new Angular component to display a table of data

###  Development Process

 1. Update main template page
 2. Create a new project
 3. Generate a new component
 4. Add new component selector to app template page
 5. Generate a `SalesPerson` class
 6. In `SalesPersonListComponent`, create sample data
 7. In `sales-person-list` template file, build HTML table by looping over data 

 ### Step 1: Create a new project

 `ng new sales-project` 
 Remember, this generates all of the Angular starter files for our project

 `cd sales-project`

 ### Step 2: Update main template page

Remove all of the  Angular "placeholder" content. 
Just add basic HTML header : `<h1>Sales Team</h1>` in **File** : `src/app/app.component.html`

###  Step 3: Generate a new component

`ng generate component sales-person-list`
- CREATE src/app/sales-person-list/sales-person-list.component.css (0 bytes) 
- CREATE src/app/sales-person-list/sales-person-list.component.html (32 bytes)
- CREATE src/app/sales-person-list/sales-person-list.component.spec.ts (693 bytes) 
- CREATE src/app/sales-person-list/sales-person-list.component.ts (311 bytes)
- UPDATE src/app/app.module.ts (436 bytes)

 ### About the Generated Files : 
`sales-person-list.component.ts`: the component class 
`sales-person-list.component.html`: the component template HTML 
`sales-person-list.component.css`: the component private CSS 
`sales-person-list.component.spec.ts`: the unit test specifications 

 ### Step 4: Add new component selector to app template page

 **File**: `src/app/app.component.html`

 
 1. `<h1>Sales Team</h1>` 
`<app-sales-person-list></app-sales-person-list>`


2. **File**: `src/app/sales-person-list/sales-person-list.component.ts`
- Add :
   - standalone: true, 
   - imports: [CommonModule], 

```javascript
import { Component, OnInit } from '@angular/core'; 
 @Component({ 
selector: 'app-sales-person-list',
standalone: true,
imports: [CommonModule],
templateUrl: './sales-person-list.component.html', 
styleUrls: ['./sales-person-list.component.css'] 
}) 
export class SalesPersonListComponent implements OnInit { 
constructor() { } 
}
 ngOnInit() {
 }
```
Later on, we will add sample data here

 **File** : `src/app/sales-person-list/sales-person-list.component.html` 
 `<p>sales-person-list works!</p>`

 ### Step 5: Generate a SalesPerson class
Creates a basic TypeScript class
 `ng generate class sales-person-list/SalesPerson`

 **File** : `src/app/sales-person-list/sales-person.ts`

 ```TypeScript
export class SalesPerson { 
 constructor(public firstName: string, 
public lastName: string, 
public email: string, 
public salesVolume: number) { 
Creates a basic TypeScript class
    } 
}
```

### Step 6: In SalesPersonListComponent, create sample data

 **File**: `src/app/sales-person-list/sales-person-list.component.ts`

```TypeScript
import { Component, OnInit } from '@angular/core'; 
import { SalesPerson } from './sales-person'; 
@Component({ 
selector: 'app-sales-person-list', 
templateUrl: './sales-person-list.component.html', 
styleUrls: ['./sales-person-list.component.css'] 
}) 
export class SalesPersonListComponent implements OnInit { 
}
 Import our new class
 Create sample data
 // create an array of objects 
salesPersonList: SalesPerson[] = [ 
new SalesPerson("Anup", "Kumar", "anup.kumar@luv2code.com", 50000), 
new SalesPerson("John", "Doe", "john.doe@luv2code.com", 40000), 
new SalesPerson("Claire", "Murphy", "claire.murphy@luv2code.com", 90000), 
new SalesPerson("Mai", "Truong", "mai.truong@luv2code.com", 60000) 
  ] 
  ...
```

### Step 7: In sales-person-list template file, build HTML table by looping over data

 **File**: `src/app/sales-person-list/sales-person-list.component.html`

```html
<table border="1"> 
  <thead> 
    <tr> 
      <th>First Name</th> 
      <th>Last Name</th> 
      <th>Email</th> 
      <th>Sales Volume</th> 
    </tr>             
  </thead> 
  <tbody> 
    <tr *ngFor="let tempSalesPerson of salesPersonList"> 
    <td>{{ tempSalesPerson.firstName }}</td> 
    <td>{{ tempSalesPerson.lastName }}</td> 
    <td>{{ tempSalesPerson.email }}</td> 
    <td>{{ tempSalesPerson.salesVolume }}</td> 
    </tr> 
  </tbody> 
</table>

```

**Notes on** `ngFor`
 - ngFor is a structural directive
 - It renders a template for each item in a collection
 - For complete documentation and examples, see:


# Integrate Angular with Bootstrap

###  Development Process

1. Get links for remote Bootstrap files 
2. Add links to index.html 
3. Apply Bootstrap CSS styles in component HTML template 
4. Apply Bootstrap CSS styles in component HTML table 
5. Update TypeScript component file to reference Bootstrap HTML template

### Step 1: Get links for remote Bootstrap files
- Visit Bootstrap website: www.getbootstrap.com 
- Website has instructions on how to Get Started

### Step 2: Add links in index.html

```html
 <head> 
  … 
    <!-- Bootstrap CSS --> 
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/x.y.z/css/bootstrap.min.css" …>  
… 
</head
```

### Step 3: Apply CSS in Component HTML template

```html
<div class="container"> 
  <h1 class="mt-3 mb-3">Sales Team</h1> 
  <app-sales-person-list></app-sales-person-list> 
</div>
```

### Step 4: Apply CSS in Component HTML Table

```html
<table class="table table-hover"> 
  <thead class="thead-dark"> 
    <tr> 
      <th>First Name</th> 
      <th>Last Name</th> 
      <th>Email</th> 
      <th>Sales Volume</th> 
    </tr>             
  </thead> 
  <tbody> 
  ... ... 
  </tbody> 
</table>
```

### Step 5: Update TypeScript component file

```typescript
import { Component, OnInit } from '@angular/core'; 
@Component({ 
selector: 'app-sales-person-list', 
templateUrl: './sales-person-list-bootstrap.component.html', 
styleUrls: ['./sales-person-list.component.css'] 
}) 
export class SalesPersonListComponent implements OnInit { 
... ... 
File: src/app/sales-person-list/sales-person-list-bootstrap.component.html
 <table class="table table-hover"> 
<thead class="thead-dark"> 
<tr> 
<th>First Name</th> 
<th>Last Name</th> 
<th>Email</th> 
</tr>             
</thead> 
}
```

# Angular: Conditionals and Formatting

## Goal

Add a new column to check if a sales person has met their quota

### Conditional: `ngIf`

  - Angular provides a structural directive: ngIf
  - Show content based on a condition / boolean expression

```html
<div *ngIf="some boolean expression"> 
Show this content if the boolean expression is true 
</div>
```
### Example

**Our example**: `if salesVolume >= 50000`, display Yes ... else No

### Conditional with `ngIf`

```html
<table class="table table-hover"> 
  <thead class="thead-dark"> 
    <tr> 
      ... 
      <th>Sales Volume</th> 
      <th>Met Quota?</th> 
    </tr>             
  </thead> 
  Conditional
  <tbody> 
    <tr *ngFor="let tempSalesPerson of salesPersonList"> 
    ... 
      <td>{{ tempSalesPerson.salesVolume }}</td> 
      <td> 
        <div *ngIf="tempSalesPerson.salesVolume >= 60000; else myElseBlock">Yes</div> 
        <ng-template #myElseBlock>No</ng-template> 
      </td> 
    </tr> 
</tbody> 
</table>
```

### Angular Structural Directives

- Most commonly used structural directives: ngFor and ngIf
- Also there other such as ngSwitch, ngStyle etc ...
- See the documentation for details

### Goal
 
 - Format the Sales Volume as a currency, U.S. Dollars

### Currency Formatting

- Angular provides currency formatting using Angular Pipes
- You send data to a pipe for formatting

```html
<p>Cost: {{ someValue | currency:'USD' }} </p>
```

### Formatting with Currency Pipe

```html
<table class="table table-hover"> 
    ... 
    <tbody> 
        <tr *ngFor="let tempSalesPerson of salesPersonList"> 
  ... 
            <td>{{ tempSalesPerson.salesVolume | currency:'USD' }}</td> 
            ... 
       </tr> 
    </tbody> 
</table>
```