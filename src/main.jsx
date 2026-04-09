import React from "react";
import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ShopContextProvider } from "./StateProvider/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
	<ShopContextProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ShopContextProvider>,
);
