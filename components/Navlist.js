import Link from "next/link";
function Navlist({ Icon, name, link }) {
  return (
    <div className="h-14 md:h-16 flex flex-col flex-grow sm:flex-grow-0 p-1 items-center justify-evenly cursor-pointer group">
      <Link href={link} passHref>
        <a className=" no-underline">
          <Icon className="h-6 md:h-10 text-red-600" />
        </a>
      </Link>
      <Link href={link} passHref>
        <a className="no-underline">
          <div className="tracking-wide hidden  text-red-600 font-sans text-sm group-hover:inline-flex">
            {name}
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Navlist;
