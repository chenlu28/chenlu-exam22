import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { employeeListComponent } from './employee-list/employee-list.component';
import { employeeItemComponent } from './employee-item/employee-item.component';
import { employeeEditComponent } from './employee-edit/employee-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

// Providers
import { employeeService } from './employee.service'

@NgModule({
  imports: [
     // Import Official Shared Module
    CommonModule,
    FormsModule,
    // Import Custom Shared Module
    PipesModule,
    DirectivesModule,
    // Config Router
    RouterModule.forChild([
      { path: '', component: employeeListComponent, pathMatch: 'full' },
      { path: 'employee/edit/:sid', component: employeeEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   employeeListComponent,
   employeeItemComponent, 
   employeeEditComponent
   ],
   providers:[employeeService]
})
export class employeeModule { }
