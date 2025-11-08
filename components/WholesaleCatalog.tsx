interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  badge?: string;
  colors?: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'FOX ATTACK MID THERMO JERSEY 23',
    price: '$145.00',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400',
    badge: 'BEST SELLER',
  },
  {
    id: 2,
    name: 'MTB UNION 2 IN 1 SHORT',
    price: '$125.00 - $145.00',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
  },
  {
    id: 3,
    name: 'DEFEND 23 JERSEY',
    price: '$109.95',
    image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=400',
  },
  {
    id: 4,
    name: 'MX BOOTS BLACK',
    price: '$399.95 - $549.95',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400',
  },
  {
    id: 5,
    name: 'MTB DEFEND BOOT',
    price: '$265.00 - $365.00',
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400',
    badge: 'NEW',
  },
  {
    id: 6,
    name: 'UNION SHOE - BLACK',
    price: '$150.00 - $165.00',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
  },
  {
    id: 7,
    name: 'V1 HELMET - BLUE CHROME',
    price: '$369.95 - $449.95',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
  },
  {
    id: 8,
    name: 'SPEEDFRAME PRO HELMET',
    price: '$329.95',
    image: 'https://images.unsplash.com/photo-1565626424178-c699f6601afd?w=400',
    colors: 4,
  },
];

export default function WholesaleCatalog() {
  return (
    <section className="py-16 px-4 bg-black text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">WHOLESALE CATALOG</h2>
          <div className="h-1 bg-red-600 w-32"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-800">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-bold text-sm mb-2 group-hover:text-red-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{product.price}</p>
                {product.colors && (
                  <div className="flex gap-2">
                    {[...Array(product.colors)].map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border border-gray-600 bg-gray-700"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-white text-black font-bold py-3 px-8 rounded hover:bg-gray-200 transition-colors duration-300">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
}
