import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { ApiserviceService } from '../service/apiservice.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-child-app',
  templateUrl: './child-app.component.html',
  styleUrls: ['./child-app.component.css'],
})
export class ChildAppComponent {


  apiData:any =[];
  userNameData:any=[];
  getUserByID:any=[];

  postData:any = {};

  
  constructor(private apiservice: ApiserviceService) {}

  ngOnInit(): void { 

    this.getUserData();

    // this.postData = {
    //   name: 'Deepak',
    //   status : true,
    //   Pincode : '12321'
    // }

  } 

// ------------------------------------------getUserData---------------------------------------------
  getUserData(event?:any) {
    console.log(event);
    this.apiservice.getData('/api/v1/users').subscribe(//-----------------doubt
      
      (res:any) => {
        console.log(res);
        this.apiData=res.data.Users;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // ------------------------------------------getUserDataName---------------------------------------------
  getUserDataName(){
    this.apiservice.getData('/api/v1/username').subscribe(

      (res:any)=>{
        console.log(res);
        this.userNameData=res.data.Users;
      },
      (err)=>{
        console.log(err)
      }

    );
  }


  // ------------------------------------------getUserByIDStatus---------------------------------------------
  
  getUserByIDStatus(){ 
    let queryobj=  
      { id: '6288920dc4322d6aecab0515',
       status: true }
    
    this.apiservice.getData('/api/v1/user', queryobj ).subscribe(

      (res:any)=>{
        console.log(res);
        this.getUserByID=res.data.Users;
      },
      (err)=>{
        console.log(err)
      }

    );
  }
submitForm(form : NgForm){
  let data = form.value
  console.log(data)
  this.apiservice.postData('/api/v1/users', data).subscribe(
    (res:any)=>{
      console.log(res);
      if(res.success === true){

        this.ResetForm(form)
      }
    },
    (err)=>{
      console.log(err);
    }
  )
}
ResetForm(form : any){
form.reset();
form.submitted = false
}
  // postUserData() {}
}
