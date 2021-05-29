import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrlEmployee = "http://localhost:5000/api/employees"
  private _registerUrlEmployer = "http://localhost:5000/api/employers"
  private _loginUrlEmployee = "http://localhost:5000/api/loginEmployee"
  private _loginUrlEmployer = "http://localhost:5000/api/loginEmployer"


  constructor(private http: HttpClient) { }
  

  registerEmployee(employee){
    return this.http.post<any>(this._registerUrlEmployee, employee)
  }
  registerEmployer(employer){
    return this.http.post<any>(this._registerUrlEmployer, employer)
  }
  loginEmployee(employee){
    return this.http.post<any>(this._loginUrlEmployee, employee)
  }
  loginEmployer(employer){
    return this.http.post<any>(this._loginUrlEmployer, employer)
  }
  loggedIn(){
    return !!localStorage.getItem("token")
  }
  LogOutUser(){
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    localStorage.removeItem("differ")
    localStorage.removeItem("userid")

  }
  getToken(){
    var value = localStorage.getItem("username");
    return value
  }
  isApplicants(){
    return !!localStorage.getItem("differ")
  }
  getValue(){
    var value = localStorage.getItem("userid");
    return value
  }
}
