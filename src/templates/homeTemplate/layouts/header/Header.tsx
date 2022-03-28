import React from "react";

export default function Header() {
	return (
	
		<div className="2xl:max-w-8xl xl:max-w-7xl md:max-w-6xl mobile:min-w-min   mx-auto flex py-10 justify-between items-center ">
				<img src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/logo.png"></img>
				<div className="md:block ">
					<ul className="flex">
						<li className="2xl:text-3xl xl:px-9 md:px-2   font-bold cursor-pointer  md:text-2xl">Home</li>
						<li className="2xl:text-3xl xl:px-9 md:px-2  font-bold cursor-pointer  md:text-2xl">Men's</li>
						<li className="2xl:text-3xl xl:px-9 md:px-2  font-bold cursor-pointer  md:text-2xl">Women's</li>
						<li className="2xl:text-3xl xl:px-9 md:px-2  font-bold cursor-pointer  md:text-2xl">Kid's</li>
						<li className="2xl:text-3xl xl:px-9 md:px-2  font-bold cursor-pointer  md:text-2xl">Page's</li>
						<li className="2xl:text-3xl xl:px-9 md:px-2  font-bold cursor-pointer  md:text-2xl">Explore</li>
						<li className="2xl:text-3xl pl-xl:px-9 md:px-2  font-bold cursor-pointer  md:text-2xl">Login</li>
					</ul>
      </div>
      <div className="md:hidden">
        <label>
          <span>
          &rarr;
          </span>
        </label>
      </div>
		</div>
	);  
}
