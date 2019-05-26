from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config


# Flask-SQLAlchemy 插件
db = SQLAlchemy()
# Flask-Migrate 插件
migrate = Migrate()

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # 启动CORS
    CORS(app)
    # 初始化Flask-SQLAlchemy
    db.init_app(app)
    # 初始化Flask-Migrate
    migrate.init_app(app, db)

    # 注册blueprint
    from app.api import bp as api_bp
    app.register_blueprint(api_bp, url_prefix='/api')

    return app

from app import models
