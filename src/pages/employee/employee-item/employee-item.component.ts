import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {employeeService} from "../employee.service";

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class employeeItemComponent implements OnInit {
  @Input() employee:any
  @Output() employeeClick = new EventEmitter<any>();
  constructor(private employeeServ:employeeService) { 
  }
  onUserClick(){
    this.employeeClick.emit(this.employee)
  }
  check(){
    this.employee.check = true;
  }
  isChecked(){
    if(this.employee.check&&this.employee.check==true){
      return true
    }else{
      return false
    }
  }
  delete(){
    let id = this.employee.id
    this.employeeServ.employees.forEach((item,index,array)=>{
      if(item.id == id){
        array.splice(index,1)
      }
    })
  }
  ngOnInit() {
  }
}
