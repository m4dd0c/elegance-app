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

    await Product.create(data);

    revalidatePath("/products");
    revalidatePath("/admin");

    return { success: true };
  } catch (error) {
    console.error("Failed to create product:", error);
    throw new Error("Failed to create product");
  }
}

export const getAllProducts = async () => {
  try {
    await connectDB();

    const products = await Product.find();

    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw new Error("Failed to fetch products");
  }
};

export const getSingleProduct = async ({ id }: { id: string }) => {
  try {
    if (!id) return null;
    await connectDB();

    const products = await Product.findById(id);

    return products;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    throw new Error("Failed to fetch product");
  }
};

export const deleteSingleProduct = async ({ id }: { id: string }) => {
  try {
    if (!id) return null;

    await connectDB();

    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.error("Failed to fetch product:", error);
    throw new Error("Failed to fetch product");
  }
};
