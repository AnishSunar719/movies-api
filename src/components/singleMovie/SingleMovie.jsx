import React from "react";
import { useSelector } from "react-redux";

function SingleMovie() {
	const mov = useSelector((state) => state.movie.singleMovie);
	const {
		imdbID,
		actors,
		country,
		director,
		genre,
		plot,
		poster,
		title,
		runtime,
		boxoffice,
		type,
		year,
		ratings,
		votes,
	} = mov;

	return (
		<div className="justify-center items-center flex h-screen">
			<div>
				<img className="rounded-lg p-8" src={poster} alt={title} />
			</div>
				<div>
					<div className="p-8">
						<h1 className=" text-white text-2xl font-bold	">{title}</h1>
						<div className="p-4 text-left">
							<p className=" text-white text-sm">IMDB-ID: {imdbID}</p>
							<p className=" text-white text-sm">Type: {type}</p>
							<p className=" text-white text-sm">Genre: {genre}</p>
							<p className=" text-white text-sm">Actors: {actors}</p>
							<p className=" text-white text-sm">Director: {director}</p>
							<p className=" text-white text-sm">Country: {country}</p>
							<p className=" text-white text-sm">Runtime: {runtime}</p>
							<p className=" text-white text-sm">Boxoffice: {boxoffice}</p>
							<p className=" text-white text-sm">Year: {year}</p>
							<p className=" text-white text-sm">IMDB-Ratings: {ratings}</p>
							<p className=" text-white text-sm">IMDB-Votes: {votes}</p>
						</div>
					</div>
				<div className="px-12">
					<p className=" text-white text-base font-bold">Plot</p>
					<p className=" text-white text-sm max-w-sm">{plot}</p>
				</div>
			</div>
		</div>
	);
}

export default SingleMovie;
