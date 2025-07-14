import Image from "next/image";
import { pd_regular_italic } from "@/utils/fonts";

function Hero() {
  return (
    <div className="relative bg-[#faf7f0]">
      {/* Mobile Layout - Single Image */}
      <div className="block md:hidden relative">
        <div className="relative xxs:block xxs:h-[510px] xs:h-[600px] overflow-hidden -mt-[60px]">
          <Image
            src='/images/hero/herolittlejoys.jpg'
            alt="Person holding beautiful flower bouquet"
            width={2048}
            height={1152}
            className="object-cover h-full w-full"
            id='hero-left'
            priority
          />
        </div>
        <div className="relative h-[540px] xxs:hidden overflow-hidden -mt-[60px]">
          <Image
            src='/images/hero/herolittlejoys.jpg'
            width={2048}
            height={1152}
            alt="Hero Mobile Image"
            className="object-cover h-full w-full"
            id='hero-mobile-image'
            priority
          />
        </div>

        <div className="absolute top-8 xs:top-6 right-12 z-[100]">
          <div className="relative">
            <Image 
                className="w-28 h-28 xs:w-36 xs:h-36 animate-spin-slow"
                src='/images/hero/NeonFlower.png'
                alt="Neon Flower"
                width={660}
                height={660}
                id='neon-flower'
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span id="send-flowers-text" className={`${pd_regular_italic.className} text-[15px] xs:text-[17px] font-medium text-black text-center leading-tight italic transform -rotate-[15deg]`}>
                Send
                <br />
                Flowers
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[-40px] left-12 z-[100]">
            <div className="relative">
              <Image 
                  className="w-28 h-28 xs:w-36 xs:h-36 animate-spin-reverse"
                  src='/images/hero/purple-flower.png'
                  alt="Purple Flower"
                  width={660}
                  height={660}
                  id='purple-flower'
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span id="the-birthday-send-text" className={`${pd_regular_italic.className} text-[15px] xs:text-[17px] font-medium text-black text-center leading-tight italic transform -rotate-[-15deg]`}>
                  The
                  <br />
                  Birthday
                  <br />
                  Send
                </span>
              </div>
            </div>
          </div>

        <div className="relative h-[600px] overflow-hidden">
          <Image
            src='/images/hero/DianaVega.jpg'
            width={960}
            height={958}
            alt="Person holding beautiful flower bouquet"
            className="object-cover h-full w-full"
            id="hero-right"
            priority
          />
          {/* <div className="absolute top-6 left-12 z-[100]">
            <div className="relative">
              <Image 
                  className="w-36 h-36 animate-spin-reverse"
                  src='/images/hero/purple-flower.png'
                  alt="Purple Flower"
                  width={660}
                  height={660}
                  id='purple-flower'
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span id="the-birthday-send-text" className={`${pd_regular_italic.className} text-[17px] font-medium text-black text-center leading-tight italic transform -rotate-[-15deg]`}>
                  The
                  <br />
                  Birthday
                  <br />
                  Send
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Tablet Layout - Two Images Side by Side */}
      <div className="hidden md:block lg:hidden relative">
        <div className="flex h-[430px] overflow-visible">
          {/* Left Image */}
          <div className="flex-1 relative overflow-visible">
            <Image
              src='/images/hero/herolittlejoys.jpg'
              alt="Person holding beautiful flower bouquet"
              width={2048}
              height={1152}
              className="object-cover h-full w-full"
              id='hero-left-tablet'
              priority
            />
            <div className="absolute bottom-[-72px] left-12 z-[100]">
              <div className="relative">
                <Image 
                    className="w-36 h-36 animate-spin-slow"
                    src='/images/hero/NeonFlower.png'
                    alt="Neon Flower"
                    width={660}
                    height={660}
                    id='neon-flower-tablet'
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span id="send-flowers-text" className={`${pd_regular_italic.className} text-[17px] font-medium text-black text-center leading-tight italic transform -rotate-[15deg]`}>
                    Send
                    <br />
                    Flowers
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative overflow-hidden">
            <Image
              src='/images/hero/DianaVega.jpg'
              width={960}
              height={958}
              alt="Person holding beautiful flower bouquet"
              id='hero-right-tablet'
              className="object-cover h-full w-full"
              priority
            />
            <div className="absolute top-6 left-12 z-[100]">
              <div className="relative">
                <Image 
                    className="w-36 h-36 animate-spin-reverse"
                    src='/images/hero/purple-flower.png'
                    alt="Purple Flower"
                    width={660}
                    height={660}
                    id='purple-flower-tablet'
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span id="the-birthday-send-text" className={`${pd_regular_italic.className} text-[17px] font-medium text-black text-center leading-tight italic transform -rotate-[-15deg]`}>
                    The
                    <br />
                    Birthday
                    <br />
                    Send
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Two Images Side by Side */}
      <div className="hidden lg:block relative overflow-visible">
        <div className="flex h-[600px] overflow-visible">
          {/* Left Image */}
          <div className="flex-1 relative overflow-visible">
            <Image
              src='/images/hero/herolittlejoys.jpg'
              width={2048}
              height={1152}
              alt="Person holding beautiful flower bouquet"
              className="object-cover h-full w-full"
              priority
            />
            <div className="absolute bottom-[-70px] right-24 z-[100]">
              <div className="relative">
                <Image 
                    className="w-36 h-36 animate-spin-slow"
                    src='/images/hero/NeonFlower.png'
                    alt="Neon Flower"
                    width={660}
                    height={660}
                    id='neon-flower'
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span id="send-flowers-text" className={`${pd_regular_italic.className} text-[17px] font-medium text-black text-center leading-tight italic transform -rotate-[15deg]`}>
                    Send
                    <br />
                    Flowers
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative overflow-visible">
            <Image
              src='/images/hero/DianaVega.jpg'
              width={960}
              height={958}
              alt="Person holding beautiful flower bouquet"
              className="object-cover h-full w-full"
              priority
            />
            <div className="absolute top-[-36px] left-12 z-[9999]">
              <div className="relative">
                <Image 
                    className="w-36 h-36 animate-spin-reverse"
                    src='/images/hero/purple-flower.png'
                    alt="Purple Flower"
                    width={660}
                    height={660}
                    id='purple-flower-desktop'
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span id="the-birthday-send-text" className={`${pd_regular_italic.className} text-[17px] font-medium text-black text-center leading-tight italic transform -rotate-[-15deg]`}>
                    The
                    <br />
                    Birthday
                    <br />
                    Send
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
