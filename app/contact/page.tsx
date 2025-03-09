"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // TODO: send actual email

    // Show success toast
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "General Inquiry",
      message: "",
    });
  };

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
              Contact Us
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              We&apos;d love to hear from you. Whether you have a question about
              our products, need design advice, or want to visit our showroom,
              our team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <MapPin className="h-6 w-6" />,
                title: "Visit Us",
                details: [
                  "100 Fit, Sobhagpura Meera Nagar ",
                  "Near Parmanand Garden Udaipur Raj.",
                  "Zipcode: 313001",
                ],
              },
              {
                icon: <Phone className="h-6 w-6" />,
                title: "Call Us",
                details: ["+91 91666-92200", "+91 94613-88049 "],
              },
              {
                icon: <Mail className="h-6 w-6" />,
                title: "Email Us",
                details: ["maheshartcraft0@gmail.com"],
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: "Opening Hours",
                details: ["Mon-Sun: 10am - 7pm"],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex gap-12 flex-row max-md:flex-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <h2 className="font-playfair text-2xl font-bold md:text-3xl">
                Send Us a Message
              </h2>
              <p className="mt-4 text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Subject</Label>
                    <RadioGroup
                      value={formData.subject}
                      onValueChange={handleRadioChange}
                      className="mt-2"
                    >
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="General Inquiry"
                            id="general"
                          />
                          <Label htmlFor="general">General Inquiry</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="Product Question"
                            id="product"
                          />
                          <Label htmlFor="product">Product Question</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>
                </div>
                <Button type="submit">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col w-full"
            >
              <h2 className="font-playfair text-2xl font-bold md:text-3xl">
                Visit Our Showroom
              </h2>
              <p className="mt-4 text-muted-foreground">
                Experience our furniture in person at our flagship showroom.
              </p>

              <div className="mt-8 aspect-square relative border h-full w-full overflow-hidden rounded-lg flex items-center justify-center text-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1813.638927318461!2d73.70871041578906!3d24.61410660000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s100%20fit%2C%20sobhagpura%20meera%20nagar%2C%20near%20parmanand%20garden!5e0!3m2!1sen!2sin!4v1741507904025!5m2!1sen!2sin"
                  loading="lazy"
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="font-playfair text-3xl font-bold md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Find answers to common questions about our products and services.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6">
            {[
              {
                question: "How can I inquire about a product?",
                answer:
                  "You can easily inquire about any product by filling out the inquiry form on the product page. Our team will get back to you with details as soon as possible.",
              },
              {
                question: "Where can I see your products in person?",
                answer:
                  "You can visit our showroom to explore our furniture collection in person. Contact us to schedule an appointment or check our showroom location on the website.",
              },
              {
                question: "Do you provide customization options?",
                answer:
                  "Yes, many of our furniture pieces can be customized in terms of materials, finishes, and sizes. Reach out to us with your requirements, and we’ll be happy to assist.",
              },
              {
                question: "Can I get design recommendations?",
                answer:
                  "Absolutely! Our team offers expert design advice to help you choose the right pieces for your space. Feel free to contact us for a consultation.",
              },
              {
                question: "What materials do you use?",
                answer:
                  "We use high-quality, sustainable materials to craft our furniture, ensuring durability and aesthetic appeal. You can find material details on each product page.",
              },
              {
                question: "How do I maintain my furniture?",
                answer:
                  "Proper care depends on the material of your furniture. We provide maintenance guidelines for each piece to help you keep it in excellent condition for years.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border bg-card p-6"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-2 text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
