import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {  FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './AuthService/auth.service';
import { JobService } from './JobService/job.service'
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './AuthGuard/auth.guard';
import { TokenInterceptorService } from './TokenInterceptor/token-interceptor.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { AddJobComponent } from './add-job/add-job.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { HiringManagerComponent } from './hiring-manager/hiring-manager.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { JobStatusComponent } from './job-status/job-status.component';
import { ApplicationDashboardComponent } from './application-dashboard/application-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    EmployeeLoginComponent,
    HomeComponent,
    EmployeeDataComponent,
    AddJobComponent,
    HiringManagerComponent,
    ApplicantComponent,
    AppDashboardComponent,
    JobDetailsComponent,
    AllJobsComponent,
    DashboardComponent,
    ApplyNowComponent,
    JobStatusComponent,
    ApplicationDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCarouselModule.forRoot()
  ],
  providers: [AuthService, AuthGuard, JobService, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
