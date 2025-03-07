"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { products } from "@/lib/constants/data";
import Link from "next/link";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0);

  // In a real application, you would fetch this data from an API
  const product = products.find((p) => p.id === params.id) || products[0];

  const url = window.location.href;
  return (
    <div className="container mx-auto px-4 pt-28 pb-8 md:pb-12">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={product?.image[selectedImage]}
              alt={product?.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {product?.image?.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square overflow-hidden rounded-md ${
                  selectedImage === index
                    ? "ring-2 ring-primary ring-offset-2"
                    : ""
                }`}
              >
                <Image
                  src={image}
                  alt={`${product?.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="font-playfair text-3xl font-bold md:text-4xl">
            {product?.name}
          </h1>

          <div className="space-y-4">
            <h3 className="font-semibold">Description</h3>
            <p className="text-muted-foreground">{product?.description}</p>
          </div>

          {/* Product Details Tabs */}
          <Card>
            <CardHeader>
              <CardTitle>Product Specifications</CardTitle>
              <CardDescription>
                Detailed information about the product
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold">Materials</h4>
                  <p className="text-muted-foreground">{product?.material}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Dimensions</h4>
                  <p className="text-muted-foreground">
                    L: {product?.length}cm x W: {product?.width}cm x H:{" "}
                    {product?.height}cm
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Weight</h4>
                  <p className="text-muted-foreground">{product?.weight} kg</p>
                </div>
                <div>
                  <h4 className="font-semibold">Care Instructions</h4>
                  <p className="text-muted-foreground">
                    {product?.instruction}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex flex-wrap gap-4">
            <Button className="flex-1 gap-2" asChild>
              <Link
                target="_blank"
                href={`https://api.whatsapp.com/send?phone=919166692200&text=${encodeURIComponent(
                  `Hey, I want to make a query about the product (${url})`,
                )}`}
              >
                <MessageCircle className="h-7 w-7 text-green-500" />
                <h1>Make an Enquiry</h1>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
