import { createContext, useContext } from "react";

export const ShopContext = createContext();

export const useShopContext = () => useContext(ShopContext);
