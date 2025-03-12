import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  images: [
    {
      type: String,
      trim: true,
    },
  ],
  featured: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  material: {
    type: String,
  },
  length: {
    type: String,
    trim: true,
  },
  width: {
    type: String,
    trim: true,
  },
  height: {
    type: String,
    trim: true,
  },
  weight: {
    type: String,
    trim: true,
  },
  instruction: {
    type: String,
    trim: true,
  },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
