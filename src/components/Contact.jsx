import React from "react";

function Contact() {
	return (
		<div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
			<h2 className="text-center text-gray-700">Send us a message</h2>
			<p className="text-center text-gray-700 py-2">We're standing by</p>
			<div className="grid md:grid-cols-2 ">
				<img
        className="w-full md:w-full object-cover max-h-[500px] h-[500px] rounded-lg border-4 border-white shadow-lg"
					src="https://img.freepik.com/free-photo/beautiful-natural-view-landscape_23-2150788060.jpg?t=st=1714191961~exp=1714195561~hmac=e76297e163105fa565e453b2985c08631d712f42c1acd0b445b769a09f718014&w=1380"
					alt=""
				/>
        <form>
          <div className="grid grid-cols-2 ">
            <input className="border m-2 p-2" type="text" placeholder="First"/>
            <input className="border m-2 p-2" type="text" placeholder="Last"/>
            <input className="border m-2 p-2" type="email" placeholder="E-mail"/>
            <input className="border m-2 p-2" type="tel" placeholder="Phone"/>
            <input className="border col-span-2 m-2 p-2" type="text" placeholder="Address"/>
            <textarea className="border col-span-2 m-2 p-2" cols="30" rows="10" placeholder="Your Message..."></textarea>
            <button className="col-span-2 m-2">Submit</button>
          </div>
        </form>
			</div>
		</div>
	);
}

export default Contact;
