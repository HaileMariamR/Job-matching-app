import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../AuthService/auth.service';


@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {
  loginEmployeeData = {email: '', password: ''}
  loginEmployerData = {email: '', password: ''}
  constructor(private _auth: AuthService,
              private _router: Router
              ) { }
  ngOnInit(): void {
  }

  loginEmployee(){
    this._auth.loginEmployee(this.loginEmployeeData)
    .subscribe(
      res=> {
        console.log(res)
        localStorage.setItem('token', res.access_token)
        localStorage.setItem('username', res.username.email)
        localStorage.setItem('userid', res.username.userID)
        localStorage.setItem('differ', res.differ)
        console.log(res.username.email)
        this._router.navigate(["/AllJobs"])

      },
      err=>console.log(err)
      )
  }
  loginEmployer(){
    this._auth.loginEmployer(this.loginEmployerData)
    .subscribe(
      res=> {
        console.log(res)
        localStorage.setItem('token', res.access_token)
        localStorage.setItem('username', res.username.email)
        localStorage.setItem('userid', res.username.userID)
        this._router.navigate(["/App-Dashboard"])
      },
      err=>console.log(err)
      )
  }
}
