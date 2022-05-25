import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-child-app',
  templateUrl: './child-app.component.html',
  styleUrls: ['./child-app.component.css'],
})
export class ChildAppComponent {
  apiData:any =[];
  userNameData:any=[];
  getUserByID:any=[];

  // data: Data[] = [
  //   {
  //     customerNo: 1,
  //     name: 'Rahuld Dravid',
  //     address: 'bolg1',
  //     city: 'Banglaore',
  //     state: 'Karnataka',
  //     country: 'India',
  //   },
  //   {
  //     customerNo: 2,
  //     name: 'Sachin Tendulkar',
  //     address: 'bolg2',
  //     city: 'Mumbai',
  //     state: 'Maharastra',
  //     country: 'India',
  //   },
  //   {
  //     customerNo: 3,
  //     name: 'Saurrav Ganguly',
  //     address: 'bolg3',
  //     city: 'Kolkata',
  //     state: 'West Bengal',
  //     country: 'India',
  //   },
  //   {
  //     customerNo: 4,
  //     name: 'Mahendra Singh Dhoni',
  //     address: 'bolg4',
  //     city: 'Ranchi',
  //     state: 'Bihar',
  //     country: 'India',
  //   },
  //   {
  //     customerNo: 5,
  //     name: 'Virat Kohli',
  //     address: 'bolg5',
  //     city: 'Delhi',
  //     state: 'Delhi',
  //     country: 'India',
  //   },
  // ];
  constructor(private apiservice: ApiserviceService) {}

  ngOnInit(): void { 

    this.getUserData();
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

  // postUserData() {}
}
