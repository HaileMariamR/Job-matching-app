
from imports import *
employer_blueprint = Blueprint("employer_blueprint", __name__,url_prefix="")

employer_schema = EmployerSchema()
employers_schema = EmployerSchema(many=True)
employer = api.model("Employer",{
    'username':fields.String("Employee name"),
    'email':fields.String("Email"),
    'password':fields.String("password"),
    'address':fields.String("address")
})
#crud operations for employee start
@api.route("/api/loginEmployer")
class EmployeeResource(Resource):
    "This endpoint is for authenticating employer"
    @api.expect(employer)
    @api.response(201,"Successfuly created new logedin!")
    def post(self):
        # this is for submiting the form to check the tokens
        if request.is_json:
            email = request.json['email']
            password = request.json['password']
        else:
            email = request.form['email']
            password = request.form['password']
        test=Employer.query.filter_by(email=email, password=password).first()
        if test:
            access_token = create_access_token(identity=email)
            currentUser={"email":test.email , "userID":test.employerId}
            
            return jsonify(message="login successful",username = currentUser, access_token=access_token)
        else:
            return "Wrong email or password", 401 

#crud operations for employer start
@api.route("/api/employers")
class EmployerResource(Resource):
    def get(self):
        "This request prints all employers"
        employer = Employer.query.all()
        return employers_schema.dump(employer)

    @api.expect(employer)
    @api.response(201,"Successfuly created new Employer!")
    def post(self):
        """This request creates new employer"""
        employer = Employer()
        email = request.json['email']
        test=Employer.query.filter_by(email=email).first()
        if test:
            return None, 404
        else:
            employer.username = request.json['username']
            employer.email = request.json['email']
            employer.password = request.json['password']
            employer.address = request.json['address']
            db.session.add(employer)
            db.session.commit()
            return employer_schema.dump(employer),201
@api.route("/api/employers/<int:id>")
class EmployerResource(Resource):
    def get(self,id):
        "This request returns particular employer"
        employer=Employer.query.filter_by(employerId=id).first()
        return employer_schema.dump(employer)
    @api.expect(employer)
    @api.response(204, 'Employer details successfully updated.')
    def put(self,id):
        "updates employer details"
        employer = Employer.query.filter_by(employerId=id)
        employer.name = request.json['name']
        employer.email = request.json['email']
        employer.company = request.json['company']
        employer.address = request.json['address']
        db.session.add(employer)
        db.session.commit()
        return employee_schema.dump(employer)
    def delete(self,id):
        "deletes particular employer"
        employer = Employer.query.filter_by(employerId=id).first()
        if employer is None:
            return "employer is not found",404
        db.session.delete(employer)
        db.session.commit()
        return "Employer  successfully deleted.",204
#crud operations for employer end
