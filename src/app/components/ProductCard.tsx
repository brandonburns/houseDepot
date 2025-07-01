import Image from "../../../node_modules/next/image"
import Link from "../../../node_modules/next/link"
import { Product } from '@/app/data/products'

interface ProductCardProps {
    product: Product;
    categorySlug: string;
}

export default function ProductCard({product, categorySlug}: ProductCardProps) {
    const {image, name, description, price} = product;
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group">
            <div className="h-64 relative bg-gray-50 p-6 flex items-center justify-center">
                <Image src={image} alt={name} width={200} height={200} className="max-h-full object-contain h-full w-auto group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6 border-t border-gray-100">
                <h2 className="text-lg font-bold text-[#f96302] mb-2 line-clamp-1">{name}</h2>
                <p className="text-sm text-black/80 mb-4 line-clamp">{description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#ab0011]">{`$${price}`}</span>
                    <div className="flex gap-2">
                        <Link href={`/products/${categorySlug}/${product.id}`} className="bg-[#ab0011] px-4 py-2 flex justify-center items-center rounded-full text-white text-sm font-medium">View Details</Link>
                        <button className="w-10 h-10 bg-[#ab0011] rounded-full text-white flex items-center justify-center"><i className="bx bx-cart text-2xl"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}