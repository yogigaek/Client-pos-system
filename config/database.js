const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const { dbHost, dbPass, dbName, dbPort, dbUser } = require("./config");
const url = `mongodb://${dbUser}:${dbPass}@cluster0-shard-00-00.otzzu.mongodb.net:27017,cluster0-shard-00-01.otzzu.mongodb.net:27017,cluster0-shard-00-02.otzzu.mongodb.net:27017/${dbName}?ssl=true&replicaSet=atlas-p99q7b-shard-0&authSource=admin&retryWrites=true&w=majority`;
// const url1 = `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(url);
const db = mongoose.connection;

module.exports = db;
