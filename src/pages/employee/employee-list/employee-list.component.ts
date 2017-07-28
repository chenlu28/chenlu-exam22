import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import {employeeService} from "../employee.service";
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class employeeListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "name";
  selectemployee:any={
    name:"未选择"
  };
  searchResult:Array<any>;
  employees:Array<any>=[];
  deleteLast() {
    this.employees.pop();
  }
  search(){
    this.searchResult = this.employees.filter(item=>{
      let result = String(item[this.searchType]).match(this.searchText)
      if(result){
        return true
      }else{
        return false
      }
    })
  }
  getUserClick(ev){
    this.selectemployee = ev
    console.log(ev);
  }
 
  sortByAsccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.employees.sort((a,b)=>{
      return a[type] - b[type];
    });
  }
  sortByDesccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.employees.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 this.employees.forEach((user,index)=>{
    let j = Math.floor(Math.random() * index);
     [this.employees[index - 1], this.employees[j]] = [this.employees[j], this.employees[index - 1]];
  })
  }
  constructor(meta: Meta, title: Title, private employeeServ:employeeService) {
    this.employees = this.employeeServ.getemployees()
 
    // Set SEO
    title.setTitle('My Home Page');

    meta.addTags([{
        name: 'author',
        content: 'eddic'
      },
      {
        name: 'keywords',
        content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description',
        content: 'This is my great description.'
      },
    ]);
    // end of SEO
  }

  testTempemployees(){
    console.log(this.employees.length);
    let tempemployees:Array<any> = []
    this.employees.forEach(item=>{
      tempemployees.push(item)
    })
    tempemployees.pop()
    tempemployees.pop()
    tempemployees.pop()
    tempemployees.pop()
    tempemployees.pop()
    console.log(tempemployees.length);
  }

  ngOnInit() {}
}
