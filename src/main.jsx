import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import { RouteData } from "./common/routingData";
import { HelmetProvider } from 'react-helmet-async';

import App from "./layout/App";

import Sales from "./component/dashboards/sales/sales";
import Pagelayout from "./layout/pagelayout";
import Aboutus from "./component/pagecomponent/aboutus/aboutus";
import Faqs from "./component/pagecomponent/faqs/faqs";
import Contactus from "./component/pagecomponent/contactus/contactus";
import TermsConditions from "./component/pagecomponent/terms&conditions/terms&conditions";
import Home from "./component/pagecomponent/profile/home/home";
import Landingpagelayout from "./layout/landingpagelayout";
import Landing from "./component/pagecomponent/landing/landing";
import Authenticationlayout from "./layout/Authenticationlayout";

import Commingsoon from "./component/Authentication/commingsoon/commingsoon";


import Error404 from "./component/Authentication/errorpage/error404/error404";
import Error500 from "./component/Authentication/errorpage/error500/error500";

import CreatePasswordBasic from "./component/Authentication/createpassword/basic/createpasswordbasic";
import CreatePasswordCover1 from "./component/Authentication/createpassword/cover1/createpasswordcover1";
import CreatePasswordCover2 from "./component/Authentication/createpassword/cover2/createpasswordcover2";
import ForgetPasswordBasic from "./component/Authentication/forgetpassword/basic/forgetpasswordbasic";
import ForgetPasswordCover1 from "./component/Authentication/forgetpassword/cover1/forgetpasswordcover1";
import ForgetPasswordCover2 from "./component/Authentication/forgetpassword/cover2/forgetpasswordcover2";
import LockScreenBasic from "./component/Authentication/lockscreen/basic/lockscreenbasic";
import LockScreenCover1 from "./component/Authentication/lockscreen/cover1/lockscreencover1";
import LockScreenCover2 from "./component/Authentication/lockscreen/cover2/lockscreencover2";
import ResetPasswordBasic from "./component/Authentication/resetpassword/basic/resetpasswordbasic";
import ResetPasswordCover1 from "./component/Authentication/resetpassword/cover1/resetpasswordcover1";
import ResetPasswordCover2 from "./component/Authentication/resetpassword/cover2/resetpasswordcover2";
import SignInBasic from "./component/Authentication/signin/basic/signinbasic";
import SignInCover1 from "./component/Authentication/signin/cover1/signincover1";
import SignInCover2 from "./component/Authentication/signin/cover2/signincover2";
import SignUpBasic from "./component/Authentication/signup/basic/signupbasic";
import SignUpCover1 from "./component/Authentication/signup/cover1/signupcover1";
import SignUpCover2 from "./component/Authentication/signup/cover2/signupcover2";
import VerificationBasic from "./component/Authentication/twostepverification/basic/verificationbasic";
import VerificationCover1 from "./component/Authentication/twostepverification/cover1/verificationcover1";
import VerificationCover2 from "./component/Authentication/twostepverification/cover2/verificationcover2";
import Underconstruction from "./component/Authentication/underconstruction/underconstruction";
import Undermaintenance from "./component/Authentication/undermaintenance/undermaintenance";


import Firebaselayout from "./layout/firebase/firebaselayout";
import Firebaselogin from "./layout/firebase/firebaselogin";
import Firebaseregister from "./layout/firebase/firebaseregister";
import ScrollToTop from "./ScrollToTop/ScrolltoTop";

const helmetContext = {};

ReactDOM.createRoot(document.getElementById("root")).render(
	<Fragment>
		<HelmetProvider context={helmetContext}>
		<BrowserRouter>
		<ScrollToTop/>
			<Routes>

				<Route path={`${import.meta.env.BASE_URL}`} element={<Firebaselayout />}>
					<Route index element={<Firebaselogin />} />
					<Route path={`${import.meta.env.BASE_URL}firebase/firebaselogin`} element={<Firebaselogin />} />
					<Route path={`${import.meta.env.BASE_URL}firebase/firebaseregister`} element={<Firebaseregister />} />
				</Route>

				{RouteData.map((idx) => (
					<Fragment key={Math.random()}>
						{/* //Main page */}
						<Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
							<Route  index element={<Sales />} />
							<Route exact path={idx.path} element={idx.element} />
						</Route>
						<Route path={`${import.meta.env.BASE_URL}`} element={<Pagelayout />}>
							<Route path={`${import.meta.env.BASE_URL}pagecomponent/aboutus`} element={<Aboutus />} />
							<Route path={`${import.meta.env.BASE_URL}pagecomponent/faqs`} element={<Faqs />} />
							<Route path={`${import.meta.env.BASE_URL}pagecomponent/Contactus`} element={<Contactus />} />
							<Route path={`${import.meta.env.BASE_URL}pagecomponent/terms&conditions`} element={<TermsConditions />} />

							{/* Profile */}
							<Route path={`${import.meta.env.BASE_URL}pagecomponent/profile/home`} element={<Home />} />
						</Route>

						{/* LandingPage  */}
						<Route path={`${import.meta.env.BASE_URL}`} element={<Landingpagelayout />}>
							<Route path={`${import.meta.env.BASE_URL}pagecomponent/landing`} element={<Landing />} />
						</Route>

						{/* Authentication */}
						
						<Route path={`${import.meta.env.BASE_URL}`} element={<Authenticationlayout />}>
						<Route path="*" element={<Error404/>} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/commingsoon`} element={<Commingsoon />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/createpassword/basic`} element={<CreatePasswordBasic />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/createpassword/cover1`} element={<CreatePasswordCover1 />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/createpassword/cover2`} element={<CreatePasswordCover2 />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/errorpage/error404`} element={<Error404 />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/errorpage/error500`} element={<Error500 />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/forgetpassword/basic`} element={<ForgetPasswordBasic />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/forgetpassword/cover1`} element={<ForgetPasswordCover1 />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/forgetpassword/cover2`} element={<ForgetPasswordCover2 />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/lockscreen/basic`} element={<LockScreenBasic />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/lockscreen/cover1`} element={<LockScreenCover1 />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/lockscreen/cover2`} element={<LockScreenCover2 />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/resetpassword/basic`} element={<ResetPasswordBasic />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/resetpassword/cover1`} element={<ResetPasswordCover1 />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/resetpassword/cover2`} element={<ResetPasswordCover2 />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/signin/basic`} element={<SignInBasic />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/signin/cover1`} element={<SignInCover1 />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/signin/cover2`} element={<SignInCover2 />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/signup/basic`} element={<SignUpBasic />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/signup/cover1`} element={<SignUpCover1 />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/signup/cover2`} element={<SignUpCover2 />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/twostepverification/basic`} element={<VerificationBasic />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/twostepverification/cover1`} element={<VerificationCover1 />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/twostepverification/cover2`} element={<VerificationCover2 />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/underconstruction`} element={<Underconstruction />} />
							<Route path={`${import.meta.env.BASE_URL}Authentication/undermaintenance`} element={<Undermaintenance />} />
						</Route>
						
					</Fragment>
				))}

			</Routes>
		</BrowserRouter>
		</HelmetProvider>
	</Fragment>,
);
