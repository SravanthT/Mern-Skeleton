const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "W12GhkVaiTag1029sh-sra-#enwpeYOUR_secret_key",
    mongoUri: process.env.MONGODB_URI ||
      process.env.MONGO_HOST || "mongodb+srv://sravanth_dev:kr4HZlurtRJkWbHJ@edyodabackend.iu0es.mongodb.net/?retryWrites=true&w=majority" ||
      'mongodb://' + (process.env.IP || 'localhost') + ':' +
      (process.env.MONGO_PORT || '27017')
  }

export default config
