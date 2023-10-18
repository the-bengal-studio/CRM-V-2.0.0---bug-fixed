import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";


const Authenticationlayout = () => {

    useEffect(() => {
        import("preline");
    }, []);

    return (
        <Fragment>
            <Helmet>
                <html class="h-full"></html>
            </Helmet>

            <Outlet />

        </Fragment>
    )
}

export default Authenticationlayout;