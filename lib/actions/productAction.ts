"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "@/lib/service/connectDB";
import Product from "../model/product";

export async function createProduct(data: {
  name: string;
  category: string;
  images: string[];
  description: string;
  featured: boolean;
  material: string;
  length: string;
  width: string;
  height: string;
  weight: string;
  instruction: string;
}) {
  try {
    await connectDB();

    const newProduct = await Product.create(data);

    revalidatePath("/products");
    revalidatePath("/admin");

    return { success: true };
  } catch (error) {
    console.error("Failed to create product:", error);
    return { error: "Failed to create product" };
  }
}

export const getAllProducts = async () => {
  try {
    await connectDB();

    const products = await Product.find();

    const plainProducts = products.map((product) => ({
      ...product.toObject(),
      _id: product._id.toString(),
    }));

    return { products: plainProducts };
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return { error: "Failed to fetch products" };
  }
};

export const getSingleProduct = async ({ id }: { id: string }) => {
  try {
    if (!id) return { error: "Invalid product ID" };

    await connectDB();

    const product = await Product.findById(id);

    if (!product) return { error: "Product not found" };

    return { data: { ...product.toObject(), _id: product._id.toString() } };
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return { error: "Failed to fetch product" };
  }
};

export const deleteSingleProduct = async ({ id }: { id: string }) => {
  try {
    if (!id) return { error: "Invalid product ID" };

    await connectDB();

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) return { error: "Product not found" };

    revalidatePath("/products");
    revalidatePath("/admin");

    return { success: true };
  } catch (error) {
    console.error("Failed to delete product:", error);
    return { error: "Failed to delete product" };
  }
};
