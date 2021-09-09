import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Department } from './department/department.model';
import { Employee } from './employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  formData:Department = new Department();
readonly baseURL = 'http://localhost:22342/api'
readonly photoURL = 'http://localhost:22342/Photos'
list: Department[] = [];
formData1:Employee = new Employee();
list1: Employee[] = [];


  constructor(private http:HttpClient) { }

  refreshDepList() {

    return this.http.get(this.baseURL+'/department')
     .toPromise()
     .then(res => this.list = res as Department[]);
  }

  postDepartment(){
    return this.http.post(this.baseURL+'/department',this.formData);
  }

  updateDepartment(){
    return this.http.put(`${this.baseURL+'/department'}?id=${this.formData.departmentid}`,this.formData);
  }

  deleteDepartment(id:number){
    return this.http.delete(`${this.baseURL+'/department'}/${id}`);
  }


  refreshEmpList() {

    return this.http.get(this.baseURL+'/employee')
     .toPromise()
     .then(res => {this.list1 = res as Employee[],
     console.log(res);
    });

  }

  postEmployee(){
    return this.http.post(this.baseURL+'/employee',this.formData1);
  }

  updateEmployee(){
    return this.http.put(`${this.baseURL+'/employee'}?id=${this.formData1.employeeid}`,this.formData1);
  }

  deleteEmployee(id:number){
    return this.http.delete(`${this.baseURL+'/employee'}/${id}`);
  }

  UploadPhoto(val:any){
     return this.http.post(this.baseURL+'/Employee/SaveFile',val);
   }

  postFile(fileToUpload: File) {

    const formData: FormData = new FormData();
    formData.append('Photos', fileToUpload, fileToUpload.name);
    return this.http
      .post(this.baseURL+'/Employee/SaveFile', formData);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.baseURL+'/Employee/GetAllDepartmentNames');
  }






  /*getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }



}




constructor(private http:HttpClient) { }

formData:BookDetail = new BookDetail();
readonly baseURL = 'https://localhost:44394/api/Books'
list: BookDetail[] = [];

postBook(){
  return this.http.post(this.baseURL,this.formData);
}

updateBook(){
  return this.http.put(`${this.baseURL}?id=${this.formData.id}`,this.formData);
}
Delete(id:number){
  return this.http.delete(`${this.baseURL}/${id}`);
}

function then(arg0: (res: any) => Department[]) {
  throw new Error('Function not implemented.');
}

refreshList() {

  return this.http.get(this.baseURL)
  .toPromise()
  .then(res => this.list = res as BookDetail[]);
}
*/}


