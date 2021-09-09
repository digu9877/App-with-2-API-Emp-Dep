import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { Department } from '../department.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(public service:SharedService,private toastr:ToastrService) { }
  ngOnInit(): void {
  }

  // onSubmit(form:NgForm){
  //   if(this.service.formData.departmentid == 0){
  //     this.insertRecord(form);
  //   }
  //   else
  //   {
  //     this.updateRecord(form);
  //   }
  // }

  insertRecord(form:NgForm){
    this.service.postDepartment().subscribe(res =>{

      this.resetForm(form);
      this.toastr.success("successfully")
      this.service.refreshDepList();

    },
    err =>{console.log(err);})

  };


  updateRecord(form:NgForm){
    this.service.updateDepartment().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshDepList();
        this.toastr.success("successfully")



      },
      err => {console.log(err);}
    );
  }


  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData=new Department();
  }



}
