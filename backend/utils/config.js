require('dotenv').config()

const PORT = process.env.PORT
const SECRET = process.env.SECRET
const NODE_ENV = process.env.NODE_ENV
const MONGODB_URI = NODE_ENV === 'test'
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI
const EXPRESS_APP_ADMIN_USERNAME = process.env.EXPRESS_APP_ADMIN_USERNAME
const EXPRESS_APP_ADMIN_FULLNAME = process.env.EXPRESS_APP_ADMIN_FULLNAME
const EXPRESS_APP_ADMIN_PASSWORD = process.env.EXPRESS_APP_ADMIN_PASSWORD

module.exports = {
    PORT,
    MONGODB_URI,
    NODE_ENV,
    SECRET,
    EXPRESS_APP_ADMIN_USERNAME,
    EXPRESS_APP_ADMIN_PASSWORD,
    EXPRESS_APP_ADMIN_FULLNAME
}