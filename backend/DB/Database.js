import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export const connectDB = async (req, res) => {
    const db = process.env.MONGO_URL;

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// export const connectDB = async () => {
//   try {
//     const db = process.env.MONGO_URL;

//     if (!db) {
//       throw new Error("MONGO_URL is not defined in environment variables");
//     }

//     const { connection } = await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

//     console.log(`MongoDB Connected: ${connection.host}`);
//   } catch (error) {
//     console.error(`Error connecting to MongoDB: ${error.message}`);
//     process.exit(1); // Exit the process with failure
//   }
// };
