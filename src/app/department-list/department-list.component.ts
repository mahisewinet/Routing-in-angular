import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      department-list works!
</h3>
     <ul class="items">
      <li *ngFor="let department of departments" 
       (click)="onSelect(department)">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
  </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent {

  departments= [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"React"},
    {"id":3, "name":"Flutter"},
    {"id":4, "name":"Vue"}
  ];
  constructor(private router:Router){

  }

  

  onSelect(department: { id: any; }){
      this.router.navigate(['/departments', department.id]);
  }
}
