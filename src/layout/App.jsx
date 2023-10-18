import React, { Fragment, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import Backtotop from "./layoutsection/backtotop/backtotop";
import Footer from "./layoutsection/footer/footer";
import Header from "./layoutsection/header/header";
import Sidebar from "./layoutsection/sidemenu/sidemenubar";
import Switcher from "./layoutsection/switcher/switcher";
import { Provider } from "react-redux";
import store from "../redux/store";
import { useState } from "react";
import * as switcherdata from "../common/switcherdata";
import {ThemeChanger} from "../redux/Action"

const App = () => {
	let [MyclassName , setMyClass] = useState("")

	const Bodyclickk = () => {
		if (localStorage.getItem("Syntoverticalstyles") == "icontext") {
			setMyClass("")
		}
	}
	useEffect(() => {



		import("preline");

	}, []);
	return (
		<Fragment>
			<Provider store={store}>
			<Helmet
                htmlAttributes={{
					lang: "en",
					// "data-menu-styles":"dark",
					dir: "ltr",
					class: "light",
					"data-nav-layout":"vertical",
					"data-header-styles":"light",
					"data-vertical-style":"overlay",
					"icon-text": MyclassName
                }}
            />
			<Switcher />
			<div className="page">
				<Sidebar />
				<Header />
				<div className="content">
					<div className="main-content" onClick={Bodyclickk}>
						<Outlet />
					</div>
				</div>
				<Footer />
			</div>
			<Backtotop />
			<div id="responsive-overlay"></div>
			</Provider>
		</Fragment>
	);
};

export default App;
