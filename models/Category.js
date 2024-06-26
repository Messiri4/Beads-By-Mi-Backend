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

categorySchema.virtual("id").get(function () {
  return this._id.toHexString();
});

categorySchema.set("toJSON", {
  virtuals: true,
});

export default mongoose.model("Category", categorySchema);
