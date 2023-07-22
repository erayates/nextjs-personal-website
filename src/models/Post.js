import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    }

  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);
