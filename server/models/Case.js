import mongoose from "mongoose";

const CaseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 5,
    },
    description: {
      type: String,
      required: true,
      min: 50,
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: Date,
    status: {
      type: String,
      enum: ["Open", "Closed", "Pending"],
      default: "Open",
    },
    documents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Document" }],
  },
  { timestamps: true }
);

const Case = mongoose.model("Case", CaseSchema);
export default Case;
