import Image from "next/image";
import Link from "next/link";
function Card({ Picture, title, desc, price, id }) {
  return (
    <div>
      <div className="relative h-90 w-64 bg-gray-100 text-justify m-2 ">
        <Image src={Picture} className="h-44 w-44" width="360" height="300" />
        <div className="p-1 absolute top-0 z-50"></div>
        <div>
          <Link href={`product/${id}`}>
            <a className="no-underline hover:text-blue-700 focus:text-blue-800">
              <div className="grid grid-cols-2 mt-4 pl-2">
                <p className="text-black">{title}</p>
                <p className="tracking-thin font-bold text-red-700">{price}</p>
              </div>
              <div className="text-gray-800 z-40 font-thin overflow-y-auto p-1">
                {desc}
              </div>
            </a>
          </Link>
          <button className="bg-red-700 text-white  rounded-full mt-0.5 py-2 px-6 hover:bg-red-600">
            <a
              className="text-white no-underline"
              href="https://wa.me/233543340697"
            >
              {" "}
              ORDER
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
