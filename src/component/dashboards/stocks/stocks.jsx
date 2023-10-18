import React from "react";
import { Link } from "react-router-dom";
import { InvestmentNum, Investments, PortfolioValue, ReturnsRate, TotalAmount } from "../../../common/chartData";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Stocks = () => {
	return (
		<div>
			<PageHeader currentpage="Stocks Dashboard" activepage="Home" mainpage="Stocks Dashboard" />

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 md:col-span-6 xxxl:col-span-3">
					<div className="box overflow-hidden">
						<div className="box-body">
							<div className="flex items-start">
								<div className="ltr:mr-3 rtl:ml-3">
									<span className="avatar rounded-full bg-primary text-white p-3"><i className="ti ti-cash text-2xl leading-none"></i></span>
								</div>
								<div className="flex-1 sm:flex justify-between items-center">
									<div className="flex-1">
										<p className="mb-1 text-gray-500 dark:text-white/70 text-sm">Total Amount Invested</p>
										<h5 className="text-xl text-gray-800 dark:text-white font-semibold">$23,8998.99</h5>
									</div>
									
									<TotalAmount/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxxl:col-span-3">
					<div className="box overflow-hidden">
						<div className="box-body">
							<div className="flex items-start">
								<div className="ltr:mr-3 rtl:ml-3">
									<span className="avatar rounded-full bg-secondary text-white p-3"><i className="ti ti-arrow-big-up-lines text-2xl leading-none"></i></span>
								</div>
								<div className="flex-1 sm:flex justify-between items-center">
									<div className="flex-1">
										<p className="mb-1 text-gray-500 dark:text-white/70 text-sm">No Of Investments</p>
										<h5 className="text-xl text-gray-800 dark:text-white font-semibold">1,116</h5>
									</div>
									
									<InvestmentNum/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxxl:col-span-3">
					<div className="box overflow-hidden">
						<div className="box-body">
							<div className="flex items-start">
								<div className="ltr:mr-3 rtl:ml-3">
									<span className="avatar rounded-full bg-warning text-white p-3"><i className="ti ti-flame  text-2xl leading-none"></i></span>
								</div>
								<div className="flex-1 sm:flex justify-between items-center">
									<div className="flex-1">
										<p className="mb-1 text-gray-500 dark:text-white/70 text-sm">Portfolio Value</p>
										<h5 className="text-xl text-gray-800 dark:text-white font-semibold">$12,920.20</h5>
									</div>
									
									<PortfolioValue/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxxl:col-span-3">
					<div className="box overflow-hidden">
						<div className="box-body">
							<div className="sm:flex items-start">
								<div className="ltr:mr-3 rtl:ml-3">
									<span className="avatar rounded-full bg-danger text-white p-3"><i className="ti ti-arrow-big-down-lines text-2xl leading-none"></i></span>
								</div>
								<div className="flex-1 flex justify-between items-center">
									<div className="flex-1">
										<p className="mb-1 text-gray-500 dark:text-white/70 text-sm">Returns Rate</p>
										<h5 className="text-xl text-gray-800 dark:text-white font-semibold">+12.08% <i className="fe fe-arrow-up ltr:ml-1 rtl:mr-1 text-success"></i> </h5>
									</div>
									
									<ReturnsRate/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 xxl:col-span-8">
				<Investments/>
				</div>
				<div className="col-span-12 xxl:col-span-4">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">My Stocks</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                      All Stocks <i className="ti ti-chevron-down"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu hidden">
										<Link className="ti-dropdown-item" to="#">All Stocks</Link>
										<Link className="ti-dropdown-item" to="#">Wishlist</Link>
										<Link className="ti-dropdown-item" to="#">Stocks</Link>
										<Link className="ti-dropdown-item" to="#">Crypto</Link>
										<Link className="ti-dropdown-item" to="#">ETFs</Link>
										<Link className="ti-dropdown-item" to="#">Bonds</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body p-0">
							<div className="hs-accordion-group my-stocks-container">

								<div className="hs-accordion stock-item" id="hs-basic-heading-one">
									<button type="button" className="hs-accordion-toggle  group py-0 inline-flex items-center gap-x-3 w-full font-medium text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-collapse-one">
										<span className="flex items-center w-full">
											<span className="flex justify-between items-center w-full">
												<span className="ltr:mr-2 rtl:ml-2">
													<span className="avatar avatar-sm rounded-full bg-primary/20 text-primary p-2.5"><i className="ri-github-line text-xl leading-none"></i></span>
												</span>
												<span className="flex-1">
													<span className="flex justify-between items-center mb-1">
														<span>GTHB (Gituhb, Demo Inc.)</span>
														<span className="text-end">$12,390.02</span>
													</span>
													<span className="flex justify-between items-center text-xs">
														<span className="text-gray-500 dark:text-white/70">12 shares</span>
														<span className="text-success"><i className="ti ti-trending-up ltr:mr-1 rtl:ml-1"></i>0.14%</span>
													</span>
												</span>
											</span>
											<span className="ltr:ml-3 rtl:mr-3">
												<span className="hs-tooltip ti-main-tooltip">
													<span
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-light">
														<i className="ri-star-fill"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Whishlist
														</span>
													</span>
												</span>
											</span>
										</span>
									</button>
									<div id="hs-basic-collapse-one" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 px-3 pt-3"
										aria-labelledby="hs-basic-heading-one">
										<div className="flex justify-between items-center overflow-auto">
											<div className="flex-1 flex items-center">
												<Link to="#" className="ti-btn ti-btn-primary h-7 w-7" data-hs-overlay="#buyStockModal">B</Link>
												<Link to="#" className="ti-btn ti-btn-secondary h-7 w-7" data-hs-overlay="#sellStockModal">S</Link>
												<span className="hs-tooltip ti-main-tooltip">
													<span className="m-0 hs-tooltip-toggle relative w-7 h-7 ti-btn transition-none focus:outline-none ti-btn-light">
														<i className="ti ti-chart-candle"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1" role="tooltip" data-popper-placement="top">
                                Market Cap
														</span>
													</span>
												</span>
											</div>
											<div className="min-w-fit flex items-center">
												<p className="mb-0 ltr:mr-3 rtl:ml-3">
													<span className="text-gray-500 dark:text-white/70 ltr:mr-1 rtl:ml-1">High:</span>
													<span className="text-success">$20,399,08</span>
												</p>
												<p className="mb-0">
													<span className="text-gray-500 dark:text-white/70 ltr:mr-1 rtl:ml-1">Low:</span>
													<span className="text-danger">$11,021,36</span>
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="hs-accordion stock-item" id="hs-basic-heading-two">
									<button type="button" className="hs-accordion-toggle  group py-0 inline-flex items-center gap-x-3 w-full font-medium text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-collapse-two">
										<span className="flex items-center w-full">
											<span className="flex justify-between items-center w-full">
												<span className="ltr:mr-2 rtl:ml-2">
													<span className="avatar avatar-sm rounded-full bg-secondary/20 text-secondary p-2.5"><i className="ri-twitter-line text-xl leading-none"></i></span>
												</span>
												<span className="flex-1">
													<span className="flex justify-between items-center mb-1">
														<span>TTR (Twiter.com, Inc.)</span>
														<span className="text-end">$15,526.01</span>
													</span>
													<span className="flex justify-between items-center text-xs">
														<span className="text-gray-500 dark:text-white/70">1,290 shares</span>
														<span className="text-success"><i className="ti ti-trending-up ltr:mr-1 rtl:ml-1"></i>2.14%</span>
													</span>
												</span>
											</span>
											<span className="ltr:ml-3 rtl:mr-3">
												<span className="hs-tooltip ti-main-tooltip">
													<span
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-light">
														<i className="ri-star-line"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Whishlist
														</span>
													</span>
												</span>
											</span>
										</span>
									</button>
									<div id="hs-basic-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 px-3 pt-3"
										aria-labelledby="hs-basic-heading-two">
										<div className="flex justify-between items-center overflow-auto">
											<div className="flex-1 flex items-center">
												<Link to="#" className="ti-btn ti-btn-primary h-7 w-7" data-hs-overlay="#buyStockModal">B</Link>
												<Link to="#" className="ti-btn ti-btn-secondary h-7 w-7" data-hs-overlay="#sellStockModal">S</Link>
												<span className="hs-tooltip ti-main-tooltip">
													<span className="m-0 hs-tooltip-toggle relative w-7 h-7 ti-btn transition-none focus:outline-none ti-btn-light">
														<i className="ti ti-chart-candle"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1" role="tooltip" data-popper-placement="top">
                                Market Cap
														</span>
													</span>
												</span>
											</div>
											<div className="min-w-fit flex items-center">
												<p className="mb-0 ltr:mr-3 rtl:ml-3">
													<span className="text-gray-500 dark:text-white/70 ltr:mr-1 rtl:ml-1">High:</span>
													<span className="text-success">$20,399,08</span>
												</p>
												<p className="mb-0">
													<span className="text-gray-500 dark:text-white/70 ltr:mr-1 rtl:ml-1">Low:</span>
													<span className="text-danger">$11,021,36</span>
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="hs-accordion stock-item" id="hs-basic-heading-three">
									<button type="button" className="hs-accordion-toggle  group py-0 inline-flex items-center gap-x-3 w-full font-medium text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-collapse-three">
										<span className="flex items-center w-full">
											<span className="flex justify-between items-center w-full">
												<span className="ltr:mr-2 rtl:ml-2">
													<span className="avatar avatar-sm rounded-full bg-danger/20 text-danger p-2.5"><i className="ri-netflix-line text-xl leading-none"></i></span>
												</span>
												<span className="flex-1">
													<span className="flex justify-between items-center mb-1">
														<span>NTFX (Netfllx.com, Inc.)</span>
														<span className="text-end">$41,250.50</span>
													</span>
													<span className="flex justify-between items-center text-xs">
														<span className="text-gray-500 dark:text-white/70">230 shares</span>
														<span className="text-danger"><i className="ti ti-trending-down ltr:mr-1 rtl:ml-1"></i>4.02%</span>
													</span>
												</span>
											</span>
											<span className="ltr:ml-3 rtl:mr-3">
												<span className="hs-tooltip ti-main-tooltip">
													<span
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-light">
														<i className="ri-star-fill"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Whishlist
														</span>
													</span>
												</span>
											</span>
										</span>
									</button>
									<div id="hs-basic-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 px-3 pt-3"
										aria-labelledby="hs-basic-heading-three">
										<div className="flex justify-between items-center overflow-auto">
											<div className="flex-1 flex items-center">
												<Link to="#" className="ti-btn ti-btn-primary h-7 w-7" data-hs-overlay="#buyStockModal">B</Link>
												<Link to="#" className="ti-btn ti-btn-secondary h-7 w-7" data-hs-overlay="#sellStockModal">S</Link>
												<span className="hs-tooltip ti-main-tooltip">
													<span className="m-0 hs-tooltip-toggle relative w-7 h-7 ti-btn transition-none focus:outline-none ti-btn-light">
														<i className="ti ti-chart-candle"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1" role="tooltip" data-popper-placement="top">
                                Market Cap
														</span>
													</span>
												</span>
											</div>
											<div className="min-w-fit flex items-center">
												<p className="mb-0 ltr:mr-3 rtl:ml-3">
													<span className="text-gray-500 dark:text-white/70 ltr:mr-1 rtl:ml-1">High:</span>
													<span className="text-success">$20,399,08</span>
												</p>
												<p className="mb-0">
													<span className="text-gray-500 dark:text-white/70 ltr:mr-1 rtl:ml-1">Low:</span>
													<span className="text-danger">$11,021,36</span>
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="hs-accordion stock-item" id="hs-basic-heading-four">
									<button type="button" className="hs-accordion-toggle  group py-0 inline-flex items-center gap-x-3 w-full font-medium text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-collapse-four">
										<span className="flex items-center w-full">
											<span className="flex justify-between items-center w-full">
												<span className="ltr:mr-2 rtl:ml-2">
													<span className="avatar avatar-sm rounded-full bg-success/20 text-success p-2.5"><i className="ri-angularjs-line text-xl leading-none"></i></span>
												</span>
												<span className="flex-1">
													<span className="flex justify-between items-center mb-1">
														<span>Ang (Angular, Inc.)</span>
														<span className="text-end">$30,500.15</span>
													</span>
													<span className="flex justify-between items-center text-xs">
														<span className="text-gray-500 dark:text-white/70">325 shares</span>
														<span className="text-danger"><i className="ti ti-trending-down ltr:mr-1 rtl:ml-1"></i>2.73%</span>
													</span>
												</span>
											</span>
											<span className="ltr:ml-3 rtl:mr-3">
												<span className="hs-tooltip ti-main-tooltip">
													<span
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-light">
														<i className="ri-star-line"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Whishlist
														</span>
													</span>
												</span>
											</span>
										</span>
									</button>
									<div id="hs-basic-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 px-3 pt-3"
										aria-labelledby="hs-basic-heading-four">
										<div className="flex justify-between items-center overflow-auto">
											<div className="flex-1 flex items-center">
												<Link to="#" className="ti-btn ti-btn-primary h-7 w-7" data-hs-overlay="#buyStockModal">B</Link>
												<Link to="#" className="ti-btn ti-btn-secondary h-7 w-7" data-hs-overlay="#sellStockModal">S</Link>
												<span className="hs-tooltip ti-main-tooltip">
													<span className="m-0 hs-tooltip-toggle relative w-7 h-7 ti-btn transition-none focus:outline-none ti-btn-light">
														<i className="ti ti-chart-candle"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1" role="tooltip" data-popper-placement="top">
                                Market Cap
														</span>
													</span>
												</span>
											</div>
											<div className="min-w-fit flex items-center">
												<p className="mb-0 ltr:mr-3 rtl:ml-3">
													<span className="text-gray-500 dark:text-white/70 ltr:mr-1 rtl:ml-1">High:</span>
													<span className="text-success">$20,399,08</span>
												</p>
												<p className="mb-0">
													<span className="text-gray-500 dark:text-white/70 ltr:mr-1 rtl:ml-1">Low:</span>
													<span className="text-danger">$11,021,36</span>
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="hs-accordion stock-item" id="hs-basic-heading-five">
									<button type="button" className="hs-accordion-toggle  group py-0 inline-flex items-center gap-x-3 w-full font-medium text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-collapse-five">
										<span className="flex items-center w-full">
											<span className="flex justify-between items-center w-full">
												<span className="ltr:mr-2 rtl:ml-2">
													<span className="avatar avatar-sm rounded-full bg-info/20 text-info p-2.5"><i className="ri-microsoft-line text-xl leading-none"></i></span>
												</span>
												<span className="flex-1">
													<span className="flex justify-between items-center mb-1">
														<span>MS (Micorsoft, Inc.)</span>
														<span className="text-end">$1,80,520.02</span>
													</span>
													<span className="flex justify-between items-center text-xs">
														<span className="text-gray-500 dark:text-white/70">1,523 shares</span>
														<span className="text-success"><i className="ti ti-trending-up ltr:mr-1 rtl:ml-1"></i>8.63%</span>
													</span>
												</span>
											</span>
											<span className="ltr:ml-3 rtl:mr-3">
												<span className="hs-tooltip ti-main-tooltip">
													<span
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-light">
														<i className="ri-star-fill"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Whishlist
														</span>
													</span>
												</span>
											</span>
										</span>
									</button>
									<div id="hs-basic-collapse-five" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 px-3 pt-3"
										aria-labelledby="hs-basic-heading-five">
										<div className="flex justify-between items-center overflow-auto">
											<div className="flex-1 flex items-center">
												<Link to="#" className="ti-btn ti-btn-primary h-7 w-7" data-hs-overlay="#buyStockModal">B</Link>
												<Link to="#" className="ti-btn ti-btn-secondary h-7 w-7" data-hs-overlay="#sellStockModal">S</Link>
												<span className="hs-tooltip ti-main-tooltip">
													<span className="m-0 hs-tooltip-toggle relative w-7 h-7 ti-btn transition-none focus:outline-none ti-btn-light">
														<i className="ti ti-chart-candle"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1" role="tooltip" data-popper-placement="top">
                                Market Cap
														</span>
													</span>
												</span>
											</div>
											<div className="min-w-fit flex items-center">
												<p className="mb-0 ltr:mr-3 rtl:ml-3">
													<span className="text-gray-500 dark:text-white/70 ltr:mr-1 rtl:ml-1">High:</span>
													<span className="text-success">$20,399,08</span>
												</p>
												<p className="mb-0">
													<span className="text-gray-500 dark:text-white/70 ltr:mr-1 rtl:ml-1">Low:</span>
													<span className="text-danger">$11,021,36</span>
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="hs-accordion stock-item" id="hs-basic-heading-six">
									<button type="button" className="hs-accordion-toggle  group py-0 inline-flex items-center gap-x-3 w-full font-medium text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-collapse-six">
										<span className="flex items-center w-full">
											<span className="flex justify-between items-center w-full">
												<span className="ltr:mr-2 rtl:ml-2">
													<span className="avatar avatar-sm rounded-full bg-warning/20 text-warning p-2.5"><i className="ri-apple-line text-xl leading-none"></i></span>
												</span>
												<span className="flex-1">
													<span className="flex justify-between items-center mb-1">
														<span>AAPL (Appil, Inc.)</span>
														<span className="text-end">$21,093.20</span>
													</span>
													<span className="flex justify-between items-center text-xs">
														<span className="text-gray-500 dark:text-white/70">30 shares</span>
														<span className="text-danger"><i className="ti ti-trending-down ltr:mr-1 rtl:ml-1"></i>4.10%</span>
													</span>
												</span>
											</span>
											<span className="ltr:ml-3 rtl:mr-3">
												<span className="hs-tooltip ti-main-tooltip">
													<span
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-light">
														<i className="ri-star-fill"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Whishlist
														</span>
													</span>
												</span>
											</span>
										</span>
									</button>
									<div id="hs-basic-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 px-3 pt-3"
										aria-labelledby="hs-basic-heading-six">
										<div className="flex justify-between items-center overflow-auto">
											<div className="flex-1 flex items-center">
												<Link to="#" className="ti-btn ti-btn-primary h-7 w-7" data-hs-overlay="#buyStockModal">B</Link>
												<Link to="#" className="ti-btn ti-btn-secondary h-7 w-7" data-hs-overlay="#sellStockModal">S</Link>
												<span className="hs-tooltip ti-main-tooltip">
													<span className="m-0 hs-tooltip-toggle relative w-7 h-7 ti-btn transition-none focus:outline-none ti-btn-light">
														<i className="ti ti-chart-candle"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1" role="tooltip" data-popper-placement="top">
                                Market Cap
														</span>
													</span>
												</span>
											</div>
											<div className="min-w-fit flex items-center">
												<p className="mb-0 ltr:mr-3 rtl:ml-3">
													<span className="text-gray-500 dark:text-white/70 ltr:mr-1 rtl:ml-1">High:</span>
													<span className="text-success">$20,399,08</span>
												</p>
												<p className="mb-0">
													<span className="text-gray-500 dark:text-white/70 ltr:mr-1 rtl:ml-1">Low:</span>
													<span className="text-danger">$11,021,36</span>
												</p>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 md:col-span-6 xxl:col-span-3">
					<div className="box">
						<div className="box-body">
							<div className="flex relative mb-4">
								<Link aria-label="anchor" to="#" className="absolute h-full w-full inset-0"></Link>
								<Link aria-label="anchor" to="#" className="ltr:pr-2 rtl:pl-2">
									<span className="avatar rounded-sm bg-primary/20 text-primary p-2.5"><i className="ri-apple-line text-2xl leading-none"></i></span>
								</Link>
								<div className="flex-1">
									<div className="flex justify-between items-center mb-1 text-sm">
										<span className="text-base font-semibold text-gray-800 dark:text-white">Apple</span>
										<span className="text-success text-end"><i className="ti ti-trending-up text-xs ltr:mr-1 rtl:ml-1"></i>0.14%</span>
									</div>
									<div className="flex justify-between items-center text-xs">
										<span className="text-gray-500 dark:text-white/70">$12,289.44</span>
										<span className="text-success text-end">+$1,780.80</span>
									</div>
								</div>
							</div>
							<div className="flex items-center">
								<Link to="#" className="flex-1 m-0 py-1 ti-btn ti-btn-soft-light ltr:mr-2 rtl:ml-2">Short</Link>
								<Link to="#" className="flex-1 m-0 py-1 ti-btn ti-btn-soft-primary">Buy</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxl:col-span-3">
					<div className="box">
						<div className="box-body">
							<div className="flex relative mb-4">
								<Link aria-label="anchor" to="#" className="absolute h-full w-full inset-0"></Link>
								<Link aria-label="anchor" to="#" className="ltr:pr-2 rtl:pl-2">
									<span className="avatar rounded-sm bg-secondary/20 text-secondary p-2.5"><i className="ri-bit-coin-line text-2xl leading-none"></i></span>
								</Link>
								<div className="flex-1">
									<div className="flex justify-between items-center mb-1 text-sm">
										<span className="text-base font-semibold text-gray-800 dark:text-white">Bitcion</span>
										<span className="text-success text-end"><i className="ti ti-trending-up text-xs ltr:mr-1 rtl:ml-1"></i>2.14%</span>
									</div>
									<div className="flex justify-between items-center text-xs">
										<span className="text-gray-500 dark:text-white/70">$58,151.02</span>
										<span className="text-success text-end">+$5,745.62</span>
									</div>
								</div>
							</div>
							<div className="flex items-center">
								<Link to="#" className="flex-1 m-0 py-1 ti-btn ti-btn-soft-light ltr:mr-2 rtl:ml-2">Short</Link>
								<Link to="#" className="flex-1 m-0 py-1 ti-btn ti-btn-soft-primary">Buy</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxl:col-span-3">
					<div className="box">
						<div className="box-body">
							<div className="flex relative mb-4">
								<Link aria-label="anchor" to="#" className="absolute h-full w-full inset-0"></Link>
								<Link aria-label="anchor" to="#" className="ltr:pr-2 rtl:pl-2">
									<span className="avatar rounded-sm bg-danger/20 text-danger p-2.5"><i className="ri-camera-lens-line text-2xl leading-none"></i></span>
								</Link>
								<div className="flex-1">
									<div className="flex justify-between items-center mb-1 text-sm">
										<span className="text-base font-semibold text-gray-800 dark:text-white">Telsa</span>
										<span className="text-success text-end"><i className="ti ti-trending-up text-xs ltr:mr-1 rtl:ml-1"></i>4.02%</span>
									</div>
									<div className="flex justify-between items-center text-xs">
										<span className="text-gray-500 dark:text-white/70">$14,452.36</span>
										<span className="text-success text-end">+$4,125.63</span>
									</div>
								</div>
							</div>
							<div className="flex items-center">
								<Link to="#" className="flex-1 m-0 py-1 ti-btn ti-btn-soft-light ltr:mr-2 rtl:ml-2">Short</Link>
								<Link to="#" className="flex-1 m-0 py-1 ti-btn ti-btn-soft-primary">Buy</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxl:col-span-3">
					<div className="box">
						<div className="box-body">
							<div className="flex relative mb-4">
								<Link aria-label="anchor" to="#" className="absolute h-full w-full inset-0"></Link>
								<Link aria-label="anchor" to="#" className="ltr:pr-2 rtl:pl-2">
									<span className="avatar rounded-sm bg-warning/20 text-warning p-2.5"><i className="ri-gift-line text-2xl leading-none"></i></span>
								</Link>
								<div className="flex-1">
									<div className="flex justify-between items-center mb-1 text-sm">
										<span className="text-base font-semibold text-gray-800 dark:text-white">Amozan</span>
										<span className="text-success text-end"><i className="ti ti-trending-up text-xs ltr:mr-1 rtl:ml-1"></i>5.14%</span>
									</div>
									<div className="flex justify-between items-center text-xs">
										<span className="text-gray-500 dark:text-white/70">$63,251.11</span>
										<span className="text-success text-end">+$9,36.20</span>
									</div>
								</div>
							</div>
							<div className="flex items-center">
								<Link to="#" className="flex-1 m-0 py-1 ti-btn ti-btn-soft-light ltr:mr-2 rtl:ml-2">Short</Link>
								<Link to="#" className="flex-1 m-0 py-1 ti-btn ti-btn-soft-primary">Buy</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 xl:col-span-5">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Transaction History</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                      All <i className="ti ti-chevron-down"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu hidden">
										<Link className="ti-dropdown-item" to="#">All</Link>
										<Link className="ti-dropdown-item" to="#">Buy</Link>
										<Link className="ti-dropdown-item" to="#">Sell</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body p-0">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col" className="text-center ">Symbol</th>
											<th scope="col" className="">Date</th>
											<th scope="col" className="">Type</th>
											<th scope="col" className="">Amount</th>
											<th scope="col" className="">Shares</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="">EPA:THI</td>
											<td className="">12-06-2023</td>
											<td className=""><span className="badge leading-none bg-success/10 text-success rounded-sm">Buy</span></td>
											<td className=""><span className="text-danger">-$1,290</span></td>
											<td className=""><span className="text-success">+20</span></td>
										</tr>
										<tr>
											<td className="">EPA:SCB</td>
											<td className="">11-06-2023</td>
											<td className=""><span className="badge leading-none bg-success/10 text-success rounded-sm">Buy</span></td>
											<td className=""><span className="text-danger">-$2,150</span></td>
											<td className=""><span className="text-success">+15</span></td>
										</tr>
										<tr>
											<td className="">EPA:CGIO</td>
											<td className="">11-06-2023</td>
											<td className=""><span className="badge leading-none bg-danger/10 text-danger rounded-sm">Sell</span></td>
											<td className=""><span className="text-success">+$22,625</span></td>
											<td className=""><span className="text-danger">-12</span></td>
										</tr>
										<tr>
											<td className="">EPA:NTIX</td>
											<td className="">05-06-2023</td>
											<td className=""><span className="badge leading-none bg-success/10 text-success rounded-sm">Buy</span></td>
											<td className=""><span className="text-danger">-$3,680</span></td>
											<td className=""><span className="text-success">+36</span></td>
										</tr>
										<tr>
											<td className="">EPA:MOD</td>
											<td className="">20-05-2023</td>
											<td className=""><span className="badge leading-none bg-danger/10 text-danger rounded-sm">Sell</span></td>
											<td className=""><span className="text-success">+$30,750</span></td>
											<td className=""><span className="text-danger">-25</span></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-7">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Market Movers</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                      All <i className="ti ti-chevron-down"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu hidden">
										<Link className="ti-dropdown-item" to="#">All</Link>
										<Link className="ti-dropdown-item" to="#">Gainers</Link>
										<Link className="ti-dropdown-item" to="#">Losers</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body p-0">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col" className="text-center">Symbol</th>
											<th scope="col" className="">Name</th>
											<th scope="col" className="">Price</th>
											<th scope="col" className="">1D Change</th>
											<th scope="col" className="">1D Returns %</th>
											<th scope="col" className="">Volume</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="">APPL</td>
											<td className="">App1e Inc. <span className="text-xs text-primary ltr:ml-1 rtl:mr-1">NASDAQ</span></td>
											<td className="">$1,116.90 <i className="ti ti-trending-up text-success text-xs ltr:ml-1 rtl:mr-1"></i></td>
											<td className=""><span className="text-success">$28.9	</span></td>
											<td className=""><span className="text-success">6.8%</span></td>
											<td className="">12,389.30</td>
										</tr>
										<tr>
											<td className="">TTR</td>
											<td className="">Twiter.com Inc. <span className="text-xs text-primary ltr:ml-1 rtl:mr-1">NYSE</span></td>
											<td className="">$993.21 <i className="ti ti-trending-up text-success text-xs ltr:ml-1 rtl:mr-1"></i></td>
											<td className=""><span className="text-success">$11.6</span></td>
											<td className=""><span className="text-success">10.25%</span></td>
											<td className="">32,125.03</td>
										</tr>
										<tr>
											<td className="">BS</td>
											<td className="">Boostrap.com <span className="text-xs text-primary ltr:ml-1 rtl:mr-1">NSE</span></td>
											<td className="">$11.00 <i className="ti ti-trending-down text-danger text-xs ltr:ml-1 rtl:mr-1"></i></td>
											<td className=""><span className="text-danger">$16.0</span></td>
											<td className=""><span className="text-danger">9.0%</span></td>
											<td className="">27,911.16</td>
										</tr>
										<tr>
											<td className="">NFLX</td>
											<td className="">Netfilx.com Inc.,<span className="text-xs text-primary ltr:ml-1 rtl:mr-1">LSE</span></td>
											<td className="">$161.72 <i className="ti ti-trending-down text-danger text-xs ltr:ml-1 rtl:mr-1"></i></td>
											<td className=""><span className="text-danger">$9.8</span></td>
											<td className=""><span className="text-danger">17.8%</span></td>
											<td className="">27,161.89</td>
										</tr>
										<tr>
											<td className="">ION</td>
											<td className="">Ion.com Corp.,<span className="text-xs text-primary ltr:ml-1 rtl:mr-1">FSX</span></td>
											<td className="">$52.65<i className="ti ti-trending-up text-success text-xs ltr:ml-1 rtl:mr-1"></i></td>
											<td className=""><span className="text-success">$14.2</span></td>
											<td className=""><span className="text-success">30.2%</span></td>
											<td className="">65,785.01</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};
export default Stocks;
