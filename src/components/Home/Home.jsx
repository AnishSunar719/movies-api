import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie, getSingleMovie } from "../../reducers/movieReducer";
import { Link } from "react-router-dom";
import { API_URL, s, i } from "../Constants/Constants";
import { Alert } from "@material-tailwind/react";

function Home() {
	const [movie, setMovie] = useState("");
	const [alert, setAlert] = useState(false);
	const dispatch = useDispatch();
	const items = useSelector((state) => state.movie.searchedMovies);

	const handleSearch = async () => {
		const res = await fetch(API_URL + s + movie);
		const mov = await res.json();
		if (mov.Response == "True") {
			dispatch(getMovie(mov));
			setAlert(false);
		} else {
			setAlert(true);
		}
	};
	const oneMovie = async (imdbID) => {
		const res = await fetch(API_URL + i + imdbID);
		const mov = await res.json();
		dispatch(getSingleMovie(mov));
	};
	return (
		<div>
			<div className="flex flex-col justify-center items-center mb-8 gap-8 p-8">
				<h1 className="text-3xl text-amber-500 tracking-normal leading-none">
					Search for movies...
				</h1>
				<div className="flex">
					<input
						type="text"
						value={movie}
						onChange={(e) => setMovie(e.target.value)}
						placeholder="E.g. Avatar"
						className="border-none outline-pink-900 text-center rounded-s-md"
					/>
					<button
						type="submit"
						onClick={handleSearch}
						className="bg-pink-500 p-2 mx-1 text-white rounded-e-md"
					>
						Search
					</button>
				</div>
				{alert && (
					<Alert
						show={alert}
						animate={{
							mount: { y: 0 },
							unmount: { y: 100 },
						}}
						dismissible={{
							onClose: () => setAlert(false),
						}}
						color="red"
					>
						Movie not found. Try again.
					</Alert>
				)}
			</div>
			<div>
				{items.map((item, idx) => {
					const { Title, Poster, Year, Type, imdbID } = item;
					return (
						<div className="inline-grid grid-cols-auto" key={idx}>
							<Link to={"/movies/" + imdbID}>
								<div
									className="flex bg-red-500 m-8 p-8 flex-col items-center rounded-xl hover:scale-110"
									onClick={() => oneMovie(imdbID)}
								>
									<img className="" src={Poster} alt={Title} />
									<h1 className="text-white max-w-xs font-bold text-lg mt-4">
										{Title}
									</h1>
									<p className="text-sm text-white">Year: {Year}</p>
									<p className="text-sm text-white">Type: {Type}</p>
									<p className="text-sm text-white">ID: {imdbID}</p>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Home;
