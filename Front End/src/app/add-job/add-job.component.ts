import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../JobService/job.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  addJobData = {name: '', posted_by: '', category:'', location:'', career_level: '', employment_type:'', job_requirements:'',description:''}
  isShown: boolean = false;
  jobs = [];
  constructor(private _jobservice: JobService,
              private _router: Router) { }
  ngOnInit(): void {
    this._jobservice.getJobs()
    .subscribe
      (
        res=>this.jobs = res,
        err=>console.log(err)
      )
  }
  AddJobs(){
    this._jobservice.addJob(this.addJobData)
    .subscribe(
      res=> {
        console.log(res)
        this._router.navigate(["/employeeLogin/:id"])
      },
      err=>console.log(err)
      )
  }

}
