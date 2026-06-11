"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { REGULAR_CAKES, GELATOS, TEA_TIME_CAKES, MAIN_CATEGORIES, SUB_CATEGORIES } from "@/constants";
import ProductCard from "@/components/product/ProductCard";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const MOCK_PRODUCTS = [
  ...REGULAR_CAKES.map((cake) => ({
    ...cake,
    mainCategory: "Our Products",
    isEggless: true,
  })),
  ...TEA_TIME_CAKES.map((cake) => ({
    ...cake,
    mainCategory: "Our Products",
    isEggless: true,
  })),


];

const ALL_SUB_CATEGORIES = [
  ...SUB_CATEGORIES["Our Products"],
  ...SUB_CATEGORIES["Occasional Cakes"],
  ...SUB_CATEGORIES["Festival Special"],
];

function MenuContent() {
  const searchParams = useSearchParams();
  const rawCategory = searchParams.get("category");
  const rawMain = searchParams.get("main");
  const [mounted, setMounted] = useState(false);

  const deriveInitialMain = () => {
    if (rawMain === "our-products") return "Our Products";
    if (rawMain === "occasional-cakes") return "Occasional Cakes";
    if (rawMain === "festival-special") return "Festival Special";
    return "All";
  };

  const [activeMain, setActiveMain] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isEgglessOnly, setIsEgglessOnly] = useState(false);

  useEffect(() => {
    setMounted(true);
    const initialMain = deriveInitialMain();
    setActiveMain(initialMain);

    if (rawCategory) {
      // Find matching category case-insensitively
      const decoded = decodeURIComponent(rawCategory).toLowerCase();
      const match = ALL_SUB_CATEGORIES.find(c => c.toLowerCase() === decoded);
      if (match) setSelectedCategory(match);
    }
  }, [rawMain, rawCategory]);

  const visibleSubCategories =
    activeMain === "All"
      ? ALL_SUB_CATEGORIES
      : SUB_CATEGORIES[activeMain as keyof typeof SUB_CATEGORIES] ?? [];

  if (!mounted) {
    return (
      <div className="pt-32 pb-24 bg-cream/30 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="mb-12 animate-pulse">
            <div className="h-12 w-48 bg-dark/10 rounded mb-4" />
            <div className="h-4 w-64 bg-dark/10 rounded" />
          </div>
        </div>
      </div>
    );
  }

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesMain = activeMain === "All" || product.mainCategory === activeMain;
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesEggless = !isEgglessOnly || product.isEggless;
    return matchesMain && matchesCategory && matchesSearch && matchesEggless;
  });

  const handleMainChange = (main: string) => {
    setActiveMain(main);
    setSelectedCategory("All");
  };

  return (
    <div className="pt-32 pb-24 bg-cream/30 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-dark mb-4">
            Our <span className="text-pink-deep">Menu</span>
          </h1>
          <p className="text-dark-muted">Browse our collection of handcrafted sweet treats.</p>
        </div>

        {/* Filters & Search Grid */}
        <div className="flex flex-col gap-8 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Main Category Tabs */}
            <div className="flex flex-wrap gap-3">
              {["All", ...MAIN_CATEGORIES].map((main) => (
                <button
                  key={main}
                  onClick={() => handleMainChange(main)}
                  className={cn(
                    "px-6 py-2 rounded-full font-bold transition-all text-sm uppercase tracking-wide",
                    activeMain === main
                      ? "bg-red-primary text-white shadow-lg"
                      : "bg-white text-dark border border-dark/10 hover:bg-pink-pastel/30"
                  )}
                >
                  {main}
                </button>
              ))}
            </div>

            {/* Search & Eggless Toggle */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/40" size={18} />
                <input
                  type="text"
                  placeholder="Search treats..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-6 py-2 rounded-full bg-white border border-dark/5 focus:outline-none focus:border-pink-deep w-full sm:w-64"
                />
              </div>

              <button
                onClick={() => setIsEgglessOnly(!isEgglessOnly)}
                className={cn(
                  "flex items-center justify-center gap-2 px-6 py-2 rounded-full font-medium border transition-all whitespace-nowrap",
                  isEgglessOnly
                    ? "bg-green-500 text-white border-green-600"
                    : "bg-white text-dark border-dark/5 hover:bg-pink-pastel/30"
                )}
              >
                <span className={cn("w-2 h-2 rounded-full", isEgglessOnly ? "bg-white" : "bg-green-500")} />
                Eggless Only
              </button>
            </div>
          </div>

          {/* Sub Category Filters */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-dark/40 ml-1">Filter by Type</h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("All")}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-xs font-bold transition-all uppercase tracking-wider border",
                  selectedCategory === "All"
                    ? "bg-dark text-white border-dark shadow-md"
                    : "bg-white/50 text-dark/60 border-dark/5 hover:bg-white hover:text-dark hover:border-dark/20"
                )}
              >
                All Types
              </button>
              {visibleSubCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-5 py-2.5 rounded-xl text-xs font-bold transition-all uppercase tracking-wider border",
                    selectedCategory === cat
                      ? "bg-dark text-white border-dark shadow-md"
                      : "bg-white/50 text-dark/60 border-dark/5 hover:bg-white hover:text-dark hover:border-dark/20"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Price note for Regular Cakes */}
        {(selectedCategory === "Regular Cakes" || selectedCategory === "All") && (
          <p className="text-xs text-dark/50 mb-6 italic">
            * Regular Cake prices are for 500gm (half kg). Delivery: ₹100 flat within 7 km of Nagpur.
          </p>
        )}

        {/* Results */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-dark/20">
            <h3 className="text-2xl font-heading text-dark/40 font-bold mb-2">No treats found</h3>
            <p className="text-dark-muted">Try adjusting your filters or search query.</p>
            <button
              onClick={() => {
                setActiveMain("All");
                setSelectedCategory("All");
                setSearchQuery("");
                setIsEgglessOnly(false);
              }}
              className="mt-6 text-pink-deep font-bold hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-32 pb-24 min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-dark/40">Loading menu...</div>
        </div>
      }
    >
      <MenuContent />
    </Suspense>
  );
}
