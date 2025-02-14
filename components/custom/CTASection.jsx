'use client';

import Link from 'next/link';
import { Button, Container, Grid, Typography, Paper } from '@mui/material';
import { ArrowForward, Bolt, Build } from '@mui/icons-material';

export default function CTASection() {
  return (
    <section className="relative py-16 px-6 my-16 bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-3xl overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10"></div>

      <Container maxWidth="lg" className="relative z-10 text-center">
        {/* Heading */}
        <Typography variant="h3" className="font-bold mb-4">
          Enhance Your Health with Premium Products
        </Typography>
        <Typography variant="h6" className="text-gray-100 mb-8">
          Discover our high-quality medical essentials designed for your well-being.
        </Typography>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <Link href="/products">
            <Button
              variant="contained"
              size="large"
              className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 shadow-lg"
              endIcon={<ArrowForward />}
            >
              Shop Now
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outlined"
              size="large"
              className="border-white text-white hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Button>
          </Link>
        </div>

      </Container>
    </section>
  );
}
