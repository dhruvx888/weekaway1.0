import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";

function TopBar() {
	return (
		<div className="flex justify-between items-center px-4 py-2">
			<div className="flex items-center">
				<BsChatSquareDots size={30} className="text-primary-dark mr-2" />
				<h1 className="text-xl font-bold text-gray-700">WEEKAWAY</h1>
			</div>
			<div className="flex gap-8">
				<div className="hidden md:flex items-center">
					<AiOutlineClockCircle size={20} className="mr-3 text-primary-dark" />
					<p className="text-sm text-gray-700">9AM - 5PM</p>
				</div>
				<div className="hidden md:flex items-center">
					<AiFillPhone size={20} className="mr-3 text-primary-dark" />
					<p className="text-sm text-gray-700">Phone Number</p>
				</div>
				<button>Get A Free Quote</button>
			</div>
		</div>
	);
}

export default TopBar;
