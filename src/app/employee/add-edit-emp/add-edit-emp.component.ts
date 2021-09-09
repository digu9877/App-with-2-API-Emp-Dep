import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Department } from 'src/app/department/department.model';
import { SharedService } from 'src/app/shared.service';

import { Employee } from '../employee.model';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css'],
  providers:[SharedService]
})
export class AddEditEmpComponent implements OnInit {
  photofilepath: string = "/assets/img/default-image.jpg";
  photofilename:  string='';
  // myForm = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   file: new FormControl('', [Validators.required]),
  //   fileSource: new FormControl('', [Validators.required])
  // });

  fileToUpload!: File ;
  Departmentlist:any=[];
  //  photofilepath:  string='';
  emp: Employee[] = [];
  formData1:Employee = new Employee();


  constructor(public service:SharedService,private toastr:ToastrService) { }
  ngOnInit(): void {
    this.loadDepartmentList();
  }




   loadDepartmentList(){
     this.service.getAllDepartmentNames().subscribe(res=>{
       this.Departmentlist=res;

        this.formData1;

      this.photofilepath=this.service.photoURL+this.photofilename;

     }
       );
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

  insertRecord(form1:NgForm){
    this.service.postEmployee().subscribe(res =>{

      this.resetForm(form1);

      this.service.refreshEmpList();
      this.toastr.success("successfully")
      console.log(res);

    },
    err =>{console.log(err);})

  };


  updateRecord(form1:NgForm){
    this.service.updateEmployee().subscribe(
       res => {
        this.resetForm(form1);
        this.service.refreshEmpList();
        this.toastr.success("successfully")
        console.log(res);




      },
      err => {console.log(err);}
    );
  }


  resetForm(form1:NgForm){
    form1.form.reset();
    this.service.formData1=new Employee();
  }


  // handleFileInput(files: any) {
  //   console.log("File",files)

  //   this.fileToUpload= files?.item(0);
  //   if(this.fileToUpload){

  //   //Show image preview
  //   let reader  = new FileReader();
  //   reader.onload = (event:any) => {
  //     this.imageUrl = event.target.result;
  //   }
  //   reader.readAsDataURL(this.fileToUpload);
  // }
  // }
  onFileChange(event:any) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [fileToUpload] = event.target.files;
      reader.readAsDataURL(fileToUpload);

      reader.onload = () => {

        this.photofilepath = reader.result as string;




      }; }
      const formData:FormData=new FormData();
    formData.append('uploadedfile',this.fileToUpload,this.fileToUpload.name);
    this.service.UploadPhoto(formData).subscribe(data=>{
      this.formData1.photofilename=data.toString();
      this.photofilepath=this.service.photoURL+this.photofilename;
    })




  }

  uploadPhoto(event:any){
    var file=event.target.Files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedfile',file,file.name);
    this.service.UploadPhoto(formData).subscribe(data=>{
      this.formData1.photofilename=data.toString();
      this.photofilepath=this.service.photoURL+this.photofilename;
    })

  }
//   submit(Image:any){

//     this.service.UploadPhoto(this.fileToUpload)
//       .subscribe(res => {
//         console.log(res);
//         Image.value=null;
//         this.photofilepath= "/assets/img/default-image.png";
//         alert('Uploaded Successfully.');
//       })
//   }
// }

  // OnSubmit(Photos: any){
  //  //@ts-ignore
  //  this.service.postFile(this.fileToUpload).subscribe(
  //    data =>{
  //       console.log('done')


  //      Photos.value = null;
  //      this.imageUrl = "/assets/img/default-image.png";
  //    }
  //  );
  //   }

}
