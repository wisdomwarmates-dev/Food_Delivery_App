import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

// icons
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

// context
import { useShopContext } from "../../StateProvider/useShopContext";

// constants
import { NAV_ITEMS } from "../../utils/constants";

const Navbar = () => {
	const location = useLocation();
	const { quantity } = useShopContext();

	const [isScrolled, setIsScrolled] = useState(false);
	const isHeroPage = location.pathname === "/";

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const textColor = isHeroPage && !isScrolled ? "text-white" : "text-black";

	return (
		<div
			className={`${textColor} fixed top-0 left-0 w-full h-20 px-14 z-50 transition-all duration-500 ${
				isScrolled ? "bg-white shadow-md" : "bg-transparent"
			} flex justify-between items-center`}>
			<h1 className="text-2xl font-bold">Foodie</h1>

			<ul className="hidden sm:flex gap-6 text-lg font-semibold uppercase">
				{NAV_ITEMS.map((item, index) => (
					<li key={index}>
						<NavLink
							to={item?.path}
							className={({ isActive }) =>
								`cursor-pointer transition hover:text-gray-500 ${
									isActive ? "underline" : ""
								}`
							}>
							{item.title}
						</NavLink>
					</li>
				))}
			</ul>

			<div className="flex cursor-pointer items-center gap-8">
				<Link
					to="/cart"
					className="relative">
					<FaCartShopping className="text-xl" />
					{quantity > 0 && (
						<span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs h-4 w-4 flex items-center justify-center rounded-full">
							{quantity}
						</span>
					)}
				</Link>

				<FaRegUser className="text-lg" />
			</div>
		</div>
	);
};

export default Navbar;
