'use client'

import Image from "../../../../../../node_modules/next/image"
import Link from "../../../../../../node_modules/next/link";
import { useState, useEffect } from 'react';
import { productsList, Product, categories, Category } from '@/app/data/products'

export default function ProductPage({params}: {params: Promise<{category: string, productId: string}>}) {
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState<Product | null>(null);
    const [category, setCategory] = useState<Category | null>(null);

    useEffect(() => {
        const fetchParams = async () => {
            const resolvedParams = await params
            const foundProduct = productsList.find(prod => prod.id === resolvedParams.productId)
            if(!foundProduct || foundProduct.category.toLowerCase() !== resolvedParams.category.toLowerCase()) {
                return;
            }
            setProduct(foundProduct)

            const foundCategory = categories.find(cat => cat.slug === resolvedParams.category)
            if(!foundCategory || foundCategory.slug.toLowerCase() !== resolvedParams.category.toLowerCase()) {
                return;
            }
            setCategory(foundCategory)
        }

        fetchParams()
    }, [params]);

    const handleMinus = () => {
        if (quantity >= 2) {
            setQuantity(quantity - 1)
        } else {
            setQuantity(1)
        }
    }
    const handlePlus = () => {
        setQuantity(quantity + 1)
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="md:w-1/2 bg-gray-50 p-8 flex items-center justify-center relative">
                    <div className="relative w-full h-[100px] md:h-[400px]">
                        <Image src={`/images/${product?.id}.png`} alt="Product Image" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
                    </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold text-[#f96302] mb-2">{product?.name}</h1>
                        <p className="text-xl font-semibold mb-4 text-[#ab0011]">{`$${product?.price}`}</p>
                        <p className="text-black leading-relaxed">{product?.description}</p>
                    </div>
                    <div className="pt-6 border-t border-gray-100">
                        <div className="mb-6">
                            <label className="block text-[#f96302] font-medium mb-2">Quantity</label>
                            <div className="flex items-center">
                                <button onClick={handleMinus} className="size-10 rounded-l-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"><i className="bx bx-minus text-gray-600 text-lg"></i></button>
                                <input type="text" value={quantity} readOnly className="w-14 h-10 border-t border-b border-gray-300 text-center text-[#f96302] font-medium outline-none" />
                                <button onClick={handlePlus} className="size-10 rounded-r-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"><i className="bx bx-plus text-gray-600 text-lg"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex-1 px-8 py-3 rounded-full flex items-center justify-center font-medium cursor-pointer bg-[#ab0011] text-white"><i className="bx bx-cart mr-2 text-2xl"></i>Add to Cart</button>
                         <a href="#" className="flex-1 px-8 py-3 bg-gray-100 hover:bg-gray-200 text-[#f96302] rounded-full flex items-center justify-center font-medium transition-colors">Go to Cart</a>
                    </div>
                </div>
            </div>
            <div className="mt-12 pt-6 border-t border-gray-200">
                <Link href={`/products/${category?.slug}`} className="inline-flex items-center text-[#f96302] hover:text-[#ab0011] transition-colors"><i className="bx bx-left-arrow-alt mr-2 text-xl"></i>{`Back to ${category?.slug}`}</Link>
            </div>
        </div>
    )
}