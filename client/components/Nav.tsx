import {
  league_spartan_xlight,
  league_spartan_light,
  league_spartan_regular,
  league_spartan_medium,
} from "@/utils/fonts";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";

function Nav() {
  return (
    <nav className="bg-[#faf7f0] border-x border-t border-b border-black py-4 px-4 lg:px-8 rounded-b-[2rem] md:rounded-b-none relative z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <HiBars3 className="w-5 h-5 xs:w-6 xs:h-6"/>
        </div>

        {/* Logo */}
        <div className="text-sm xs:text-lg font-bold text-black text-center">
          Black & Blooms
          <br />
          Flowers
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <a
            href="#"
            className={`${league_spartan_medium.className} text-gray-800 hover:text-gray-600`}
          >
            SEND FLOWERS
          </a>
          <a
            href="#"
            className={`${league_spartan_medium.className} text-gray-800 hover:text-gray-600`}
          >
            SEND BY OCCASION
          </a>
          <a
            href="#"
            className={`${league_spartan_medium.className} text-gray-800 hover:text-gray-600`}
          >
            SEND UNDER $60
          </a>
          <a
            href="#"
            className={`${league_spartan_medium.className} text-gray-800 hover:text-gray-600`}
          >
            SEND FAVORITES
          </a>
          <a
            href="#"
            className={`${league_spartan_medium.className} text-gray-800 hover:text-gray-600`}
          >
            SEND SUMMER ☀️
          </a>
          <a
            href="#"
            className={`${league_spartan_medium.className} text-gray-800 hover:text-gray-600`}
          >
            SHOP ALL
          </a>
        </div>

        <div className="flex items-center space-x-4 xs:space-x-6">
          <div className="">
            <IoPersonOutline className="w-5 h-5 xs:w-6 xs:h-6" />
          </div>
          <div>
            <HiOutlineShoppingBag className="w-5 h-5 xs:w-6 xs:h-6" />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
