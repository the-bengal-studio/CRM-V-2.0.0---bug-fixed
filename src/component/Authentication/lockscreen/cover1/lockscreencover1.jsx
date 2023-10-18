import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import ALLImages from '../../../../common/imagesData';
import { Helmet } from 'react-helmet';

const LockScreenCover1 = () => {
  return (
    <Fragment>
        <Helmet>
        <html dir='ltr' class="h-full"></html>
                <body class="cover1 justify-center"></body>
        </Helmet>
            <div className="flex justify-center min-h-screen align-middle">
                <main id="content" className="w-full max-w-md mx-auto my-auto p-6">
                    <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className="header-logo">
                        <img src={ALLImages('dark')} alt="logo" className="mx-auto block" />

                    </Link>
                    <div className="mt-7 bg-white rounded-sm shadow-sm dark:bg-bgdark">
                        <div className="p-4 sm:p-7">
                            <div className="text-center">
                                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Lock Screen</h1>
                                <p className="mt-3 text-sm text-gray-600 dark:text-white/70">
                                    Welcome Back , Please Enter Your Password
                                </p>
                            </div>

                            <div className="mt-5">
                                <form>
                                    <div className="grid gap-y-4">
                                        <img src={ALLImages('jpg57')} alt="locksreen-img" className="w-24 h-24 rounded-full mx-auto"/>
                                            <div>
                                                <h2 className="text-center block text-sm font-semibold text-gray-800 dark:text-white">Jsontaylor@gmail.com</h2>
                                                <p className="text-center text-xs text-gray-600 dark:text-white/70">Web designer  </p>
                                            </div>
                                            <div>
                                                <div className="flex justify-between items-center">
                                                    <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>
                                                </div>
                                                <div className="relative">
                                                    <input type="password" id="password" name="password" className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70" required />
                                                </div>
                                            </div>

                                            <button type="submit"
                                                className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10">Unlock</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Fragment>
  )
}

export default LockScreenCover1;