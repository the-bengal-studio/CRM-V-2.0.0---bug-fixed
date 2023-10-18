import React from 'react'
import { Link } from 'react-router-dom';
import ALLImages from '../../../../common/imagesData';
import { Helmet } from 'react-helmet';

const SignUpCover1 = () => {
  return (
    <div className="flex justify-center min-h-screen align-middle">
        <Helmet>
        <html dir='ltr' class="h-full"></html>
          <body class="cover1 justify-center"></body>
        </Helmet>
    <main id="content"  className="w-full max-w-md mx-auto my-auto p-6">
        <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className="header-logo">
            <img src= {ALLImages('dark')} alt="logo" className="mx-auto block"/>
        </Link>
        <div className="mt-7 box mb-0">
            <div className="box-body">
                <div className="text-center">
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
                    <p className="mt-3 text-sm text-gray-600 dark:text-white/70">
                        Already have an account?
                        <Link className="text-primary decoration-2 hover:underline font-medium" to={`${import.meta.env.BASE_URL}Authentication/signin/cover1`}> Sign in here</Link>
                    </p>
                </div>
                <div className="mt-5">
                    <button type="button"
                        className="w-full py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10">
                        <img src= {ALLImages('png5')} className="w-4 h-4" alt="google-img"/>Sign in with Google
                    </button>

                    <div
                        className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 ltr:before:mr-6 rtl:before:ml-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 ltr:after:ml-6 rtl:after:mr-6 dark:text-white/70 dark:before:border-white/10 dark:after:border-white/10">
                        Or</div>
                    <form>
                        <div className="grid gap-y-4">
                            <div>
                                <label className="block text-sm mb-2 dark:text-white">Full Name</label>
                                <div className="relative">
                                    <input type="text"
                                        className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                                        required/>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm mb-2 dark:text-white">Email address</label>
                                <div className="relative">
                                    <input type="email"
                                        className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                                        required/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>
                                <div className="relative">
                                    <input type="password" id="password" name="password"
                                        className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                                        required/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block text-sm mb-2 dark:text-white">Confirm
                                    Password</label>
                                <div className="relative">
                                    <input type="password" id="confirm-password" name="confirm-password"
                                        className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                                        required/>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex">
                                    <input id="remember-me" name="remember-me" type="checkbox"
                                        className="shrink-0 mt-0.5 border-gray-200 rounded text-primary pointer-events-none focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-white/10"/>
                                </div>
                                <div className="ltr:ml-3 rtl:mr-3">
                                    <label htmlFor="remember-me" className="text-sm dark:text-white">I accept the <Link
                                            className="text-primary decoration-2 hover:underline font-medium"
                                            to={`${import.meta.env.BASE_URL}pagecomponent/terms&conditions/`}>Terms and Conditions</Link></label>
                                </div>
                            </div>

                            <button type="submit"
                                className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10">Sign
                                up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
</div>
  )
}

export default SignUpCover1;