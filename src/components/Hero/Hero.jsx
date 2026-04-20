import React from "react";
import { heroImages, sizeMap } from "../../utils/constants";

const Hero = () => {
	return (
		<div className="hero h-screen flex flex-col items-center justify-end p-4 sm:p-6">
			<div className="flex flex-col items-center gap-3">
				<h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold text-white leading-tight">
					DELICIOUS MEAL
				</h1>
				<p className="max-w-lg sm:max-w-3xl text-sm sm:text-md md:text-lg font-medium text-white text-center">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Quia blanditiis fugiat earum consequatur! Amet nam facilis
					sed dicta vero necessitatibus ullam quam molestiae dolor
					ipsa quo error possimus, tenetur maiores.
				</p>
			</div>

			<div className="h-[60%] w-full flex items-center md:items-end justify-center overflow-hidden sm:pb-4">
				<div className="flex items-end justify-center">
					{heroImages.map((item, index) => (
						<div
							key={item.id}
							className={`
					${sizeMap[item.size]}
					rounded-full border-4 md:border-6 border-white overflow-hidden
					shadow-lg
					transition-transform duration-400
					hover:scale-105
					${index !== 0 ? "-ml-10 md:-ml-16" : ""}
				`}>
							<img
								src={item.image}
								alt={`Food item ${item.id}`}
								className="object-cover w-full h-full"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default Hero;
