import React, { useState } from "react";

function Activities() {
	return (
		<div className="max-w-[1140px] m-auto w-full md:flex md:flex-row mt-[-75px]">
			<div className="relative p-4 basis-1/3">
				<div className="group relative w-full h-full ">
					<h3 className="absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold group:">
						Resorts
					</h3>
					<p className="absolute duration-200 ease-in h-0 bottom-4 left-4 z-20 text-white font-medium text-sm line-clamp-3 group-hover:h-[60px]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
						iusto explicabo beatae iure sapiente error obcaecati eveniet ut
						tempora, aliquid nostrum neque vel! Aliquam ullam ex, amet eius
						animi cupiditate!
					</p>
					<div className="absolute z-10 w-full h-full duration-200 ease-in group-hover:bg-black/40" />
					<img
						className="w-full h-full object-center object-cover relative border-4 border-white shadow-lg group-hover:border-0 transition-all duration-[120ms] ease-in-out"
						src="https://img.freepik.com/free-photo/photorealistic-wooden-house-with-timber-structure_23-2151302627.jpg?t=st=1714138372~exp=1714141972~hmac=97bf595847e6238d04c9ecb95ea87074ffae717ccd7e16231b62d2dc4ce82beb&w=900"
						alt=""
					/>
				</div>
			</div>

			<div className="relative p-4 basis-1/3">
				<div className="group relative w-full h-full ">
					<h3 className="absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold group">
						Cruise
					</h3>
					<p className="absolute transition-all duration-200 ease-in h-0 bottom-4 left-4 z-20 text-white font-medium text-sm line-clamp-3 group-hover:h-[60px]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
						iusto explicabo beatae iure sapiente error obcaecati eveniet ut
						tempora, aliquid nostrum neque vel! Aliquam ullam ex, amet eius
						animi cupiditate!
					</p>
					<div className="absolute z-10 w-full h-full duration-200 ease-in group-hover:bg-black/40" />
					<img
						className="w-full h-full object-center object-cover relative border-4 border-white shadow-lg group-hover:border-0 transition-all duration-[120ms] ease-in-out"
						src="https://img.freepik.com/free-photo/luxury-yacht-sails-turquoise-waters-anchored-idyllic-paradise-generated-by-ai_188544-56209.jpg?t=st=1714193788~exp=1714197388~hmac=3e0e91dcda0af48f9ef206add7e8063d0044442ae5355ced0a1820cbc72c3376&w=1060"
						alt=""
					/>
				</div>
			</div>

			<div className="relative p-4 basis-1/3">
				<div className="group relative w-full h-full ">
					<h3 className="absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold group">
						Excusives
					</h3>
					<p className="absolute transition-all duration-200 ease-in h-0 bottom-4 left-4 z-20 text-white font-medium text-sm line-clamp-3 group-hover:h-[60px]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
						iusto explicabo beatae iure sapiente error obcaecati eveniet ut
						tempora, aliquid nostrum neque vel! Aliquam ullam ex, amet eius
						animi cupiditate!
					</p>
					<div className="absolute z-10 w-full h-full duration-200 ease-in group-hover:bg-black/40" />
					<img
						className="w-full h-full object-center object-cover relative border-4 border-white shadow-lg group-hover:border-0 transition-all duration-[120ms] ease-in-out"
						src="https://img.freepik.com/free-photo/diver-exploring-archeological-underwater-building-ruins_23-2150887058.jpg?t=st=1714203370~exp=1714206970~hmac=b3dfb149760ee352c7ccc3cd0b79f162b51c275b5a9bb7ab5d2cb1857e8f8ec1&w=996"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default Activities;
