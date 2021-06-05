import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../JobService/job.service';

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.css']
})
export class ApplyNowComponent implements OnInit {
  ApplyNowData = {applicantName: '', applicationName:'', description: ''}
  isShown: boolean = false;
  constructor(private _jobservice: JobService, private _router: Router) { }

  ngOnInit(): void {
  }
  Apply(){
    this._jobservice.apply(this.ApplyNowData)
    .subscribe(
      res=> {
        console.log(res)
        this._router.navigate(["/AllJobs"])
      },
      err=>console.log(err)
      )
  }

}
