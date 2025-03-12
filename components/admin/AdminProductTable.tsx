import ProductCard from "../cards/ProductCard";
import { products } from "@/lib/constants/data";

export function AdminProductTable() {
  return (
    <>
      {products.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard product={product} index={index} key={product._id} />
          ))}
        </div>
      ) : (
        <div className="my-12 text-center">
          <h3 className="text-xl font-medium">No products found</h3>
          <p className="mt-2 text-muted-foreground">
            Please add some products to see them here.
          </p>
        </div>
      )}
    </>
  );
}
