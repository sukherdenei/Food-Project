import mongoose from "mongoose";

export const connetMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || "");
    console.log("MongoDb амжилттай холбогдлоо");
  } catch (error) {
    console.log("MongoDb холбогдоход алдаа гарлаа");
  }
};
