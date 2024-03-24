import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const mongoString = process.env.DATABASE_URL;
    await mongoose.connect(mongoString, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: process.env.DATABASE_NAME // You might want to use a separate environment variable for the database name
    });
    console.log('Database Connected');
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

export default dbConnect;