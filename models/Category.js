import mongoose from "mongoose";
const ObjectID = mongoose.Schema.Types.ObjectId;

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    color: {
      type: String,
    },
  },
);

export default mongoose.model("Category", categorySchema);