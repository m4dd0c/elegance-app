"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/constants/data";
import ProductCard from "@/components/cards/ProductCard";
import { getAllProducts } from "@/lib/actions/productAction";
import { useToast } from "@/hooks/use-toast";
import { iProduct } from "@/types";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [featuredProducts, setFeaturedProducts] = useState<iProduct[] | []>();
  const { toast } = useToast();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        if (res && res.products)
          setFeaturedProducts(res.products.filter((el) => el.featured));
      })
      .catch((e) => {
        toast({
          title: e?.message || "Something went wrong",
          description: "Failed to fetch products",
        });
      });
  }, [toast]);

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
            {featuredProducts &&
              featuredProducts?.map((product, index) => (
                <ProductCard
                  index={index}
                  key={product._id}
                  product={product}
                />
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
              Available Collections
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Explore our carefully curated collections designed for every room
              in your home.
            </p>
          </div>
          <div className="w-full h-full space-y-2">
            <div className="grid gap-2 grid-cols-2 max-sm:grid-cols-1">
              <div className="h-full w-full">
                <div>
                  <Image
                    src={
                      "https://res.cloudinary.com/dgdbctcqt/image/upload/v1741683215/dine-3_c10aju.jpg"
                    }
                    alt="image-1"
                    height={1080}
                    width={1080}
                    className="h-96 w-full object-cover"
                  />
                </div>
              </div>
              <div className="h-full w-full">
                <div className="sm:rounded-tr-[4rem] overflow-hidden">
                  <Image
                    src={
                      "https://res.cloudinary.com/dgdbctcqt/image/upload/v1741683259/sofa-d_jq2vhz.jpg"
                    }
                    alt="image-2"
                    height={1080}
                    width={1080}
                    className="h-96 w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-2 grid-cols-3 max-sm:grid-cols-1">
              <div className="h-full w-full sm:rounded-bl-[4rem] overflow-hidden">
                <Image
                  src={
                    "https://res.cloudinary.com/dgdbctcqt/image/upload/v1741683151/chair-f_ucek1e.jpg"
                  }
                  alt="image-2"
                  height={1080}
                  width={1080}
                  className="h-96 w-full object-cover"
                />
              </div>
              <div className="h-full w-full">
                <Image
                  src={
                    "https://res.cloudinary.com/dgdbctcqt/image/upload/v1741683262/mirror-a3_b137cp.jpg"
                  }
                  alt="image-2"
                  height={1080}
                  width={1080}
                  className="h-96 w-full object-cover"
                />
              </div>
              <div className="h-full w-full">
                <Image
                  src={
                    "https://res.cloudinary.com/dgdbctcqt/image/upload/v1741683197/chair-a2_qlna8j.jpg"
                  }
                  alt="image-2"
                  height={1080}
                  width={1080}
                  className="h-96 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-playfair text-3xl font-bold md:text-4xl">
              Why Choose Mahesh Handicrafts
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
                title: "Customization Options",
                description:
                  "Tailor your furniture to your style with a range of customizable finishes, fabrics, and sizes.",
                icon: "🎨",
              },
              {
                title: "Best Quality",
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
              Mahesh Handicrafts.
            </p>
          </div>
          <Carousel className="mx-auto max-w-5xl">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial._id}>
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
