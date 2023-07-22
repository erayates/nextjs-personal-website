import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      // To avoid warnings
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    // Exit with failure
    process.exit(1);
  }
};

export default connectDB;
