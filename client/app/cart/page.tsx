"use client";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log("Fetching cart items");
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/`)
      .then((res) => res.json())
      .then(setCartItems)
      .catch((err) => console.error("Failed to fetch cart", err));
  }, []);
  return <div>page</div>;
}
