import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id {{departmentId}}</h3>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent {

  public departmentId: any;

  constructor(private route: ActivatedRoute, private router:Router){

  }

  ngOnInit(){

    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id= parseInt(params.get('id')!);
      this.departmentId= id;
    });
  }

  goPrevious(){
    let previousId= this.departmentId-1;
    this.router.navigate(["/departments", previousId]);
  }

  goNext(){
    let nextId= this.departmentId+1;
    this.router.navigate(["/departments", nextId]);
  }
}
