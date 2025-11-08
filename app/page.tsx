import Hero from '@/components/Hero';
import ExploreSection from '@/components/ExploreSection';
import CategoryBanner from '@/components/CategoryBanner';
import WholesaleCatalog from '@/components/WholesaleCatalog';
import PodiumClub from '@/components/PodiumClub';

export default function Home() {
  return (
    <main>
      <Hero />
      <ExploreSection />
      
      {/* Moto Section */}
      <CategoryBanner
        title="Moto"
        subtitle="Performance gear for the track"
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600"
        buttons={[
          { text: 'SHOP NOW', variant: 'primary' },
          { text: 'SHOP MOTO', variant: 'secondary' },
        ]}
      />

      {/* Mountain Bike Section */}
      <CategoryBanner
        title="Mountain Bike"
        subtitle="Trail-ready equipment"
        image="https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=1600"
        buttons={[
          { text: 'SHOP NOW', variant: 'primary' },
          { text: 'SHOP BASICS', variant: 'secondary' },
        ]}
      />

      {/* Wholesale Catalog */}
      <WholesaleCatalog />

      {/* Podium Club Signup */}
      <PodiumClub />
    </main>
  );
}
