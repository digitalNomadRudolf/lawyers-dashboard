import mongoose from "mongoose";

const BillingSchema = new mongoose.Schema(
  {
    case: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Case",
      required: true,
    },
    billedAmount: {
      type: Number,
      required: true,
    },
    billedDate: {
      type: Date,
      default: Date.now(),
    },
    description: String,
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Billing = mongoose.model("Billing", BillingSchema);
export default Billing;
