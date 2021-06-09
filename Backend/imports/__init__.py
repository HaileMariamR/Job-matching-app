from flask import Flask,render_template, url_for, flash, redirect, request, jsonify
from flask_marshmallow import Marshmallow
from flask_restplus import Resource,Api,fields
from models import *
from datetime import date
from marsh import *
from flask_cors import CORS
from flask_jwt_extended import JWTManager, jwt_required, create_access_token
from flask import Blueprint
from app import app
jwt = JWTManager(app)
app.config['JWT_SECRET_KEY'] = "What is the best secure password"
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
db.init_app(app) # initialize
marsh = Marshmallow(app)
api = Api(app,version="1",title="Job matching Database",description="This is Job matching database")

