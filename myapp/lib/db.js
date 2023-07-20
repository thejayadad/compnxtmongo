import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("DB CONNECTED");
  } catch (error) {
    console.error("Connection failed:", error.message);
    throw new Error("Connection failed!");
  }
};

export default connect;
