import React from "react";
import { Link } from "react-router-dom";
import {  Bitcoin, Dash, Etherium, Iota, Neo, Ripple, SalesOverview } from "../../../common/chartData";
import ALLImages from "../../../common/imagesData";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import Select from 'react-select';
import { CurrencyConverter } from "../../../common/select2data";

const Crypto = () => {
	
	return (
		<div>
			<PageHeader currentpage="Crypto Dashboard" activepage="Home" mainpage="Crypto Dashboard"/>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 md:col-span-6 xxl:col-span-3" >
					<div className="box overflow-hidden">
						<div className="box-body">
							<div className="flex items-center">
								<div className="flex items-center">
									<div className="ltr:mr-2 rtl:ml-2">
										<span
											className="avatar avatar-sm rounded-full bg-gray-100 dark:bg-black/20 p-2">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
												<path fill="#f89f36"
													d="M109.8 75.7c-.8-5.7-3.6-10.1-8.6-13-2.3-1.3-4.8-2.2-7.4-3.3.3-.2.5-.4.7-.5 12.5-6.4 11.4-25.7 2.3-32.3-3.7-2.7-7.8-4.4-12.1-5.4-3.1-.7-6.2-1.2-9.4-1.7 0-5.6.1-13.3.1-19.5H63.7c-.1 6.1-.1 13.6-.2 19.1h-9.4c0-5.5.1-13 .1-19.1H42.6c-.1 6.2-.1 13.9-.2 19.4-8-.1-15.7-.1-23.7-.2 0 4.3-.1 8.3-.1 12.5 1.7 0 3.2 0 4.6.1 1.5 0 3 0 4.4.1 4.1.3 6.2 2.6 6.2 6.6-.2 16.7-.4 33.5-.5 50.2 0 3.7-1.6 5.1-5.2 5.1h-7.8c-.8 4.7-1.6 9.2-2.4 13.9 7.9.1 15.7.2 23.7.3 0 6-.1 13.6-.1 19.9h11.7c.1-6.3.1-13.7.2-19.6 3.3.1 6.3.2 9.4.3 0 6-.1 13.3-.1 19.4h11.7c.1-6.3.1-13.7.2-19.5.4-.1.7-.1 1-.2 5.6-.9 11.3-1.4 16.7-2.7 7.1-1.8 12.7-5.9 15.7-12.9 2.1-5.4 2.6-11.1 1.8-17zM54.3 32.9c7.3 0 14.4-.6 21 2.4 4.4 1.9 6.6 5.5 6.3 9.8-.3 4.6-2.9 7.9-7.6 9.4-6.4 2.1-13.1 2-20 1.7.1-7.6.2-15.2.3-23.3zm25.5 58.4c-6.5 2.9-13.3 2.9-20.2 3-1.9 0-3.8-.1-5.9-.1l.3-25.9c8.9 0 17.7-.7 26 3 4.3 1.9 6.8 5.2 6.8 10.1-.1 4.9-2.7 8-7 9.9z" />
											</svg>
										</span>
									</div>
									<div>
										<div className="mb-0 font-semibold text-gray-800 dark:text-white">
                                                Bitcoin
										</div>
										<p className="text-sm text-gray-500 dark:text-white/70 mb-0 leading-none">
                                                BTC/USD</p>
									</div>
								</div>
								<div className="ltr:ml-auto rtl:mr-auto text-end my-auto">
									<h3 className="text-gray-800 dark:text-white font-medium text-xl">1.343434 BTC
									</h3>
									<p className="text-danger mb-0"> <i className="ri-arrow-down-line"></i> -0.52%</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxl:col-span-3" >
					<div className="box overflow-hidden">
						<div className="box-body">
							<div className="flex items-center">
								<div className="flex items-center">
									<div className="ltr:mr-2 rtl:ml-2">
										<span
											className="avatar avatar-sm rounded-full bg-gray-100 dark:bg-black/20 p-2">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
												<path fill="#1e75bc"
													d="M3 99.8C5 94 6.8 88.6 8.8 83.1c.2-.5 1.2-1 1.8-1 3.3-.1 6.6 0 9.9 0h64.6c1.7 0 2.5-.5 3-2.2 3.6-10.6 7.3-21.2 11-31.8.2-.6.3-1.1.6-2H21.4c2-5.9 3.9-11.4 5.9-16.9.2-.4 1-.8 1.5-.8 2-.1 3.9 0 5.9 0 26.5 0 53 .2 79.6-.1 7.9-.1 16.3 6 12.9 17.6-2.5 8.7-5.8 17.1-8.7 25.6-1 2.9-2 5.9-3 8.7-3.7 10.2-11.2 16.3-21.5 19.2-.9.3-1.9.3-2.9.3H5.2c-.6.1-1.3.1-2.2.1z" />
												<path fill="#1e75bc"
													d="M52.6 55.6c-2 5.6-3.9 10.9-5.9 16-.1.4-.9.7-1.4.7H.8c-.2 0-.4-.1-.8-.3 1.9-5.2 3.7-10.3 5.7-15.4.2-.5 1-1 1.5-1h45.4z" />
											</svg>
										</span>
									</div>
									<div>
										<div className="mb-0 font-semibold text-gray-800 dark:text-white">
                                                Dash
										</div>
										<p className="text-sm text-gray-500 dark:text-white/70 mb-0 leading-none">
                                                DASH/USD</p>
									</div>
								</div>
								<div className="ltr:ml-auto rtl:mr-auto text-end">
									<h3 className="text-gray-800 dark:text-white font-medium text-xl">1.343434 Dash
									</h3>
									<p className="text-success mb-0"> <i className="ri-arrow-up-line"></i> +13.52%</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxl:col-span-3" >
					<div className="box overflow-hidden">
						<div className="box-body">
							<div className="flex items-center">
								<div className="flex items-center">
									<div className="ltr:mr-2 rtl:ml-2">
										<span className="avatar avatar-sm rounded-full bg-gray-100 dark:bg-black/20 p-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23"
												viewBox="0 0 39 64">
												<g fill="none" fillRule="nonzero">
													<path fill="#0C8312"
														d="M19.6 19.2V.8L39 29.5zM19.6 45.7v18.4L39 35.4zM19.6 34.2V22.5l19 10z" />
													<path fill="#034C03" d="M19.6 42.7v-8.5l19-1.7z" />
													<path fill="#3CB93C"
														d="M19.6 19.2V.8L.2 29.5zM19.6 45.7v18.4L.2 35.4zM19.6 34.2V22.5l-19 10z" />
													<path fill="#166816" d="M19.6 42.7v-8.5l-19-1.7z" />
												</g>
											</svg>
										</span>
									</div>
									<div>
										<div className="mb-0 font-semibold text-gray-800 dark:text-white">
                                                Etherium
										</div>
										<p className="text-sm text-gray-500 dark:text-white/70 mb-0 leading-none">
                                                ETH/USD</p>
									</div>
								</div>
								<div className="ltr:ml-auto rtl:mr-auto text-end">
									<h3 className="text-gray-800 dark:text-white font-medium text-xl">1.343434 ETH
									</h3>
									<p className="text-success mb-0"> <i className="ri-arrow-up-line"></i> +13.52%</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxl:col-span-3" >
					<div className="box overflow-hidden">
						<div className="box-body">
							<div className="flex items-center">
								<div className="flex items-center">
									<div className="ltr:mr-2 rtl:ml-2">
										<span
											className="avatar avatar-sm rounded-full bg-gray-100 dark:bg-black/20 p-2">
											<svg xmlns="http://www.w3.org/2000/svg" id="golem" x="0" y="0"
												version="1.1" viewBox="0 0 128 128" xmlSpace="preserve">
												<path fill="#026990"
													d="M59.5 8.5c5-.1 9.6.8 13.7 3.6 1.8 1.2 3.3 1 4.8-.6C81.3 8 84.7 4.8 88.1 1.4 89.3 0 90.4-.7 92 1c1.4 1.5 1 2.6-.3 3.9-3.4 3.4-6.7 7-10.2 10.4-1.5 1.5-1.7 2.6-.6 4.5 7.7 13.9 3.9 30.2-11.5 37.6-1.5.7-3.1 1-4.7 1.4-1.8.4-2.6 1.4-2.5 3.3.1 4 .1 8 0 11.9-.1 2.1.6 3.1 2.8 3.6 8.3 2 14.1 7 17.8 14.6 3.5 7.4 2.6 20.6-5 28.5-6.4 6.5-17.7 9.3-26.1 5.9-10-4-16.2-12.8-16.3-23.4-.1-12.8 6.8-22 19.2-25.4 1.8-.5 2.9-1.4 2.9-3.4-.1-4.5 0-9.1-.2-13.6 0-.8-1.5-1.9-2.5-2.2-8-2.1-13.9-6.9-17.2-14.5-8-17.4 5.3-36.6 21.9-35.6zm20.3 93.9c0-10.5-9.2-20.2-19.4-20.2-10.7-.2-20.4 9.3-20.6 20-.1 10.6 9.8 20.8 20 20.7 10.8-.1 20.1-9.6 20-20.5zM40.1 33.2c0 11.5 8.9 20.8 20 20.8 10.3 0 19.8-9.6 19.7-20.2 0-10-7.4-20.3-19.7-20.1-11.1.3-19.9 8.6-20 19.5z">
												</path>
											</svg>
										</span>
									</div>
									<div>
										<div className="mb-0 font-semibold text-gray-800 dark:text-white">
                                                Etherium
										</div>
										<p className="text-sm text-gray-500 dark:text-white/70 mb-0 leading-none">
                                                GLM/USD</p>
									</div>
								</div>
								<div className="ltr:ml-auto rtl:mr-auto text-end">
									<h3 className="text-gray-800 dark:text-white font-medium text-xl">2.253353 GLM
									</h3>
									<p className="text-danger mb-0"> <i className="ri-arrow-down-line"></i> -1.52%</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-9">
					<SalesOverview/>
				</div>
				<div className="col-span-12 xxl:col-span-3">
					<div className="box recent-trasaction-box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Recent Transactions</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button id="hs-dropdown-custom-icon-trigger3" type="button" aria-label="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
									<div className="hs-dropdown-menu ti-dropdown-menu"
										aria-labelledby="hs-dropdown-custom-icon-trigger3">
										<Link className="ti-dropdown-item" to="#">Action</Link>
										<Link className="ti-dropdown-item" to="#">Another Action</Link>
										<Link className="ti-dropdown-item" to="#">Something else here</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body">
							<ul className="flex flex-col">
								<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center justify-between">
											<div className="flex items-center">
												<div className="ltr:mr-2 rtl:ml-2">
													<img src= {ALLImages('svg1')}
														alt="" className="avatar w-9 h-9"/>
												</div>
												<div>
													<p className="mb-0 font-semibold text-sm">Bitcoin</p>
													<p className="mb-0 text-xs text-success font-semibold">Sell
													</p>
												</div>
											</div>
											<div className="text-end">
												<p className="mb-0 font-semibold text-sm">
                                                        +$19,123.02
												</p>
												<p className="mb-0 opacity-70 text-gray-500 dark:text-white/70 text-xs">
                                                        BTC 0.0823.45
												</p>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center justify-between">
											<div className="flex items-center">
												<div className="ltr:mr-2 rtl:ml-2">
													<img src= {ALLImages('svg2')}
														alt="" className="avatar w-9 h-9"/>
												</div>
												<div>
													<p className="mb-0 font-semibold text-sm">Etherium</p>
													<p className="mb-0 text-xs text-primary font-semibold">Buy
													</p>
												</div>
											</div>
											<div className="text-end">
												<p className="mb-0 font-semibold text-sm">
                                                        -$1,430.92
												</p>
												<p className="mb-0 opacity-70 text-gray-500 dark:text-white/70 text-xs">
                                                        ETH 10,783.23
												</p>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center justify-between">
											<div className="flex items-center">
												<div className="ltr:mr-2 rtl:ml-2">
													<img src= {ALLImages('svg3')}
														alt="" className="avatar w-9 h-9"/>
												</div>
												<div>
													<p className="mb-0 font-semibold text-sm">Dash</p>
													<p className="mb-0 text-xs text-success font-semibold">Sell
													</p>
												</div>
											</div>
											<div className="text-end">
												<p className="mb-0 font-semibold text-sm">
                                                        +$5,236.53
												</p>
												<p className="mb-0 opacity-70 text-gray-500 dark:text-white/70 text-xs">
                                                        DASH 12,456.98
												</p>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center justify-between">
											<div className="flex items-center">
												<div className="ltr:mr-2 rtl:ml-2">
													<img src= {ALLImages('svg4')}
														alt="" className="avatar w-9 h-9"/>
												</div>
												<div>
													<p className="mb-0 font-semibold text-sm">Bytecoin</p>
													<p className="mb-0 text-xs text-primary font-semibold">Buy
													</p>
												</div>
											</div>
											<div className="text-end">
												<p className="mb-0 font-semibold text-sm">
                                                        -$1,810.93
												</p>
												<p className="mb-0 opacity-70 text-gray-500 dark:text-white/70 text-xs">
                                                        BYTE 8,154.00
												</p>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center justify-between">
											<div className="flex items-center">
												<div className="ltr:mr-2 rtl:ml-2">
													<img src= {ALLImages('svg5')}
														alt="" className="avatar w-9 h-9"/>
												</div>
												<div>
													<p className="mb-0 font-semibold text-sm">Golem</p>
													<p className="mb-0 text-xs text-success font-semibold">Sell
													</p>
												</div>
											</div>
											<div className="text-end">
												<p className="mb-0 font-semibold text-sm">
                                                        +$5,046.34
												</p>
												<p className="mb-0 opacity-70 text-gray-500 dark:text-white/70 text-xs">
                                                        GOLEM 9,384.73
												</p>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center justify-between">
											<div className="flex items-center">
												<div className="ltr:mr-2 rtl:ml-2">
													<img src= {ALLImages('svg6')}
														alt="" className="avatar w-9 h-9"/>
												</div>
												<div>
													<p className="mb-0 font-semibold text-sm">SiaCoin</p>
													<p className="mb-0 text-xs text-success font-semibold">Sell
													</p>
												</div>
											</div>
											<div className="text-end">
												<p className="mb-0 font-semibold text-sm">
                                                        +$2,625.50
												</p>
												<p className="mb-0 opacity-70 text-gray-500 dark:text-white/70 text-xs">
                                                        SIA 3,151.09
												</p>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-0 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center justify-between">
											<div className="flex items-center">
												<div className="ltr:mr-2 rtl:ml-2">
													<img src= {ALLImages('svg7')}
														alt="" className="avatar w-9 h-9"/>
												</div>
												<div>
													<p className="mb-0 font-semibold text-sm">Monero</p>
													<p className="mb-0 text-xs text-success font-semibold">Sell
													</p>
												</div>
											</div>
											<div className="text-end">
												<p className="mb-0 font-semibold text-sm">
                                                        +$1,256.24
												</p>
												<p className="mb-0 opacity-70 text-gray-500 dark:text-white/70 text-xs">
                                                        XMR 2,799.06
												</p>
											</div>
										</div>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xxl:col-span-5">
					<div className="box overflow-hidden">
						<div className="box-header">
							<div className="sm:flex justify-between space-y-2 sm:space-y-0">
								<h5 className="box-title my-auto">Your Assets</h5>
								<div className="block ltr:ml-auto rtl:mr-auto my-auto"><button type="button"
									className="ti-btn ti-btn-primary ltr:mr-2 rtl:ml-2 p-1 px-3 m-0">Add
                                            New</button>
								<button type="button"
									className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                            View All</button>
								</div>
							</div>
						</div>
						<div className="box-body p-0 activity-table">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead className="">
										<tr>
											<th scope="col" className="min-w-[200px]">Coin</th>
											<th scope="col">Total</th>
											<th scope="col">Holding</th>
											<th scope="col">Status</th>
											<th scope="col">Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="leading-none">
														<span
															className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2 p-2 bg-gray-100 dark:bg-black/20">
															<img src= {ALLImages('svg8')}
																alt=""/>
														</span>
													</div>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Currency</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">
                                                                Bitcoin</p>
													</div>
												</div>
											</td>
											<td>
                                                    $1,11,290
											</td>
											<td>
                                                    1.00089BTC
											</td>
											<td>
												<span className="text-success">+0.5%</span>
											</td>
											<td className="border-top-dashed pe-4">
												<Link to="#"
													className="ti-btn ti-btn-secondary py-1 px-3">Buy</Link>
												<Link to="#"
													className="ti-btn ti-btn-primary py-1 px-3">Sell</Link>
											</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="leading-none">
														<span
															className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2 p-2 bg-gray-100 dark:bg-black/20">
															<img src= {ALLImages('svg9')}
																alt=""/>
														</span>
													</div>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Currency</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">
                                                                Ethereum</p>
													</div>
												</div>
											</td>
											<td>
                                                    $1,01,785
											</td>
											<td>
                                                    0.00185ETH
											</td>
											<td>
												<span className="text-success">+10.5%</span>
											</td>
											<td className="border-top-dashed pe-4">
												<Link to="#"
													className="ti-btn ti-btn-secondary py-1 px-3">Buy</Link>
												<Link to="#"
													className="ti-btn ti-btn-primary py-1 px-3">Sell</Link>
											</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="leading-none">
														<span
															className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2 p-2 bg-gray-100 dark:bg-black/20">
															<img src= {ALLImages('svg10')}
																alt=""/>
														</span>
													</div>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Currency</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">
                                                                Litecoin</p>
													</div>
												</div>
											</td>
											<td>
                                                    $1,00,854
											</td>
											<td>
                                                    1.0145LTC
											</td>
											<td>
												<span className="text-danger">-0.05%</span>
											</td>
											<td className="border-top-dashed pe-4">
												<Link to="#"
													className="ti-btn ti-btn-secondary py-1 px-3">Buy</Link>
												<Link to="#"
													className="ti-btn ti-btn-primary py-1 px-3">Sell</Link>
											</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="leading-none">
														<span
															className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2 p-2 bg-gray-100 dark:bg-black/20">
															<img src= {ALLImages('svg11')}
																alt=""/>
														</span>
													</div>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Currency</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">
                                                                Dash</p>
													</div>
												</div>
											</td>
											<td>
                                                    $1,01,214
											</td>
											<td>
                                                    0.0156DSH
											</td>
											<td>
												<span className="text-success">+5.89%</span>
											</td>
											<td className="border-top-dashed pe-4">
												<Link to="#"
													className="ti-btn ti-btn-secondary py-1 px-3">Buy</Link>
												<Link to="#"
													className="ti-btn ti-btn-primary py-1 px-3">Sell</Link>
											</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="leading-none">
														<span
															className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2 p-2 bg-gray-100 dark:bg-black/20">
															<img src= {ALLImages('svg12')}
																alt=""/>
														</span>
													</div>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Currency</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">
                                                                Golem</p>
													</div>
												</div>
											</td>
											<td>
                                                    $1,00,985
											</td>
											<td>
                                                    0.011125GLM
											</td>
											<td>
												<span className="text-success">+11.07%</span>
											</td>
											<td className="border-top-dashed pe-4">
												<Link to="#"
													className="ti-btn ti-btn-secondary py-1 px-3">Buy</Link>
												<Link to="#"
													className="ti-btn ti-btn-primary py-1 px-3">Sell</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xxl:col-span-4">
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Top Traders</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto open">
									<button type="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
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
							<ul className="flex flex-col">
								<li className="mb-4 p-0 ti-list-group border-0 text-gray-800 dark:text-white">
									<div className="sm:flex items-center w-full">
										<div className="ltr:mr-2 rtl:ml-2 leading-none min-w-[40px]">
											<img src= {ALLImages('jpg67')} alt=""
												className="avatar avatar-sm rounded-full bg-gray-100 dark:bg-black/20"/>
										</div>
										<div className="sm:flex items-center justify-between w-full">
											<div>
												<p className="mb-0 font-semibold text-sm">Json Taylor</p>
												<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Bought
                                                        0.008213 Bitcoin using ****9808</p>
											</div>
											<div className="sm:text-end sm:ltr:ml-auto sm:rtl:mr-auto">
												<p className="mb-0 font-semibold text-sm text-success">
                                                        0.09251821409 <span className="">- BTC</span>
												</p>
												<p className="mb-0 opacity-70 text-gray-500 dark:text-white/70 text-xs">
                                                        $1,203.92
												</p>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-4 p-0 ti-list-group border-0 text-gray-800 dark:text-white">
									<div className="sm:flex items-center w-full">
										<div className="ltr:mr-2 rtl:ml-2 leading-none min-w-[40px]">
											<img src= {ALLImages('jpg60')} alt=""
												className="avatar avatar-sm rounded-full bg-gray-100 dark:bg-black/20"/>
										</div>
										<div className="sm:flex items-center justify-between w-full">
											<div>
												<p className="mb-0 font-semibold text-sm">Alicia Smith</p>
												<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Sold -
                                                        0.7902400 Litecoin</p>
											</div>
											<div className="sm:text-end sm:ltr:ml-auto sm:rtl:mr-auto">
												<p className="mb-0 font-semibold text-sm text-success">
                                                        0.2362333001<span className="">- LTC</span>
												</p>
												<p className="mb-0 opacity-70 text-gray-500 dark:text-white/70 text-xs">
                                                        $19,092.56
												</p>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-4 p-0 ti-list-group border-0 text-gray-800 dark:text-white">
									<div className="sm:flex items-center w-full">
										<div className="ltr:mr-2 rtl:ml-2 leading-none min-w-[40px]">
											<img src= {ALLImages('jpg71')} alt=""
												className="avatar avatar-sm rounded-full bg-gray-100 dark:bg-black/20"/>
										</div>
										<div className="sm:flex items-center justify-between w-full">
											<div>
												<p className="mb-0 font-semibold text-sm">Branco Eliga</p>
												<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Bought
                                                        +12.9092 Euro coin</p>
											</div>
											<div className="sm:text-end sm:ltr:ml-auto sm:rtl:mr-auto">
												<p className="mb-0 font-semibold text-sm text-success">
                                                        0.009823487<span className="">- EUROC</span>
												</p>
												<p className="mb-0 opacity-70 text-gray-500 dark:text-white/70 text-xs">
                                                        $8,977.46
												</p>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-4 p-0 ti-list-group border-0 text-gray-800 dark:text-white">
									<div className="sm:flex items-center w-full">
										<div className="ltr:mr-2 rtl:ml-2 leading-none min-w-[40px]">
											<img src= {ALLImages('jpg68')} alt=""
												className="avatar avatar-sm rounded-full bg-gray-100 dark:bg-black/20"/>
										</div>
										<div className="sm:flex items-center justify-between w-full">
											<div>
												<p className="mb-0 font-semibold text-sm">Alec Carey</p>
												<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Bought
                                                        32.09472944 Dash using wallet</p>
											</div>
											<div className="sm:text-end sm:ltr:ml-auto sm:rtl:mr-auto">
												<p className="mb-0 font-semibold text-sm text-success">
                                                        8.88234590<span className="">- DASH</span>
												</p>
												<p className="mb-0 opacity-70 text-gray-500 dark:text-white/70 text-xs">
                                                        $9,772.46
												</p>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-4 p-0 ti-list-group border-0 text-gray-800 dark:text-white">
									<div className="sm:flex items-center w-full">
										<div className="ltr:mr-2 rtl:ml-2 leading-none min-w-[40px]">
											<img src= {ALLImages('jpg61')} alt=""
												className="avatar avatar-sm rounded-full bg-gray-100 dark:bg-black/20"/>
										</div>
										<div className="sm:flex items-center justify-between w-full">
											<div>
												<p className="mb-0 font-semibold text-sm">Sia Linda</p>
												<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Sent
                                                        0.00662 Bitcoin to Ravos Chan</p>
											</div>
											<div className="sm:text-end sm:ltr:ml-auto sm:rtl:mr-auto">
												<p className="mb-0 font-semibold text-sm text-success">
                                                        58.6225600 <span className="">- BTC</span>
												</p>
												<p className="mb-0 opacity-70 text-gray-500 dark:text-white/70 text-xs">
                                                        $9,772.46
												</p>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-4 p-0 ti-list-group border-0 text-gray-800 dark:text-white">
									<div className="sm:flex items-center w-full">
										<div className="ltr:mr-2 rtl:ml-2 leading-none min-w-[40px]">
											<img src= {ALLImages('jpg64')} alt=""
												className="avatar avatar-sm rounded-full bg-gray-100 dark:bg-black/20"/>
										</div>
										<div className="sm:flex items-center justify-between w-full">
											<div>
												<p className="mb-0 font-semibold text-sm">Bella Siri</p>
												<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Sell
                                                        0.00662 Gollem to Karan Bhan</p>
											</div>
											<div className="sm:text-end sm:ltr:ml-auto sm:rtl:mr-auto">
												<p className="mb-0 font-semibold text-sm text-success">
                                                        62.25635852 <span className="">- GLM</span>
												</p>
												<p className="mb-0 opacity-70 text-gray-500 dark:text-white/70 text-xs">
                                                        $9,772.46
												</p>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-0 p-0 ti-list-group border-0 text-gray-800 dark:text-white">
									<div className="sm:flex items-center w-full">
										<div className="ltr:mr-2 rtl:ml-2 leading-none min-w-[40px]">
											<img src= {ALLImages('jpg66')} alt=""
												className="avatar avatar-sm rounded-full bg-gray-100 dark:bg-black/20"/>
										</div>
										<div className="sm:flex items-center justify-between w-full">
											<div>
												<p className="mb-0 font-semibold text-sm">Ryan Ranolds</p>
												<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Bought
                                                        2.098123 Etherium</p>
											</div>
											<div className="sm:text-end sm:ltr:ml-auto sm:rtl:mr-auto">
												<p className="mb-0 font-semibold text-sm text-success">
                                                        190.0092773 <span className="">- ETH</span>
												</p>
												<p className="mb-0 opacity-70 text-gray-500 dark:text-white/70 text-xs">
                                                        $18,283982.00
												</p>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<div className="sm:flex justify-between">
								<h5 className="box-title my-auto">Currency Converter</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button id="hs-dropdown-custom-icon-trigger" type="button"
										className="hs-dropdown-toggle px-2 py-1 ti-btn ti-btn-primary">USD
                                            ($)<i className="ri-arrow-down-s-line align-middle"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu"
										aria-labelledby="hs-dropdown-custom-icon-trigger">
										<Link className="ti-dropdown-item" to="#">USD ($)</Link>
										<Link className="ti-dropdown-item" to="#">Euro (€)</Link>
										<Link className="ti-dropdown-item" to="#">FJD ($)</Link>
										<Link className="ti-dropdown-item" to="#">INR (₹)</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body p-0">
							<div
								className="sm:flex items-center justify-between px-4 py-3 border-b border-dashed border-gray-200 dark:border-white/10 xxxl:block">
								<p className="text-gray-500 dark:text-white/70 mb-0">Bal Available:<span
									className="text-primary text-sm ltr:ml-1 rtl:mr-1">$25,390.00</span></p>
								<p className="text-gray-500 dark:text-white/70 mb-0">1 USD:<span
									className="text-primary text-sm ltr:ml-1 rtl:mr-1"> ~ 0.000158BTC</span></p>
							</div>
							<div className="p-4" id="buy-style-1">
								<div className="mb-4">
									<div className="sm:flex rounded-sm">
										<span
											className="py-2 px-3 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px ltr:-ml-px rtl:-mr-px first:rounded-t-sm last:rounded-b-sm sm:w-auto ltr:sm:first:rounded-l-sm rtl:sm:first:rounded-r-sm sm:mt-0 ltr:sm:first:ml-0 rtl:sm:first:mr-0  ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-r-sm rtl:sm:last:rounded-l-sm dark:bg-black/20 dark:border-white/10 dark:text-white/70">Pay</span>
										<input type="number"
											className="ti-form-input rounded-none -mt-px ltr:-ml-px rtl:-mr-px first:rounded-t-sm last:rounded-b-sm ltr:sm:first:rounded-l-sm rtl:sm:first:rounded-r-sm sm:mt-0 ltr:sm:first:ml-0 rtl:sm:first:mr-0  ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-r-sm rtl:sm:last:rounded-l-sm relative focus:z-10"
											defaultValue="0.0329" placeholder="Amount of coins"/>
										<div className="sm:inline-flex items-center min-w-fit  sm:ltr:rounded-r-sm sm:ltr:rounded-l-none sm:rtl:rounded-l-sm sm:rtl:rounded-r-none rounded-sm border sm:ltr:border-l-0 sm:rtl:border-r-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
											
											<Select className="billing-search" options={CurrencyConverter} classNamePrefix="react-select" placeholder='BTC' />
										</div>
									</div>
									<Link to="#" aria-label="anchor"
										className="flex items-center justify-center ti-btn p-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] bg-secondary text-white hover:bg-secondary focus:ring-0 focus:ring-secondary dark:focus:ring-offset-white/10 !mx-auto my-2"><i
											className="ti ti-arrows-down-up"></i></Link>
									<div className="sm:flex rounded-sm">
										<span
											className="py-2 px-3 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px ltr:-ml-px rtl:-mr-px first:rounded-t-sm last:rounded-b-sm sm:w-auto ltr:sm:first:rounded-l-sm rtl:sm:first:rounded-r-sm sm:mt-0 ltr:sm:first:ml-0 rtl:sm:first:mr-0  ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-r-sm rtl:sm:last:rounded-l-sm dark:bg-black/20 dark:border-white/10 dark:text-white/70">Buy</span>
										<input type="number"
											className="ti-form-input rounded-none -mt-px ltr:-ml-px rtl:-mr-px first:rounded-t-sm last:rounded-b-sm ltr:sm:first:rounded-l-sm rtl:sm:first:rounded-r-sm sm:mt-0 ltr:sm:first:ml-0 rtl:sm:first:mr-0  ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-r-sm rtl:sm:last:rounded-l-sm relative focus:z-10"
											defaultValue="0.00378" placeholder="Amount you get"/>
										<div className="sm:inline-flex items-center min-w-fit  sm:ltr:rounded-r-sm sm:ltr:rounded-l-none sm:rtl:rounded-l-sm sm:rtl:rounded-r-none rounded-sm border sm:ltr:border-l-0 sm:rtl:border-r-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
											<Select className=" billing-search" options={CurrencyConverter} classNamePrefix="react-select" placeholder='BTC' />
										</div>
									</div>
								</div>
								<div className="p-3 rounded-sm bg-gray-100 dark:bg-black/20 mb-4 overflow-auto">
									<div className="sm:grid grid-cols-12 gap-x-6">
										<div className="col-span-6 mb-2">
											<span>Transaction Fee</span>
										</div>
										<div className="col-span-6 mb-2">
											<span className="sm:ltr:float-right sm:rtl:float-left">$2.05</span>
										</div>
										<div className="col-span-6 mb-2">
											<span>Other Charges</span>
										</div>
										<div className="col-span-6 mb-2">
											<span className="sm:ltr:float-right sm:rtl:float-left">$7.73</span>
										</div>
										<div className="col-span-6">
											<span className="font-semibold text-base">Total</span>
										</div>
										<div className="col-span-6">
											<span
												className="sm:ltr:float-right sm:rtl:float-left font-semibold text-base">$34,798.00</span>
										</div>
									</div>
								</div>
								<Link to="#" className="ti-btn ti-btn-primary m-0 w-full">Exchange<i
									className="ti ti-arrow-narrow-right align-middle"></i></Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="sm:flex justify-between">
								<h5 className="box-title my-auto">Crypto Currencies Market Trends</h5>
								<div className="inline-flex rounded-md shadow-sm">
									<button type="button"
										className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-primary">
                                            1D
									</button>
									<button type="button"
										className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary">
                                            1W
									</button>
									<button type="button"
										className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary">
                                            1M
									</button>
									<button type="button"
										className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary">
                                            3M
									</button>
									<button type="button"
										className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary">
                                            6M
									</button>
									<button type="button"
										className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary">
                                            1Y
									</button>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-sm overflow-auto crypto-table">
								<table className="ti-custom-table ti-custom-table-head">
									<thead className="">
										<tr>
											<th scope="col">S.No</th>
											<th scope="col">Name</th>
											<th scope="col">Symbol</th>
											<th scope="col">Price</th>
											<th scope="col">Market Cap</th>
											<th scope="col">Price Graph</th>
											<th scope="col">Volume</th>
											<th scope="col">Price Change</th>
											<th scope="col">Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>Bitcoin</td>
											<td>
												<div className="leading-none flex items-center">
													<img className="avatar w-5 h-5 rounded-full"
														src= {ALLImages('svg8')}
														alt=""/> - BTC
												</div>
											</td>
											<td>
                                                    $16,839.10
											</td>
											<td>
                                                    324.01B
											</td>
											<td>
												<Bitcoin/>
											</td>
											<td>
                                                    14,674,311,168
											</td>
											<td>
												<span className="text-success">0.36%<i
													className="ti ti-arrow-big-up-lines ltr:ml-1 rtl:mr-1"></i></span>
											</td>
											<td>
												<Link to="#" className="ti-btn ti-btn-soft-primary py-2 px-3 m-0 ltr:mr-2 rtl:ml-2">Buy</Link>
												<Link to="#" className="ti-btn ti-btn-primary py-2 px-3 m-0">Trade</Link>
											</td>
										</tr>
										<tr>
											<td>2</td>
											<td>Etherium</td>
											<td>
												<div className="leading-none flex items-center">
													<img className="avatar  w-5 h-5 rounded-full"
														src= {ALLImages('svg9')}
														alt=""/>- ETH
												</div>
											</td>
											<td>
                                                    1,217.96
											</td>
											<td>
                                                    $149,316,232,699
											</td>
											<td>
												<Etherium/>
											</td>
											<td>
                                                    $4,758,554,801
											</td>
											<td>
												<span className="text-success">0.30% <i
													className="ti ti-arrow-big-up-lines ltr:ml-1 rtl:mr-1"></i></span>
											</td>
											<td>
												<Link to="#" className="ti-btn ti-btn-soft-primary py-2 px-3 m-0 ltr:mr-2 rtl:ml-2">Buy</Link>
												<Link to="#" className="ti-btn ti-btn-primary py-2 px-3 m-0">Trade</Link>
											</td>
										</tr>
										<tr>
											<td>3</td>
											<td>Dash</td>
											<td>
												<div className="leading-none flex items-center">
													<img className="avatar  w-5 h-5 rounded-full"
														src= {ALLImages('svg11')}
														alt=""/> - DASH
												</div>
											</td>
											<td>
                                                    $43.49
											</td>
											<td>
                                                    $480,799,847
											</td>
											<td>
												<Dash/>
											</td>
											<td>
                                                    $52,626,563
											</td>
											<td>
												<span className="text-success">0.45% <i
													className="ti ti-arrow-big-up-lines ltr:ml-1 rtl:mr-1"></i></span>
											</td>
											<td>
												<Link to="#" className="ti-btn ti-btn-soft-primary py-2 px-3 m-0 ltr:mr-2 rtl:ml-2">Buy</Link>
												<Link to="#" className="ti-btn ti-btn-primary py-2 px-3 m-0">Trade</Link>
											</td>
										</tr>
										<tr>
											<td>4</td>
											<td>Ripple</td>
											<td>
												<div className="leading-none flex items-center">
													<img className="avatar  w-5 h-5 rounded-full"
														src= {ALLImages('svg13')}
														alt=""/>- XRP
												</div>
											</td>
											<td>
                                                    $0.3531
											</td>
											<td>
                                                    $17,791,969,465
											</td>
											<td>
												<Ripple/>
											</td>
											<td>
                                                    $511,598,941
											</td>
											<td>
												<span className="text-success">0.97% <i
													className="ti ti-arrow-big-up-lines ltr:ml-1 rtl:mr-1"></i></span>
											</td>
											<td>
												<Link to="#" className="ti-btn ti-btn-soft-primary py-2 px-3 m-0 ltr:mr-2 rtl:ml-2">Buy</Link>
												<Link to="#" className="ti-btn ti-btn-primary py-2 px-3 m-0">Trade</Link>
											</td>
										</tr>
										<tr>
											<td>5</td>
											<td>Iota</td>
											<td>
												<div className="leading-none flex items-center">
													<img className="avatar  w-5 h-5 rounded-full"
														src= {ALLImages('svg14')}
														alt=""/>- IOTA
												</div>
											</td>
											<td>
                                                    $0.169741
											</td>
											<td>
                                                    $471,800,600
											</td>
											<td>
												<Iota/>
											</td>
											<td>
                                                    $5,524,385
											</td>
											<td>
												<span className="text-success">0.93% <i
													className="ti ti-arrow-big-up-lines ltr:ml-1 rtl:mr-1"></i></span>
											</td>
											<td>
												<Link to="#" className="ti-btn ti-btn-soft-primary py-2 px-3 m-0 ltr:mr-2 rtl:ml-2">Buy</Link>
												<Link to="#" className="ti-btn ti-btn-primary py-2 px-3 m-0">Trade</Link>
											</td>
										</tr>
										<tr>
											<td>6</td>
											<td>Neo</td>
											<td>
												<div className="leading-none flex items-center">
													<img className="avatar  w-5 h-5 rounded-full"
														src= {ALLImages('svg15')}
														alt=""/> - NEO
												</div>
											</td>
											<td>
                                                    $6.43
											</td>
											<td>
                                                    $453,601,667
											</td>
											<td>
												<Neo/>
											</td>
											<td>
                                                    $12,904,320
											</td>
											<td>
												<span className="text-danger">0.49% <i
													className="ti ti-arrow-big-down-lines ltr:ml-1 rtl:mr-1"></i></span>
											</td>
											<td>
												<Link to="#" className="ti-btn ti-btn-soft-primary py-2 px-3 m-0 ltr:mr-2 rtl:ml-2">Buy</Link>
												<Link to="#" className="ti-btn ti-btn-primary py-2 px-3 m-0">Trade</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>

						</div>
						<div className="box-footer">
							<div className="flex items-center">
								<div className="">
                                        showing 5 Entries <i
										className="ri-arrow-right-line ltr:ml-2 rtl:mr-2 font-semibold"></i>
								</div>
								<div className="ltr:ml-auto rtl:mr-auto">
									<nav className="flex justify-center items-center space-x-2 rtl:space-x-reverse">
										<Link className="text-gray-500 dark:text-white/70 hover:text-primary e py-1 px-2 leading-none inline-flex items-center gap-2 rounded-sm"
											to="#">
											<span aria-hidden="true">Prev</span>
											<span className="sr-only">Previous</span>
										</Link>
										<Link className="bg-primary text-white py-1 px-2 leading-none inline-flex items-center text-sm font-medium rounded-sm"
											to="#" aria-current="page">1</Link>
										<Link className="text-gray-500 dark:text-white/70 hover:text-primary e py-1 px-2 leading-none inline-flex items-center text-sm font-medium rounded-sm"
											to="#">2</Link>
										<Link className="text-gray-500 dark:text-white/70 hover:text-primary e py-1 px-2 leading-none inline-flex items-center text-sm font-medium rounded-sm"
											to="#">3</Link>
										<Link className="text-gray-500 dark:text-white/70 hover:text-primary e py-1 px-2 leading-none inline-flex items-center gap-2 rounded-sm"
											to="#">
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
export default Crypto;
