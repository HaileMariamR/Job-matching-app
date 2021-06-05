import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../JobService/job.service';

@Component({
  selector: 'app-job-status',
  templateUrl: './job-status.component.html',
  styleUrls: ['./job-status.component.css']
})
export class JobStatusComponent implements OnInit {

  job:any;
  constructor(private route: ActivatedRoute, private _jobservice: JobService) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this._jobservice.getAllJobs()
    .subscribe
      (
        res=>{
          this.job = res.find(job=>job.jobId==id);
          console.log(this.job);
        }, 
        err=>console.log(err)
      )
      
  }

}
