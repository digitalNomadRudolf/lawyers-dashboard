import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import casesRoutes from "./routes/cases.js";
import registerRoutes from "./routes/register.js";
import loginRoutes from "./routes/login.js";
import cron from "node-cron";
import Register from "./models/Register.js";

// Configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
// Allow making API calls from another server
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/register", registerRoutes);
app.use("/login", loginRoutes);
app.use("/cases", casesRoutes);

// Clear up expired tokens
const cleanupExpiredTokens = async () => {
  const now = new Date();
  await Register.deleteMany({ tokenExpiration: { $lt: now } });
};

// Schedule the cron job to run daily at a specific time
cron.schedule("0 0 * * *", async () => {
  try {
    await cleanupExpiredTokens();
    console.log("Expired tokens cleaned up successfully.");
  } catch (error) {
    console.error("Error cleaning up expired tokens: ", error);
  }
});

// Mongoose setup
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
