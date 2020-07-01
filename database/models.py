from database import Database


# example model
class User(object):
    # creating new user
    # -- schema
    def __init__(self, name: str):
        # create process is not doing any checks
        # u must do all verifications yourself
        self.name = name
        self.id = 1

    # for json serializing
    @property
    def serialize(self) -> dict:
        return {'name': self.name}

    # for json serializing many users
    @classmethod
    def serialize_many(cls, users: list = None) -> list:
        return [user.serialize for user in users]

    # getter interface
    @staticmethod
    def get(id: int = None, name: str = None) -> ['User', None]:
        if id is not None:
            return User.__get_by_id(id)
        elif name is not None:
            return User.__get_by_name(name)
        return None

    # getter by id
    @staticmethod
    def __get_by_id(id: int) -> ['User', None]:
        # with Database.conn.cursor() as cursor:
        return User("1")

    # getter by name
    @staticmethod
    def __get_by_name(name: str) -> ['User', None]:
        # with Database.conn.cursor() as cursor:
        return None
