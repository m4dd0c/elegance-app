"use client";
import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-muted/40">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="flex gap-8 justify-between flex-wrap">
          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="max-md:w-[60%]">
                <Image
                  src={logo}
                  alt="logo"
                  height={120}
                  width={120}
                  className="max-md:h-24 w-auto h-32"
                />
                <div className="flex justify-start ml-2 sm:hidden space-x-5">
                  <Link
                    title="Instagram"
                    href="https://instagram.com/mahesh_art_interior"
                    target="_blank"
                  >
                    <Instagram className="h-7 w-7 hover:text-purple-500 text-muted-foreground" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    target="_blank"
                    title="Whatsapp"
                    href={"https://api.whatsapp.com/send?phone=919166692200"}
                  >
                    <MessageCircle className="h-7 w-7 hover:text-green-500 text-muted-foreground" />
                    <span className="sr-only">Whatsapp</span>
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="font-playfair text-xl font-bold">
                  Mahesh Handicrafts
                </h3>
                <p className="text-muted-foreground">
                  Crafting beautiful spaces with
                  <br /> timeless furniture designs since 2010.
                </p>

                <div className="flex max-sm:hidden space-x-5 mt-2">
                  <Link
                    title="Instagram"
                    href="https://instagram.com/mahesh_art_interior"
                    target="_blank"
                  >
                    <Instagram className="h-7 w-7 hover:text-purple-500 text-muted-foreground" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    target="_blank"
                    title="Whatsapp"
                    href="https://wa.me/919876543210?text=Hello%20there,%20Have%20a%20chat%20with%20us!"
                  >
                    <MessageCircle className="h-7 w-7 hover:text-green-500 text-muted-foreground" />
                    <span className="sr-only">Whatsapp</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-right">
            <h2 className="font-playfair text-3xl font-bold">
              Visit Our Showroom
            </h2>
            <p className="mx-auto mt-2 text-muted-foreground">
              Experience our furniture in person and speak with our design
              consultants.
            </p>
            <Button size="lg" className="mt-4" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <div>
            <h4 className="mb-4 font-medium">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/products" className="hover:text-primary">
                  Products
                </Link>
              </li>
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
