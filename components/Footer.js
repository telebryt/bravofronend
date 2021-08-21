import {} from "@heroicons/react/solid"
function Footer() {
    return (
        <div className="bg-gray-500 text-white w-full h-full pt-3 pb-12 font-mono">
            <div className=" grid grid-cols-1 md:grid-cols-2 pt-3">
            <div className="flex flex-col text-center">
            <ul>
            <h1 className="font-bold text-lg sm:font-extrabold sm:text-xl">Social Media Handle</h1>
            <p className="text-lg text-gray-900 font-semibold sm:text-md">
            <li>FACEBOOK: </li>
            <li>INSTAGRAM: </li>
            <li>TWITTER: </li>
            <li>WHATSAPP: </li>
            </p>

            </ul>
            </div>
            <div className="flex flex-col justify-evenly ml-5" >
            <h1 className="font-bold text-lg md:text-2xl">Our Services </h1>
            <ul>
            <li> text of the printing and typesetting industry. </li>
            <li> of the printing and typesetting industry. </li>
           <li>of the printing and typesetting industry. </li>
           <li>of the printing and typesetting industry. </li>
           </ul>
            </div>
            </div>
        </div>
    )
}

export default Footer
