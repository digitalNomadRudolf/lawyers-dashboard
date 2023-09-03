import mongoose from "mongoose";
const clientTypes = ["Individual", "Business"];
const isContactPersonRequired = ["Business"];

const ClientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: clientTypes,
      required: true,
    },
    contactPerson: {
      type: String,
      required: isContactPersonRequired,
    },
    email: {
      type: String,
      required: true,
    },
    phone: String,
    address: {
      street: String,
      city: String,
      state: String,
      zipcode: String,
    },
  },
  {
    timestamps: true,
  }
);

const Client = mongoose.model("Client", ClientSchema);
export default Client;
