import React, { Fragment, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import Footer from "./layoutsection/footer/footer";
import Header from "./layoutsection/header/header";
import Sidebar from "./layoutsection/sidemenu/sidemenubar";
import Switcher from "./layoutsection/switcher/switcher";
import store from "../redux/store";
import { Provider } from "react-redux";

const Pagelayout = () => {
	useEffect(() => {
		import("preline"); }, []);

	return (
		<Fragment>
			<Provider store={store}>
			<Switcher/>
			<div className="page">
				<Sidebar/>
				<Header/>
				<div className="content relative">
				<Outlet />
				</div>
				<Footer/>
			</div>
			</Provider>
		</Fragment>
	);
};

export default Pagelayout;
