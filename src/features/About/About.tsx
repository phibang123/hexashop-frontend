import React from 'react'

export default function About() {
	return (
		<>
		<div className="bg-about-pattern bg-cover bg-center  mb-8">
			<div className="2xl:max-w-8xl mx-auto ">
				<div className="py-96 text-center">
					<h1 className="text-white font-black text-8xl mb-16">
						About Our Company
					</h1>
					<p className="text-3xl text-white italic">
						Awesome, clean & creative HTML5 Template
					</p>
				</div>
			</div>
		</div>

		<div className="2xl:max-w-8xl my-32 mx-auto">
			<div className="grid grid-cols-2  gap-20 items-center">
				<div className="col-span-1 h-full">
					<img
						className="h-full object-cover"
						src="https://images7.alphacoders.com/110/thumbbig-1107308.jpg"
					></img>
				</div>
				<div className="col-span-1">
					<h1 className="text-dark-primary font-bold text-6xl leading-relaxed mb-5">
						About Us & Our Skills
					</h1>
					<p className="text-gray-400 text-2xl italic my-10 leading-10">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod kon tempor incididunt ut labore.
					</p>
					<div className="flex justify-center">
						<i className="fa fa-quote-left text-6xl mr-5"></i>
						<p className="text-2xl text-black leading-10">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiuski smod kon tempor incididunt ut labore.
						</p>
					</div>
					<p className="text-gray-400 text-2xl italic py-10 leading-10 border-b-2 border-dashed ">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod kon tempor incididunt ut labore et dolore magna aliqua ut
						enim ad minim veniam, quis nostrud exercitation ullamco laboris
						nisi ut aliquip.
					</p>
					<div className="mt-8">
						<ul>
							<li className="inline-block mx-3 group">
								<i className="fa-brands fa-git text-white text-3xl p-4 bg-black rounded-full group-hover:bg-gray-200 group-hover:text-black transition-all duration-500 cursor-pointer"></i>
							</li>
							<li className="inline-block mx-3 group">
								<i className="fa-brands fa-twitter text-white text-3xl p-4 bg-black rounded-full group-hover:bg-gray-200 group-hover:text-black transition-all duration-500 cursor-pointer"></i>
							</li>
							<li className="inline-block mx-3 group">
								<i className="fa-brands fa-facebook text-white text-3xl p-4 bg-black rounded-full group-hover:bg-gray-200 group-hover:text-black transition-all duration-500 cursor-pointer"></i>
							</li>
							<li className="inline-block mx-3 group">
								<i className="fa-brands fa-reddit-alien text-white text-3xl p-4 bg-black rounded-full group-hover:bg-gray-200 group-hover:text-black transition-all duration-500 cursor-pointer"></i>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div className="border-t-2 border-dashed">
			<div className="2xl:max-w-8xl my-32 mx-auto">
				<div className="grid grid-cols-3 gap-20">
					<div className="col-span-full row-span-1 text-center">
						<h1 className="text-5xl font-bold text-dark-primary">
							Our Amazing Team
						</h1>
						<p className="text-2xl font-medium italic text-gray-400 my-5">
							Details to details is what makes Hexashop different from the
							other themes.
						</p>
					</div>
					<div className="col-span-1 row-span-1 text-center">
						<div className="relative group">
							<img src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/team-member-01.jpg"></img>
							<div className="absolute top-0 left-0 justify-center items-center flex w-full h-full bg-black/[.9] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
								<ul className="">
									<li className="inline-block mx-3 ">
										<i className="fa-brands fa-git text-black text-3xl p-4 bg-white rounded-full hover:bg-dark-primary hover:text-white transition-all duration-500 cursor-pointer"></i>
									</li>
									<li className="inline-block mx-3 ">
										<i className="fa-brands fa-twitter text-black text-3xl p-4 bg-white rounded-full hover:bg-dark-primary hover:text-white transition-all duration-500 cursor-pointer"></i>
									</li>
									<li className="inline-block mx-3 ">
										<i className="fa-brands fa-facebook text-black text-3xl p-4 bg-white rounded-full hover:bg-dark-primary hover:text-white transition-all duration-500 cursor-pointer"></i>
									</li>
									<li className="inline-block mx-3 ">
										<i className="fa-brands fa-reddit-alien text-black text-3xl p-4 bg-white rounded-full hover:bg-dark-primary hover:text-white transition-all duration-500 cursor-pointer"></i>
									</li>
								</ul>
							</div>
						</div>
						<div className="text-center mt-10">
							<h1 className="text-4xl font-bold text-dark-primary">
								Ragnar Lodbrok
							</h1>
							<p className="text-2xl font-medium italic text-gray-400 my-5">
								Product Caretaker
							</p>
						</div>
					</div>
					<div className="col-span-1 row-span-1">
						<div className="relative group">
							<img src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/team-member-02.jpg"></img>
							<div className="absolute top-0 left-0 justify-center items-center flex w-full h-full bg-black/[.9] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
								<ul className="">
									<li className="inline-block mx-3 ">
										<i className="fa-brands fa-git text-black text-3xl p-4 bg-white rounded-full hover:bg-dark-primary hover:text-white transition-all duration-500 cursor-pointer"></i>
									</li>
									<li className="inline-block mx-3 ">
										<i className="fa-brands fa-twitter text-black text-3xl p-4 bg-white rounded-full hover:bg-dark-primary hover:text-white transition-all duration-500 cursor-pointer"></i>
									</li>
									<li className="inline-block mx-3 ">
										<i className="fa-brands fa-facebook text-black text-3xl p-4 bg-white rounded-full hover:bg-dark-primary hover:text-white transition-all duration-500 cursor-pointer"></i>
									</li>
									<li className="inline-block mx-3 ">
										<i className="fa-brands fa-reddit-alien text-black text-3xl p-4 bg-white rounded-full hover:bg-dark-primary hover:text-white transition-all duration-500 cursor-pointer"></i>
									</li>
								</ul>
							</div>
						</div>
						<div className="text-center mt-10">
							<h1 className="text-4xl font-bold text-dark-primary">
								Ragnar Lodbrok
							</h1>
							<p className="text-2xl font-medium italic text-gray-400 my-5">
								Product Caretaker
							</p>
						</div>
					</div>
					<div className="col-span-1 row-span-1 ">
						<div className="relative group">
							<img src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/team-member-03.jpg"></img>
							<div className="absolute top-0 left-0 justify-center items-center flex w-full h-full bg-black/[.9] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
								<ul className="">
									<li className="inline-block mx-3 ">
										<i className="fa-brands fa-git text-black text-3xl p-4 bg-white rounded-full hover:bg-dark-primary hover:text-white transition-all duration-500 cursor-pointer"></i>
									</li>
									<li className="inline-block mx-3 ">
										<i className="fa-brands fa-twitter text-black text-3xl p-4 bg-white rounded-full hover:bg-dark-primary hover:text-white transition-all duration-500 cursor-pointer"></i>
									</li>
									<li className="inline-block mx-3 ">
										<i className="fa-brands fa-facebook text-black text-3xl p-4 bg-white rounded-full hover:bg-dark-primary hover:text-white transition-all duration-500 cursor-pointer"></i>
									</li>
									<li className="inline-block mx-3 ">
										<i className="fa-brands fa-reddit-alien text-black text-3xl p-4 bg-white rounded-full hover:bg-dark-primary hover:text-white transition-all duration-500 cursor-pointer"></i>
									</li>
								</ul>
							</div>
						</div>
						<div className="text-center mt-10">
							<h1 className="text-4xl font-bold text-dark-primary">
								Ragnar Lodbrok
							</h1>
							<p className="text-2xl font-medium italic text-gray-400 my-5">
								Product Caretaker
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="border-t-2 border-dashed">
			<div className="2xl:max-w-8xl my-32 mx-auto">
				<div className="grid grid-cols-3 gap-20">
					<div className="col-span-full row-span-1 text-center">
						<h1 className="text-5xl font-bold text-dark-primary">
							Our Services
						</h1>
						<p className="text-2xl font-medium italic text-gray-400 my-5">
							Details to details is what makes Hexashop different from the
							other themes.
						</p>
					</div>
					<div className="col-span-1 row-span-1 text-center p-10 shadow-2xl">
						<div className="text-center  p-5">
							<h1 className="text-4xl font-bold text-dark-primary mb-5">
								Synther Vaporware
							</h1>
							<p className="text-2xl italic text-black font-extralight my-5">
								Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed
								do eiusmod temp incididunt ut labore, et dolore quis ipsum
								suspend.
							</p>
						</div>
						<div className="">
							<img src="	https://templatemo.com/templates/templatemo_571_hexashop/assets/images/service-01.jpg"></img>
						</div>
					</div>
					<div className="col-span-1 row-span-1 text-center p-10 shadow-2xl">
						<div className="text-center p-5">
							<h1 className="text-4xl font-bold text-dark-primary mb-5">
								Locavore Squidward
							</h1>
							<p className="text-2xl font-extralight italic text-black my-5">
								Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed
								do eiusmod temp incididunt ut labore, et dolore quis ipsum
								suspend.
							</p>
						</div>
						<div className="">
							<img src="	https://templatemo.com/templates/templatemo_571_hexashop/assets/images/service-02.jpg"></img>
						</div>
					</div>
					<div className="col-span-1 row-span-1 text-center p-10 shadow-2xl">
						<div className="text-center p-5">
							<h1 className="text-4xl font-bold text-dark-primary mb-5">
								Health Gothfam
							</h1>
							<p className="text-2xl font-extralight italic text-black my-5">
								Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed
								do eiusmod temp incididunt ut labore, et dolore quis ipsum
								suspend.
							</p>
						</div>
						<div className="">
							<img src="	https://templatemo.com/templates/templatemo_571_hexashop/assets/images/service-03.jpg"></img>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
	)
}
