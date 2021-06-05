import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../JobService/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

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
