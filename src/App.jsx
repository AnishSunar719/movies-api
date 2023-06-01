import React from "react";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import SingleMovie from "./components/singleMovie/SingleMovie";
import Error from "./components/Error/Error";

function App() {
	return (
		<div className="min-h-screen bg-blue-gray-900">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movies/:id" element={<SingleMovie />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
