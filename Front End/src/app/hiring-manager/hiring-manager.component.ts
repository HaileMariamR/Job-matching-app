import { Component, OnInit } from '@angular/core';
import { JobService } from '../JobService/job.service';

@Component({
  selector: 'app-hiring-manager',
  templateUrl: './hiring-manager.component.html',
  styleUrls: ['./hiring-manager.component.css']
})
export class HiringManagerComponent implements OnInit {

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
