import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { employeeService } from '../employee.service'

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class employeeEditComponent implements OnInit,OnDestroy {
  employeeId:string="";
  employee:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getUserSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private employeeServ:employeeService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    this.employeeServ.employees.push(this.employee)
    this.location.back();
  }
  ngOnInit() {
    this.getUserSubscribe = this.route.params.subscribe(params=>{
      this.getemployee(params['sid']).then(employee=>{
      console.log(employee)
      this.employeeId = employee.id;
      this.employee = employee
    }).catch(err=>{
      console.log(err)
    })
    })
  }
  ngOnDestroy(){
    this.getUserSubscribe.unsubscribe();
  }

  getemployee(id: any): Promise<any> {
    
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let employee = {name:""}
        this.isNew = true;
        resolve(employee)
      }
      let employee = this.employeeServ.employees.find(item=>item.id == id)
      if(employee){
        resolve(employee)
      }else{
        reject("employee not found")
      }
    })
    return p
}

}
