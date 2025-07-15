"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { Slider } from "@/components/ui/slider";
import {
  pd_medium_italic,
  pd_regular_italic,
  pd_medium,
  pd_regular,
} from "@/utils/fonts";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
// import { products } from "@/data/HomeBouquetsData";

type Variant = {
  id: number;
  size: "mini" | "regular" | "full";
  price: string;
};

type Product = {
  id: number;
  title: string;
  description: string;
  price: string;
  category: string;
  image_url: string;
  variants: Variant[];
}

const bgGradients = [
  "bg-gradient-to-r from-purple-700 via-purple-500 to-purple-300",
  "bg-gradient-to-r from-amber-700 via-amber-500 to-amber-300",
  "bg-gradient-to-r from-pink-700 via-pink-500 to-pink-300",
  "bg-gradient-to-r from-orange-700 via-orange-500 to-orange-300",
  "bg-gradient-to-r from-green-700 via-green-500 to-green-300",
];

function ShoppingCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});

  const getButtonGradientClass = (index: number) => {
    return bgGradients[index % bgGradients.length];
  };
  

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const initialSizes = Object.fromEntries(
          data.map((product: Product) => [product.id, product.variants[0]?.size ?? 'mini'])
        );
        setSelectedSizes(initialSizes);
      })
      .catch((err) => console.error('Failed to fetch products: ', err));
  }, [])

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleSliderChange = (value: number[]) => {
    if (!api) return;
    const slideIndex = Math.floor((value[0] / 100) * (count - 1));
    api.scrollTo(slideIndex);
  };

  const handlePrevClick = () => {
    if (!api) return;
    api.scrollPrev();
  };

  const handleNextClick = () => {
    if (!api) return;
    api.scrollNext();
  };

  const handleSizeSelect = (productId: number, size: string) => {

    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  }

  const getPriceForSelectedFize = (product: Product) => {
      const size = selectedSizes[product.id];
    return product.variants.find((v) => v.size === size)?.price ?? '0.00'
  }

  const handleAddToCart = async (product: Product) => {
    const selectedSize = selectedSizes[product.id];
    const selectedVariant = product.variants.find(v => v.size === selectedSize);

    if(!selectedVariant){
      alert("Please select a bouquet size");
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/add/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          variant_id: selectedVariant.id,
          quantity: 1,
        })
      });

      if(!response.ok){
        throw new Error('Failed to add item to cart');
      }

      const data = await response.json();
      console.log('Added to cart: ', data);
      alert('Item added to cart');
    } catch(error) {
      console.error('Error adding item to cart: ', error);
      alert('Failed to add item to cart');
    }
  }

  return (
    <div className="bg-[#faf7f0] w-full max-w-7xl mx-auto py-8 md:py-0 md:pt-[80px] md:pb-[75px] relative z-10">
      <Carousel setApi={setApi} className="max-w-5xl mx-auto lg:max-w-7xl">
        <CarouselContent className="pl-4">
          {products.map((product, index) => (
            <div
              key={index}
              id="carousel-slide"
              className="min-w-[70vw] xxs375:min-w-[65vw] md:min-w-[39vw] lg:min-w-[20vw]"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full relative"
                style={{ paddingBottom: "calc(100% + 2px)" }}
              >
                <Image
                  alt={product.title}
                  width={500}
                  height={500}
                  src={product.image_url}
                  className="absolute inset-0 w-full h-full object-cover border-[1px] border-black"
                />
              </motion.div>
              <div className="">
                <h3
                  className={`${pd_medium.className} text-[16px] font-bold text-gray-900 mt-6 mb-2`}
                >
                  {product.title}
                </h3>
                <p
                  className={`${pd_regular_italic.className} text-gray-900 italic mb-4 text-[12px]`}
                >
                  {product.description}
                </p>

                {/* Variant Buttons */}
                <div className="flex mb-4">
                  {product.variants.map((variant, index) => (
                    <button
                      key={index}
                      onClick={() => handleSizeSelect(product.id, variant.size)}
                      className="px-[15px] border border-gray-300 text-[14px] italic hover:bg-gray-50 transition-colors duration-200"
                    >
                      {variant.size.charAt(0).toUpperCase() + variant.size.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Add to Cart Button */}
                <button
                  id="add-to-cart"
                  onClick={() => handleAddToCart(product)}
                  className={`w-full ${getButtonGradientClass(index)} text-white font-semibold py-3 px-1 flex items-center border-[1px] border-black justify-between transition-colors duration-200`}
                >
                  <span
                    className={`${pd_medium.className}pl-[16px] text-[16px]`}
                  >
                    Add to cart
                  </span>
                  <span
                    className={`${pd_medium.className} font-bold pr-[16px]`}
                  >
                    ${getPriceForSelectedFize(product)}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Progress Indicators */}
      <div className="p-4 flex gap-2 mt-6 max-w-5xl mx-auto overflow-hidden">
        <Slider
          defaultValue={[0]}
          max={100}
          step={100 / (count - 1)}
          value={[current * (100 / (count - 1))]}
          onValueChange={handleSliderChange}
          className="flex-1"
        />
        <div className="cursor-pointer" onClick={handlePrevClick}>
          <IoIosArrowDropleft size={24} className="text-gray-800"/>
        </div>
        <div className="cursor-pointer" onClick={handleNextClick}>
          <IoIosArrowDropright size={24} className="text-gray-800"/>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCarousel;
