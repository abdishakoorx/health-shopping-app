'use client';

import { categories } from '@/data/products';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoriesSection() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <Typography variant="h3" className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
                    Shop by Category
                </Typography>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                    {categories.map((category) => (
                        <Link 
                            key={category.id} 
                            href="/products" 
                            className="group block rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
                        >
                            <div className="relative aspect-square">
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    className="object-cover w-full h-full"
                                    sizes="(max-width: 768px) 50vw, 20vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 flex items-end p-4">
                                    <h3 className="text-white text-lg md:text-xl font-semibold transition-opacity group-hover:opacity-90">
                                        {category.name}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}