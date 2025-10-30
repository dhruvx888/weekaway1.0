import React, { useState } from "react";
import {
	FaBars,
	FaFacebookF,
	FaTwitter,
	FaGooglePlusG,
	FaInstagram,
} from "react-icons/fa";

function Navbar() {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className="w-full min-h-[50px] h-14 flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
			<ul className="hidden sm:flex px-4">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="#deal">Deals</a>
				</li>
				<li>
					<a href="#gallery">Gallery</a>
				</li>
				<li>
					<a href="#contact">Contact Us</a>
				</li>
			</ul>
			<div className="flex justify-between items-center h-10">
				<FaFacebookF className="mx-4 hover:text-blue-600" size={25} />
				<FaTwitter className="mx-4 hover:text-sky-500" size={25} />
				<FaGooglePlusG className="mx-4 hover:text-green-600" size={25} />
				<FaInstagram className="mx-4 hover:text-pink-700" size={25} />
			</div>

			<div onClick={handleNav} className="md:hidden z-10">
				<FaBars size={25} className="mr-4 cursor-pointer" />
			</div>

			<div
				className={
					nav
						? `overflow-y-hidden md:hidden ease-in duration-500 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/85 px-4 py-7 flex flex-col items-center`
						: `absolute top-0 h-screen w-full left-[-100%] ease-in duration-500`
				}
			>
				<ul className="h-full w-full text-center pt-12">
					<li className="text-xl py-7">
						<a href="/">Home</a>
					</li>
					<li className="text-xl py-7">
						<a href="#deal">Deals</a>
					</li>
					<li className="text-xl py-7">
						<a href="#gallery">Gallery</a>
					</li>
					<li className="text-xl py-7">
						<a href="#contact">Contact Us</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
