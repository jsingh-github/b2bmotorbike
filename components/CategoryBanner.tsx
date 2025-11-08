interface CategoryBannerProps {
  title: string;
  subtitle: string;
  image: string;
  buttons: { text: string; variant: 'primary' | 'secondary' }[];
}

export default function CategoryBanner({ title, subtitle, image, buttons }: CategoryBannerProps) {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-start justify-end text-white px-4 container mx-auto pb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
          {title}
        </h2>
        <p className="text-lg md:text-xl mb-6">{subtitle}</p>
        <div className="flex flex-wrap gap-4">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`font-bold py-3 px-8 rounded transition-colors duration-300 ${
                button.variant === 'primary'
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-transparent border-2 border-white hover:bg-white hover:text-black'
              }`}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
