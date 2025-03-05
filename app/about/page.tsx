"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-playfair text-4xl font-bold md:text-5xl">
                Our Story
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Founded in 1990, Mahesh Handicrafts began with a simple mission:
                to create beautiful, functional furniture that transforms houses
                into homes. What started as a small workshop has grown into a
                beloved brand known for exceptional craftsmanship and timeless
                design.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Our passion for quality materials and sustainable practices
                drives everything we do. Each piece is thoughtfully designed and
                meticulously crafted to stand the test of time.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-square overflow-hidden rounded-lg md:aspect-auto md:h-[500px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Mahesh Handicrafts workshop"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-playfair text-3xl font-bold md:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              These core principles guide our work and define who we are as a
              company.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Craftsmanship",
                description:
                  "We believe in the value of handcrafted quality and attention to detail in every piece we create.",
              },
              {
                title: "Sustainability",
                description:
                  "We're committed to responsible sourcing and eco-friendly practices that minimize our environmental impact.",
              },
              {
                title: "Innovation",
                description:
                  "We continuously explore new designs and techniques while honoring traditional craftsmanship.",
              },
              {
                title: "Integrity",
                description:
                  "We maintain honest relationships with our customers, partners, and artisans.",
              },
              {
                title: "Community",
                description:
                  "We support local craftspeople and give back to the communities where we work and live.",
              },
              {
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, from customer service to the final product.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg bg-card p-6"
              >
                <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-playfair text-3xl font-bold md:text-4xl">
              Our Journey
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              The story of how Mahesh Handicrafts has evolved over the years.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            {[
              {
                year: "1990",
                title: "The Beginning",
                description:
                  "Mahesh Handicrafts was founded by Michael and Sarah Thompson in their small workshop in Portland, Oregon.",
              },
              {
                year: "2000",
                title: "First Showroom",
                description:
                  "We opened our first showroom, allowing customers to experience our furniture in person.",
              },
              {
                year: "2005",
                title: "Sustainable Initiative",
                description:
                  "We launched our commitment to sustainable practices, ensuring all wood is responsibly sourced.",
              },
              {
                year: "2010",
                title: "National Expansion",
                description:
                  "Mahesh Handicrafts began building nationally, bringing our designs to homes around the world.",
              },
              {
                year: "2020",
                title: "Mission Growth",
                description:
                  "We continue to grow while staying true to our founding principles of quality, sustainability, and beautiful design.",
              },
              {
                year: "2025",
                title: "Online Expansion",
                description:
                  "We expanded our online presence, making our furniture accessible nationwide.",
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-10 pb-10"
              >
                {index !== 6 && (
                  <div className="absolute left-4 top-0 h-full w-px bg-border" />
                )}
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xs font-bold">{index + 1}</span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-muted-foreground">
                    {milestone.year}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-playfair text-3xl font-bold md:text-4xl">
              Meet Our Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              The talented individuals behind Mahesh Handicrafts.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Hitesh Suthar",
                role: "Founder & CEO",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Sarah Thompson",
                role: "Co-Founder & Creative Director",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "David Chen",
                role: "Head of Design",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Emily Rodriguez",
                role: "Master Craftsperson",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto mb-4 aspect-square h-48 w-48 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-lg bg-muted p-8 text-center md:p-12">
            <h2 className="font-playfair text-3xl font-bold md:text-4xl">
              Visit Our Showroom
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Experience our furniture in person and speak with our design
              consultants.
            </p>
            <Button size="lg" className="mt-8" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
