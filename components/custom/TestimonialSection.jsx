'use client';

import { Typography } from '@mui/material';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Satisfied Customer',
    content:
      'This product truly helped me manage my health. The quality is outstanding!',
    image: '/boy.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Happy Client',
    content:
      'Excellent service and effective products. I highly recommend this brand.',
    image: '/girl1.jpg',
  },
  {
    id: 3,
    name: 'Lucy Wilson',
    title: 'Loyal Customer',
    content:
      'Reliable and trustworthy. I have been using their products for years.',
    image: '/girl2.jpg',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Typography variant="h3" className="text-4xl md:text-5xl font-bold mb-8 text-center">
          What Our Customers Say
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="dark:bg-gray-900 bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <Typography variant='h6' className="text-lg font-semibold">{testimonial.name}</Typography>
                  <Typography variant='h6' className="text-sm text-gray-500">{testimonial.title}</Typography>
                </div>
              </div>
              <Typography variant='h6' className="text-gray-700 text-base dark:text-gray-300">{testimonial.content}</Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
