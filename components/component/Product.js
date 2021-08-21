import Image from "next/image";
import Link from "next/link";
function Product({ Picture, title, price, desc, id }) {
  return (
    <div>
      <div className="relative h-13 w-40 bg-white text-justify rounded-md m-3 ">
        <Image src={Picture} className="h-44 w-44" width="360" height="360" />
        <Link href={`product/${id}`}>
          <a className="no-underline text-black focus:text-blue-600">
            <div className="p-1">
              <span className="tracking-widest font-bold mr-2">{title}</span>
              <span className="font-bold text-red-700">{price}</span>
              <p className="text-gray-600 font-thin ">{desc}</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Product;
