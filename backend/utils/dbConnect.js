import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const mongoString = process.env.DATABASE_URL;
    await mongoose.connect(mongoString, {  
      useUnifiedTopology: true,
      useNewUrlParser: true,

    });
    console.log('Database Connected');
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

export default dbConnect;