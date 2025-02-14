import { Typography } from '@mui/material';
import { products } from '@/data/products';
import ProductCard from '../ui/ProductCard';

export default function FeaturedProducts() {
  return (
    <section className="py-12 bg-background dark:bg-darkBackground">
      <div className="container mx-auto">
        <Typography variant="h3" className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Featured Products
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}