"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "@/lib/service/connectDB";
import Product from "../model/product";

export async function createProdluct(data: {
  name: string;
  category: string;
  image: string;
  description: string;
  featured: string;
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
