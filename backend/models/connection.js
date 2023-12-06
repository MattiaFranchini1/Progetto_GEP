// MongoDB 4.0.0 version (it works)
const { MongoClient } = require("mongodb");

//mongodb Atlas address
require("dotenv").config({ path: "config/database.env" });
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (db) {
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};