import Navlist from "./Navlist";
import Image from "next/image";
import logo from "../public/logo.jpg";
import {
  HomeIcon,
  IdentificationIcon,
  PhoneIcon,
  SearchCircleIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
function Navbar() {
  return (
    <div className="">
      <div className=" sticky top-0 mb-1 flex justify-between p-3 h-22 items-center bg-gray-200">
        <div>
          <Link href="/">
            <a>
              <Image src={logo} />
            </a>
          </Link>
        </div>
        <div className="flex flex-grow justify-end md:space-x-3 md:justify-evenly md:max-w-3xl">
          <Navlist Icon={HomeIcon} name="Home" link="/" />
          <Navlist Icon={IdentificationIcon} name="About" link="/about" />
          <Navlist Icon={PhoneIcon} name="Contact" link="/contact" />
          <Navlist Icon={LocationMarkerIcon} name="Location" link="/location" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
