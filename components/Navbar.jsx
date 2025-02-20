import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="bg-gray-950 text-white flex items-center gap-5 p-5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/products">Products</Link>
    </div>
  )
}
