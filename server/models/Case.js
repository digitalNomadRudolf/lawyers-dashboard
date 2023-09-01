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
    date: Date,
  },
  { timestamps: true }
);

const Case = mongoose.model("Case", CaseSchema);
export default Case;
