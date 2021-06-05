import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../JobService/job.service';

@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.css']
})
export class AppDashboardComponent implements OnInit {
  jobs = [];
  constructor(private route: ActivatedRoute, private _jobservice: JobService) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this._jobservice.getAllJobs()
    .subscribe
      (
        res=>{
          this.jobs = res.filter(jobs=>jobs.posted_by==id);
        }, 
        err=>console.log(err)
      )
  }

}
