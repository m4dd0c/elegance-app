"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Minus, Plus, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { products } from "@/lib/constants/data";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // In a real application, you would fetch this data from an API
  const product = products.find((p) => p.id === params.id) || products[0];

  const images = [
    product.image,
    "https://images.unsplash.com/photo-1616486701797-0f33f61038ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1616486701944-5fc1e11ddb42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
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
                  alt={`${product.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="font-playfair text-3xl font-bold md:text-4xl">
              {product.name}
            </h1>
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < 4 ? "fill-primary text-primary" : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                (128 reviews)
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Free shipping on orders over $100
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Description</h3>
            <p className="text-muted-foreground">
              {/* TODO: uncomment me  */}
              {/* {product?.description} */}
              Handcrafted with attention to detail, this piece showcases the
              finest materials and traditional techniques passed down through
              generations. Each item is unique and tells its own story through
              intricate patterns and textures.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="font-semibold">Quantity</span>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="flex-1">
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="mr-2 h-4 w-4" />
              Save
            </Button>
            <Button size="lg" variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="details">Product Details</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="mt-6">
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
                    <p className="text-muted-foreground">
                      Premium quality wood, brass fittings
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Dimensions</h4>
                    <p className="text-muted-foreground">
                      L: 30cm x W: 20cm x H: 15cm
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Weight</h4>
                    <p className="text-muted-foreground">1.5 kg</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Care Instructions</h4>
                    <p className="text-muted-foreground">
                      Wipe clean with a soft, dry cloth
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="shipping" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
                <CardDescription>
                  Details about shipping and return policies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Delivery</h4>
                  <p className="text-muted-foreground">
                    Free standard shipping on orders over $100. Estimated
                    delivery time: 5-7 business days.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Returns</h4>
                  <p className="text-muted-foreground">
                    30-day return policy. Items must be unused and in original
                    packaging.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
                <CardDescription>
                  See what our customers are saying
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="border-b pb-6 last:border-0">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-2">
                            <div className="font-semibold">John Doe</div>
                            <div className="text-sm text-muted-foreground">
                              2 months ago
                            </div>
                          </div>
                          <div className="mt-1 flex">
                            {[...Array(5)].map((_, j) => (
                              <Star
                                key={j}
                                className={`h-4 w-4 ${
                                  j < 4
                                    ? "fill-primary text-primary"
                                    : "text-muted"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-muted-foreground">
                        Beautiful craftsmanship! The attention to detail is
                        amazing, and it looks even better in person.
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
