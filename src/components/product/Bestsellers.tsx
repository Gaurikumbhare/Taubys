"use client";

import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BESTSELLERS = [
  {
    id: "rc-6",
    name: "Black Forest",
    price: 575,
    category: "Regular Cakes",
    image: "/black-forest-cake.jpg",
    isEggless: true,
  },
  {
    id: "rc-8",
    name: "Chocolate Truffle",
    price: 575,
    category: "Regular Cakes",
    image: "/chocolate-truffle-cake.jpg",
    isEggless: true,
  },
  {
    id: "tt-3",
    name: "Date & Walnut Tea Cake",
    price: 380,
    category: "Tea Time Cakes",
    image: "/date-walnut-tea-cake.jpg",
    isEggless: true,
  },
  {
    id: "rc-7",
    name: "Belgian Chocolate",
    price: 575,
    category: "Regular Cakes",
    image: "/belgian-chocolate-cake.jpg",
    isEggless: true,
  },
];

export default function Bestsellers() {
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return (
    <section className="py-24 bg-cream/50">
      <div className="container mx-auto px-6" />
    </section>
  );

  return (
    <section className="py-24 bg-cream/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">
              Our <span className="text-red-primary">Bestsellers</span>
            </h2>
            <p className="text-dark-muted max-w-xl">
              The cakes our customers love the most. Handcrafted fresh every single day.
            </p>
          </div>
          <Link href="/menu" className="group flex items-center gap-2 text-dark font-bold border-b-2 border-red-primary/20 pb-1 hover:border-red-primary transition-all">
            View All Products
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BESTSELLERS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
