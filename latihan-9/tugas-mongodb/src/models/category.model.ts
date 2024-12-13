import mongoose, { Types } from "mongoose";

export interface Category {
  _id?: Types.ObjectId;
  name: string;
  createdAt: string;
  updatedAt: string;
}

const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CategoryModel = mongoose.model("Category", CategorySchema);

export default CategoryModel;
