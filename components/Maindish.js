import Image from "next/image";
import Food from "../public/pictures/Hero.jpg";
function Maindish() {
  return (
    <div>
      <div className=" relative h-[350px] w-[300px] sm:w-[450px] md:w-[550px] lg:w-[900px] xl:w-[1000px] mx-auto ">
        <Image src={Food} layout="fill" objectFit="cover" />
        <div className="absolute z-30 top-1/2 w-full items-center text-center text-white">
          <p className="font-bold tracking-widest text-lg md:text-3xl">
            Contact Us
          </p>
          <p className="text-white font-mono font-medium mb-1">
            Contact Us to place Your Order
          </p>
          <div className=" space-y-1">
            {" "}
            <button className="px-8 py-2 rounded-md font-sans bg-red-700 hover:text-lg shadow-2xl">
              <a
                className="text-white no-underline"
                href="https://wa.me/233543340697"
              >
                Order Now
              </a>
            </button>
          </div>
        </div>
        <div className="absolute z-0 -top-0 -left-0 h-full w-full bg-black opacity-30" />
      </div>
    </div>
  );
}

export default Maindish;
