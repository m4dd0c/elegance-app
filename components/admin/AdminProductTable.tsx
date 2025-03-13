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
import { useToast } from "@/hooks/use-toast";
import {
  deleteSingleProduct,
  getAllProducts,
} from "@/lib/actions/productAction";
import { useState, useEffect, useCallback } from "react";
import { Loader, Trash, Eye } from "lucide-react";
import { iProduct } from "@/types";

export function AdminProductTable() {
  const { toast } = useToast();
  const [loading, setLoading] = useState("");
  const [products, setProducts] = useState<iProduct[] | []>([]);

  const handleDelete = async (id: string) => {
    setLoading(id);
    try {
      await deleteSingleProduct({ id });
      toast({
        title: "Success",
        description: "Product deleted successfully",
      });
      fetchProducts();
    } catch (error) {
      toast({
        title: "Failed",
        description: "Product could not be deleted",
      });
    } finally {
      setLoading("");
    }
  };

  const fetchProducts = useCallback(() => {
    getAllProducts()
      .then((res) => {
        if (res && res.products) setProducts(res.products);
      })
      .catch((e) => {
        toast({
          title: e?.message || "Something went wrong",
          description: "Failed to fetch products",
        });
      });
  }, [toast]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Table>
      <TableCaption>A list of your all Products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">Series</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="w-[100px]">Category</TableHead>
          <TableHead className="w-[50px]">Featured</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products &&
          products.length > 0 &&
          products.map((product, idx) => (
            <TableRow key={product?._id?.toString()}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell className="font-medium">{product?.name}</TableCell>
              <TableCell>{product?.category}</TableCell>
              <TableCell>
                <span
                  className={`block h-3 w-3 mx-auto rounded-full ${product && product?.featured === "true" ? "bg-green-500" : "bg-red-500"}`}
                />
              </TableCell>
              <TableCell className="flex justify-end items-center gap-2">
                <Button
                  asChild
                  variant={"secondary"}
                  className="flex items-center justify-center gap-1"
                >
                  <Link href={`/products/${product?._id?.toString()}`}>
                    <Eye size={15} />
                    <p>View</p>
                  </Link>
                </Button>
                <Button
                  variant={"destructive"}
                  className="flex items-center justify-center gap-1"
                  disabled={loading === product?._id}
                  onClick={() => handleDelete(product?._id)}
                >
                  {loading === product?._id ? (
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
