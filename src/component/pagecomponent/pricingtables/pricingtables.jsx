import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Pricingtables = () => {
	return (
		<div>
			<PageHeader currentpage="Pricing Tables" activepage="Pages" mainpage="Pricing Tables" />
			<div className= "box">
				<div className= "box-header">
					<h5 className= "box-title">Pricing style-1</h5>
				</div>
				<div className= "box-body py-14">
					<div className= "sm:grid grid-cols-12 sm:space-y-0 space-y-6 gap-6 max-w-6xl mx-auto">
						<div className= "lg:col-span-4 col-span-12">
							<div className= "p-6 shadow border dark:border-white/10 text-center rounded-sm ">
								<h3 className= "mb-4 text-2xl font-semibold text-gray-800 dark:text-white">Basic</h3>
								<p className= "text-gray-500 dark:text-white/70">Sed duo rebum et et dolores sed amet rebum magna. Et sea elitr.</p>
								<div className= "flex justify-center my-7 items-baseline">
									<span className= "ltr:mr-2 rtl:ml-2 text-5xl font-bold text-gray-800 dark:text-white">$10</span>
									<span className= "text-gray-500 dark:text-white/70 font-medium"> / Month</span>
								</div>
								<ul className= "p-0 my-4 space-y-3">
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>2 Free Domain Name</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>3 One-Click Apps</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>1 Databases</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>Money BackGuarantee</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>24/7 support</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>Premium support: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>Free Updates: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
									</li>
								</ul>
								<div className= "text-center mt-2">
									<div className= "ti-btn w-full p-3 ti-btn-primary">Choose Plan</div>
								</div>
							</div>
						</div>
						<div className= "lg:col-span-4 col-span-12">
							<div className= "p-6 shadow border dark:border-white/10 text-center rounded-sm ">
								<h3 className= "mb-4 text-2xl font-semibold text-gray-800 dark:text-white">Premium</h3>
								<p className= "text-gray-500 dark:text-white/70">Sed duo rebum et et dolores sed amet rebum magna. Et sea elitr.</p>
								<div className= "flex justify-center my-7 items-baseline">
									<span className= "ltr:mr-2 rtl:ml-2 text-5xl font-bold text-gray-800 dark:text-white">$50</span>
									<span className= "text-gray-500 dark:text-white/70 font-medium"> / Month</span>
								</div>
								<ul className= "p-0 my-4 space-y-3">
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>2 Free Domain Name</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>3 One-Click Apps</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>1 Databases</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>Money BackGuarantee</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>24/7 support</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>Premium support: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>Free Updates: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
									</li>
								</ul>
								<div className= "text-center mt-2">
									<div className= "ti-btn w-full p-3 ti-btn-primary">Choose Plan</div>
								</div>
							</div>
						</div>
						<div className= "lg:col-span-4 col-span-12">
							<div className= "p-6 shadow border dark:border-white/10 text-center rounded-sm ">
								<h3 className= "mb-4 text-2xl font-semibold text-gray-800 dark:text-white">Standard</h3>
								<p className= "text-gray-500 dark:text-white/70">Sed duo rebum et et dolores sed amet rebum magna. Et sea elitr.</p>
								<div className= "flex justify-center my-7 items-baseline">
									<span className= "ltr:mr-2 rtl:ml-2 text-5xl font-bold text-gray-800 dark:text-white">$25</span>
									<span className= "text-gray-500 dark:text-white/70 font-medium"> / Month</span>
								</div>
								<ul className= "p-0 my-4 space-y-3">
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>2 Free Domain Name</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>3 One-Click Apps</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>1 Databases</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>Money BackGuarantee</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>24/7 support</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>Premium support: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>Free Updates: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
									</li>
								</ul>
								<div className= "text-center mt-2">
									<div className= "ti-btn w-full p-3 ti-btn-primary">Choose Plan</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className= "box">
				<div className= "box-header">
					<h5 className= "box-title">Pricing style-2</h5>
				</div>
				<div className= "box-body py-14">
					<div className= "sm:grid grid-cols-12 sm:space-y-0 space-y-6 lg:gap-0 gap-6 max-w-6xl mx-auto">
						<div className= "lg:col-span-4 col-span-12">
							<div className= "relative p-6 shadow border dark:border-white/10 text-center rounded-sm ">
								<div className= "absolute top-0 inset-x-0 h-0.5 bg-warning" aria-hidden="true"></div>
								<h3 className= "mb-4 text-2xl font-semibold text-gray-800 dark:text-white text-warning">Basic</h3>
								<p className= "text-gray-500 dark:text-white/70">Sed duo rebum et et dolores sed amet rebum magna. Et sea elitr.</p>
								<div className= "flex justify-center my-7 items-baseline">
									<span className= "ltr:mr-2 rtl:ml-2 text-5xl font-bold text-gray-800 dark:text-white">$10</span>
									<span className= "text-gray-500 dark:text-white/70 font-medium"> / Month</span>
								</div>
								<ul className= "p-0 my-4 space-y-3">
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>2 Free Domain Name</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>3 One-Click Apps</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>1 Databases</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>Money BackGuarantee</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>24/7 support</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>Premium support: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>Free Updates: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
									</li>
								</ul>
								<div className= "text-center mt-2">
									<div className= "ti-btn w-full p-3 ti-btn-warning">Choose Plan</div>
								</div>
							</div>
						</div>
						<div className= "lg:col-span-4 col-span-12 lg:scale-110 z-10 bg-white dark:bg-bgdark shadow-lg">
							<div className= "relative p-6 shadow border dark:border-white/10 text-center rounded-sm ">
								<div className= "absolute top-0 inset-x-0 h-0.5 bg-primary" aria-hidden="true"></div>
								<h3 className= "mb-4 text-2xl font-semibold text-gray-800 dark:text-white text-primary">Premium</h3>
								<p className= "text-gray-500 dark:text-white/70">Sed duo rebum et et dolores sed amet rebum magna. Et sea elitr.</p>
								<div className= "flex justify-center my-7 items-baseline">
									<span className= "ltr:mr-2 rtl:ml-2 text-5xl font-bold text-gray-800 dark:text-white">$50</span>
									<span className= "text-gray-500 dark:text-white/70 font-medium"> / Month</span>
								</div>
								<ul className= "p-0 my-4 space-y-3">
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>2 Free Domain Name</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>3 One-Click Apps</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>1 Databases</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>Money BackGuarantee</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>24/7 support</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>Premium support: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>Free Updates: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
									</li>
								</ul>
								<div className= "text-center mt-2">
									<div className= "ti-btn w-full p-3 ti-btn-primary">Choose Plan</div>
								</div>
							</div>
						</div>
						<div className= "lg:col-span-4 col-span-12">
							<div className= "relative p-6 shadow border dark:border-white/10 text-center rounded-sm ">
								<div className= "absolute top-0 inset-x-0 h-0.5 bg-danger" aria-hidden="true"></div>
								<h3 className= "mb-4 text-2xl font-semibold text-gray-800 dark:text-white text-danger">Standard</h3>
								<p className= "text-gray-500 dark:text-white/70">Sed duo rebum et et dolores sed amet rebum magna. Et sea elitr.</p>
								<div className= "flex justify-center my-7 items-baseline">
									<span className= "ltr:mr-2 rtl:ml-2 text-5xl font-bold text-gray-800 dark:text-white">$25</span>
									<span className= "text-gray-500 dark:text-white/70 font-medium"> / Month</span>
								</div>
								<ul className= "p-0 my-4 space-y-3">
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>2 Free Domain Name</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>3 One-Click Apps</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>1 Databases</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>Money BackGuarantee</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>24/7 support</span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>Premium support: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
									</li>
									<li className= "flex space-x-4 rtl:space-x-reverse">
										<span><i className= "ri ri-check-line text-success text-xl"></i></span>
										<span>Free Updates: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
									</li>
								</ul>
								<div className= "text-center mt-2">
									<div className= "ti-btn w-full p-3 ti-btn-danger">Choose Plan</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className= "box">
				<div className= "box-header">
					<h5 className= "box-title">Pricing style-3</h5>
				</div>
				<div className= "box-body">
					<div className= "text-center">
						<h2 className= "font-semibold text-2xl">Best Plans For You !</h2>
						<p className= "text-gray-500 dark:text-white/70">We have several plans to showcase your business.</p>
						<div className= "mt-5 text-center">
							<nav className= "flex justify-center bg-gray-100 dark:bg-black/20 p-2 mx-auto w-fit rounded-full gap-2" aria-label="Tabs" role="tablist">
								<button type="button" className= "hs-tab-active:!bg-primary hs-tab-active:!text-white dark:hs-tab-active:border-b-white/10 -mb-px py-2 px-4 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-full hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 active" id="pricing-1" data-hs-tab="#pricing-style-1" aria-controls="pricing-style-1" role="tab">
                                Monthly
								</button>
								<button type="button" className= "hs-tab-active:!bg-primary hs-tab-active:!text-white dark:hs-tab-active:border-b-white/10 -mb-px py-2 px-4 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-full hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-gray-300" id="pricing-2" data-hs-tab="#pricing-style-2" aria-controls="pricing-style-2" role="tab">
                                Yearly
								</button>
							</nav>
						</div>
					</div>

					<div className= "mt-3">
						<div id="pricing-style-1" role="tabpanel" aria-labelledby="pricing-1">
							<div className= "py-14">
								<div className= "sm:grid grid-cols-12 sm:space-y-0 space-y-6 max-w-6xl mx-auto">
									<div className= "lg:col-span-4 col-span-12">
										<div className= "relative p-6 shadow border dark:border-white/10 text-center rounded-sm ">
											<div className= "absolute top-0 inset-x-0 h-0.5 bg-warning" aria-hidden="true"></div>
											<h3 className= "mb-4 text-2xl font-semibold text-gray-800 dark:text-white text-warning">Basic</h3>
											<p className= "text-gray-500 dark:text-white/70">Sed duo rebum et et dolores sed amet rebum magna. Et sea elitr.</p>
											<div className= "flex justify-center my-7 items-baseline">
												<span className= "ltr:mr-2 rtl:ml-2 text-5xl font-bold text-gray-800 dark:text-white">$10</span>
												<span className= "text-gray-500 dark:text-white/70 font-medium"> / Month</span>
											</div>
											<ul className= "p-0 my-4 space-y-3">
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>2 Free Domain Name</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>3 One-Click Apps</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>1 Databases</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>Money BackGuarantee</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>24/7 support</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>Premium support: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>Free Updates: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
												</li>
											</ul>
											<div className= "text-center mt-2">
												<div className= "ti-btn w-full p-3 ti-btn-warning">Choose Plan</div>
											</div>
										</div>
									</div>
									<div className= "lg:col-span-4 col-span-12 lg:scale-110 z-10 bg-white dark:bg-bgdark shadow-lg">
										<div className= "relative p-6 shadow border dark:border-white/10 text-center rounded-sm ">
											<div className= "absolute top-0 inset-x-0 h-0.5 bg-primary" aria-hidden="true"></div>
											<h3 className= "mb-4 text-2xl font-semibold text-gray-800 dark:text-white text-primary">Premium</h3>
											<p className= "text-gray-500 dark:text-white/70">Sed duo rebum et et dolores sed amet rebum magna. Et sea elitr.</p>
											<div className= "flex justify-center my-7 items-baseline">
												<span className= "ltr:mr-2 rtl:ml-2 text-5xl font-bold text-gray-800 dark:text-white">$50</span>
												<span className= "text-gray-500 dark:text-white/70 font-medium"> / Month</span>
											</div>
											<ul className= "p-0 my-4 space-y-3">
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>2 Free Domain Name</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>3 One-Click Apps</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>1 Databases</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>Money BackGuarantee</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>24/7 support</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>Premium support: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>Free Updates: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
												</li>
											</ul>
											<div className= "text-center mt-2">
												<div className= "ti-btn w-full p-3 ti-btn-primary">Choose Plan</div>
											</div>
										</div>
									</div>
									<div className= "lg:col-span-4 col-span-12">
										<div className= "relative p-6 shadow border dark:border-white/10 text-center rounded-sm ">
											<div className= "absolute top-0 inset-x-0 h-0.5 bg-danger" aria-hidden="true"></div>
											<h3 className= "mb-4 text-2xl font-semibold text-gray-800 dark:text-white text-danger">Standard</h3>
											<p className= "text-gray-500 dark:text-white/70">Sed duo rebum et et dolores sed amet rebum magna. Et sea elitr.</p>
											<div className= "flex justify-center my-7 items-baseline">
												<span className= "ltr:mr-2 rtl:ml-2 text-5xl font-bold text-gray-800 dark:text-white">$25</span>
												<span className= "text-gray-500 dark:text-white/70 font-medium"> / Month</span>
											</div>
											<ul className= "p-0 my-4 space-y-3">
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>2 Free Domain Name</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>3 One-Click Apps</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>1 Databases</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>Money BackGuarantee</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>24/7 support</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>Premium support: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>Free Updates: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
												</li>
											</ul>
											<div className= "text-center mt-2">
												<div className= "ti-btn w-full p-3 ti-btn-danger">Choose Plan</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div id="pricing-style-2" className= "hidden" role="tabpanel" aria-labelledby="pricing-2">
							<div className= "py-14">
								<div className= "sm:grid grid-cols-12 sm:space-y-0 space-y-6 max-w-6xl mx-auto">
									<div className= "lg:col-span-4 col-span-12">
										<div className= "relative p-6 shadow border dark:border-white/10 text-center rounded-sm ">
											<div className= "absolute top-0 inset-x-0 h-0.5 bg-warning" aria-hidden="true"></div>
											<h3 className= "mb-4 text-2xl font-semibold text-gray-800 dark:text-white text-warning">Basic</h3>
											<p className= "text-gray-500 dark:text-white/70">Sed duo rebum et et dolores sed amet rebum magna. Et sea elitr.</p>
											<div className= "flex justify-center my-7 items-baseline">
												<span className= "ltr:mr-2 rtl:ml-2 text-5xl font-bold text-gray-800 dark:text-white">$180</span>
												<span className= "text-gray-500 dark:text-white/70 font-medium"> / Yearly</span>
											</div>
											<ul className= "p-0 my-4 space-y-3">
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>2 Free Domain Name</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>3 One-Click Apps</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>1 Databases</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>Money BackGuarantee</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>24/7 support</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>Premium support: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>Free Updates: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
												</li>
											</ul>
											<div className= "text-center mt-2">
												<div className= "ti-btn w-full p-3 ti-btn-warning">Choose Plan</div>
											</div>
										</div>
									</div>
									<div className= "lg:col-span-4 col-span-12 lg:scale-110 z-10 bg-white dark:bg-bgdark shadow-lg">
										<div className= "relative p-6 shadow border dark:border-white/10 text-center rounded-sm ">
											<div className= "absolute top-0 inset-x-0 h-0.5 bg-primary" aria-hidden="true"></div>
											<h3 className= "mb-4 text-2xl font-semibold text-gray-800 dark:text-white text-primary">Premium</h3>
											<p className= "text-gray-500 dark:text-white/70">Sed duo rebum et et dolores sed amet rebum magna. Et sea elitr.</p>
											<div className= "flex justify-center my-7 items-baseline">
												<span className= "ltr:mr-2 rtl:ml-2 text-5xl font-bold text-gray-800 dark:text-white">$350</span>
												<span className= "text-gray-500 dark:text-white/70 font-medium"> / Yearly</span>
											</div>
											<ul className= "p-0 my-4 space-y-3">
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>2 Free Domain Name</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>3 One-Click Apps</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>1 Databases</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>Money BackGuarantee</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>24/7 support</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>Premium support: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>Free Updates: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
												</li>
											</ul>
											<div className= "text-center mt-2">
												<div className= "ti-btn w-full p-3 ti-btn-primary">Choose Plan</div>
											</div>
										</div>
									</div>
									<div className= "lg:col-span-4 col-span-12">
										<div className= "relative p-6 shadow border dark:border-white/10 text-center rounded-sm ">
											<div className= "absolute top-0 inset-x-0 h-0.5 bg-danger" aria-hidden="true"></div>
											<h3 className= "mb-4 text-2xl font-semibold text-gray-800 dark:text-white text-danger">Standard</h3>
											<p className= "text-gray-500 dark:text-white/70">Sed duo rebum et et dolores sed amet rebum magna. Et sea elitr.</p>
											<div className= "flex justify-center my-7 items-baseline">
												<span className= "ltr:mr-2 rtl:ml-2 text-5xl font-bold text-gray-800 dark:text-white">$225</span>
												<span className= "text-gray-500 dark:text-white/70 font-medium"> / Yearly</span>
											</div>
											<ul className= "p-0 my-4 space-y-3">
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>2 Free Domain Name</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>3 One-Click Apps</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>1 Databases</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>Money BackGuarantee</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>24/7 support</span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>Premium support: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
												</li>
												<li className= "flex space-x-4 rtl:space-x-reverse">
													<span><i className= "ri ri-check-line text-success text-xl"></i></span>
													<span>Free Updates: <span className= "ltr:ml-2 rtl:mr-2 font-semibold">3 Months</span></span>
												</li>
											</ul>
											<div className= "text-center mt-2">
												<div className= "ti-btn w-full p-3 ti-btn-danger">Choose Plan</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className= "box">
				<div className= "box-header">
					<h5 className= "box-title">Pricing style-4</h5>
				</div>
				<div className= "box-body py-14">
					<div className= "sm:grid grid-cols-12 sm:space-y-0 space-y-6 gap-6 max-w-6xl mx-auto">
						<div className= "lg:col-span-4 col-span-12">
							<div className= "shadow border dark:border-white/10 rounded-sm ">
								<div className= "p-6">
									<h3 className= "text-2xl font-semibold text-gray-800 dark:text-white">Basic</h3>
									<p className= "text-gray-500 dark:text-white/70 text-xs">Sed duo rebum et et dolores sed amet rebum
                                magna. Et sea elitr.</p>
									<div className= "flex mt-4 items-baseline">
										<span className= "ltr:mr-2 rtl:ml-2 text-5xl font-semibold text-gray-800 dark:text-white">$10</span>
										<span className= "text-gray-500 dark:text-white/70 font-normal"> / Month</span>
									</div>
								</div>
								<div className= "p-6 border-y border-gray-200 dark:border-white/10">
									<h6 className= "font-medium text-base mb-4">What's Included</h6>
									<ul className= "p-0 space-y-3">
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-checkbox-circle-line text-success text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">2 Free Domain Name</span>
										</li>
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-checkbox-circle-line text-success text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">3 One-Click Apps</span>
										</li>
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-checkbox-circle-line text-success text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">1 Databases</span>
										</li>
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-checkbox-circle-line text-success text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">24/7 support</span>
										</li>
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-checkbox-circle-line text-success text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">Premium support: <span
												className="ltr:ml-2 rtl:mr-2 font-semibold text-black dark:text-white">3 Months</span></span>
										</li>
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-checkbox-circle-line text-success text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">Free Updates: <span
												className="ltr:ml-2 rtl:mr-2 font-semibold text-black dark:text-white">3 Months</span></span>
										</li>
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-forbid-line text-danger text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">Money BackGuarantee</span>
										</li>
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-forbid-line text-danger text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">Unlimited Users</span>
										</li>
									</ul>
								</div>
								<div className= "p-6 text-center">
									<div className= "ti-btn w-full ti-btn-primary m-0">Get Started</div>
								</div>
							</div>
						</div>
						<div className= "lg:col-span-4 col-span-12">
							<div className= "shadow border dark:border-white/10 rounded-sm ">
								<div className= "p-6">
									<h3 className= "text-2xl font-semibold text-gray-800 dark:text-white">Standard</h3>
									<p className= "text-gray-500 dark:text-white/70 text-xs">Sed duo rebum et et dolores sed amet rebum
                                magna. Et sea elitr.</p>
									<div className= "flex mt-4 items-baseline">
										<span className= "ltr:mr-2 rtl:ml-2 text-5xl font-semibold text-gray-800 dark:text-white">$25</span>
										<span className= "text-gray-500 dark:text-white/70 font-normal"> / Month</span>
									</div>
								</div>
								<div className= "p-6 border-y border-gray-200 dark:border-white/10">
									<h6 className= "font-medium text-base mb-4">What's Included</h6>
									<ul className= "p-0 space-y-3">
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-checkbox-circle-line text-success text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">2 Free Domain Name</span>
										</li>
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-checkbox-circle-line text-success text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">3 One-Click Apps</span>
										</li>
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-checkbox-circle-line text-success text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">1 Databases</span>
										</li>
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-checkbox-circle-line text-success text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">24/7 support</span>
										</li>
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-checkbox-circle-line text-success text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">Premium support: <span
												className="ltr:ml-2 rtl:mr-2 font-semibold text-black dark:text-white">12 Months</span></span>
										</li>
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-checkbox-circle-line text-success text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">Free Updates: <span
												className="ltr:ml-2 rtl:mr-2 font-semibold text-black dark:text-white">12 Months</span></span>
										</li>
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-forbid-line text-danger text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">Money BackGuarantee</span>
										</li>
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-forbid-line text-danger text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">Unlimited Users</span>
										</li>
									</ul>
								</div>
								<div className= "p-6 text-center">
									<div className= "ti-btn w-full ti-btn-primary m-0">Get Started</div>
								</div>
							</div>
						</div>
						<div className= "lg:col-span-4 col-span-12">
							<div className= "shadow border dark:border-white/10 rounded-sm ">
								<div className= "p-6">
									<h3 className= "text-2xl font-semibold text-gray-800 dark:text-white">Premium</h3>
									<p className= "text-gray-500 dark:text-white/70 text-xs">Sed duo rebum et et dolores sed amet rebum
                                magna. Et sea elitr.</p>
									<div className= "flex mt-4 items-baseline">
										<span className= "ltr:mr-2 rtl:ml-2 text-5xl font-semibold text-gray-800 dark:text-white">$50</span>
										<span className= "text-gray-500 dark:text-white/70 font-normal"> / Month</span>
									</div>
								</div>
								<div className= "p-6 border-y border-gray-200 dark:border-white/10">
									<h6 className= "font-medium text-base mb-4">What's Included</h6>
									<ul className= "p-0 space-y-3">
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-checkbox-circle-line text-success text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">2 Free Domain Name</span>
										</li>
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-checkbox-circle-line text-success text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">3 One-Click Apps</span>
										</li>
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-checkbox-circle-line text-success text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">1 Databases</span>
										</li>
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-checkbox-circle-line text-success text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">24/7 support</span>
										</li>
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-checkbox-circle-line text-success text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">Premium support: <span
												className="ltr:ml-2 rtl:mr-2 font-semibold text-black dark:text-white">6 Months</span></span>
										</li>
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-checkbox-circle-line text-success text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">Free Updates: <span
												className="ltr:ml-2 rtl:mr-2 font-semibold text-black dark:text-white">6 Months</span></span>
										</li>
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-checkbox-circle-line text-success text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">Unlimited Users</span>
										</li>
										<li className= "flex space-x-4 rtl:space-x-reverse">
											<i className= "ri ri-checkbox-circle-line text-success text-base leading-none"></i>
											<span className= "my-auto text-gray-500 dark:text-white/70">Money BackGuarantee</span>
										</li>
									</ul>
								</div>
								<div className= "p-6 text-center">
									<div className= "ti-btn w-full ti-btn-primary m-0">Get Started</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Pricingtables;
