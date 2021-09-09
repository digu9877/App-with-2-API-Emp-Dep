import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

import { ToastrService } from 'ngx-toastr';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {


  filterTerm!:string;

  constructor(public service:SharedService , private toastr:ToastrService) { }


  ngOnInit(): void {
    this.service.refreshEmpList();

  }

 // populateForm(selectedRecord:BookDetail){
   // this.service.formData=selectedRecord;
    //console.log(this.populateForm);

  //}
  populateForm(selectedRecord: Employee){
    this.service.formData1 = Object.assign({}, selectedRecord);
      }

      onDelete(id:number){
          if(confirm('are you sure ?'))
          {
        this.service. deleteEmployee(id).subscribe(
          res => {
            this.service.refreshEmpList();
            this.toastr.success('Successfully')

          }
        );
      }
    }


}
