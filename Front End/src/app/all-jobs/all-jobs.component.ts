import { Component, OnInit } from '@angular/core';
import { JobService } from '../JobService/job.service';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css']
})
export class AllJobsComponent implements OnInit {

  jobs = [];
  constructor(private _jobservice: JobService) { }
  ngOnInit(): void {
    this._jobservice.getAllJobs()
    .subscribe
      (
        res=>this.jobs = res, 
        err=>console.log(err)
      )
  }
}
