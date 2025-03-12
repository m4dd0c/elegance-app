"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/cards/ProductCard";
import { products } from "@/lib/constants/data";

// Categories
const categories = [
  "All",
  "Chairs",
  "Tables",
  "Sofas",
  "Mirrors",
  "Watches",
  "Bedroom",
  "Other",
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    const lowerSearch = searchQuery.toLowerCase();

    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(lowerSearch);
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="font-playfair text-4xl font-bold md:text-5xl">
              Our Products
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Discover our collection of meticulously crafted furniture pieces
              designed to transform your space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Search Bar */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredProducts.map((product, index) => (
                <ProductCard product={product} index={index} key={product.id} />
              ))}
            </div>
          ) : (
            <div className="my-12 text-center">
              <h3 className="text-xl font-medium">No products found</h3>
              <p className="mt-2 text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
              <Button
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
