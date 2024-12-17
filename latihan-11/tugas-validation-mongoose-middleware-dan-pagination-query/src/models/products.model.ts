import mongoose, { Types } from "mongoose";

export interface Product {
  name: string;
  description: string;
  images: string[];
  price: number;
  qty: number;
  categoryId: Types.ObjectId;
  createdAt: string;
  updatedAt: string;
  _id?: Types.ObjectId;
}

const Schema = mongoose.Schema;

const ProductsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
      min: [1, "Minimal qty adalah 1"],
    },
    slug: {
      type: String,
      unique: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

ProductsSchema.pre("save", function (next) {
  const product = this;

  if (!product.slug) {
    product.slug = product.name.toLowerCase().split(" ").join("-");
  }

  next();
});

const ProductsModel = mongoose.model("Products", ProductsSchema);

export default ProductsModel;
