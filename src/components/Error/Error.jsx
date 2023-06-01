import React from "react";
import errorImage from "/error-404.png";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function Error() {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col min-h-screen items-center justify-start bg-slate-800 gap-2">
			<img className="w-1/5 h-1/6" src={errorImage} alt="Page Not Found" />
			<p className="text-4xl font-bold text-white tracking-normal leading-none">
				Page Not Found
			</p>
			<div className="flex gap-4">
				<Button
					variant="filled"
					color="pink"
					size="lg"
					className="mt-4"
					onClick={() => navigate(-1, { replace: true })}
				>
					Go Back
				</Button>
				<Button
					variant="gradient"
					color="blue"
					size="lg"
					className="mt-4"
					onClick={() => navigate("/", { replace: true })}
				>
					Go Home
				</Button>
			</div>
		</div>
	);
}

export default Error;
