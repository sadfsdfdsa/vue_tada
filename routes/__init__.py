from flask import Blueprint

# register Blueprint for api
api = Blueprint('api', __name__, url_prefix='/api/')

# ignore PEP
import routes.routes
