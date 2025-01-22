
import { Component } from '@angular/core';
import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SalesPersonListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SalesProject';
}
