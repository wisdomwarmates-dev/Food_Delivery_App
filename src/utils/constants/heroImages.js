import chicken1 from "../../assets/chicken1.png";
import pizza from "../../assets/pizza.jpeg";
import chicken3 from "../../assets/chicken3.jpeg";

export const heroImages = [
	{ id: 1, size: "lg", image: chicken1 },
	{ id: 2, size: "md", image: pizza },
	{ id: 3, size: "sm", image: chicken3 },
];

export const sizeMap = {
	lg: "w-40 h-40 sm:w-62 sm:h-62 md:w-96 md:h-96",
	md: "w-30 h-30 sm:w-48 sm:h-48 md:w-72 md:h-72",
	sm: "w-22 h-22 sm:w-38 sm:h-38 md:w-56 md:h-56",
};
