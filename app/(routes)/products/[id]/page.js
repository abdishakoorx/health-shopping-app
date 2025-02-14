// app/product/[id]/page.js
import { products } from '@/data/products';
import ProductDetails from './ProductDetails';
import { notFound } from 'next/navigation';

export default function Page({ params }) {
  const product = products.find(p => p.id === Number(params.id));

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}

export async function generateStaticParams() {
  return products.map(product => ({
    id: product.id.toString(),
  }));
}