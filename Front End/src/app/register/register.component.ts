import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../AuthService/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = 'FinalJobMatching';
  
  constructor(private _auth : AuthService, 
              private _router: Router){}

  registerEmployeeData = {username: '', email: '', address: '', password: ''}
  registerEmployerData = {username: '', email: '', password: '', address: ''}
  ngOnInit(){}
  registerEmployee(){
    this._auth.registerEmployee(this.registerEmployeeData)
    .subscribe(
      res=> {
        console.log(res)
        this._router.navigate(["/employeeLogin"])
      },
      err=>console.log(err)
      )
  }
  registerEmployer(){
    this._auth.registerEmployer(this.registerEmployerData)
    .subscribe(
      res=> {
        console.log(res)
        this._router.navigate(["/employeeLogin"])
      },
      err=>console.log(err)
      )
  }

}
