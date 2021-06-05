from flask import Flask,Blueprint 
from settings import *
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = SQLALCHEMY_TRACK_MODIFICATIONS
from employee import employee_blueprint;
from employer import employer_blueprint;
from job import job_blueprint;
from jobApplication import job_application_blueprint

app.register_blueprint(employee_blueprint)
app.register_blueprint(employer_blueprint)
app.register_blueprint(job_blueprint)
app.register_blueprint(job_application_blueprint)
# this is for the login form key










