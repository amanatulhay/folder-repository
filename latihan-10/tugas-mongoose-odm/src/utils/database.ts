import mongoose from "mongoose";
import { DATABASE_URL } from "./env";

const connect = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      dbName: "wpu",
    });
    return "Database connected";
  } catch (error) {
    return error;
  }
};

export default connect;
