import { useState } from "react";
import type { MenuItems, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  //Funcion para agregar un item al pedido
  const addItem = (item: MenuItems) => {
    //Verificar si el item ya existe en el pedidos
    const itemExists = order.find((OrderItem) => OrderItem.id === item.id);
    if (itemExists) {
      const updateOrder = order.map((OrderItem) =>
        OrderItem.id === item.id
          ? { ...OrderItem, quantity: OrderItem.quantity + 1 }
          : OrderItem
      );
      setOrder(updateOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItems = (id: MenuItems["id"]) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItems,
    placeOrder,
  };
}
