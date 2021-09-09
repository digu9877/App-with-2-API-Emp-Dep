import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { Department } from '../department.model';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  filterTerm!:string;

  constructor(public service:SharedService , private toastr:ToastrService) { }


  ngOnInit(): void {
    this.service.refreshDepList();
  }

 // populateForm(selectedRecord:BookDetail){
   // this.service.formData=selectedRecord;
    //console.log(this.populateForm);

  //}
  populateForm(selectedRecord: Department){
    this.service.formData = Object.assign({}, selectedRecord);
      }

      onDelete(id:number){
          if(confirm('are you sure ?'))
          {
        this.service. deleteDepartment(id).subscribe(
          res => {
            this.service.refreshDepList();
            this.toastr.success('Successfully')

          },
          err => {console.log(err);}
        );
      }
    }


}
