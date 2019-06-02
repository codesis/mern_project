require('dotenv').config()
const mongoose = require('mongoose')

const CONNECTION_STRING = process.env.DB_URI
// Establish connection to a database and @returns Promise
module.exports.connect = async () => {
  mongoose.connection.on('connected', () => console.log('MongoDB is connected.'))
  mongoose.connection.on('error', err => console.error(`MongoDB error has occurred: ${err}`))
  mongoose.connection.on('disconnected', () => console.log('MongoDB has disconnected.'))

  // if the Node process ends, close the connection
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('MongoDB has disconnected due to application termination.')
      process.exit(0)
    })
  })
  // connect to the server
  return mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true })
}