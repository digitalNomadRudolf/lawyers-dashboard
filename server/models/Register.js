import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema({
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
  token: {
    type: String,
    unique: true,
  },
  tokenExpiration: Date,
});

const Register = mongoose.model("Register", RegisterSchema);
export default Register;
