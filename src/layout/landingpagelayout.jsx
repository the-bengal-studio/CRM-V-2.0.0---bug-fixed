import React, { useEffect, useState } from 'react'
import Landingswitcher from './layoutsection/switcher/landingswitcher';
import { Outlet } from 'react-router-dom';
import Backtotop from './layoutsection/backtotop/backtotop';
// import { document } from 'postcss';
import { Provider } from "react-redux";
import store from '../redux/store';


const Landingpagelayout = () => {

useEffect(() => {
  import("preline");
  
}, []);

  return (
    <Provider store={store}>
        <Landingswitcher/>
        <Outlet/>
        <Backtotop/>
        <div id="responsive-overlay"></div>
    </Provider>
  )
}

export default Landingpagelayout