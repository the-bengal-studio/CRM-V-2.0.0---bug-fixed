import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Error500 = () => {
    return (
        <>
        <Helmet>
                <html dir='ltr' class="h-full"></html>
				<body class="authentication-page"></body>
		</Helmet>
        <main id="content" className="mx-auto" >
            <canvas className="error-basic-background"></canvas>
            <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
                <h1 className="block font-bold text-primary text-9xl dark:text-primary">500</h1>
                <p className="mt-3 text-2xl font-bold text-gray-800 dark:text-white">Oops, something went wrong.</p>
                <p className="text-gray-600 dark:text-white/70">Internal Server 500 Error. we are fixing the problem .Please try after some time.</p>
                <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                    <Link className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-primary hover:bg-primary border border-transparent text-white text-sm font-medium rounded-sm focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 focus:ring-offset-white transition py-2 px-3 dark:focus:ring-offset-white/10"
                        to={`${import.meta.env.BASE_URL}dashboards/sales`}>
                        <i className="ri-arrow-left-line"></i>
                        Get Back to Home
                    </Link>
                </div>
            </div>
        </main>
        </>

    )
}

export default Error500;