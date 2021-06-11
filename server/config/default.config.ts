require('dotenv').config()

const {
  NODE_ENV,
  PORT,
  MONGO_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  JWT_SECRET,
  CLIENT_URL_DEV,
  CLIENT_URL_PROD
} = process.env

export {
  NODE_ENV,
  PORT,
  MONGO_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  JWT_SECRET,
  CLIENT_URL_DEV,
  CLIENT_URL_PROD
}
