"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import Link from "next/link";
import { products } from "@/lib/constants/data";
import { useToast } from "@/hooks/use-toast";
import { deleteSingleProduct } from "@/lib/actions/productAction";
import { useState } from "react";
import { Loader, Trash } from "lucide-react";

export function AdminProductTable() {
  const { toast } = useToast();
  const [loading, setLoading] = useState("");

  const handleDelete = async (id: string) => {
    setLoading(id);
    try {
      await deleteSingleProduct({ id });
      toast({
        title: "Success",
        description: "Product deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Failed",
        description: "Product could not be deleted",
      });
    } finally {
      setLoading("");
    }
  };
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead className="w-[100px]">Category</TableHead>
          <TableHead className="w-[50px]">Featured</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <TableRow key={product._id.toString()}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>
                <span
                  className={`block h-3 w-3 mx-auto rounded-full ${product.featured ? "bg-green-500" : "bg-red-500"}`}
                />
              </TableCell>
              <TableCell className="flex justify-end items-center gap-2">
                <Button asChild variant={"secondary"} className="">
                  <Link href={`/products/${product._id}`}>View</Link>
                </Button>
                <Button
                  variant={"destructive"}
                  className="flex items-center justify-center gap-1"
                  disabled={loading === product._id}
                  onClick={() => handleDelete(product._id)}
                >
                  {loading === product._id ? (
                    <Loader size={15} className="animate-spin" />
                  ) : (
                    <Trash size={15} />
                  )}
                  <p className="pl-1">Delete</p>
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
