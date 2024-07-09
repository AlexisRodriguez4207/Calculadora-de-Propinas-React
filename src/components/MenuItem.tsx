import type { MenuItems } from "../types";

type MenuItemsProps = {
  item: MenuItems;
  addItem: (item: MenuItems) => void;
};

export const MenuItem = ({ item, addItem }: MenuItemsProps) => {
  return (
    <button
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
};
