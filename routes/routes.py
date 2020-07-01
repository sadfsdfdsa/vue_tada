from routes import api
from flask_jwt_extended import jwt_required
from flask import jsonify
from database.models import User


# example route
@api.route('/test/', methods=['GET'])
# @jwt_required
def func() -> str:
    user = User.get(id=1)
    if user is not None:
        return jsonify(user.serialize)
    return jsonify({'error': 1})
