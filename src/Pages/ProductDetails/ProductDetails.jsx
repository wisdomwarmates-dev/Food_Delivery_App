import React from "react";
import { useNavigate, useParams } from "react-router-dom";

// icons
import { IoMdArrowRoundBack } from "react-icons/io";

// constants
import { productsData } from "../../utils/constants";

// context
import { useShopContext } from "../../StateProvider/useShopContext";

const ProductDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const { addToCart } = useShopContext();

	const product = productsData.find((product) => product.id === parseInt(id));
	const goBack = () => {
		navigate(-1);
	};

	return (
		<div className="h-screen w-full px-6 py-12 flex flex-col md:flex-row justify-center items-center gap-10">
			<div
				onClick={goBack}
				className="fixed top-7 left-5 z-100 cursor-pointer">
				<IoMdArrowRoundBack className="text-xl" />
			</div>

			<div className="w-1/2 h-60 sm:h-100">
				<img
					src={product.image}
					alt={product.name}
					className="w-full h-full object-cover rounded-lg shadow-md"
				/>
			</div>

			<div classname="w-1/2">
				<h3 className="text-3xl sm:text-4xl capitalize font-semibold">
					{product.name}
				</h3>

				<p className="text.xl sm:text-2xl text-amber-500 font-bold">
					${product.price}
				</p>
				<p className="max-w-lg text-md sm:text-lg text-gray-600">
					{product.description}
				</p>
				<button
					onClick={() => addToCart(product, id)}
					className="w-full bg-amber-600 text-white text-md sm:text-lg py-2 mt-6 rounded-lg">
					ADD TO CART
				</button>
			</div>
		</div>
	);
};

export default ProductDetails;
