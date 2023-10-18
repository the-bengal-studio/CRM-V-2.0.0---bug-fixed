import React, { Fragment, useEffect } from 'react'
import ALLImages from '../../../common/imagesData'
import { Helmet } from 'react-helmet';

const Underconstruction = () => {

    useEffect(() => {
        const rootDiv = document.getElementById('root');
        if (rootDiv) {
            rootDiv.className = 'grid grid-cols-12 gap-6 w-full';
        }
        return () => {
            rootDiv.className = ''; // Remove the className when component unmounts
        };
    }, []);
    return (
        <Fragment>
            <Helmet>
            <html dir='ltr' class="h-full"></html>
          <body class="flex h-full !py-0 bg-white dark:bg-bgdark"></body>
        </Helmet>
            <div className="lg:col-span-5 col-span-12 hidden lg:block relative  bg-primary/20">
                <div className="relative w-full h-full z-[1]">
                    <div className="authentication-page justify-center w-full max-w-7xl mx-auto">
                        <img src={ALLImages('png4')} alt="logo" className="mx-auto xxl:h-[500px]" />
                    </div >
                </div>
            </div>
            <div className="lg:col-span-7 col-span-12">
                <div className="authentication-page w-full">
                    <main id="content" className="w-full sm:max-w-5xl p-6">
                        <div className="mt-7">
                            <div className="p-0 md:p-7">
                                <div className="text-center">
                                    <h1 className="block text-2xl sm:text-5xl font-bold text-gray-800 dark:text-white">Under Construction</h1>
                                    <p className="mt-3 text-sm text-gray-600 dark:text-white/70">
                                        The Site You are looking For is Currently Under Construction And it will be back shortly , We will notify you when we are back..!

                                    </p>
                                </div>

                                <div className="mt-5 space-y-6">
                                    <div className="">
                                        <div className="grid md:grid-cols-4 gap-4 max-w-xl mx-auto">
                                            <div className="p-5 text-center bg-gray-100 dark:bg-black/20 rounded-sm space-y-5">
                                                <h4 className="font-semibold text-3xl leading-none">
                                                    365
                                                </h4>
                                                <p className="mb-1 text-sm font-semibold text-gray-500 dark:text-white/70">DAYS
                                                </p>
                                            </div>
                                            <div className="p-5 text-center bg-gray-100 dark:bg-black/20 rounded-sm space-y-5">
                                                <h4 className="font-semibold text-3xl leading-none">
                                                    24
                                                </h4>
                                                <p className="mb-1 text-sm font-semibold text-gray-500 dark:text-white/70">Hours
                                                </p>
                                            </div>
                                            <div className="p-5 text-center bg-gray-100 dark:bg-black/20 rounded-sm space-y-5">
                                                <h4 className="font-semibold text-3xl leading-none">
                                                    60
                                                </h4>
                                                <p className="mb-1 text-sm font-semibold text-gray-500 dark:text-white/70">
                                                    MINUTES</p>
                                            </div>
                                            <div className="p-5 text-center bg-gray-100 dark:bg-black/20 rounded-sm space-y-5">
                                                <h4 className="font-semibold text-3xl leading-none">
                                                    60
                                                </h4>
                                                <p className="mb-1 text-sm font-semibold text-gray-500 dark:text-white/70">
                                                    SECONDS</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="mb-2 text-center text-sm text-gray-600 dark:text-white/70">
                                            Follow Us
                                        </p>
                                        <div className="flex space-x-1 rtl:space-x-reverse justify-center text-center">
                                            <button aria-label="button" type="button"
                                                className="m-0 ti-btn ti-btn-soft-primary">
                                                <i className="ri ri-github-line text-lg leading-none"></i>
                                            </button>
                                            <button aria-label="button" type="button"
                                                className="m-0 ti-btn ti-btn-soft-primary">
                                                <i className="ri ri-instagram-line text-lg leading-none"></i>
                                            </button>
                                            <button aria-label="button" type="button"
                                                className="m-0 ti-btn ti-btn-soft-primary">
                                                <i className="ri ri-twitter-line text-lg leading-none"></i>
                                            </button>
                                            <button aria-label="button" type="button"
                                                className="m-0 ti-btn ti-btn-soft-primary">
                                                <i className="ri ri-linkedin-line text-lg leading-none"></i>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </Fragment>
    )
}

export default Underconstruction