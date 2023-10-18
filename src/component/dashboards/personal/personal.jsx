import React from "react";
import { Link } from "react-router-dom";
import { Statistic } from "../../../common/chartData";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import ALLImages from "../../../common/imagesdata";

const Personal = () => {
	return (
		<div>
			<PageHeader currentpage="Personal Dashboard" activepage="Home" mainpage="Personal Dashboard" />

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 xxl:col-span-9">
					<div className="grid grid-cols-12 gap-x-5">
						<div className="col-span-12 md:col-span-4">
							<div className="box">
								<div className="box-body">
									<div className="flex justify-between">
										<div className="flex-1">
											<h6 className="mb-2 text-base font-medium">Total Balance</h6>
											<h5 className="mb-1 text-3xl text-gray-800 dark:text-white font-semibold">$75,234
												<span className="text-xs text-gray-500 dark:text-white/70 font-normal ">/ month</span>
											</h5>
											<span className="text-gray-500 dark:text-white/70"><i className="ti ti-trending-up text-success"></i>
                          +5%
                          than last month</span>
										</div>
										<div className="ltr:ml-auto rtl:mr-auto">
											<span className="avatar rounded-sm bg-primary text-white p-3"><i
												className="ri-wallet-2-line text-2xl leading-none"></i></span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 md:col-span-4">
							<div className="box">
								<div className="box-body">
									<div className="flex justify-between">
										<div className="flex-1">
											<h6 className="mb-2 text-base font-medium">Total Income</h6>
											<h5 className="mb-1 text-3xl text-gray-800 dark:text-white font-semibold">$45,234
												<span className="text-xs text-gray-500 dark:text-white/70 font-normal ">/ month</span>
											</h5>
											<span className="text-gray-500 dark:text-white/70"><i className="ti ti-trending-up text-success"></i>
                          +5%
                          than last month</span>
										</div>
										<div className="ltr:ml-auto rtl:mr-auto">
											<span className="avatar rounded-sm bg-primary text-white p-3"><i
												className="ri-currency-line text-2xl leading-none"></i></span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 md:col-span-4">
							<div className="box">
								<div className="box-body">
									<div className="flex justify-between">
										<div className="flex-1">
											<h6 className="mb-2 text-base font-medium">Total Expenses</h6>
											<h5 className="mb-1 text-3xl text-gray-800 dark:text-white font-semibold">$35,234
												<span className="text-xs text-gray-500 dark:text-white/70 font-normal ">/ month</span>
											</h5>
											<span className="text-gray-500 dark:text-white/70"><i className="ti ti-trending-down text-danger"></i>
                          -10%
                          than last month</span>
										</div>
										<div className="ltr:ml-auto rtl:mr-auto">
											<span className="avatar rounded-sm bg-primary text-white p-3"><i
												className="ri-numbers-line text-2xl leading-none"></i></span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 lg:col-span-8">
							<div className="box">
								<div className="box-header">
									<div className="sm:flex justify-between">
										<h5 className="box-title my-auto">Statistics</h5>
										<div className="inline-flex rounded-md shadow-sm">
											<button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-primary">
                          1D
											</button>
											<button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary">
                          1W
											</button>
											<button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary">
                          1M
											</button>
											<button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary">
                          3M
											</button>
											<button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary">
                          6M
											</button>
											<button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary">
                          1Y
											</button>
										</div>
									</div>
								</div>
								<div className="box-body">
									<Statistic/>
								</div>
							</div>
						</div>
						<div className="col-span-12 lg:col-span-4">
							<div className="box">
								<div className="box-header">
									<div className="flex">
										<h5 className="box-title my-auto">Contacts </h5>
										<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
											<button type="button" aria-label="button"
												className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
												<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
											<div className="hs-dropdown-menu ti-dropdown-menu">
												<Link className="ti-dropdown-item" to="#">Action</Link>
												<Link className="ti-dropdown-item" to="#">Another Action</Link>
												<Link className="ti-dropdown-item" to="#">Something else here</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="box-body">
									<ul className="flex flex-col">
										<li className="px-0 pt-0 ti-list-group border-0 text-gray-800 dark:text-white w-full">
											<div className="">
												<Link to={`${import.meta.env.BASE_URL}pagecomponent/profile/home/`} className="flex items-center space-x-3 rtl:space-x-reverse">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg58')}
														alt="Image Description"/>
													<div className="flex">
														<div className="block my-auto">
															<p
																className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                                  Socrates Itumay</p>
															<p
																className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                                  +(72)-86976972</p>
														</div>
													</div>
												</Link>
											</div>
											<div className="ltr:ml-auto rtl:mr-auto space-x-2 rtl:space-x-reverse">
												<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pagecomponent/contacts/`} className="text-gray-500 dark:text-white/70">
													<i className="ri-heart-line text-base hover:text-danger"></i>
												</Link>
												<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pagecomponent/contacts/`} className="text-gray-500 dark:text-white/70 rtl:rotate-180 inline-flex">
													<i className="ri-arrow-right-s-line text-base"></i>
												</Link>
											</div>
										</li>
										<li className="px-0 ti-list-group border-0 text-gray-800 dark:text-white w-full">
											<div className="">
												<Link to={`${import.meta.env.BASE_URL}pagecomponent/profile/home/`} className="flex items-center space-x-3 rtl:space-x-reverse">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg59')}
														alt="Image Description"/>
													<div className="flex">
														<div className="block my-auto">
															<p
																className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                                  Ryan Gercia</p>
															<p
																className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                                  +(12)-05147532</p>
														</div>
													</div>
												</Link>
											</div>
											<div className="ltr:ml-auto rtl:mr-auto space-x-2 rtl:space-x-reverse ">
												<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pagecomponent/contacts/`} className="text-danger">
													<i className="ri-heart-line text-base"></i>
												</Link>
												<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pagecomponent/contacts/`} className="text-gray-500 dark:text-white/70 rtl:rotate-180 inline-flex">
													<i className="ri-arrow-right-s-line text-base"></i>
												</Link>
											</div>
										</li>
										<li className="px-0 ti-list-group border-0 text-gray-800 dark:text-white w-full">
											<div className="">
												<Link to={`${import.meta.env.BASE_URL}pagecomponent/profile/home/`} className="flex items-center space-x-3 rtl:space-x-reverse">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg66')}
														alt="Image Description"/>
													<div className="flex">
														<div className="block my-auto">
															<p
																className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                                  Prax Bhav</p>
															<p
																className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                                  +(12)-05147532</p>
														</div>
													</div>
												</Link>
											</div>
											<div className="ltr:ml-auto rtl:mr-auto space-x-2 rtl:space-x-reverse ">
												<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pagecomponent/contacts/`} className="text-danger">
													<i className="ri-heart-line text-base"></i>
												</Link>
												<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pagecomponent/contacts/`} className="text-gray-500 dark:text-white/70 rtl:rotate-180 inline-flex">
													<i className="ri-arrow-right-s-line text-base"></i>
												</Link>
											</div>
										</li>
										<li className="px-0 ti-list-group border-0 text-gray-800 dark:text-white w-full">
											<div className="">
												<Link to={`${import.meta.env.BASE_URL}pagecomponent/profile/home/`} className="flex items-center space-x-3 rtl:space-x-reverse">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg68')}
														alt="Image Description"/>
													<div className="flex">
														<div className="block my-auto">
															<p
																className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                                  Jackie Chen</p>
															<p
																className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                                  +(12)-26556658</p>
														</div>
													</div>
												</Link>
											</div>
											<div className="ltr:ml-auto rtl:mr-auto space-x-2 rtl:space-x-reverse">
												<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pagecomponent/contacts/`} className="text-gray-500 dark:text-white/70">
													<i className="ri-heart-line text-base hover:text-danger"></i>
												</Link>
												<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pagecomponent/contacts/`} className="text-gray-500 dark:text-white/70 rtl:rotate-180 inline-flex">
													<i className="ri-arrow-right-s-line text-base"></i>
												</Link>
											</div>
										</li>
										<li className="px-0 ti-list-group border-0 text-gray-800 dark:text-white w-full">
											<div className="">
												<Link to={`${import.meta.env.BASE_URL}pagecomponent/profile/home/`} className="flex items-center space-x-3 rtl:space-x-reverse">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg61')}
														alt="Image Description"/>
													<div className="flex">
														<div className="block my-auto">
															<p
																className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                                  Samantha Sam</p>
															<p
																className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                                  +(12)-26556658</p>
														</div>
													</div>
												</Link>
											</div>
											<div className="ltr:ml-auto rtl:mr-auto space-x-2 rtl:space-x-reverse">
												<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pagecomponent/contacts/`} className="text-gray-500 dark:text-white/70">
													<i className="ri-heart-line text-base hover:text-danger"></i>
												</Link>
												<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pagecomponent/contacts/`} className="text-gray-500 dark:text-white/70 rtl:rotate-180 inline-flex">
													<i className="ri-arrow-right-s-line text-base"></i>
												</Link>
											</div>
										</li>
										<li className="px-0 ti-list-group border-0 text-gray-800 dark:text-white w-full">
											<div className="">
												<Link to={`${import.meta.env.BASE_URL}pagecomponent/profile/home/`} className="flex items-center space-x-3 rtl:space-x-reverse">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg71')}
														alt="Image Description"/>
													<div className="flex">
														<div className="block my-auto">
															<p
																className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                                  Robert Lewis</p>
															<p
																className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                                  +(12)-26556658</p>
														</div>
													</div>
												</Link>
											</div>
											<div className="ltr:ml-auto rtl:mr-auto space-x-2 rtl:space-x-reverse">
												<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pagecomponent/contacts/`} className="text-gray-500 dark:text-white/70">
													<i className="ri-heart-line text-base hover:text-danger"></i>
												</Link>
												<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pagecomponent/contacts`} className="text-gray-500 dark:text-white/70 rtl:rotate-180 inline-flex">
													<i className="ri-arrow-right-s-line text-base"></i>
												</Link>
											</div>
										</li>
										<li className="px-0 pb-0 ti-list-group border-0 text-gray-800 dark:text-white w-full">
											<div className="">
												<Link to={`${import.meta.env.BASE_URL}pagecomponent/profile/home/`} className="flex items-center space-x-3 rtl:space-x-reverse">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg59')}
														alt="Image Description"/>
													<div className="flex">
														<div className="block my-auto">
															<p
																className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                                  Ryan Gercia</p>
															<p
																className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                                  +(12)-05147532</p>
														</div>
													</div>
												</Link>
											</div>
											<div className="ltr:ml-auto rtl:mr-auto space-x-2 rtl:space-x-reverse ">
												<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pagecomponent/contacts/`} className="text-danger">
													<i className="ri-heart-line text-base"></i>
												</Link>
												<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pagecomponent/contacts/`} className="text-gray-500 dark:text-white/70 rtl:rotate-180 inline-flex">
													<i className="ri-arrow-right-s-line text-base"></i>
												</Link>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-3">
					<div className="box text-white overflow-hidden">
						<div className="block absolute w-full h-full before:bg-primary/70 before:absolute before:w-full before:h-full">
							<img src= {ALLImages('png120')} alt="" className="w-full xxl:h-full"/>
						</div>
						<div className="box-body relative">
							<div className="flex justify-between mb-4">
								<div className="ltr:mr-1 rtl:ml-1">
									<h6 className="text-base font-medium">Primary Account</h6>
									<Link to="#" className="text-xs text-white/70">Change<i
										className="ri-share-forward-line text-xs ltr:ml-1 rtl:mr-1"></i></Link>
								</div>
								<div className="min-w-fit">
									<div className="avatar bg-white/20 text-white rounded-sm p-3 ring-0">
										<i className="ri-paypal-line text-2xl leading-none"></i>
									</div>
								</div>
							</div>
							<h5 className="text-3xl text-white font-semibold">$1,29,389.00</h5>
							<p className="mb-1 text-sm text-white/70">Sarah Jahn SP</p>
							<div className="flex justify-between text-white/70">
								<span>XXXX XXXX XXXX 1116</span>
								<span>12/30</span>
							</div>
						</div>
					</div>
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">On Going Tasks</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                      Today <i className="ti ti-chevron-down"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu hidden">
										<Link className="ti-dropdown-item" to="#">Today</Link>
										<Link className="ti-dropdown-item" to="#">This Week</Link>
										<Link className="ti-dropdown-item" to="#">This Month</Link>
										<Link className="ti-dropdown-item" to="#">This Year</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body">
							<ul className="list-unstyled mb-0">
								<li className="ti-list-group mb-6 border-0 p-0 w-full">
									<div className="flex w-full">
										<div className="ltr:mr-3 rtl:ml-3">
											<div className="flex">
												<input type="checkbox" className="ti-form-checkbox mt-0.5" id="hs-default-checkbox"/>
											</div>
										</div>
										<div className="flex-1">
											<div className="flex items-center justify-between mb-1">
												<h5 className="mb-1 text-sm font-semibold text-gray-800 dark:text-white">Designing a landing page
												</h5>
												<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
													<button type="button" aria-label="button"
														className="shadow-none hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-0 bg-transparent border-0 text-gray-500 dark:bg-transparent">
														<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
													<div className="hs-dropdown-menu ti-dropdown-menu hidden">
														<Link className="ti-dropdown-item" to="#">Action</Link>
														<Link className="ti-dropdown-item" to="#">Another Action</Link>
														<Link className="ti-dropdown-item" to="#">Something Else Here</Link>
													</div>
												</div>
											</div>
											<div className="flex items-center justify-between">
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')}
														alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg60')}
														alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg62')}
														alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg63')}
														alt="Image Description"/>
												</div>
												<span className="text-gray-500 dark:text-white/70 flex text-xs"><i
													className="ri-time-line ltr:mr-1 rtl:ml-1 my-auto "></i>10-04-23</span>
											</div>
										</div>
									</div>
								</li>
								<li className="ti-list-group mb-6 border-0 p-0 w-full">
									<div className="flex w-full">
										<div className="ltr:mr-3 rtl:ml-3">
											<div className="flex">
												<input type="checkbox" className="ti-form-checkbox mt-0.5" id="hs-default-checkbox2"/>
											</div>
										</div>
										<div className="flex-1">
											<div className="flex items-center justify-between mb-1">
												<h5 className="mb-1 text-sm font-semibold text-gray-800 dark:text-white">Fixing Responsive Issues
												</h5>
												<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
													<button type="button" aria-label="button"
														className="shadow-none hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-0 bg-transparent border-0 text-gray-500 dark:bg-transparent">
														<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
													<div className="hs-dropdown-menu ti-dropdown-menu hidden">
														<Link className="ti-dropdown-item" to="#">Action</Link>
														<Link className="ti-dropdown-item" to="#">Another Action</Link>
														<Link className="ti-dropdown-item" to="#">Something Else Here</Link>
													</div>
												</div>
											</div>
											<div className="flex items-center justify-between">
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')}
														alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg60')}
														alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg62')}
														alt="Image Description"/>
													<span
														className="inline-flex items-center justify-center avatar w-6 h-6  rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
														<span className="font-medium text-gray-500 leading-none dark:text-white/70">9+</span>
													</span>
												</div>
												<span className="text-gray-500 dark:text-white/70 flex text-xs"><i
													className="ri-time-line ltr:mr-1 rtl:ml-1 my-auto "></i>10-04-23</span>
											</div>
										</div>
									</div>
								</li>
								<li className="ti-list-group mb-6 border-0 p-0 w-full">
									<div className="flex w-full">
										<div className="ltr:mr-3 rtl:ml-3">
											<div className="flex">
												<input type="checkbox" className="ti-form-checkbox mt-0.5" id="hs-default-checkbox3"/>
											</div>
										</div>
										<div className="flex-1">
											<div className="flex items-center justify-between mb-1">
												<h5 className="mb-1 text-sm font-semibold text-gray-800 dark:text-white">Fixing Bugs</h5>
												<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
													<button type="button" aria-label="button"
														className="shadow-none hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-0 bg-transparent border-0 text-gray-500 dark:bg-transparent">
														<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
													<div className="hs-dropdown-menu ti-dropdown-menu hidden">
														<Link className="ti-dropdown-item" to="#">Action</Link>
														<Link className="ti-dropdown-item" to="#">Another Action</Link>
														<Link className="ti-dropdown-item" to="#">Something Else Here</Link>
													</div>
												</div>
											</div>
											<div className="flex items-center justify-between">
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')}
														alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg60')}
														alt="Image Description"/>
												</div>
												<span className="text-gray-500 dark:text-white/70 flex text-xs"><i
													className="ri-time-line ltr:mr-1 rtl:ml-1 my-auto "></i>10-04-23</span>
											</div>
										</div>
									</div>
								</li>
								<li className="ti-list-group mb-6 border-0 p-0 w-full">
									<div className="flex w-full">
										<div className="ltr:mr-3 rtl:ml-3">
											<div className="flex">
												<input type="checkbox" className="ti-form-checkbox mt-0.5" id="hs-default-checkbox4"/>
											</div>
										</div>
										<div className="flex-1">
											<div className="flex items-center justify-between mb-1">
												<h5 className="mb-1 text-sm font-semibold text-gray-800 dark:text-white">Fixing Javascript Issues
												</h5>
												<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
													<button type="button" aria-label="button"
														className="shadow-none hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-0 bg-transparent border-0 text-gray-500 dark:bg-transparent">
														<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
													<div className="hs-dropdown-menu ti-dropdown-menu hidden">
														<Link className="ti-dropdown-item" to="#">Action</Link>
														<Link className="ti-dropdown-item" to="#">Another Action</Link>
														<Link className="ti-dropdown-item" to="#">Something Else Here</Link>
													</div>
												</div>
											</div>
											<div className="flex items-center justify-between">
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')}
														alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg60')}
														alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg77')}
														alt="Image Description"/>
												</div>
												<span className="text-gray-500 dark:text-white/70 flex text-xs"><i
													className="ri-time-line ltr:mr-1 rtl:ml-1 my-auto "></i>10-04-23</span>
											</div>
										</div>
									</div>
								</li>
								<li className="ti-list-group mb-0 border-0 p-0 w-full">
									<div className="flex w-full">
										<div className="ltr:mr-3 rtl:ml-3">
											<div className="flex">
												<input type="checkbox" className="ti-form-checkbox mt-0.5" id="hs-default-checkbox5"/>
											</div>
										</div>
										<div className="flex-1">
											<div className="flex items-center justify-between mb-1">
												<h5 className="mb-1 text-sm font-semibold text-gray-800 dark:text-white">Adding New Pages</h5>
												<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
													<button type="button" aria-label="button" className="shadow-none hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-0 bg-transparent border-0 text-gray-500 dark:bg-transparent">
														<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
													<div className="hs-dropdown-menu ti-dropdown-menu hidden">
														<Link className="ti-dropdown-item" to="#">Action</Link>
														<Link className="ti-dropdown-item" to="#">Another Action</Link>
														<Link className="ti-dropdown-item" to="#">Something Else Here</Link>
													</div>
												</div>
											</div>
											<div className="flex items-center justify-between">
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg77')} alt="Image Description"/>
												</div>
												<span className="text-gray-500 dark:text-white/70 flex text-xs"><i className="ri-time-line ltr:mr-1 rtl:ml-1 my-auto "></i>10-04-23</span>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>



			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 md:col-span-6 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Recent Messages</h5>
								<button type="button"
									className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                    View All</button>
							</div>
						</div>
						<div className="box-body">
							<ul className="">
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white w-full">
									<div className="flex items-start w-full">
										<Link to={`${import.meta.env.BASE_URL}pagecomponent/mail/chat/`} className="ltr:mr-2 rtl:ml-2 avatar rounded-full">
											<img src= {ALLImages('jpg73')} alt="img" className="rounded-full"/>
										</Link>
										<div className="flex justify-between relative w-full">
											<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pagecomponent/mail/chat/`} className="absolute h-full w-full inset-0"></Link>
											<div className="">
												<h5 className="text-sm text-gray-800 dark:text-white font-semibold">Elon Isk</h5>
												<span className="text-xs text-gray-500 dark:text-white/70">Hello there! How are you doing? Call me when...</span>
											</div>
											<div className="min-w-fit ltr:ml-2 rtl:mr-2 text-end">
												<p className="text-xs text-gray-500 dark:text-white/70 mb-1">2 min</p>
												<span className="relative inline-flex rounded-full h-5 w-5 bg-primary text-white justify-center items-center">2</span>
											</div>
										</div>
									</div>
								</li>
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white w-full">
									<div className="flex items-start w-full">
										<Link to={`${import.meta.env.BASE_URL}pagecomponent/mail/chat/`} className="ltr:mr-2 rtl:ml-2 avatar rounded-full">
											<img src= {ALLImages('jpg58')} alt="img" className="rounded-full"/>
										</Link>
										<div className="flex justify-between relative w-full">
											<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pagecomponent/mail/chat/`} className="absolute h-full w-full inset-0"></Link>
											<div className="">
												<h5 className="text-sm text-gray-800 dark:text-white font-semibold">Shakira Sen</h5>
												<span className="text-xs text-gray-500 dark:text-white/70">I would like to discuss about that assets...</span>
											</div>
											<div className="min-w-fit ltr:ml-2 rtl:mr-2 text-end">
												<p className="text-xs text-gray-500 dark:text-white/70 mb-1">09:43</p>
											</div>
										</div>
									</div>
								</li>
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white w-full">
									<div className="flex items-start w-full">
										<Link to={`${import.meta.env.BASE_URL}pagecomponent/mail/chat/`} className="ltr:mr-2 rtl:ml-2 avatar rounded-full">
											<img src= {ALLImages('jpg77')} alt="img" className="rounded-full"/>
										</Link>
										<div className="flex justify-between relative w-full">
											<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pagecomponent/mail/chat/`} className="absolute h-full w-full inset-0"></Link>
											<div className="">
												<h5 className="text-sm text-gray-800 dark:text-white font-semibold">Sebastian</h5>
												<span className="text-xs text-gray-500 dark:text-white/70">Shall we go to the cafe at downtown...</span>
											</div>
											<div className="min-w-fit ltr:ml-2 rtl:mr-2 text-end">
												<p className="text-xs text-gray-500 dark:text-white/70 mb-1">yesterday</p>
												<span className="relative inline-flex rounded-full h-5 w-5 bg-primary text-white justify-center items-center">2</span>
											</div>
										</div>
									</div>
								</li>
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white w-full">
									<div className="flex items-start w-full">
										<Link to={`${import.meta.env.BASE_URL}pagecomponent/mail/chat/`} className="ltr:mr-2 rtl:ml-2 avatar rounded-full">
											<img src= {ALLImages('jpg67')} alt="img" className="rounded-full"/>
										</Link>
										<div className="flex justify-between relative w-full">
											<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pagecomponent/mail/chat/`} className="absolute h-full w-full inset-0"></Link>
											<div className="">
												<h5 className="text-sm text-gray-800 dark:text-white font-semibold">Charlie Davieson</h5>
												<span className="text-xs text-gray-500 dark:text-white/70">Lorem ipsum dolor sit amet, consectetur</span>
											</div>
											<div className="min-w-fit ltr:ml-2 rtl:mr-2 text-end">
												<p className="text-xs text-gray-500 dark:text-white/70 mb-1">yesterday</p>
											</div>
										</div>
									</div>
								</li>
								<li className="p-0 mb-0 ti-list-group border-0 text-gray-800 dark:text-white w-full">
									<div className="flex items-start w-full">
										<Link to={`${import.meta.env.BASE_URL}pagecomponent/mail/chat/`} className="ltr:mr-2 rtl:ml-2 avatar rounded-full">
											<img src= {ALLImages('jpg59')} alt="img" className="rounded-full"/>
										</Link>
										<div className="flex justify-between relative w-full">
											<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pagecomponent/mail/chat/`} className="absolute h-full w-full inset-0"></Link>
											<div className="">
												<h5 className="text-sm text-gray-800 dark:text-white font-semibold">Selena Deoyl</h5>
												<span className="text-xs text-gray-500 dark:text-white/70">Phasellus vehicula at enim a pulvinar</span>
											</div>
											<div className="min-w-fit ltr:ml-2 rtl:mr-2 text-end">
												<p className="text-xs text-gray-500 dark:text-white/70 mb-1">yesterday</p>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Pending Bills </h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" aria-label="button" className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
									<div className="hs-dropdown-menu ti-dropdown-menu">
										<Link className="ti-dropdown-item" to="#">Action</Link>
										<Link className="ti-dropdown-item" to="#">Another Action</Link>
										<Link className="ti-dropdown-item" to="#">Something else here</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body">
							<ul className="flex flex-col">
								<li className="flex flex-col gap-x-3.5 bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white pb-1 rounded-sm mb-3">
									<Link to="#">
										<div className="flex items-center justify-between">
											<div className="flex items-center space-x-3 rtl:space-x-reverse">
												<div>
													<span className="avatar avatar-sm bg-primary/20 text-primary rounded-sm p-2.5">
														<i className="ri ri-bill-line leading-none text-xl"></i>
													</span>
												</div>
												<div className="ltr:ml-3 rtl:mr-3">
													<h3 className="text-sm font-semibold">
                              Bills
													</h3>
													<p className="text-xs text-gray-500 dark:text-white/70">$250</p>
												</div>
											</div>
											<div className="space-x-2 rtl:rotate-180">
												<i className="ri ri-arrow-right-s-line text-gray-500 dark:text-white/70 text-lg"></i>
											</div>
										</div>
									</Link>
								</li>
								<li className="flex flex-col gap-x-3.5 bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white py-1 rounded-sm mb-3">
									<Link to="#">
										<div className="flex items-center justify-between">
											<div className="flex items-center space-x-3 rtl:space-x-reverse">
												<div>
													<span className="avatar avatar-sm bg-secondary/20 text-secondary rounded-sm p-2.5">
														<i className="ri ri-shopping-basket-line leading-none text-xl"></i>
													</span>
												</div>
												<div className="ltr:ml-3 rtl:mr-3">
													<h3 className="text-sm font-semibold">
                              Shopping
													</h3>
													<p className="text-xs text-gray-500 dark:text-white/70">$236</p>
												</div>
											</div>
											<div className="space-x-2 rtl:rotate-180">
												<i className="ri ri-arrow-right-s-line text-gray-500 dark:text-white/70 text-lg"></i>
											</div>
										</div>
									</Link>
								</li>
								<li className="flex flex-col gap-x-3.5 bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white py-1 rounded-sm mb-3">
									<Link to="#">
										<div className="flex items-center justify-between">
											<div className="flex items-center space-x-3 rtl:space-x-reverse">
												<div>
													<span className="avatar avatar-sm bg-warning/20 text-warning rounded-sm p-2.5">
														<i className="ri ri-compass-line leading-none text-xl"></i>
													</span>
												</div>
												<div className="ltr:ml-3 rtl:mr-3">
													<h3 className="text-sm font-semibold">
                              Travel
													</h3>
													<p className="text-xs text-gray-500 dark:text-white/70">$236</p>
												</div>
											</div>
											<div className="space-x-2 rtl:rotate-180">
												<i className="ri ri-arrow-right-s-line text-gray-500 dark:text-white/70 text-lg"></i>
											</div>
										</div>
									</Link>
								</li>
								<li className="flex flex-col gap-x-3.5 bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white py-1 rounded-sm mb-3">
									<Link to="#">
										<div className="flex items-center justify-between">
											<div className="flex items-center space-x-3 rtl:space-x-reverse">
												<div>
													<span className="avatar avatar-sm bg-info/20 text-info rounded-sm p-2.5">
														<i className="ri ri-cake-3-line leading-none text-xl"></i>
													</span>
												</div>
												<div className="ltr:ml-3 rtl:mr-3">
													<h3 className="text-sm font-semibold">
                            Food
													</h3>
													<p className="text-xs text-gray-500 dark:text-white/70">$2635</p>
												</div>
											</div>
											<div className="space-x-2 rtl:rotate-180">
												<i className="ri ri-arrow-right-s-line text-gray-500 dark:text-white/70 text-lg"></i>
											</div>
										</div>
									</Link>
								</li>
								<li className="flex flex-col gap-x-3.5 bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white py-1 rounded-sm mb-3">
									<Link to="#">
										<div className="flex items-center justify-between">
											<div className="flex items-center space-x-3 rtl:space-x-reverse">
												<div>
													<span className="avatar avatar-sm bg-danger/20 text-danger rounded-sm p-2.5">
														<i className="ri ri-bit-coin-line leading-none text-xl"></i>
													</span>
												</div>
												<div className="ltr:ml-3 rtl:mr-3">
													<h3 className="text-sm font-semibold">
                              Stocks
													</h3>
													<p className="text-xs text-gray-500 dark:text-white/70">$2663</p>
												</div>
											</div>
											<div className="space-x-2 rtl:rotate-180">
												<i className="ri ri-arrow-right-s-line text-gray-500 dark:text-white/70 text-lg"></i>
											</div>
										</div>
									</Link>
								</li>
								<li className="flex flex-col gap-x-3.5 bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white pt-1 rounded-sm">
									<Link to="#">
										<div className="flex items-center justify-between">
											<div className="flex items-center space-x-3 rtl:space-x-reverse">
												<div>
													<span className="avatar avatar-sm bg-success/20 text-success rounded-sm p-2.5">
														<i className="ri ri-more-line leading-none text-xl"></i>
													</span>
												</div>
												<div className="ltr:ml-3 rtl:mr-3">
													<h3 className="text-sm font-semibold">
                              Others
													</h3>
													<p className="text-xs text-gray-500 dark:text-white/70">$3656</p>
												</div>
											</div>
											<div className="space-x-2 rtl:rotate-180">
												<i className="ri ri-arrow-right-s-line text-gray-500 dark:text-white/70 text-lg"></i>
											</div>
										</div>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxl:col-span-3">
					<div className="box">
						<div className="box-header justify-between flex">
							<div className="box-title my-auto">
                  Upcoming Events
							</div>
							<div>
								<button type="button" className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                    View All</button>
							</div>
						</div>
						<div className="box-body">
							<div className="overflow-x-auto">
								<ul className="list-unstyled timeline-widget mb-0">
									<li className="ti-list-group border-0 p-0 w-full timeline-widget-list">
										<div className="flex w-full">
											<div className="ltr:mr-12 rtl:ml-12 text-center">
												<span className="block text-sm font-semibold">02</span>
												<span className="block text-xs text-gray-500 dark:text-white/70">Mon</span>
											</div>
											<div className="flex flex-wrap flex-auto items-center justify-between">
												<div>
													<Link to="#">
														<p className="mb-1 truncate timeline-widget-content text-sm text-wrap !max-w-[15rem]">You have
                                an announcement - Ipsum Est Diam Eirmod</p>
														<p className="mb-0 text-xs leading-none text-gray-500 dark:text-white/70">10:00AM<span className="badge bg-primary/10 ltr:ml-2 rtl:mr-2 py-1 text-xs text-primary rounded-sm">Announcement</span>
														</p>
													</Link>
												</div>
												<div className="hs-dropdown ti-dropdown">
													<Link aria-label="anchor" to="#" className="text-lg leading-none text-gray-500">
														<i className="ri-more-2-line"></i>
													</Link>
													<div className="hs-dropdown-menu ti-dropdown-menu hidden">
														<Link className="ti-dropdown-item" to="#">
                                Action
														</Link>
														<Link className="ti-dropdown-item" to="#">
                                Another action
														</Link>
														<Link className="ti-dropdown-item" to="#">
                                Something else here
														</Link>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="ti-list-group border-0 p-0 w-full timeline-widget-list">
										<div className="flex w-full">
											<div className="ltr:mr-12 rtl:ml-12 text-center">
												<span className="block text-sm font-semibold">15</span>
												<span className="block text-xs text-gray-500 dark:text-white/70">Sun</span>
											</div>
											<div className="flex flex-wrap flex-auto items-center justify-between">
												<div>
													<Link to="#">
														<p className="mb-1 truncate timeline-widget-content text-sm text-wrap !max-w-[15rem]">National
                                holiday - Vero Jayanti</p>
														<p className="mb-0 text-xs leading-none text-gray-500 dark:text-white/70"><span className="badge bg-warning/10 ltr:ml-2 rtl:mr-2 py-1 text-xs text-warning rounded-sm">Holiday</span>
														</p>
													</Link>
												</div>
												<div className="hs-dropdown ti-dropdown">
													<Link aria-label="anchor" to="#" className="text-lg leading-none text-gray-500">
														<i className="ri-more-2-line"></i>
													</Link>
													<div className="hs-dropdown-menu ti-dropdown-menu hidden">
														<Link className="ti-dropdown-item" to="#">
                                Action
														</Link>
														<Link className="ti-dropdown-item" to="#">
                                Another action
														</Link>
														<Link className="ti-dropdown-item" to="#">
                                Something else here
														</Link>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="ti-list-group border-0 p-0 w-full timeline-widget-list">
										<div className="flex w-full">
											<div className="ltr:mr-12 rtl:ml-12 text-center">
												<span className="block text-sm font-semibold">23</span>
												<span className="block text-xs text-gray-500 dark:text-white/70">Mon</span>
											</div>
											<div className="flex flex-wrap flex-auto items-center justify-between">
												<div>
													<Link to="#">
														<p className="mb-1 truncate timeline-widget-content text-sm text-wrap !max-w-[15rem]">John pup
                                birthday - Team Member</p>
														<p className="mb-4 text-xs leading-none text-gray-500 dark:text-white/70">09:00AM<span className="badge bg-success/10 ltr:ml-2 rtl:mr-2">Birthday</span></p>
														<p className="mb-1 truncate timeline-widget-content text-sm text-wrap !max-w-[15rem]">Amet sed
                                no dolor kasd - Et Dolores Tempor Erat</p>
														<p className="mb-0 text-xs leading-none text-gray-500 dark:text-white/70">04:00PM<span className="badge bg-primary/10 ltr:ml-2 rtl:mr-2 py-1 text-xs text-primary rounded-sm">Announcement</span>
														</p>
													</Link>
												</div>
												<div className="hs-dropdown ti-dropdown">
													<Link aria-label="anchor" to="#" className="text-lg leading-none text-gray-500">
														<i className="ri-more-2-line"></i>
													</Link>
													<div className="hs-dropdown-menu ti-dropdown-menu hidden">
														<Link className="ti-dropdown-item" to="#">
                                Action
														</Link>
														<Link className="ti-dropdown-item" to="#">
                                Another action
														</Link>
														<Link className="ti-dropdown-item" to="#">
                                Something else here
														</Link>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="ti-list-group border-0 p-0 w-full timeline-widget-list">
										<div className="flex w-full">
											<div className="ltr:mr-12 rtl:ml-12 text-center">
												<span className="block text-sm font-semibold">31</span>
												<span className="block text-xs text-gray-500 dark:text-white/70">Tue</span>
											</div>
											<div className="flex flex-wrap flex-auto items-center justify-between">
												<div>
													<Link to="#">
														<p className="mb-1 truncate timeline-widget-content text-sm text-wrap !max-w-[15rem]">National
                                Holiday - Dolore Ipsum</p>
														<p className="mb-0 text-xs leading-none text-gray-500 dark:text-white/70"><span className="badge bg-warning/10 ltr:ml-2 rtl:mr-2 py-1 text-xs text-warning rounded-sm">Holiday</span>
														</p>
													</Link>
												</div>
												<div className="hs-dropdown ti-dropdown">
													<Link aria-label="anchor" to="#" className="text-lg leading-none text-gray-500">
														<i className="ri-more-2-line"></i>
													</Link>
													<div className="hs-dropdown-menu ti-dropdown-menu hidden">
														<Link className="ti-dropdown-item" to="#">
                                Action
														</Link>
														<Link className="ti-dropdown-item" to="#">
                                Another action
														</Link>
														<Link className="ti-dropdown-item" to="#">
                                Something else here
														</Link>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxl:col-span-3">
					<div className="box">
						<div className="box-header justify-between flex">
							<div className="box-title my-auto">
                  Quick Transfer
							</div>
							<div>
								<button type="button" className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                    View All</button>
							</div>
						</div>
						<div className="box-body">
							<div className="lg:grid hidden grid-cols-6 mb-2">
								<Link to="#">
									<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg58')} alt="Image Description"/>
								</Link>
								<Link to="#">
									<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg68')} alt="Image Description"/>
								</Link>
								<Link to="#">
									<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg70')} alt="Image Description"/>
								</Link>
								<Link to="#">
									<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
								</Link>
								<Link to="#">
									<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg59')} alt="Image Description"/>
								</Link>
								<Link to="#" aria-label="anchor" className="m-0 w-[2.375rem] h-[2.375rem] rounded-full ti-btn bg-gray-100 text-gray-500 hover:text-gray-600 hover:bg-gray-200 ring-offset-white focus:ring-gray-500 dark:bg-black/20 dark:hover:bg-black/30 dark:focus:ring-gray-600 dark:text-white/70 dark:focus:ring-offset-white/10">
									<i className="ri-arrow-right-s-line rtl:rotate-180"></i>
								</Link>
							</div>
							<div className="mb-2">
								<label htmlFor="input-label" className="ti-form-label">Send To</label>
								<input type="text" id="input-label" className="ti-form-input" placeholder="Account Number" defaultValue="2563658568556"/>
							</div>
							<div className="mb-2">
								<label htmlFor="input-label2" className="ti-form-label">Enter Amount</label>
								<input type="number" id="input-label2" className="ti-form-input" placeholder="Enter Amount" defaultValue="2350"/>
							</div>
							<div className="mb-2">
								<label htmlFor="input-label2" className="ti-form-label">Enter Notes</label>
								<textarea className="ti-form-input" rows={1} placeholder="Add some notes here"></textarea>
							</div>
							<div className="flex justify-between">
								<Link to="#" className="mb-0 w-full ti-btn ti-btn-primary">Send Money</Link>
								<Link to="#" className="mb-0 w-full ti-btn ti-btn-danger">Cancel</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Recent Trasaction history</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                      View All <i className="ti ti-chevron-down"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu hidden">
										<Link className="ti-dropdown-item" to="#">Download</Link>
										<Link className="ti-dropdown-item" to="#">Import</Link>
										<Link className="ti-dropdown-item" to="#">Export</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-sm ti-custom-table-head overflow-auto">
								<table className="ti-custom-table ti-custom-table-head whitespace-nowrap">
									<thead className="bg-gray-50 dark:bg-black/20">
										<tr className="">
											<th scope="col" className="dark:text-white/80 !text-center">S.no</th>
											<th scope="col" className="dark:text-white/80">Recipient</th>
											<th scope="col" className="dark:text-white/80">Transaction Id</th>
											<th scope="col" className="dark:text-white/80">Date</th>
											<th scope="col" className="dark:text-white/80">Amount</th>
											<th scope="col" className="dark:text-white/80">Type</th>
											<th scope="col" className="dark:text-white/80">Status</th>
											<th scope="col" className="dark:text-white/80">Action</th>
										</tr>
									</thead>
									<tbody className="">
										<tr className="">
											<td className="!text-center">1</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse text-start">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg58')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Socrates
                                Itumay</p>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto min-w-[180px]">socratesitumay@gmail.com</span>
													</div>
												</div>
											</td>
											<td>#256585</td>
											<td>02-04-2023</td>
											<td>$2536</td>
											<td>Debited</td>
											<td><span className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-success/10 text-success/80">Success</span>
											</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1" role="tooltip" data-popper-placement="top">
                                View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className="ti ti-trash"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
                                Delete
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="">
											<td className="!text-center">2</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse text-start">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg68')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Luke Cooper</p>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto min-w-[180px]">LukeCooper@gmail.com</span>
													</div>
												</div>
											</td>
											<td>#256586</td>
											<td>03-04-2023</td>
											<td>$250</td>
											<td>Credited</td>
											<td><span className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">Pending</span>
											</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1" role="tooltip" data-popper-placement="top">
                                View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className="ti ti-trash"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
                                Delete
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="">
											<td className="!text-center">3</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse text-start">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg70')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Rony Brad</p>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto min-w-[180px]">RonyBrad@gmail.com</span>
													</div>
												</div>
											</td>
											<td>#256587</td>
											<td>04-04-2023</td>
											<td>$3256</td>
											<td>Debited</td>
											<td><span className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-success/10 text-success/80">success</span>
											</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1" role="tooltip" data-popper-placement="top">
                                View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className="ti ti-trash"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
                                Delete
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="">
											<td className="!text-center">4</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse text-start">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg60')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Sophia Khud</p>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto min-w-[180px]">RonyBrad@gmail.com</span>
													</div>
												</div>
											</td>
											<td>#256588</td>
											<td>05-04-2023</td>
											<td>$2369</td>
											<td>Debited</td>
											<td><span className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-danger/10 text-danger/80">Cancel</span>
											</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1" role="tooltip" data-popper-placement="top">
                                View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className="ti ti-trash"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
                                Delete
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="">
											<td className="!text-center">5</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse text-start">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg59')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Cooper Hard</p>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto min-w-[180px]">CooperHard@gmail.com</span>
													</div>
												</div>
											</td>
											<td>#256589</td>
											<td>06-04-2023</td>
											<td>$596</td>
											<td>Credited</td>
											<td><span className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-success/10 text-success/80">Success</span>
											</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1" role="tooltip" data-popper-placement="top">
                                View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className="ti ti-trash"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
                                Delete
														</span>
													</Link>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className="box-footer">
							<div className="flex items-center">
								<div className="">
                        showing 5 Entries <i className="ri-arrow-right-line ml-2 font-semibold"></i>
								</div>
								<div className="ltr:ml-auto rtl:mr-auto">
									<nav className="flex justify-center items-center space-x-2 rtl:space-x-reverse">
										<Link className="text-gray-500 hover:text-primary e py-1 px-2 leading-none inline-flex items-center gap-2 rounded-sm" to="#">
											<span aria-hidden="true">Prev</span>
											<span className="sr-only">Previous</span>
										</Link>
										<Link className="bg-primary text-white py-1 px-2 leading-none inline-flex items-center text-sm font-medium rounded-sm" to="#" aria-current="page">1</Link>
										<Link className="text-gray-500 hover:text-primary e py-1 px-2 leading-none inline-flex items-center text-sm font-medium rounded-sm" to="#">2</Link>
										<Link className="text-gray-500 hover:text-primary e py-1 px-2 leading-none inline-flex items-center text-sm font-medium rounded-sm" to="#">3</Link>
										<Link className="text-gray-500 hover:text-primary e py-1 px-2 leading-none inline-flex items-center gap-2 rounded-sm" to="#">
											<span className="sr-only">Next</span>
											<span aria-hidden="true">Next</span>
										</Link>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};
export default Personal;
