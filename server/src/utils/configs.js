const config = {
  port: process.env.PORT || 3001,
  mongo: {
    uri: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/db_flixxit"
  }
}

export default config;