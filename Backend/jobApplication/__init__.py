from imports import *

job_application_blueprint = Blueprint("job_Application",__name__,url_prefix="")

jobApplicationSchema = ApplicationSchema()
jobApplicationsSchema = ApplicationSchema(many=True)

application = api.model("jobApplication",{
    'applicantName':fields.String("Name of Applicant"),
    'applicationName':fields.String("Name of Application"),
    'description':fields.String("description"),
})


@api.route("/api/jobapplications/<string:username>")
class jobApplication(Resource):
    def get(self,username):
        application = JobApplication.query.filter(JobApplication.applicantName.contains(username)).all()
        return jobApplicationsSchema.dump(application),200

@api.route("/api/jobapplications/<string:jobname>")
class jobApplication(Resource):
    def get(self,username):
        application = JobApplication.query.filter(JobApplication.applicantionName.contains(jobname)).all()
        return jobApplicationsSchema.dump(application),200


@api.route("/api/jobapplications")
class jobApplicationPost(Resource):
    def get(self):
        application = JobApplication.query.all()
        return jobApplicationsSchema.dump(application),200
    @api.expect(application)
    def post(self):
        application = JobApplication()
        application.applicantName = request.json['applicantName']
        application.applicationName = request.json['applicationName']
        application.description = request.json['description']
        db.session.add(application)
        db.session.commit()
        return "Application success!",201


@api.route("/api/jobapplications/<int:id>")
class jobApplicationPut(Resource):
    def put(self, id):
        """
        This request updates a status of application.
        """
        application = jobApplication.query.filter_by(jobId=id).first()
        application.status = "Accepted"
        db.session.add(job)
        db.session.commit()
        return job_schema.dump(job)
    