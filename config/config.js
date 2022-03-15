require('dotenv').config()


module.exports = {
  "development": {
    "username": 'root',
    "password": '123@Qwe',
    "database": 'dh',
    "host": 'localhost',
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "port": process.env.PORT,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "port": process.env.PORT,
    "dialect": "mysql"
  }
}

