import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { AuthService } from '../AuthService/auth.service';

@Injectable({
  providedIn: 'root'
})

export class JobService {
  private _jobsUrl = "http://localhost:5000/api/jobs"
  private _jobsUrlCurrentUser= `http://localhost:5000/api/jobs/${this.auth.getToken()}`
  private _applyUrl = "http://localhost:5000/api/jobapplications"
  
  constructor(private http: HttpClient , private auth:AuthService) { }

  getJobs(){
    return this.http.get<any>(this._jobsUrlCurrentUser)
  }
  getJobApplications(){
    return this.http.get<any>(this._applyUrl)
  }
  getAllJobs(){
    return this.http.get<any>(this._jobsUrl)
  }
  addJob(job){
    return this.http.post<any>(this._jobsUrl, job)
  }
  apply(job){
    return this.http.post<any>(this._applyUrl, job)
  }
}
