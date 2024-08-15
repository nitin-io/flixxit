const config = {
  mongo: {
    uri: process.env.MONGO_URI || "mongodb://192.168.1.1:27017/db_flixxit"
  }
}

export default config;