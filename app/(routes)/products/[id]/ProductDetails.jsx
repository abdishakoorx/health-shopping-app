"use client";
import { Button, Grid, Typography, IconButton, Rating, Divider } from '@mui/material';
import { ArrowBack, ShoppingCart, Favorite } from '@mui/icons-material';
import Image from 'next/image';
import { categories } from '@/data/products';
import { useCart } from '@/app/context/CartContext';

export default function ProductDetails({ product }) {
    const { addToCart } = useCart();
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-4">
                </div>

                <Grid container spacing={4} className="p-6">
                    {/* Image Gallery */}
                    <Grid item xs={12} md={6}>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="relative h-96 w-full rounded-lg overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                                {[1, 2, 3, 4].map((img) => (
                                    <div key={img} className="relative h-20 rounded-md overflow-hidden cursor-pointer">
                                        <Image
                                            src={product.image}
                                            alt={`${product.title} ${img}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Grid>

                    {/* Product Details */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" className="text-gray-800 dark:text-white mb-4 font-bold">
                            {product.title}
                        </Typography>

                        <div className="flex items-center gap-2 mb-4">
                            <Rating value={4.5} precision={0.5} readOnly className="text-yellow-400" />
                            <Typography className="text-gray-600 dark:text-gray-300">
                                (128 reviews)
                            </Typography>
                        </div>

                        <Typography variant="h4" className="text-primary dark:text-blue-400 mb-6">
                            kes {product.price}
                        </Typography>

                        <Typography className="text-gray-600 dark:text-gray-300 mb-8">
                            {product.description}
                        </Typography>

                        <Divider className="my-6 bg-gray-200 dark:bg-gray-700" />

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div>
                                <Typography className="text-gray-500 dark:text-gray-400 mb-2">Category:</Typography>
                                <Typography className="text-gray-800 dark:text-gray-200">
                                    {categories.find(c => c.id === product.category)?.name}
                                </Typography>
                            </div>
                            <div>
                                <Typography className="text-gray-500 dark:text-gray-400 mb-2">Stock:</Typography>
                                <Typography className="text-green-600 dark:text-green-400">
                                    In Stock (25+)
                                </Typography>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<ShoppingCart />}
                                className="bg-primary hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white flex-1 py-3"
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </Button>
                            <IconButton className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20">
                                <Favorite />
                            </IconButton>
                        </div>

                        <Divider className="my-8 bg-gray-200 dark:bg-gray-700" />

                        {/* Product Features */}
                        <div className="space-y-4">
                            <Typography variant="h5" className="text-gray-800 dark:text-white mb-4">
                                Product Features
                            </Typography>
                            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                                <li>Premium quality materials</li>
                                <li>Clinically tested</li>
                                <li>Hypoallergenic formula</li>
                                <li>12-month warranty</li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>

                {/* Reviews Section */}
                <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                    <Typography variant="h5" className="text-gray-800 dark:text-white mb-6">
                        Customer Reviews
                    </Typography>

                    <div className="space-y-6">
                        {[1, 2, 3].map((review) => (
                            <div key={review} className="border-b border-gray-200 dark:border-gray-700 pb-6">
                                <div className="flex items-center gap-4 mb-2">
                                    <Rating value={4} readOnly className="text-yellow-400" />
                                    <Typography className="text-gray-600 dark:text-gray-300">
                                        John D. - August 12, 2023
                                    </Typography>
                                </div>
                                <Typography className="text-gray-800 dark:text-gray-200">
                                    &quot;Excellent product! Really helped with my daily routine. Highly recommend!&quot;
                                </Typography>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}