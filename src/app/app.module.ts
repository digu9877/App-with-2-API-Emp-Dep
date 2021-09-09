import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { SharedService } from './shared.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';

import { DepatmentFilterPipe } from './department/department-filter.pipe';
import { SortParamsDirective } from './department/sort-params.directive';
import { DepartmentSortPipe } from './department/department-sort.pipe';
import { ToastrModule } from 'ngx-toastr';
import { EmployeeFilterPipe } from './employee/employee-filter.pipe';
import { SortDirective } from './employee/sort.directive';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    DepatmentFilterPipe,
    SortParamsDirective,
    DepartmentSortPipe,
    EmployeeFilterPipe,
    SortDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    ToastrModule.forRoot()

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
