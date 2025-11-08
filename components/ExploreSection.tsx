export default function ExploreSection() {
  const categories = [
    {
      title: 'RIDER SHOWCASE',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    },
    {
      title: 'GIFT GUIDE',
      image: 'https://images.unsplash.com/photo-1558617140-ff0fe7d1debb?w=400',
    },
    {
      title: 'FORMULA EVERYTHING',
      image: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=400',
    },
    {
      title: 'LUNAR COLLECTION',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400',
    },
    {
      title: 'MX BOOTS IN NEW COLORS',
      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400',
    },
  ];

  return (
    <section className="py-12 px-4 container mx-auto">
      <h2 className="text-3xl font-bold mb-8">Explore</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative h-64 overflow-hidden rounded-lg group cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundImage: `url('${category.image}')` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white font-bold text-sm md:text-base">
                {category.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
