import Image from 'next/image'
import React from 'react'



async function getProduct(id){
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await res.json()
    return product
}

export async function generateMetadata({params}){
    const id = (await params).id
    const product = await getProduct(id)
    return {
        title: `My store | ${product.title}`,
        description: product.description
    }
}

export default async function Page({ params }) {
    const id = (await params).id
    const product = await getProduct(id)

    return (
        <div className="p-20 grid grid-cols-1 min-h-screen md:grid-cols-2 gap-5">
            <div className="relative min-h-52 w-full">
                <Image src={product.image} alt={product.title} fill={true} objectFit='cover' />
            </div>

            <div className='flex flex-col gap-10'>
                <div className="flex flex-col gap-4">
                    <h1 className="font-semibold text-xl">{product.title}</h1>
                    <span>£{product.price}</span>
                    <span className='w-fit h-full rounded-full bg-gray-600 p-1.5 text-white'>{product.category}</span>
                </div>
                <p>{product.description}</p>
                <button className="bg-gray-950 text-white px-4 py-2 rounded-md">Add to Cart</button>
            </div>
        </div>
    )
}
