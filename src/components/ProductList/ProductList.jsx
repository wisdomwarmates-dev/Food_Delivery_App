import React from "react";
import { Link } from "react-router-dom";

// context
import { useShopContext } from "../../StateProvider/useShopContext";
import { productsData } from "../../utils/constants";

const ProductList = () => {
	const { addToCart } = useShopContext();

	return (
		<div className="w-full my-15 sm:my-20 flex flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6">
			<h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 underline uppercase text-center">
				Our Awesome Dishes
			</h2>

			<div className="flex flex-wrap gap-6 sm:gap-8 justify-center">
				{productsData.map((product) => {
					const { id, image, name, price } = product;

					return (
						<div
							key={id}
							className="w-full sm:w-100 h-85 sm:h-100 bg-white border border-gray-200 rounded-lg p-3 sm:p-4 shadow-md transition-transform duration-200 hover:-translate-y-1">
							<Link to={`/product/${id}`}>
								<img
									src={image}
									alt=""
									className="h-48 sm:h-58 w-full object-cover rounded-lg transition-transform duration-200"
								/>
							</Link>

							<div className="mt-3 sm:mt-4">
								<h4 className="text-lg sm:text-xl capitalize font-semibold text-gray-900">
									{name}
								</h4>
								<p className="text-gray-600 text-md sm:text-xl">
									${price.toFixed(2)}
								</p>
								<div>
									<button
										onClick={() => addToCart(product, id)}
										className="w-full py-2 mt-4 text-sm sm:text-lg font-medium text-white bg-amber-600 rounded-md hover:bg-amber-700 transition duration-300">
										Add to Cart
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProductList;
