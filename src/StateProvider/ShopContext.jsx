import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ShopContext } from "./useShopContext";

export const ShopContextProvider = ({ children }) => {
	const [cart, setCart] = useState(() => {
		try {
			const storedCart = localStorage.getItem("cart");
			return storedCart ? JSON.parse(storedCart) : [];
		} catch (error) {
			console.error("Failed to parse cart from localStorage", error);
			return [];
		}
	});

	const quantity = cart.reduce((acc, item) => acc + item.amount, 0);
	const total = cart.reduce((acc, item) => {
		const price = parseFloat(item.price);
		return isNaN(price) ? acc : acc + price * item.amount;
	}, 0);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const addToCart = (product, id) => {
		setCart((prevCart) => {
			const existing = prevCart.find((item) => item.id === id);

			if (existing) {
				return prevCart.map((item) =>
					item.id === id
						? { ...item, amount: item.amount + 1 }
						: item,
				);
			}

			toast.success("Product added to cart");
			return [...prevCart, { ...product, amount: 1 }];
		});
	};

	const clearCart = () => {
		setCart([]);
		toast.success("Cart Empty");
	};

	const removeFromCart = (id) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== id));
		toast.success("Product removed successfully");
	};

	const increaseQuantity = (id) => {
		setCart((prevCart) =>
			prevCart.map((item) =>
				item.id === id ? { ...item, amount: item.amount + 1 } : item,
			),
		);
	};

	const decreaseQuantity = (id) => {
		setCart(
			(prevCart) =>
				prevCart
					.map((item) =>
						item.id === id
							? { ...item, amount: item.amount - 1 }
							: item,
					)
					.filter((item) => item.amount > 0), // remove if 0
		);
	};

	return (
		<ShopContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				clearCart,
				increaseQuantity,
				decreaseQuantity,
				quantity,
				total,
			}}>
			{children}
		</ShopContext.Provider>
	);
};
