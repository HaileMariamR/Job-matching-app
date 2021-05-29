import { Component, OnInit } from '@angular/core';
import { JobService } from '../JobService/job.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {
  isShown: boolean = false;

  jobs = [];
  constructor(private _jobservice: JobService) { }
  ngOnInit(): void {
    this._jobservice.getJobs()
    .subscribe
      (
        res=>this.jobs = res, 
        err=>console.log(err)
      )
  }

}

