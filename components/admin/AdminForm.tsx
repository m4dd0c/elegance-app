import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CldUploadWidget } from "next-cloudinary";
import { motion } from "framer-motion";
import { Upload, Image as ImageIcon, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createProduct } from "@/lib/actions/productAction";

const formSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  images: z.array(z.string()).min(1, "Image is required"),
  featured: z.boolean(),
  material: z.string().min(1, "Material is required"),
  length: z.string().min(1, "Length is required"),
  width: z.string().min(1, "Width is required"),
  height: z.string().min(1, "Height is required"),
  weight: z.string().min(1, "Weight is required"),
  instruction: z.string().min(1, "Instruction is required"),
});

export function AdminForm() {
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "",
      images: [],
      featured: false,
      material: "",
      length: "",
      width: "",
      height: "",
      weight: "",
      description: "",
      instruction: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      // sanitize data.images only allow true values
      await createProduct(data);
      toast({
        title: "Success",
        description: "Product created successfully",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Enter product name"
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="instruction">instruction</Label>
            <Input
              id="instruction"
              type="text"
              {...register("instruction")}
              placeholder="Instruction"
            />
            {errors.instruction && (
              <p className="text-sm text-destructive">
                {errors.instruction.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="material">Material</Label>
            <Input
              id="material"
              type="text"
              {...register("material")}
              placeholder="Material"
            />
            {errors.material && (
              <p className="text-sm text-destructive">
                {errors.material.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select onValueChange={(value) => setValue("category", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Chairs">Chairs</SelectItem>
                <SelectItem value="Tables">Tables</SelectItem>
                <SelectItem value="Sofas">Sofas</SelectItem>
                <SelectItem value="Watches">Watches</SelectItem>
                <SelectItem value="Mirrors">Mirrors</SelectItem>
                <SelectItem value="Bedroom">Bedroom</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="text-sm text-destructive">
                {errors.category.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="length">Length</Label>
              <Input
                id="length"
                type="text"
                {...register("length")}
                placeholder="Length in cm"
              />
              {errors.length && (
                <p className="text-sm text-destructive">
                  {errors.length.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                type="text"
                {...register("width")}
                placeholder="Width in cm"
              />
              {errors.width && (
                <p className="text-sm text-destructive">
                  {errors.width.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                type="text"
                {...register("height")}
                placeholder="Height in cm"
              />
              {errors.height && (
                <p className="text-sm text-destructive">
                  {errors.height.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="weight">Weight</Label>
              <Input
                id="weight"
                type="text"
                {...register("weight")}
                placeholder="Weight in kg"
              />
              {errors.weight && (
                <p className="text-sm text-destructive">
                  {errors.weight.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              {...register("description")}
              placeholder="Enter product description"
            />
            {errors.description && (
              <p className="text-sm text-destructive">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Product Image</Label>
            <CldUploadWidget
              uploadPreset="MaheshHandicrafts"
              onSuccess={(result: any) => {
                if (result?.info?.secure_url) {
                  // Retrieve the current images array from the form state
                  const currentImages = getValues("images") || [];

                  // Apply watermark transformation to the uploaded image
                  // const watermarkedImageUrl =
                  //   result.info.secure_url.replace(
                  //     "/upload/",
                  //     "/upload/MaheshHandicrafts/qvtlwzrdi4qjoqjh6alj,w_100,fl_relative,o_50/",
                  //   );

                  // Append the watermarked image URL to the existing array
                  const updatedImages = [
                    ...currentImages,
                    result.info.secure_url,
                  ];

                  // Update the form state with the new array
                  setValue("images", updatedImages as never[]);
                }
                setIsUploading(false);
              }}
              onOpen={() => setIsUploading(true)}
            >
              {({ open }: { open: any }) => (
                <div className="flex flex-col items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => open()}
                    disabled={isUploading}
                    className="w-full"
                  >
                    {isUploading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Upload className="mr-2 h-4 w-4" />
                    )}
                    Upload Image
                  </Button>
                </div>
              )}
            </CldUploadWidget>
            {errors.images && (
              <p className="text-sm text-destructive">
                {errors.images.message}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Add Product to Featured Section
            </label>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <ImageIcon className="mr-2 h-4 w-4" />
            )}
            Add Product
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
