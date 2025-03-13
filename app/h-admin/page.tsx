"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminForm } from "@/components/admin/AdminForm";
import { AdminProductTable } from "@/components/admin/AdminProductTable";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { isAdmin } from "@/lib/actions/isAdmin";
import LoadingScreen from "@/components/LoadingScreen";

export default function AdminPage() {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const checkAdmin = async () => {
      setLoading(true);
      if (searchParams) {
        const key = searchParams.get("key");
        try {
          const res = await isAdmin({ key });
          setAuth(res);
        } catch (error) {
          setAuth(false);
        }
      }
      setLoading(false);
    };
    checkAdmin();
  }, [searchParams]);

  useEffect(() => {
    if (!loading && !auth) {
      router.replace("/");
    }
  }, [auth, loading, router]);

  if (loading) return <LoadingScreen />;
  if (!auth) return null; // User is being redirected

  return (
    <Tabs defaultValue="Products" className="py-20 container mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Add Product">Add Product</TabsTrigger>
        <TabsTrigger value="Products">See all Products</TabsTrigger>
      </TabsList>
      <TabsContent value="Add Product">
        <Card>
          <CardHeader>
            <CardTitle>Add new Product</CardTitle>
            <CardDescription>
              Add new products to your furniture collection.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <AdminForm />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="Products">
        <Card>
          <CardHeader>
            <CardTitle>See all your products</CardTitle>
            <CardDescription>
              See all your products and perform operations as you like.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <AdminProductTable />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
