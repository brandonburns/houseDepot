import {Product, productsList, categories} from '@/app/data/products'
import Link from '../../../../../node_modules/next/link';
import ProductCard from '@/app/components/ProductCard';

export async function generateStaticParams() {
    const _categories = categories.map(cat => cat.name)

    return _categories.map((category) => {
        return {
            category,
        }
    })

    // If actually fetching data, could use revalidate to implement ISR for this component
}

export default async function CategoryPage({params}: {params: Promise <{category: string}>}) {
    const parameters = await params;
    const categorySlug = parameters.category.toLowerCase();
    const categoryProducts: Product[] = productsList.filter(product => product.category.toLowerCase() === categorySlug);
    const categoryInfo = categories.find(category => category.slug === categorySlug);
    const categoryName = categoryInfo?.name || parameters.category

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="bg-gradient-to-r from-[#f96302] to-[#fa8d46] rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold mb-3">{categoryName}</h1>
                    <p className-="text-lg text-white/80 max-w-2xl">Explore our top of the line {categoryName.toLowerCase()} for all your construction and home improvement needs</p>
                </div>
            </div>
            <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProducts.map(product => (
                    <ProductCard key={product.id} product={product} categorySlug={categorySlug} />
                ))}
            </div>
            <div className="mt-12 pt-6 border-t border-gray-200">
                <Link href="/products" className="inline-flex items-center text-[#f96302] hover:text-[#ab0011] transition-colors"><i className="bx bx-left-arrow-alt mr-2 text-xl"></i>Back to All Categories</Link>
            </div>
        </div>
    )
}