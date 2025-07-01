import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Link from "../../node_modules/next/link";
import Image from "../../node_modules/next/image";
import ProductCard from "./components/ProductCard";
import { productsList } from "./data/products";

export default function Home() {
  const featuredProducts = [productsList[0], productsList[3], productsList[6], productsList[9], productsList[18], productsList[21]];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="relative h-[80vh] mb-16 overflow-hidden bg-gradient-to-r from-[#f96302] to-[#fa8d46]">
        <div className="max-w-7xl mx-auto px-4 pt-24 h-full flex flex-col">
          <div className="flex-grow flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="w-1/2 text-center md:text-left mb-10 md:mb-0 z-10">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                <div className="mb-2">
                  Discover <span className="text-[#ab0011]">Premium</span>
                </div>
                <div>Tools</div>
              </h1>
              <p className="text-xl text-white/80 max-w-lg mb-10">Take on any home renovation project with our top of the line power tools and home goods.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/products" className="px-8 py-3 bg-[#ab0011] text-white rounded-full hover:bg-[#ab0011]/90 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">Shop Tools <i className="bx bx-chevron-right ml-1 text-xl"></i></Link>
              </div>
            </div>
            <div className="w-1/2 relative z-10 flex justify-center md:justify-end">
              <Link href="/products" className="relative group cursor-pointer">
                <div className="absolute -inset-4 rounded-full bg-white/10 backdrop-blur-sm animate-pulse group-hover:bg-white/20 transition-colors"></div>
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <Image src="/images/product001.png" alt="Featured Tool" width={500} height={400} className="rounded-lg drop-shadow-2xl object-contain" />
                  <div className="absolute -bottom-4 -right-4 bg-[#ab0011] text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold">
                    NEW ARRIVAL
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl text-[#ab0011] pb-8 font-bold">Featured Tools</h1>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} categorySlug={product.category} />
            ))}
        </div>
      </div>
      <div className="pb-24"></div>
      <Footer />
    </div>
  );
}
