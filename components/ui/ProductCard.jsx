import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Card className="hover:shadow-xl transition-shadow rounded-xl h-full flex flex-col group overflow-hidden bg-white dark:bg-gray-800">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <CardContent className="flex-1 p-4 space-y-3">
        <Typography
          gutterBottom
          variant="h6"
          className="text-gray-800 dark:text-white font-semibold line-clamp-2"
        >
          {product.title}
        </Typography>

        <Typography
          variant="body2"
          className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4"
        >
          {product.description}
        </Typography>

        <div className="flex items-center justify-between">
          <Typography className="text-accent-dark dark:text-accent text-lg font-bold">
            Kes {product.price.toFixed(2)}
          </Typography>
          <Link href={`/products/${product.id}`} >
            <Button
              variant="outlined"
              size="small"
              className="border-primary dark:border-blue-400 text-primary dark:text-blue-400 hover:bg-primary/10 dark:hover:bg-blue-400/10"
            >
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}