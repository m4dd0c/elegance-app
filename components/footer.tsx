"use client";
import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-muted/40">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-bold">
              Mahesh Handicrafts
            </h3>
            <p className="text-muted-foreground">
              Crafting beautiful spaces with timeless furniture designs since
              2010.
            </p>
            <div className="flex space-x-4">
              <Link
                title="Instagram"
                href="https://instagram.com/mahesh_art_interior"
                target="_blank"
              >
                <Instagram className="h-7 w-7" color="purple" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                target="_blank"
                title="Whatsapp"
                href="https://wa.me/919876543210?text=Hello%20there,%20Have%20a%20chat%20with%20us!"
              >
                <MessageCircle className="h-7 w-7" color="green" />
                <span className="sr-only">Whatsapp</span>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-medium">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/products" className="hover:text-primary">
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/living-room"
                  className="hover:text-primary"
                >
                  Living Room
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/bedroom"
                  className="hover:text-primary"
                >
                  Bedroom
                </Link>
              </li>
              <li>
                <Link href="/collections/dining" className="hover:text-primary">
                  Dining
                </Link>
              </li>
              <li>
                <Link href="/collections/office" className="hover:text-primary">
                  Office
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-medium">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-medium">Rules</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-primary">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between space-y-4 text-sm text-muted-foreground md:flex-row md:space-y-0">
          <p>© 2025 Mahesh Handicrafts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
