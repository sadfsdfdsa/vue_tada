import psycopg2
from config import DatabaseConfig as Dc


class Database:
    conn = None

    @classmethod
    def init(cls) -> None:
        cls.conn = 'test'
        # cls.conn = psycopg2.connect(dbname=Dc.dbname,
        #                             user=Dc.user,
        #                             password=Dc.password,
        #                             host=Dc.host)
