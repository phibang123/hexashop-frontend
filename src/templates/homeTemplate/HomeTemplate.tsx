import React, { Fragment } from "react";
import toast, { Toaster } from 'react-hot-toast';

import Footer from "./layouts/footer/Footer"
import FromHelp from "./layouts/fromHelp/FromHelp";
import Header from "./layouts/header/Header";
import { Route } from "react-router";

interface IpropsTemPlate
{
	Component: any,
	path: string,
	exact: boolean
}



export default function HomeTemplate(props:IpropsTemPlate)
{
	let { Component, ...resRoute } = props;
	return (
		<Route
		{...resRoute}
			render={(propsRoute:object) => {
				return (
          <>	
            <Header></Header>
						<Component  {...propsRoute} />
						<FromHelp></FromHelp>
						<Footer></Footer>
					</>
				);
			}}
		/>
	);
}

