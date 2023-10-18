import React, { Fragment, useEffect } from 'react'
import ALLImages from '../../../common/imagesData';
import { Helmet } from 'react-helmet';

const Commingsoon = () => {
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
				<body class="flex h-full !py-0 bg-white dark:bg-bgdark"></body>
			</Helmet>
            <div className="lg:col-span-5 col-span-12 hidden lg:block relative  bg-primary/20">
                <div className="relative w-full h-full z-[1] p-10">
                    <div id="content" className="authentication-page justify-center w-full max-w-7xl mx-auto p-6">
                        <div className="mt-7">
                            <div className="p-6 sm:p-7 space-y-8">
                                <img src={ALLImages('png3')} alt="logo" className="mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-7 col-span-12">
                <div className="authentication-page w-full">

                    <main className="w-full max-w-5xl p-6 ">
                        <div className="mt-7">
                            <div className="p-4 sm:p-7">
                                <div className="text-center">
                                    <h1 className="block text-5xl font-bold text-gray-800 dark:text-white">Coming Soon</h1>
                                    <p className="mt-3 text-sm text-gray-600 dark:text-white/70">
                                        Our website is almost Done, mean while enter your email id to get latest updates and
                                        notifications about the website.
                                    </p>
                                </div>

                                <div className="mt-5 space-y-6">


                                    <div className="max-w-md mx-auto">
                                        <div className="flex rounded-sm shadow-sm">
                                            <input type="text" placeholder="info@gmail.com"
                                                className="ti-form-input rounded-none ltr:rounded-l-sm rtl:rounded-r-sm focus:z-10" />
                                            <button type="button"
                                                className="py-2 px-3 inline-flex flex-shrink-0 justify-center items-center gap-2 ltr:rounded-r-sm rtl:rounded-l-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">
                                                Notify me
                                            </button>
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

export default Commingsoon;