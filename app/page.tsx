"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  collections,
  featuredProducts,
  testimonials,
} from "@/lib/constants/data";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Modern living room with elegant furniture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/30" />
        </div>
        <div className="container relative z-10 mx-auto flex h-full items-center px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="font-playfair text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Elevate Your Space With Timeless Elegance
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Discover our collection of meticulously crafted furniture that
              combines style, comfort, and functionality.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/products">Shop Collection</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-playfair text-3xl font-bold md:text-4xl">
              Featured Products
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Explore our most popular pieces, each designed with exceptional
              craftsmanship and attention to detail.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {product.category}
                      </span>
                      <div className="flex items-center">
                        <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
                        <span className="text-sm">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="mt-1 font-semibold">${product.price}</p>
                    <Button className="mt-4 w-full" variant="outline" asChild>
                      <Link href={`/products/${product.id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/products" className="group">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-playfair text-3xl font-bold md:text-4xl">
              Shop by Collection
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Explore our carefully curated collections designed for every room
              in your home.
            </p>
          </div>
          <Tabs defaultValue="living-room" className="w-full">
            <TabsList className="mb-8 flex w-full justify-center space-x-2 overflow-x-auto">
              {collections.map((collection) => (
                <TabsTrigger
                  key={collection.id}
                  value={collection.id}
                  className="px-4 max-sm:px-3 py-[6px]"
                >
                  {collection.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {collections.map((collection) => (
              <TabsContent
                key={collection.id}
                value={collection.id}
                className="mt-0"
              >
                <div className="grid gap-8 md:grid-cols-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative aspect-square overflow-hidden rounded-lg md:aspect-auto md:h-[500px]"
                  >
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center"
                  >
                    <h3 className="font-playfair text-3xl font-bold">
                      {collection.name} Collection
                    </h3>
                    <p className="mt-4 text-lg text-muted-foreground">
                      {collection.description}
                    </p>
                    <Button className="mt-8" size="lg" asChild>
                      <Link href={`/collections/${collection.id}`}>
                        Explore Collection
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-playfair text-3xl font-bold md:text-4xl">
              Why Choose Elegance
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We&apos;re committed to providing exceptional furniture with
              unmatched quality and service.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Sustainable Materials",
                description:
                  "We source eco-friendly materials to create furniture that's beautiful and environmentally responsible.",
                icon: "🌱",
              },
              {
                title: "Expert Craftsmanship",
                description:
                  "Our skilled artisans bring decades of experience to create furniture built to last generations.",
                icon: "🔨",
              },
              {
                title: "Free Delivery",
                description:
                  "Enjoy free white-glove delivery service on all orders over $1,500 within the continental US.",
                icon: "🚚",
              },
              {
                title: "10-Year Warranty",
                description:
                  "We stand behind our quality with an industry-leading warranty on all our furniture.",
                icon: "🛡️",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-playfair text-3xl font-bold md:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Hear from our satisfied customers about their experience with
              Elegance furniture.
            </p>
          </div>
          <Carousel className="mx-auto max-w-5xl">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="p-4">
                    <Card className="overflow-hidden">
                      <CardContent className="p-6 text-center md:p-8">
                        <div className="mx-auto mb-6 h-16 w-16 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <p className="mb-6 text-lg italic text-muted-foreground">
                          {testimonial.content}
                        </p>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4 max-sm:-translate-x-1/2 max-md:left-1/2 max-md:absolute">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
}
