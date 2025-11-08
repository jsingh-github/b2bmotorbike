export default function PodiumClub() {
  return (
    <section className="bg-red-600 py-16 px-4">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          JOIN THE PODIUM CLUB
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Get exclusive access to new products and special offers
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 w-full md:w-auto px-6 py-3 rounded text-black outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-red-600 font-bold py-3 px-8 rounded hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap">
            SIGN UP NOW
          </button>
          <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-red-600 transition-colors duration-300 whitespace-nowrap">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
}
