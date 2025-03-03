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
                details: ["123 Furniture Lane", "Portland, OR 97205"],
              },
              {
                icon: <Phone className="h-6 w-6" />,
                title: "Call Us",
                details: ["+1 (555) 123-4567"],
              },
              {
                icon: <Mail className="h-6 w-6" />,
                title: "Email Us",
                details: ["info@elegancefurniture.com"],
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: "Opening Hours",
                details: ["Mon-Sat: 10am - 7pm", "Sunday: 11am - 5pm"],
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
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
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
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Custom Order" id="custom" />
                          <Label htmlFor="custom">Custom Order</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Support" id="support" />
                          <Label htmlFor="support">Support</Label>
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
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h2 className="font-playfair text-2xl font-bold md:text-3xl">
                Visit Our Showroom
              </h2>
              <p className="mt-4 text-muted-foreground">
                Experience our furniture in person at our flagship showroom.
              </p>
              <div className="mt-8 aspect-square h-full w-full overflow-hidden rounded-lg bg-muted">
                {/* This would be a map in a real implementation */}
                <div className="flex h-full w-full items-center justify-center bg-muted p-8 text-center">
                  <div>
                    <MapPin className="mx-auto h-12 w-12 text-muted-foreground" />
                    <p className="mt-4 text-lg font-medium">
                      123 Furniture Lane, Portland, OR 97205
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      Interactive map would be displayed here
                    </p>
                  </div>
                </div>
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
                question: "Do you offer design consultations?",
                answer:
                  "Yes, we offer complimentary design consultations at our showroom. Our design experts can help you select the perfect pieces for your space and provide layout recommendations.",
              },
              {
                question: "What is your delivery policy?",
                answer:
                  "We offer white-glove delivery service for all orders. Delivery is free for orders over $1,500 within the continental US. Our team will assemble and place your furniture exactly where you want it.",
              },
              {
                question: "Can I customize my furniture?",
                answer:
                  "Absolutely! Many of our pieces can be customized with different fabrics, finishes, and dimensions. Please contact us for more information about custom orders.",
              },
              {
                question: "What is your return policy?",
                answer:
                  "We offer a 30-day return policy for standard items in original condition. Custom orders are non-returnable. Please refer to our Returns & Exchanges page for complete details.",
              },
              {
                question: "How long does shipping take?",
                answer:
                  "Shipping times vary depending on the item and your location. In-stock items typically ship within 1-2 weeks. Custom orders may take 8-12 weeks. You'll receive an estimated delivery date at checkout.",
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

