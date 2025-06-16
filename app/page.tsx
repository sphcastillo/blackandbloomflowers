import Image from "next/image";
import Banner from "@/components/Banner";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ShoppingCarousel from "@/components/ShoppingCarousel";

export default function Home() {
  return (
    <div>
      <Banner />
      <Nav />
      <Hero />
      <div className="bg-[#faf7f0]">
        <ShoppingCarousel />
      </div>
    </div>
  );
}
