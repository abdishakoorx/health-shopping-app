import HeroSection from '@/components/custom/HeroSection';
import FeaturedProducts from '@/components/custom/FeaturedProducts';
import TestimonialSection from '@/components/custom/TestimonialSection';
import CategoriesSection from '@/components/custom/CategoriesSection';
import CTASection from '@/components/custom/CTASection';
import Footer from '@/components/custom/Footer';

export default function Home() {
  return (
    <main>
      <section className='px-4 md:px-10 space-y-16 my-6'>
        <HeroSection />
        <FeaturedProducts />
        <CategoriesSection />
        <TestimonialSection />
        <CTASection />
      </section>
      
      <Footer />
    </main>
  );
}
