import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="py-16 px-6 bg-gradient-to-r from-primary to-secondary rounded-lg dark:from-primary/50 dark:to-secondary/50">
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-12">
                <div className="md:w-1/2 text-white dark:text-foreground">
                    <Typography variant="h2" className="mb-4 font-extrabold text-black dark:text-white">
                        Trusted Healthcare Solutions, Delivered to You
                    </Typography>
                    <Typography variant="h6" className="mb-8 text-gray-300 dark:text-gray-400">
                        Explore our wide range of premium medical essentials, designed for your well-being.
                    </Typography>

                    <Link href={"/products"}>
                        <Button
                            variant="contained"
                            className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-full"
                        >
                            Shop Now
                        </Button>
                    </Link>
                </div>
                <div className="md:w-1/2">
                    <Image
                        height={800}
                        width={800}
                        src="/hero.jpg"
                        alt="Healthcare products"
                        className="rounded-lg shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
}