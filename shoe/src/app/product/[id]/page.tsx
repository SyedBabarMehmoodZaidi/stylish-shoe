// /app/product/[id]/page.tsx
import { products } from "@/data/products";
import ProductClient from "@/components/ProductClient";

type Props = { params: { id: string } };

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return <div className="p-8">Product not found</div>;
  return <ProductClient product={product} />;
}
