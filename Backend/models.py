from flask_sqlalchemy import SQLAlchemy
from datetime import date

db = SQLAlchemy()

class Employee(db.Model):
    __tablename__='employees'
    employeeId = db.Column(db.Integer, primary_key=True,autoincrement=True)
    username = db.Column(db.String,nullable=False)
    email = db.Column(db.String)
    address = db.Column(db.String,nullable=False)
    password = db.Column(db.String,nullable=False)

class Employer(db.Model):
    __tablename__ = 'employers'
    employerId = db.Column(db.Integer, primary_key=True,autoincrement=True)
    username = db.Column(db.String,nullable=False)
    email = db.Column(db.String)
    password = db.Column(db.String,nullable=False)
    address = db.Column(db.String,nullable=False)
    jobs_posted = db.relationship("Job",backref="employer",lazy=True)

class Job(db.Model):
    __tablename__="jobs"
    jobId = db.Column(db.Integer, primary_key=True,autoincrement=True)
    name = db.Column(db.String,nullable=False)
    posted_date=db.Column(db.String,nullable=False)
    category=db.Column(db.String,nullable=False)
    location = db.Column(db.String,nullable=False)
    career_level=db.Column(db.String,nullable=False)
    employment_type = db.Column(db.String,nullable=False)
    description = db.Column(db.String,nullable=False)
    job_requirements=db.Column(db.String,nullable=False)
    posted_by = db.Column(db.Integer,db.ForeignKey("employers.employerId"),nullable=False)


class JobApplication(db.Model):
    __tablename__ ="JobApplications"
    applicationId = db.Column(db.Integer, primary_key=True,autoincrement=True)
    applicantName = db.Column(db.String,db.ForeignKey("employees.username"),nullable=False)
    applicationName = db.Column(db.String,db.ForeignKey("jobs.name"),nullable=False)
    description = db.Column(db.String,nullable=False)
    status = db.Column(db.String,default="pending")
    submittedDate = db.Column(db.String,default=str(date.today()))


    
