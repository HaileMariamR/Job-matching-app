from flask_marshmallow import Marshmallow
from models import *

marsh = Marshmallow()

class JobSchema(marsh.Schema):
    class Meta:
        fields=("jobId","name","posted_date", "posted_by", "category", "location", "career_level", "employment_type", "job_requirements","description")
        model = Job

class EmployeeSchema(marsh.Schema):
    class Meta:
        fields=("username","email","password")
        model = Employee

class EmployerSchema(marsh.Schema):
    class Meta:
        fields=("username","email","address","password","jobs_posted")
        model = Employer


class ApplicationSchema(marsh.Schema):
    class Meta:
        fields = ("applicationId","applicantName","applicationName","status","sumittedDate")
        model = JobApplication


