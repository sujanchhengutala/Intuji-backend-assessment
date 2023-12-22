const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect("mongodb://0.0.0.0/blog");
    console.log(`${conn.connection.host}`);
  } catch (e) {
    console.log(`error is ${e}`.bgRed.wihte);
  }
};
module.exports = connectDb;
