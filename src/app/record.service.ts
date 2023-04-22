import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  

  constructor(private h1:HttpClient) { }

  isuserloggedin:any;
  
  login(username:string,password:string)
    {

      this.isuserloggedin = (username == 'silamkar@gmail.com' &&  password == 'shital' );
      
      localStorage.setItem("isuserloggedin",this.isuserloggedin ? "true" : "false" );
      
      return (this.isuserloggedin);
    }
}
