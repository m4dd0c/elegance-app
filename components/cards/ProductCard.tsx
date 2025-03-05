import React from "react";
import Link from "next/link";
import fallback from "@/assets/fallback.png";
import { motion } from "framer-motion";
import Image from "next/image";

interface iProduct {
  id: string;
  name: string;
  image: string;
  category: string;
  featured: boolean;
}

const ProductCard = ({
  product,
  index,
}: {
  product: iProduct;
  index: number;
}) => {
  return (
    <motion.div
      key={product?.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <div className="overflow-hidden">
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={product?.image ?? fallback}
            alt={product?.name ?? "product-image"}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
          {product?.featured && (
            <div className="absolute top-2 right-2 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
              Featured
            </div>
          )}
        </div>
        <div className="py-1">
          <h3 className="text-sm uppercase">{product?.name}</h3>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs uppercase text-muted-foreground">
              {product?.category}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
