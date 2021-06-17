
from imports import *

employee_blueprint = Blueprint("employee_blueprint", __name__,url_prefix="")
employee_schema = EmployeeSchema()
employees_schema = EmployeeSchema(many=True)
#for employee model

employee = api.model("Employee",{
    'username':fields.String("Employee name"),
    'email':fields.String("Email"),
    'password':fields.String("password"),
    'address':fields.String("Address")
})
#for employer model


#crud operations for employee start
@api.route("/api/employees")
class EmployeeResource(Resource):
    def get(self):
        "This request prints all employees"
        employee = Employee.query.all()
        return employees_schema.dump(employee)

    @api.expect(employee)
    @api.response(201,"Successfuly created new Employee!")
    def post(self):
        """This request creates new employee"""
        employee = Employee()
        email = request.json['email']
        test=Employee.query.filter_by(email=email).first()
        if test:
            return None, 404
        else: 
            employee.username = request.json['username']
            employee.email = request.json['email']
            employee.password = request.json['password']
            employee.address = request.json['address']
            db.session.add(employee)
            db.session.commit()
            return employee_schema.dump(employee),201

#crud operations for employee start
@api.route("/api/loginEmployee")
class EmployeeResource(Resource):
    @api.expect(employee)
    @api.response(201,"Successfuly created new logedin!")
    def post(self):
        """This request creates new employee"""
        employee = Employee()
        if request.is_json:
            email = request.json['email']
            password = request.json['password']
        else:
            email = request.form['email']
            password = request.form['password']
            c_id = request.params['id']
        test=Employee.query.filter_by(email=email, password=password).first();
        # job=Job.query.filter_by(id=c_id).first()
        if test:
            access_token = create_access_token(identity=email)
            currentUser={"email":test.email}
            # return employees_schema.dump(test)
            return jsonify(message="login successful",username=currentUser, access_token=access_token)
        else:
            return "Wrong email or password", 401 
        
@api.route("/api/employees/<int:id>")
class EmployeeResource(Resource):
    def get(self,id):
        "This request returns particular employee"
        employee=Employee.query.filter_by(employeeId=id).first()
        return employee_schema.dump(employee)
    @api.expect(employee)
    @api.response(204, 'Employee details successfully updated.')
    def put(self,id):
        "updates employee details"
        employee = Employee.query.filter_by(employeeId=id)
        employee.username = request.json['username']
        employee.email = request.json['email']
        employee.password = request.json['password']
        db.session.add(employee)
        db.session.commit()
        return employee_schema.dump(employee)
    @api.response(204, 'Employee  successfully deleted.')
    def delete(self,id):
        "deletes particular employee"
        employee = Employee.query.filter_by(employeeId=id)
        if employee is None:
            return None, 404
        db.session.delete(employee)
        db.session.commit()
        return None, 204

#crud operations for employee end
