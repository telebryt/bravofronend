import Scrolllist from "./Scrolllist";

function ScrollNav() {
  return (
    <div>
      <div className="flex pb-2 whitespace-nowrap overflow-x-scroll scrollbar-hide space-x-4 px-10 sm:px-20 bg-gray-200 sticky top-0 text-yellow-900 last:pr-10 w-full shadow-lg">
        <Scrolllist Item="Top Eat" />
        <Scrolllist Item="Sushi" />
        <Scrolllist Item="Pizza" />
        <Scrolllist Item="Sandwich" />
        <Scrolllist Item="Thai" />
        <Scrolllist Item="Chinese" />
        <Scrolllist Item="Vegan" />
        <Scrolllist Item="Fufu" />
        <Scrolllist Item="Banku" />
        <Scrolllist Item="Fried Rice" />
        <Scrolllist Item="Noodles" />
        <Scrolllist Item="Indomie" />
        <Scrolllist Item="Jellof" />
      </div>
    </div>
  );
}

export default ScrollNav;
