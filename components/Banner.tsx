import { 
    league_spartan_xlight, 
    league_spartan_light, 
    league_spartan_regular, 
    league_spartan_medium } from "@/utils/fonts";

function Banner() {
  return (
    <div className="bg-[#F7b8b8] py-2 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee inline-block">
        <span className={`${league_spartan_regular.className} tracking-wider text-sm text-gray-800 mx-8`}>
          🌸 PEONIES ARE BACK! 🌸 PEONIES ARE BACK! 🌸 PEONIES ARE BACK! 🌸
          PEONIES ARE BACK! 🌸 PEONIES ARE BACK! 🌸 PEONIES ARE BACK! 🌸 PEONIES
          ARE BACK! 🌸 PEONIES ARE BACK! 🌸 PEONIES ARE BACK! 🌸 PEONIES ARE
          BACK! 🌸
        </span>
        <span className={`${league_spartan_regular.className} tracking-wider text-sm text-gray-800 mx-8`}>
          🌸 PEONIES ARE BACK! 🌸 PEONIES ARE BACK! 🌸 PEONIES ARE BACK! 🌸
          PEONIES ARE BACK! 🌸 PEONIES ARE BACK! 🌸 PEONIES ARE BACK! 🌸 PEONIES
          ARE BACK! 🌸 PEONIES ARE BACK! 🌸 PEONIES ARE BACK! 🌸 PEONIES ARE
          BACK! 🌸
        </span>
      </div>
    </div>
  );
}
export default Banner;
