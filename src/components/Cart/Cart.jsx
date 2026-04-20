import React from "react";
import { useNavigate } from "react-router-dom";

// icons
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";

// context
import { useShopContext } from "../../StateProvider/useShopContext";

const Cart = () => {
	const navigate = useNavigate();

	const {
		cart,
		removeFromCart,
		clearCart,
		increaseQuantity,
		decreaseQuantity,
		quantity,
		total,
	} = useShopContext();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<div className="h-screen w-full max-w-6xl mx-auto px-6 mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
			<div
				onClick={goBack}
				className="cursor-pointer fixed top-7 left-5 z-100">
				<IoMdArrowRoundBack className="text-xl" />
			</div>

			<div className="w-full md:w-1/2 bg-white">
				<div className="flex justify-between items-center border-b pb- 4">
					<h1 className="text-xl sm:text-2xl font-semibold">
						Shopping Cart
					</h1>
					<h1 className="text-md sm:text-lg">Items: {quantity}</h1>

					{cart.length > 0 && (
						<FaRegTrashAlt
							onClick={clearCart}
							className="text-red-500 text-xl sm:text-2xl cursor-pointer"
						/>
					)}
				</div>

				<div>
					{cart.length > 0 ? (
						cart.map((item) => {
							const { id, image, name, price, amount } = item;
							return (
								<div
									key={id}
									className="flex justify-between py-6 border-b text-gray-700 text-sm sm:text-md">
									<div className="flex flex-col gap-4 sm:gap-6">
										<span className="text-gray-700 font-semibold">
											Product
										</span>

										<div className="flex gap-1 sm:gap-4">
											<img
												src={image}
												alt="food-image"
												className="w-16 h-16 sm:w-20 am:h-20 rounded-md object-cover"
											/>
											<div>
												<h3 className="font-semibold capitalize">
													{name}
												</h3>
												<button
													onClick={() =>
														removeFromCart(id)
													}
													className="text-red-500 text-sm flex items-center gap-1 mt-1 sm:mt-2">
													<FaRegTrashAlt />
													Remove
												</button>
											</div>
										</div>
									</div>

									<div className="flex flex-col gap-6">
										<span className="text-gray-700 font-semibold">
											Quantity
										</span>

										<div className="flex items-center space-x-2 sm:space-x-3">
											<button
												onClick={() =>
													decreaseQuantity(id)
												}
												className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center text-lg sm:text-xl">
												<IoMdRemoveCircleOutline />
											</button>
											<span className="text-md sm:text-lg">
												{amount}
											</span>
											<button
												onClick={() =>
													increaseQuantity(id)
												}
												className="w-6 h-6 sm:w-8 sm:h-8 bg-red-200 rounded-full flex items-center justify-center text-lg sm:text-xl">
												<IoAddCircleOutline />
											</button>
										</div>
									</div>

									<div className="flex flex-col gap-6">
										<span className="text-gray-700 font-semibold">
											Price
										</span>

										<p className="text-md sm:text-lg font-medium">
											${price}
										</p>
									</div>

									<div className="flex flex-col gap-6">
										<span className="text-gray-700 font-semibold">
											Total
										</span>

										<p className="text-md sm:text-lg font-semibold">
											${price * amount}
										</p>
									</div>
								</div>
							);
						})
					) : (
						<p className="text-xl sm:text-2xl text-gray-500 mt-4">
							Your Cart is Empty
						</p>
					)}
				</div>
			</div>

			{/* Right section */}
			<div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg pb-4">
				<h2 className="text-lg sm:text-xl font-semibold border-b pb-4">
					Cart Summary
				</h2>
				<div className="flex justify-between mt-2">
					<span className="text-gray-700">Items:</span>
					<span className="font-medium">{quantity}</span>
				</div>
				<div className="flex justify-between mt-2">
					<span className="text-gray-700">Subtotal</span>
					<span className="font-medium">
						${isNaN(total) ? 0 : total}
					</span>
				</div>
				<div className="flex justify-between mt-2">
					<span className="text-gray-700">Shipping Fee</span>
					<span className="font-medium">Free</span>
				</div>

				<div className="flex justify-between mt-2">
					<span className="text-gray-700">Total Cost</span>
					<span className="font-medium">
						${isNaN(total) ? 0 : total}
					</span>
				</div>
				<button className="w-full bg-green-500 text-white py-3 mt-4 rounded text-md sm:text-lg">
					CHECKOUT
				</button>
			</div>
		</div>
	);
};

export default Cart;
