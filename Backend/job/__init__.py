
from imports import *

job_blueprint = Blueprint("job_blueprint", __name__,url_prefix="")
job_schema = JobSchema()

jobs_schema = JobSchema(many=True)

#for job model
job = api.model("Job", {
    'name':fields.String(),
    'posted_date':fields.DateTime(),
    'posted_by':fields.String(),
    'category':fields.String(),
    'location':fields.String(),
    'career_level':fields.String(),
    'employment_type':fields.String(),
    'description':fields.String,
    'job_requirements':fields.String(),
})


#crud operations for jobs start
@api.route("/api/jobs",methods=["GET","POST"])
# @jwt_required()
class JobResource(Resource):
    def get(self):
        """This request returns all jobs"""
        jobs = Job.query.all()
        return jobs_schema.dump(jobs)
    @api.expect(job)
    @api.response(201,"Successfuly created new job!")
    def post(self):
        """This request creates new job"""
        #create new job
        job = Job()
        job.name = request.json['name']
        job.posted_date = date.today()
        job.category = request.json['category']
        job.location = request.json['location']
        job.career_level = request.json['career_level']
        job.employment_type = request.json['employment_type']
        job.description = request.json['description']
        job.job_requirements = request.json['job_requirements']
        job.posted_by = request.json['posted_by']
        db.session.add(job)
        db.session.commit()


        return job_schema.dump(job)


@api.route('/api/jobs/<int:id>')
class JobResource(Resource):
    def get(self, id):
        '''
        This request return single job
        '''  
        job = Job.query.filter_by(jobId=id).first()
        return job_schema.dump(job)
    @api.expect(job)
    @api.response(204, 'Job details successfully updated.')
    def put(self, id):
        """
        This request updates a particular job.
        """
        job = Job.query.filter_by(jobId=id).first()
        job.name = request.json['name']
        job.description = request.json['description']
        job.posted_date = request.json['posted_date']
        job.posted_by = request.json['posted_by']

        db.session.add(job)
        db.session.commit()

        return job_schema.dump(job)

    @api.response(204, 'Job  successfully deleted.')
    def delete(self, id):
        """
        This request deletes a particular job.
        """
        job = Job.query.filter_by(jobId=id).first()
        if job is None:
            return None, 404
        db.session.delete(job)
        db.session.commit()
        return None, 204

    #search for jobs
@api.route("/api/jobs/<string:employername>")
class JobsResource(Resource):
    def get(self,employername):
        "This request returns employee interesed area jobs."
        job = Job.query.filter(Job.posted_by == employername).all()
        return jobs_schema.dump(job),200

@api.route("/api/jobs/<string:jobstring>")
class JobsResource(Resource):
    def get(self,jobstring):
        "This request returns employee interesed area jobs."
        job = Job.query.filter(Job.name.contains(jobstring)).all()
        return jobs_schema.dump(job),200