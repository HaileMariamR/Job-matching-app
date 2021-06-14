import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJobComponent } from './add-job/add-job.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ApplicationDashboardComponent } from './application-dashboard/application-dashboard.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { AuthGuard } from './AuthGuard/auth.guard';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { HiringManagerComponent } from './hiring-manager/hiring-manager.component';
import { HomeComponent } from './home/home.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobStatusComponent } from './job-status/job-status.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes =[
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "register", component: RegisterComponent},
  {path: "AllJobs", component: AllJobsComponent, canActivate: [AuthGuard]},
  {path: "employeeLogin", component: EmployeeLoginComponent},
  {path: "employeeData", component: EmployeeDataComponent},
  {path: "addJob", component: AddJobComponent},
  {path:"Applicant" , component:ApplicantComponent},
  {path:"AllJobs/:id" , component:JobDetailsComponent},
  {path:"App-Dashboard" , component:ApplicationDashboardComponent},
  {path: "employeeLogin/:id", component: AppDashboardComponent},
  {path: "AllJobs/:id/ApplyNow", component: ApplyNowComponent},
  {path: "JobStatus", component: JobStatusComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
