"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

const bgGradients = [
  "bg-gradient-to-r from-purple-600 via-purple-400 to-purple-200",
  "bg-gradient-to-r from-amber-600 via-amber-400 to-amber-200",
  "bg-gradient-to-r from-pink-600 via-pink-400 to-pink-200",
  "bg-gradient-to-r from-orange-600 via-orange-500 to-orange-200",
  "bg-gradient-to-r from-green-600 via-green-500 to-green-200",
];

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [gradientIndex, setGradientIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % bgGradients.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        className={cn(
          "relative h-1.5 w-full grow overflow-hidden rounded-full transition-all duration-1000 ease-in-out",
          bgGradients[gradientIndex]
        )}
      >
        <SliderPrimitive.Range className="absolute h-full bg-primary transition-all duration-1000 ease-in-out" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
