const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `Mongo DB connect ho dyi🤩: ${conn.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(`Error while connecting to Mongo Db🥲: \n${error}`.red);
    process.exit(1);
  }
};

const disconnectMongoDB = async () => {
  try {
    await mongoose.connection.close();
    console.log("Mongo DB da connection katt ditta gya ay😌.");
    process.exit(0);
  } catch (error) {
    console.error("Error closing MongoDB connection🤐:", error);
    process.exit(1);
  }
};

module.exports = { connectToDB, disconnectMongoDB };
