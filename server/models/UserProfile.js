import mongoose from "mongoose";

const UserProfileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 4,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 12,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "admin",
      required: true,
    },
    avatar: String,
    address: {
      city: String,
      zipcode: String,
    },
    phoneNumber: String,
  },
  { timestamps: true }
);

const UserProfile = mongoose.model("UserProfile", UserProfileSchema);
export default UserProfile;
