import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseapikey";
import ALLImages from "../../common/imagesdata";
import { Helmet } from "react-helmet";


const Firebaselogin = () => {

    useEffect(() => {
        const rootDiv = document.getElementById('root');
        if (rootDiv) {
            rootDiv.className = 'grid grid-cols-12 gap-6 w-full h-full';
        }
        return () => {
            rootDiv.className = ''; // Remove the className when component unmounts
        };
    }, []);

    const [err, setError] = useState("");
    const [loading, setLoader] = useState(false);
    const [data, setData] = useState({
        "email": "adminreact@gmail.com",
        "password": "1234567890",
    })
    const { email, password } = data;
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        setError("");
    }
    const Login = (e) => {
        setLoader(true)
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(
            user => { RouteChange(); setLoader(false) }).catch(err => { setError(err.message); setLoader(false) })
    }


    let navigate = useNavigate();
    const RouteChange = () => {
        let path = `${import.meta.env.BASE_URL}dashboards/sales/`;
        navigate(path);
    }

    let loader = <div role="status"> <svg aria-hidden="true" className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg><span className="sr-only">Loading...</span></div>

    return (
        <Fragment>
            <Helmet>
                <html dir="ltr"></html>
                <body class="error-page flex h-full !py-0 bg-white dark:bg-bgdark"></body>
            </Helmet>
            <div className="lg:col-span-6 col-span-12 hidden lg:block relative">
                <div className="cover relative w-full h-full z-[1] p-10">
                    <Link to="#" className="header- logo">
                        <img src={ALLImages('desktoplight')} alt="logo"
                            className="ltr:ml-auto rtl:mr-auto block" />
                    </Link>
                    <div className="authentication-page justify-center w-full max-w-7xl mx-auto p-0">
                        <img src={ALLImages('png2')} alt="logo" className="mx-auto h-[500px]" />
                    </div>
                </div>
            </div>
            <div className="lg:col-span-6 col-span-12">
                <div className="authentication-page w-full">

                    <main id="content" className="w-full max-w-md mx-auto p-6">
                        <Link to="#" className="header-logo lg:hidden">
                            <img src={ALLImages('logo')} alt="logo" className="mx-auto block dark:hidden" />
                            <img src={ALLImages('dark')} alt="logo" className="mx-auto hidden dark:block" />
                        </Link>
                        <div className="mt-7">
                            <nav className= "!block px-6" aria-label="Tabs">
                                <div className="flex justify-center space-x-2 ">
                                    <button type="button" className= "hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-sm hover:text-primary  dark:text-white/70 dark:hover:text-white active" id="pills-with-brand-color-item-1" data-hs-tab="#pills-with-brand-color-01" aria-controls="pills-with-brand-color-01">
                                        <img src= {ALLImages('png8')} className="avatar w-6 h-6 rounded-full ring-0" alt="user-img"/>
                                    </button>
                                    <button type="button" className= "hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-sm hover:text-primary  dark:text-white/70 dark:hover:text-white" id="pills-with-brand-color-item-2" data-hs-tab="#pills-with-brand-color-02" aria-controls="pills-with-brand-color-02">
                                        <img src= {ALLImages('png9')} className="avatar w-6 h-6 rounded-full ring-0" alt="user-img"/>
                                    </button>
                                </div>
                            </nav>
                            <div id="pills-with-brand-color-01" role="tabpanel" aria-labelledby="pills-with-brand-color-item-1">
                                <div className="p-4 sm:p-7">
                                    <div className="text-center">
                                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
                                        <p className="mt-3 text-sm text-gray-600 dark:text-white/70">
                                            Don't have an account yet?
                                            <Link className="text-primary decoration-2 hover:underline font-medium" to={`${import.meta.env.BASE_URL}firebase/firebaseregister`}>
                                                Sign up here
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="mt-5">
                                        <button type="button"
                                            className="w-full py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10">
                                            <img src={ALLImages('png5')} className="w-4 h-4"
                                                alt="google-img" />
                                            Sign in with Google
                                        </button>

                                        <div
                                            className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 ltr:before:mr-6 rtl:before:ml-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 ltr:after:ml-6 rtl:after:mr-6 dark:text-white/70 dark:before:border-white/10 dark:after:border-white/10">
                                            Or</div>

                                        <div>
                                            <div className="grid gap-y-4">

                                                <div>

                                                    {err && <div className="bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md" role="alert">
                                                        <div className="flex">
                                                            <div className="py-1"><svg className="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                                                            <div>{err}</div>
                                                        </div>
                                                    </div>}


                                                    <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email
                                                        address</label>
                                                    <div className="relative">
                                                        <input type="email" id="email" name="email" onChange={changeHandler} value={email}
                                                            className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                                                            required />
                                                    </div>
                                                </div>

                                                <div>
                                                    
                                                    <div className="relative">
                                                        <input type="password" id="password" name="password" value={password} onChange={changeHandler}
                                                            className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                                                            required />
                                                    </div>
                                                </div>

                                                <div className="flex items-center">
                                                    <div className="flex">
                                                        <input id="remember-me" name="remember-me" type="checkbox"
                                                            className="shrink-0 mt-0.5 border-gray-200 rounded text-primary pointer-events-none focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-white/10" />
                                                    </div>
                                                    <div className="ltr:ml-3 rtl:mr-3" required>
                                                        <label htmlFor="remember-me" className="text-sm dark:text-white">Remember
                                                            me</label>
                                                    </div>
                                                </div>

                                                <Link to="#" onClick={Login} className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10">Sign in {loading ? loader : ""}</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div id="pills-with-brand-color-02" className= "hidden" role="tabpanel" aria-labelledby="pills-with-brand-color-item-2">
                                <div className="p-4 sm:p-7">
                                    <div className="text-center">
                                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
                                        <p className="mt-3 text-sm text-gray-600 dark:text-white/70">
                                            Don't have an account yet?
                                            <Link className="text-primary decoration-2 hover:underline font-medium" to={`${import.meta.env.BASE_URL}Authentication/signup/cover2`}>
                                                Sign up here
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="mt-5">
                                        <button type="button"
                                            className="w-full py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10">
                                            <img src= {ALLImages('png5')} className="w-4 h-4"
                                                alt="google-img"/>
                                            Sign in with Google
                                        </button>

                                        <div
                                            className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 ltr:before:mr-6 rtl:before:ml-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 ltr:after:ml-6 rtl:after:mr-6 dark:text-white/70 dark:before:border-white/10 dark:after:border-white/10">
                                            Or</div>

                                        <div>
                                            <div className="grid gap-y-4">

                                                <div>
                                                    <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email
                                                        address</label>
                                                    <div className="relative">
                                                        <input type="email" id="email" name="email"
                                                            className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                                                            required/>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="flex justify-between items-center">
                                                        <label htmlFor="password"
                                                            className="block text-sm mb-2 dark:text-white">Password</label>
                                                        <Link className="text-sm text-primary decoration-2 hover:underline font-medium"
                                                            to={`${import.meta.env.BASE_URL}Authentication/forgetpassword/cover2`}>Forgot password?</Link>
                                                    </div>
                                                    <div className="relative">
                                                        <input type="password" id="password" name="password"
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
                                                        <label htmlFor="remember-me" className="text-sm dark:text-white">Remember
                                                            me</label>
                                                    </div>
                                                </div>

                                                    <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`}
                                                    className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10">Sign
                                                    in</Link>
                                            </div>
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

export default Firebaselogin;