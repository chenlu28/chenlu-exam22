import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { employeeService } from '../employee/employee.service'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AboutPageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [AboutPageComponent],
  providers:[employeeService]
})
export class AboutModule { }
