import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    shop: [
      'Order Status',
      'Delivery',
      'Returns',
      'Payment Options',
      'B2B Ordering',
    ],
    about: [
      'Fox Racing',
      'Fox Careers',
      'Fox Racing Sustainability',
      'Fox News',
    ],
    products: [
      'Men\'s',
      'Women\'s',
      'Youth\'s',
      'Helmets',
      'Accessories',
    ],
    help: [
      'FAQs',
      'Size Guide',
      'Contact Us',
      'Gift Cards',
      'Store Locator',
    ],
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Shop */}
          <div>
            <h3 className="font-bold mb-4 text-lg">SHOP</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Fox */}
          <div>
            <h3 className="font-bold mb-4 text-lg">ABOUT FOX</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold mb-4 text-lg">PRODUCTS</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold mb-4 text-lg">HELP</h3>
            <ul className="space-y-2">
              {footerLinks.help.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p className="mb-2">© 2025 FOX Racing. All rights reserved.</p>
              <div className="flex flex-wrap justify-center md:justify-end gap-4">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Use</a>
                <a href="#" className="hover:text-white">Cookie Settings</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
