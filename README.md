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
`UPDATE src/app/app.module.ts`: Adds the component to the main application module

## Main Application Module

`UPDATE src/app/app.module.ts`: Adds the component to the main application module

```TypeScript
import { AppComponent } from './app.component'; 
import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component'; 
@NgModule({ 
  declarations: [ 
    AppComponent, 
    SalesPersonListComponent 
  ], 
... 
}) 
export class AppModule { }
```
 Our new component was automatically added by the  ng generate component ...  command

 ### Step 4: Add new component selector to app template page

 **File**: `src/app/app.component.html`

 
 1. `<h1>Sales Team</h1>` 
`<app-sales-person-list></app-sales-person-list>`


2. **File **: `src/app/sales-person-list/sales-person-list.component.ts`

```javascript
import { Component, OnInit } from '@angular/core'; 
 @Component({ 
selector: 'app-sales-person-list', 
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

 **File ** : `src/app/sales-person-list/sales-person-list.component.html` 
 `<p>sales-person-list works!</p>`

 ### Step 5: Generate a SalesPerson class
Creates a basic TypeScript class
 `ng generate class sales-person-list/SalesPerson`

 **File ** : `src/app/sales-person-list/sales-person.ts`

 ```TypeScript
 export class SalesPerson { 
export class SalesPerson { 
}
 constructor(public firstName: string, 
public lastName: string, 
public email: string, 
public salesVolume: number) { 
Creates a basic TypeScript class
    } 
}
```

### Step 6: In SalesPersonListComponent, create sample data

 **File **: `src/app/sales-person-list/sales-person-list.component.ts`

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

 **File **: `src/app/sales-person-list/sales-person-list.component.html`

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
