export default function Hero() {
  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600")',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-wider">
          BOLD BY DESIGN
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Winter collection 2026
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded transition-colors duration-300">
          SHOP NOW
        </button>
      </div>
    </section>
  );
}
