import { Component, OnInit } from '@angular/core';
import { JobService } from '../JobService/job.service';

@Component({
  selector: 'app-application-dashboard',
  templateUrl: './application-dashboard.component.html',
  styleUrls: ['./application-dashboard.component.css']
})
export class ApplicationDashboardComponent implements OnInit {

  jobs = [];
  constructor(private _jobservice: JobService) { }
  ngOnInit(): void {
    this._jobservice.getJobApplications()
    .subscribe
      (
        res=>this.jobs = res, 
        err=>console.log(err)
      )
  }

}
