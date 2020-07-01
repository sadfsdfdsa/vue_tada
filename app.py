from flask import Flask, render_template
from flask_jwt_extended import JWTManager
from flask_compress import Compress

from database import Database
from routes import api


def create_app():
    # configuring for VUE
    flask_app = Flask(__name__, static_url_path='', static_folder='static', template_folder='static')
    # config
    flask_app.config.from_object('config.Config')
    # JWT
    JWTManager(flask_app)
    # COMPRESSING
    Compress(flask_app)
    # register API blueprint
    flask_app.register_blueprint(api, url_prefix='/api/')
    # init Database connection
    Database.init()

    # index page
    @flask_app.route('/')
    def index():
        return render_template('index.html')

    # force render vue anyway for correct vue-router working
    @flask_app.errorhandler(404)
    def page_not_found(e):
        return render_template('index.html')

    return flask_app


app = create_app()

if __name__ == '__main__':
    app.run()
