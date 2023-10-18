import React from "react";
import { OrderVsSales } from "../../../common/chartData";
import ALLImages from "../../../common/imagesdata";
import { Link } from 'react-router-dom';
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Ecommerce = () => {
	return (
		<div>
			<PageHeader currentpage="Ecommerce Dashboard" activepage="Home" mainpage="Ecommerce Dashboard"/>

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 xxxl:col-span-2 md:col-span-4">
					<div className="box">
						<div className="box-body">
							<div className="flex space-x-4 rtl:space-x-reverse">
								<div className="flex items-center justify-center ecommerce-icon px-0">
								<span className="rounded-sm p-4 bg-primary/10">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-white svg1" height="24px"
                                                viewBox="0 0 24 24" width="24px" fill="#000000">
                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                <path
                                                    d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                                            </svg>
                                        </span>
								</div>
								<div className="">
									<div className="mb-2">Total Orders</div>
									<div className="text-gray-500 dark:text-white/70 mb-1 text-xs">
										<span
											className="text-gray-800 font-semibold text-xl leading-none align-bottom dark:text-white">
                                                12,088
										</span>
									</div>
									<div>
										<span className="text-xs mb-0">Increased by <span
											className="text-success">+12.2%</span></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxxl:col-span-2 md:col-span-4">
					<div className="box">
						<div className="box-body">
							<div className="flex space-x-4 rtl:space-x-reverse">
								<div className="flex items-center justify-center ecommerce-icon px-0">
									<span className="rounded-sm p-4 bg-secondary/10">
									<svg xmlns="http://www.w3.org/2000/svg" className="fill-white svg2"
                                                enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
                                                width="24px" fill="#000000">
                                                <g><rect fill="none" height="24" width="24"></rect>
                                                    <path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z">
                                                    </path></g>
                                            </svg>
									</span>
								</div>
								<div className="">
									<div className="mb-2">Total Sales</div>
									<div className="text-gray-500 dark:text-white/70 mb-1 text-xs">
										<span
											className="text-gray-800 font-semibold text-xl leading-none align-bottom dark:text-white">
                                                10,500
										</span>
									</div>
									<div>
										<span className="text-xs mb-0">Decreased by
											<span className="text-danger">-1.41%</span>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxxl:col-span-2 md:col-span-4">
					<div className="box">
						<div className="box-body">
							<div className="flex space-x-4 rtl:space-x-reverse">
								<div className="flex items-center justify-center ecommerce-icon px-0">
									<span className="rounded-sm p-4 bg-danger/10">
									<svg xmlns="http://www.w3.org/2000/svg" className="fill-white svg3" height="24px"
                                                viewBox="0 0 24 24" width="24px" fill="#000000">
                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                <path
                                                    d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                            </svg>
									</span>
								</div>
								<div className="">
									<div className="mb-2">Total Visitors</div>
									<div className="text-gray-500 dark:text-white/70 mb-1 text-xs">
										<span
											className="text-gray-800 font-semibold text-xl leading-none align-bottom dark:text-white">
                                                2,56,259
										</span>
									</div>
									<div>
										<span className="text-xs mb-0">Increased by <span
											className="text-success">+2.5%</span></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxxl:col-span-2 md:col-span-4">
					<div className="box">
						<div className="box-body">
							<div className="flex space-x-4 rtl:space-x-reverse">
								<div className="flex items-center justify-center ecommerce-icon px-0">
									<span className="rounded-sm p-4 bg-warning/10">
									<svg xmlns="http://www.w3.org/2000/svg" className="fill-white svg4" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                                            </svg>
									</span>
								</div>
								<div className="">
									<div className="mb-2">Total Income</div>
									<div className="text-gray-500 dark:text-white/70 mb-1 text-xs">
										<span
											className="text-gray-800 font-semibold text-xl leading-none align-bottom dark:text-white">
                                                $69,270
										</span>
									</div>
									<div>
										<span className="text-xs mb-0">Increased by <span
											className="text-success">+2.58%</span></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxxl:col-span-2 md:col-span-4">
					<div className="box">
						<div className="box-body">
							<div className="flex space-x-4 rtl:space-x-reverse">
								<div className="flex items-center justify-center ecommerce-icon px-0">
									<span className="rounded-sm p-4 bg-info/10">
									<svg xmlns="http://www.w3.org/2000/svg" className="fill-white svg5" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
                                                width="24px" fill="#000000">
                                                <path d="M0,0h24v24H0V0z" fill="none" />
                                                <g>
                                                    <path
                                                        d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" />
                                                    <rect height="2" width="6" x="9" y="7" />
                                                    <rect height="2" width="2" x="16" y="7" />
                                                    <rect height="2" width="6" x="9" y="10" />
                                                    <rect height="2" width="2" x="16" y="10" />
                                                </g>
                                            </svg>
									</span>
								</div>
								<div className="">
									<div className="mb-2">Total Expenses</div>
									<div className="text-gray-500 dark:text-white/70 mb-1 text-xs">
										<span
											className="text-gray-800 font-semibold text-xl leading-none align-bottom dark:text-white">
                                                $21,520
										</span>
									</div>
									<div>
										<span className="text-xs mb-0">Decreased by <span
											className="text-danger">-14.9%</span>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxxl:col-span-2 md:col-span-4">
					<div className="box">
						<div className="box-body">
							<div className="flex space-x-4 rtl:space-x-reverse">
								<div className="flex items-center justify-center ecommerce-icon px-0">
									<span className="rounded-sm p-4 bg-success/10">
									<svg xmlns="http://www.w3.org/2000/svg" className="fill-white svg6" height="24px"
                                                viewBox="0 0 24 24" width="24px" fill="#000000">
                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                <path
                                                    d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                                            </svg>
									</span>
								</div>
								<div className="">
									<div className="mb-2">Total Products</div>
									<div className="text-gray-500 dark:text-white/70 mb-1 text-xs">
										<span
											className="text-gray-800 font-semibold text-xl leading-none align-bottom dark:text-white">
                                                45,280
										</span>
									</div>
									<div>
										<span className="text-xs mb-0">Increased by <span className="
                                                    text-success">+1.31%</span></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Recent Orders</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button aria-label="button" id="hs-dropdown-custom-icon-trigger1" type="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
									<div className="hs-dropdown-menu ti-dropdown-menu"
										aria-labelledby="hs-dropdown-custom-icon-trigger1">
										<Link className="ti-dropdown-item" to="#">Action</Link>
										<Link className="ti-dropdown-item" to="#">Another Action</Link>
										<Link className="ti-dropdown-item" to="#">Something else here</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body">
							<ul className="flex flex-col">
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center">
											<div className="leading-none">
												<img className="avatar avatar-sm rounded-sm"
													src={ALLImages('jpg4')} alt="image"/>
											</div>
											<div className="flex-auto ltr:ml-2 rtl:mr-2">
												<p className="text-sm font-semibold mb-0">Smart Phone</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0">Mobiles</p>
											</div>
											<div>
												<span className="text-sm text-success font-semibold">$199.99</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center">
											<div className="leading-none">
												<img className="avatar avatar-sm rounded-sm"
													src={ALLImages('jpg5')} alt="image"/>
											</div>
											<div className="flex-auto ltr:ml-2 rtl:mr-2">
												<p className="text-sm font-semibold mb-0">White Headphones</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0">Music</p>
											</div>
											<div>
												<span className="text-sm text-success font-semibold">$79.49</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center">
											<div className="leading-none">
												<img className="avatar avatar-sm rounded-sm"
													src={ALLImages('jpg6')} alt="image"/>
											</div>
											<div className="flex-auto ltr:ml-2 rtl:mr-2">
												<p className="text-sm font-semibold mb-0">Stop Watch</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0">Electronics
												</p>
											</div>
											<div>
												<span className="text-sm text-success font-semibold">$49.29</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center">
											<div className="leading-none">
												<img className="avatar avatar-sm rounded-sm"
													src={ALLImages('jpg7')} alt="image"/>
											</div>
											<div className="flex-auto ltr:ml-2 rtl:mr-2">
												<p className="text-sm font-semibold mb-0">Kikon Camera</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0">Electronics
												</p>
											</div>
											<div>
												<span className="text-sm text-success font-semibold">$1,699.00</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center">
											<div className="leading-none">
												<img className="avatar avatar-sm rounded-sm"
													src={ALLImages('jpg8')} alt="image"/>
											</div>
											<div className="flex-auto ltr:ml-2 rtl:mr-2">
												<p className="text-sm font-semibold mb-0">Photo Frame</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0">Furniture
												</p>
											</div>
											<div>
												<span className="text-sm text-success font-semibold">$29.99</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center">
											<div className="leading-none">
												<img className="avatar avatar-sm rounded-sm"
													src={ALLImages('jpg9')} alt="image"/>
											</div>
											<div className="flex-auto ltr:ml-2 rtl:mr-2">
												<p className="text-sm font-semibold mb-0">Canvas Shoes</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0">Footwear
												</p>
											</div>
											<div>
												<span className="text-sm text-success font-semibold">$89.99</span>
											</div>
										</div>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-6">
				<OrderVsSales/>
				</div>
				<div className="col-span-12 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Top Customers</h5>
								<div className=" block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                            View All</button>
								</div>
							</div>
						</div>
						<div className="box-body">
							<ul className="flex flex-col">
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center justify-between">
											<div className="flex items-top justify-center">
												<div className="ltr:mr-2 rtl:ml-2">
													<img src= {ALLImages('jpg60')} alt="Image Description"
														className="avatar avatar-sm rounded-full"/>
												</div>
												<div>
													<p className="mb-0 text-sm fw-semibold">Emma Wilson</p>
													<p
														className="mb-0 text-gray-500 dark:text-white/70 text-xs flex font-normal">
                                                            15 Purchases
														<svg className="fill-primary w-4 h-4 ltr:ml-2 rtl:mr-2"
															xmlns="http://www.w3.org/2000/svg" width="100"
															height="100" enableBackground="new 0 0 100 100"
															viewBox="0 0 100 100">
															<path
																d="M88.057,45.286l-5.456-5.455c-1.295-1.295-2.356-3.854-2.356-5.689v-7.715c0-3.67-2.998-6.668-6.667-6.67h-7.718  c-1.833,0-4.395-1.063-5.69-2.357l-5.455-5.455c-2.592-2.592-6.836-2.592-9.428,0l-5.455,5.459c-1.296,1.295-3.861,2.355-5.69,2.355  h-7.715c-3.665,0-6.667,2.998-6.667,6.668v7.715c0,1.828-1.061,4.395-2.356,5.689l-5.456,5.455c-2.594,2.592-2.594,6.836,0,9.432  l5.456,5.455c1.296,1.295,2.356,3.861,2.356,5.689v7.715c0,3.666,3.002,6.668,6.667,6.668h7.715c1.833,0,4.395,1.061,5.69,2.355  l5.455,5.457c2.592,2.59,6.836,2.59,9.428,0l5.455-5.457c1.296-1.295,3.857-2.355,5.69-2.355h7.718c3.669,0,6.667-3.002,6.667-6.668  v-7.715c0-1.836,1.062-4.395,2.356-5.689l5.456-5.455C90.647,52.122,90.647,47.878,88.057,45.286z M44.709,65.001L30,50.29  l4.714-4.713l9.996,9.996l20.577-20.572L70,39.714L44.709,65.001z" />
														</svg>
													</p>
												</div>
											</div>
											<div>
												<span className="text-sm">$1,835</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center justify-between">
											<div className="flex items-top justify-center">
												<div className="ltr:mr-2 rtl:ml-2">
													<img src= {ALLImages('jpg71')} alt="Image Description"
														className="avatar avatar-sm rounded-full"/>
												</div>
												<div>
													<p className="mb-0 text-sm fw-semibold">Robert Lewis</p>
													<p
														className="mb-0 text-gray-500 dark:text-white/70 text-xs flex font-normal">
                                                            18 Purchases
														<svg className="fill-primary w-4 h-4 ltr:ml-2 rtl:mr-2"
															xmlns="http://www.w3.org/2000/svg" width="100"
															height="100" enableBackground="new 0 0 100 100"
															viewBox="0 0 100 100">
															<path
																d="M88.057,45.286l-5.456-5.455c-1.295-1.295-2.356-3.854-2.356-5.689v-7.715c0-3.67-2.998-6.668-6.667-6.67h-7.718  c-1.833,0-4.395-1.063-5.69-2.357l-5.455-5.455c-2.592-2.592-6.836-2.592-9.428,0l-5.455,5.459c-1.296,1.295-3.861,2.355-5.69,2.355  h-7.715c-3.665,0-6.667,2.998-6.667,6.668v7.715c0,1.828-1.061,4.395-2.356,5.689l-5.456,5.455c-2.594,2.592-2.594,6.836,0,9.432  l5.456,5.455c1.296,1.295,2.356,3.861,2.356,5.689v7.715c0,3.666,3.002,6.668,6.667,6.668h7.715c1.833,0,4.395,1.061,5.69,2.355  l5.455,5.457c2.592,2.59,6.836,2.59,9.428,0l5.455-5.457c1.296-1.295,3.857-2.355,5.69-2.355h7.718c3.669,0,6.667-3.002,6.667-6.668  v-7.715c0-1.836,1.062-4.395,2.356-5.689l5.456-5.455C90.647,52.122,90.647,47.878,88.057,45.286z M44.709,65.001L30,50.29  l4.714-4.713l9.996,9.996l20.577-20.572L70,39.714L44.709,65.001z" />
														</svg>
													</p>
												</div>
											</div>
											<div>
												<span className="text-sm">$2,415</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center justify-between">
											<div className="flex items-top justify-center">
												<div className="ltr:mr-2 rtl:ml-2">
													<img src= {ALLImages('jpg61')} alt="Image Description"
														className="avatar avatar-sm rounded-full"/>
												</div>
												<div>
													<p className="mb-0 text-sm fw-semibold">Angelina Hose</p>
													<p
														className="mb-0 text-gray-500 dark:text-white/70 text-xs flex font-normal">
                                                            21 Purchases
														<svg className="fill-primary w-4 h-4 ltr:ml-2 rtl:mr-2"
															xmlns="http://www.w3.org/2000/svg" width="100"
															height="100" enableBackground="new 0 0 100 100"
															viewBox="0 0 100 100">
															<path
																d="M88.057,45.286l-5.456-5.455c-1.295-1.295-2.356-3.854-2.356-5.689v-7.715c0-3.67-2.998-6.668-6.667-6.67h-7.718  c-1.833,0-4.395-1.063-5.69-2.357l-5.455-5.455c-2.592-2.592-6.836-2.592-9.428,0l-5.455,5.459c-1.296,1.295-3.861,2.355-5.69,2.355  h-7.715c-3.665,0-6.667,2.998-6.667,6.668v7.715c0,1.828-1.061,4.395-2.356,5.689l-5.456,5.455c-2.594,2.592-2.594,6.836,0,9.432  l5.456,5.455c1.296,1.295,2.356,3.861,2.356,5.689v7.715c0,3.666,3.002,6.668,6.667,6.668h7.715c1.833,0,4.395,1.061,5.69,2.355  l5.455,5.457c2.592,2.59,6.836,2.59,9.428,0l5.455-5.457c1.296-1.295,3.857-2.355,5.69-2.355h7.718c3.669,0,6.667-3.002,6.667-6.668  v-7.715c0-1.836,1.062-4.395,2.356-5.689l5.456-5.455C90.647,52.122,90.647,47.878,88.057,45.286z M44.709,65.001L30,50.29  l4.714-4.713l9.996,9.996l20.577-20.572L70,39.714L44.709,65.001z" />
														</svg>
													</p>
												</div>
											</div>
											<div>
												<span className="text-sm">$2,341</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center justify-between">
											<div className="flex items-top justify-center">
												<div className="ltr:mr-2 rtl:ml-2">
													<img src= {ALLImages('jpg59')} alt="Image Description"
														className="avatar avatar-sm rounded-full"/>
												</div>
												<div>
													<p className="mb-0 text-sm fw-semibold">Hugh Jackma</p>
													<p
														className="mb-0 text-gray-500 dark:text-white/70 text-xs flex font-normal">
                                                            20 Purchases
														<svg className="fill-primary w-4 h-4 ltr:ml-2 rtl:mr-2"
															xmlns="http://www.w3.org/2000/svg" width="100"
															height="100" enableBackground="new 0 0 100 100"
															viewBox="0 0 100 100">
															<path
																d="M88.057,45.286l-5.456-5.455c-1.295-1.295-2.356-3.854-2.356-5.689v-7.715c0-3.67-2.998-6.668-6.667-6.67h-7.718  c-1.833,0-4.395-1.063-5.69-2.357l-5.455-5.455c-2.592-2.592-6.836-2.592-9.428,0l-5.455,5.459c-1.296,1.295-3.861,2.355-5.69,2.355  h-7.715c-3.665,0-6.667,2.998-6.667,6.668v7.715c0,1.828-1.061,4.395-2.356,5.689l-5.456,5.455c-2.594,2.592-2.594,6.836,0,9.432  l5.456,5.455c1.296,1.295,2.356,3.861,2.356,5.689v7.715c0,3.666,3.002,6.668,6.667,6.668h7.715c1.833,0,4.395,1.061,5.69,2.355  l5.455,5.457c2.592,2.59,6.836,2.59,9.428,0l5.455-5.457c1.296-1.295,3.857-2.355,5.69-2.355h7.718c3.669,0,6.667-3.002,6.667-6.668  v-7.715c0-1.836,1.062-4.395,2.356-5.689l5.456-5.455C90.647,52.122,90.647,47.878,88.057,45.286z M44.709,65.001L30,50.29  l4.714-4.713l9.996,9.996l20.577-20.572L70,39.714L44.709,65.001z" />
														</svg>
													</p>
												</div>
											</div>
											<div>
												<span className="text-sm">$2,341</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center justify-between">
											<div className="flex items-top justify-center">
												<div className="ltr:mr-2 rtl:ml-2">
													<img src= {ALLImages('jpg58')} alt="Image Description"
														className="avatar avatar-sm rounded-full"/>
												</div>
												<div>
													<p className="mb-0 text-sm fw-semibold">Samantha Sam</p>
													<p
														className="mb-0 text-gray-500 dark:text-white/70 text-xs flex font-normal">
                                                            24 Purchases
														<svg className="fill-primary w-4 h-4 ltr:ml-2 rtl:mr-2"
															xmlns="http://www.w3.org/2000/svg" width="100"
															height="100" enableBackground="new 0 0 100 100"
															viewBox="0 0 100 100">
															<path
																d="M88.057,45.286l-5.456-5.455c-1.295-1.295-2.356-3.854-2.356-5.689v-7.715c0-3.67-2.998-6.668-6.667-6.67h-7.718  c-1.833,0-4.395-1.063-5.69-2.357l-5.455-5.455c-2.592-2.592-6.836-2.592-9.428,0l-5.455,5.459c-1.296,1.295-3.861,2.355-5.69,2.355  h-7.715c-3.665,0-6.667,2.998-6.667,6.668v7.715c0,1.828-1.061,4.395-2.356,5.689l-5.456,5.455c-2.594,2.592-2.594,6.836,0,9.432  l5.456,5.455c1.296,1.295,2.356,3.861,2.356,5.689v7.715c0,3.666,3.002,6.668,6.667,6.668h7.715c1.833,0,4.395,1.061,5.69,2.355  l5.455,5.457c2.592,2.59,6.836,2.59,9.428,0l5.455-5.457c1.296-1.295,3.857-2.355,5.69-2.355h7.718c3.669,0,6.667-3.002,6.667-6.668  v-7.715c0-1.836,1.062-4.395,2.356-5.689l5.456-5.455C90.647,52.122,90.647,47.878,88.057,45.286z M44.709,65.001L30,50.29  l4.714-4.713l9.996,9.996l20.577-20.572L70,39.714L44.709,65.001z" />
														</svg>
													</p>
												</div>
											</div>
											<div>
												<span className="text-sm">2,624</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-0 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center justify-between">
											<div className="flex items-top justify-center">
												<div className="ltr:mr-2 rtl:ml-2">
													<img src= {ALLImages('jpg68')} alt="Image Description"
														className="avatar avatar-sm rounded-full"/>
												</div>
												<div>
													<p className="mb-0 text-sm fw-semibold">Bickle Bob</p>
													<p
														className="mb-0 text-gray-500 dark:text-white/70 text-xs flex font-normal">
                                                            12 Purchases
														<svg className="fill-primary w-4 h-4 ltr:ml-2 rtl:mr-2"
															xmlns="http://www.w3.org/2000/svg" width="100"
															height="100" enableBackground="new 0 0 100 100"
															viewBox="0 0 100 100">
															<path
																d="M88.057,45.286l-5.456-5.455c-1.295-1.295-2.356-3.854-2.356-5.689v-7.715c0-3.67-2.998-6.668-6.667-6.67h-7.718  c-1.833,0-4.395-1.063-5.69-2.357l-5.455-5.455c-2.592-2.592-6.836-2.592-9.428,0l-5.455,5.459c-1.296,1.295-3.861,2.355-5.69,2.355  h-7.715c-3.665,0-6.667,2.998-6.667,6.668v7.715c0,1.828-1.061,4.395-2.356,5.689l-5.456,5.455c-2.594,2.592-2.594,6.836,0,9.432  l5.456,5.455c1.296,1.295,2.356,3.861,2.356,5.689v7.715c0,3.666,3.002,6.668,6.667,6.668h7.715c1.833,0,4.395,1.061,5.69,2.355  l5.455,5.457c2.592,2.59,6.836,2.59,9.428,0l5.455-5.457c1.296-1.295,3.857-2.355,5.69-2.355h7.718c3.669,0,6.667-3.002,6.667-6.668  v-7.715c0-1.836,1.062-4.395,2.356-5.689l5.456-5.455C90.647,52.122,90.647,47.878,88.057,45.286z M44.709,65.001L30,50.29  l4.714-4.713l9.996,9.996l20.577-20.572L70,39.714L44.709,65.001z" />
														</svg>
													</p>
												</div>
											</div>
											<div>
												<span className="text-sm">1,100</span>
											</div>
										</div>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-5">
					<div className="box">
						<div className="box-header">
							<div className="sm:flex">
								<h5 className="box-title my-auto">Task List</h5>
								<nav className="sm:flex sm:space-x-2 space-y-2 sm:space-y-0 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto"
									aria-label="Tabs" role="tablist">
									<button type="button"
										className=" hs-tab-active:text-info hs-tab-active:bg-info/20 dark:hs-tab-active:bg-info/20 dark:hs-tab-active:text-info py-2 px-3 inline-flex items-center w-full justify-center gap-2 leading-none font-medium text-center text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:text-white/70 dark:hover:text-gray-300 active"
										id="active-item" data-hs-tab="#taskactive" aria-controls="taskactive"
										role="tab">
                                            Active
									</button>
									<button type="button"
										className=" hs-tab-active:text-info hs-tab-active:bg-info/20 dark:hs-tab-active:bg-info/20 dark:hs-tab-active:text-info py-2 px-3 inline-flex items-center w-full justify-center gap-2 leading-none font-medium text-center text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:text-white/70 dark:hover:text-gray-300"
										id="completed-item" data-hs-tab="#completed" aria-controls="completed"
										role="tab">
                                            Completed
									</button>
									<button type="button"
										className=" hs-tab-active:text-info hs-tab-active:bg-info/20 dark:hs-tab-active:bg-info/20 dark:hs-tab-active:text-info py-2 px-3 inline-flex items-center w-full justify-center gap-2 leading-none font-medium text-center text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:text-white/70 dark:hover:text-gray-300"
										id="cancelled-item" data-hs-tab="#cancelled" aria-controls="cancelled"
										role="tab">
                                            Cancelled
									</button>
								</nav>
							</div>
						</div>
						<div className="box-body p-0">
							<div id="taskactive" className="" role="tabpanel" aria-labelledby="active-item">
								<div className="overflow-auto">
									<table className="ti-custom-table ti-custom-table-head">
										<tbody>
											<tr>
												<td className="min-w-[200px]">
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src= {ALLImages('jpg57')}
																	alt="Image Description"/>
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
                                                                    Amanda Nanes</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
                                                                $229.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Delivery
                                                                Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">24 May
                                                                2022</p>
													</div>
												</td>
												<td className="min-w-[100px]">
													<img className="avatar avatar-xs rounded-sm"
														src= {ALLImages('png25')}
														alt="Image Description"/>
												</td>
												<td>
													<Link aria-label="anchor" to="#">
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-180"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src= {ALLImages('jpg66')}
																	alt="Image Description"/>
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
                                                                    Peter Parkour</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
                                                                $135.29</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Delivery
                                                                Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">18 May
                                                                2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src= {ALLImages('png26')}
														alt="Image Description"/>
												</td>
												<td>
													<Link aria-label="anchor"  to="#">
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-180"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src= {ALLImages('jpg68')}
																	alt="Image Description"/>
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
                                                                    Jackie Chen</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
                                                                $1,299.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Delivery
                                                                Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">29 May
                                                                2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src= {ALLImages('png27')}
														alt="Image Description"/>
												</td>
												<td>
													<Link aria-label="anchor" to="#">
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-180"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src= {ALLImages('jpg61')}
																	alt="Image Description"/>
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
                                                                    Ryan Gercia</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
                                                                $249.29</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Delivery
                                                                Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">05 Jun
                                                                2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src= {ALLImages('png28')}
														alt="Image Description"/>
												</td>
												<td>
													<Link aria-label="anchor" to="#">
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-180"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src= {ALLImages('jpg70')}
																	alt="Image Description"/>
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
                                                                    Hugh Jackma</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
                                                                $499.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Delivery
                                                                Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">15 May
                                                                2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src= {ALLImages('png29')}
														alt="Image Description"/>
												</td>
												<td>
													<Link aria-label="anchor" to="#">
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-180"></i></span>
													</Link>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div id="completed" className="hidden" role="tabpanel" aria-labelledby="completed-item">
								<div className="overflow-auto">
									<table className="ti-custom-table ti-custom-table-head">
										<tbody>
											<tr>
												<td className="min-w-[200px]">
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src= {ALLImages('jpg58')}
																	alt="Image Description"/>
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-gray-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
                                                                    Lisa Rebecca</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
                                                                $1,199.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span className="text-xs text-success">Delivery Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">24 Dec
                                                                2022</p>
													</div>
												</td>
												<td className="min-w-[100px]">
													<img className="avatar avatar-xs rounded-sm"
														src= {ALLImages('png30')}
														alt="Image Description"/>
												</td>
												<td>
													<Link aria-label="anchor" to="#">
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-180"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src= {ALLImages('jpg69')}
																	alt="Image Description"/>
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-gray-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
                                                                    Matt Martin</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
                                                                $799.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span className="text-xs text-success">Delivered On</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">18 Nov
                                                                2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src= {ALLImages('png31')}
														alt="Image Description"/>
												</td>
												<td>
													<Link aria-label="anchor" to="#">
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-180"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src= {ALLImages('jpg63')}
																	alt="Image Description"/>
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
                                                                    Mitchell Osama</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
                                                                $279.00</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span className="text-xs text-success">Delivery Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">29 Dec
                                                                2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src= {ALLImages('png32')}
														alt="Image Description"/>
												</td>
												<td>
													<Link aria-label="anchor" to="#">
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-180"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src= {ALLImages('jpg68')}
																	alt="Image Description"/>
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
                                                                    Cornor Mcgood</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
                                                                $79.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span className="text-xs text-success">Delivered On</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">05 Dec
                                                                2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src= {ALLImages('png33')}
														alt="Image Description"/>
												</td>
												<td>
													<Link aria-label="anchor" to="#">
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-180"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src= {ALLImages('jpg71')}
																	alt="Image Description"/>
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
                                                                    Kishan Patel</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
                                                                $1449.29</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span className="text-xs text-success">Delivered On</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">20 Nov
                                                                2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src= {ALLImages('png34')}
														alt="Image Description"/>
												</td>
												<td>
													<Link aria-label="anchor" to="#">
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-180"></i></span>
													</Link>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div id="cancelled" className="hidden" role="tabpanel" aria-labelledby="cancelled-item">
								<div className="overflow-auto">
									<table className="ti-custom-table ti-custom-table-head">
										<tbody>
											<tr>
												<td className="min-w-[200px]">
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src= {ALLImages('jpg62')}
																	alt="Image Description"/>
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
                                                                    Hailey Bobber</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
                                                                $199.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span className="text-xs text-danger">Cancelled Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">09 Dec
                                                                2022</p>
													</div>
												</td>
												<td className="min-w-[100px]">
													<img className="avatar avatar-xs rounded-sm"
														src= {ALLImages('png35')}
														alt="Image Description"/>
												</td>
												<td>
													<Link aria-label="anchor" to="#">
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-180"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src= {ALLImages('jpg70')}
																	alt="Image Description"/>
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-gray-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
                                                                    Anthony Mansion</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
                                                                $179.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span className="text-xs text-danger">Cancelled Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">28 Dec
                                                                2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src= {ALLImages('png36')}
														alt="Image Description"/>
												</td>
												<td>
													<Link aria-label="anchor" to="#">
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-180"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src= {ALLImages('jpg72')}
																	alt="Image Description"/>
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
                                                                    Simon Carter</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
                                                                $149.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span className="text-xs text-danger">Cancelled Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">30 Dec
                                                                2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src= {ALLImages('png25')}
														alt="Image Description"/>
												</td>
												<td>
													<Link aria-label="anchor" to="#">
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-180"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src= {ALLImages('jpg59')}
																	alt="Image Description"/>
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
                                                                    Sofia Sekh</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
                                                                $1439.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span className="text-xs text-danger">Cancelled Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">03 Dec
                                                                2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src= {ALLImages('png28')}
														alt="Image Description"/>
												</td>
												<td>
													<Link aria-label="anchor" to="#">
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-180"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src= {ALLImages('jpg65')}
																	alt="Image Description"/>
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-gray-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
                                                                    Kimura Kai</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
                                                                $1092.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span className="text-xs text-danger">Cancelled Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">02 Dec
                                                                2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src= {ALLImages('png29')}
														alt="Image Description"/>
												</td>
												<td>
													<Link aria-label="anchor" to="#">
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-180"></i></span>
													</Link>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-4">
					<div className="box">
						<div className="box-header flex">
							<h5 className="box-title my-auto">Top Selling Products</h5>
							<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
								<button aria-label="button" id="hs-dropdown-custom-icon-trigger3" type="button"
									className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
									<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-custom-icon-trigger3">
									<Link className="ti-dropdown-item" to="#">Action</Link>
									<Link className="ti-dropdown-item" to="#">Another Action</Link>
									<Link className="ti-dropdown-item" to="#">Something else
                                            here</Link>
								</div>
							</div>
						</div>
						<div className="box-body p-0 selling-table">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col">Product</th>
											<th scope="col">Stock</th>
											<th scope="col">TotalSales</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="leading-none">
												<img src= {ALLImages('png37')}
													className=" ltr:mr-2 rtl:ml-2 avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-black/20"
													alt="Image Description"/>Ethnic School bag for children (24L)
											</td>
											<td className="text-sm"><span
												className="text-success">In
                                                        Stock</span></td>
											<td>
												<span className="text-sm font-semibold">5,093</span>
											</td>
										</tr>
										<tr>
											<td className="leading-none">
												<img src= {ALLImages('png38')}
													className=" ltr:mr-2 rtl:ml-2 avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-black/20"
													alt="Image Description"/>Leather jacket for men (S,M,L,XL)
											</td>
											<td className="text-sm"><span
												className="text-success">In
                                                        Stock</span></td>
											<td>
												<span className="text-sm font-semibold">6,890</span>
											</td>
										</tr>
										<tr>
											<td className="leading-none">
												<img src= {ALLImages('png39')}
													className=" ltr:mr-2 rtl:ml-2 avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-black/20"
													alt="Image Description"/>Childrens Teddy toy of high quality
											</td>
											<td className="text-sm"><span
												className="text-danger">Out
                                                        Of Stock</span></td>
											<td>
												<span className="text-sm font-semibold">5,423</span>
											</td>
										</tr>
										<tr>
											<td className="leading-none">
												<img src= {ALLImages('png40')}
													className=" ltr:mr-2 rtl:ml-2 avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-black/20"
													alt="Image Description"/>Orange smart watch dial (24mm)
											</td>
											<td className="text-sm"><span
												className="text-danger">Out
                                                        Of Stock</span></td>
											<td>
												<span className="text-sm font-semibold">10,234</span>
											</td>
										</tr>
										<tr>
											<td className="leading-none">
												<img src= {ALLImages('png42')}
													className=" ltr:mr-2 rtl:ml-2 avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-black/20"
													alt="Image Description"/>Pink Womens Regular Hand Bag
											</td>
											<td className="text-sm"><span
												className="text-success">In
                                                        Stock</span></td>
											<td>
												<span className="text-sm font-semibold">10,234</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Customer Reviews</h5>
								<div className=" block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button"
										className="ti-btn rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                            View All</button>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="flex-1">
									<div className="flex items-baseline mb-2">
										<h4 className="mb-0 text-4xl text-gray-800 dark:text-white">4.3</h4>
										<span className="ltr:ml-2 rtl:mr-2">
											<i className="ri-star-fill text-primary"></i>
											<i className="ri-star-fill text-primary"></i>
											<i className="ri-star-fill text-primary"></i>
											<i className="ri-star-fill text-primary"></i>
											<i className="ri-star-fill text-gray-200 dark:text-white/10"></i>
										</span>
									</div>
									<Link to="#" className="tx-gray-500 dark:text-white/70">1,739
                                            Reviews</Link>
								</div>
								<div className="min-w-fit">
									<span className="text-sm">(4.3 out of 5)</span>
								</div>
							</div>
							<div className="mt-4">
								<div className="flex items-center justify-between mb-1 text-sm">
									<p className="mb-0">5 Star</p>
									<span>65%</span>
								</div>
								<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
									<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: '65%'}} aria-valuenow={65} aria-valuemin="0"
										aria-valuemax={100}></div>
								</div>
							</div>
							<div className="mt-4">
								<div className="flex items-center justify-between mb-1 text-sm">
									<p className="mb-0">4 Star</p>
									<span>70%</span>
								</div>
								<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
									<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin="0"
										aria-valuemax={100}></div>
								</div>
							</div>
							<div className="mt-4">
								<div className="flex items-center justify-between mb-1 text-sm">
									<p className="mb-0">3 Star</p>
									<span>60%</span>
								</div>
								<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
									<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style= {{width: '60%'}} aria-valuenow={60} aria-valuemin="0"
										aria-valuemax={100}></div>
								</div>
							</div>
							<div className="mt-4">
								<div className="flex items-center justify-between mb-1 text-sm">
									<p className="mb-0">2 Star</p>
									<span>20%</span>
								</div>
								<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
									<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style= {{width: '30%'}} aria-valuenow={30} aria-valuemin="0"
										aria-valuemax={100}></div>
								</div>
							</div>
							<div className="mt-4">
								<div className="flex items-center justify-between mb-1 text-sm">
									<p className="mb-0">1 Star</p>
									<span>5%</span>
								</div>
								<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
									<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style= {{width: '15%'}} aria-valuenow={15} aria-valuemin="0"
										aria-valuemax={100}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box orders-table">
						<div className="box-header">
							<div className="sm:flex justify-between">
								<h5 className="box-title my-auto">Products Overview</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button id="hs-dropdown-custom-icon-trigger" type="button"
										className="hs-dropdown-toggle px-2 py-1 ti-btn ti-btn-primary">Sort
                                            By<i className="ri-arrow-down-s-line align-middle"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu"
										aria-labelledby="hs-dropdown-custom-icon-trigger">
										<Link className="ti-dropdown-item" to="#">New</Link>
										<Link className="ti-dropdown-item" to="#">popular</Link>
										<Link className="ti-dropdown-item" to="#">Relevant</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-sm overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead className="">
										<tr>
											<th scope="col">Date</th>
											<th scope="col">Product Name</th>
											<th scope="col">Product Id</th>
											<th scope="col">Transaction Id</th>
											<th scope="col">Price</th>
											<th scope="col">Payment Method</th>
											<th scope="col">Status</th>
											<th scope="col">Sales</th>
											<th scope="col">Revenue</th>
											<th scope="col">Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="">01-05-23</td>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src= {ALLImages('png37')}
															alt="Image Description"
															className="avatar avatar-xs rounded-sm"/>
													</div>
													<div className="text-sm">Niker College Bag</div>
												</div>
											</td>
											<td>
												<span className="font-semibold">#1734-9743</span>
											</td>
											<td><Link to={`${import.meta.env.BASE_URL}pagecomponent/invoice/invoicedetails/`}>#14008268610</Link></td>
											<td>
                                                    $199.99
											</td>
											<td>Online</td>
											<td>
												<span
													className="badge bg-success/10 leading-none text-success rounded-sm">Available</span>
											</td>
											<td>
												<span className="">3,903</span>
											</td>
											<td>
												<span className="">$57,899.24</span>
											</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                                        View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                                        Edit
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className="ti ti-trash"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                                        Delete
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr>
											<td className="">02-05-23</td>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src= {ALLImages('png41')}
															alt="Image Description"
															className="avatar avatar-xs rounded-sm"/>
													</div>
													<div className="text-sm truncate">Dslr Camera (50mm f/1.9 HRM Lens)</div>
												</div>
											</td>
											<td>
												<span className="font-semibold">#1234-4567</span>
											</td>
											<td><Link to={`${import.meta.env.BASE_URL}pagecomponent/invoice/invoicedetails/`}>#31408224782</Link></td>
											<td>
                                                    $1,299.99
											</td>
											<td>Cash On Delivery</td>
											<td>
												<span
													className="badge bg-success/10 leading-none text-success rounded-sm">Available</span>
											</td>
											<td>
												<span className="">12,435</span>
											</td>
											<td>
												<span className="">$3,24,781.92</span>
											</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                                        View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                                        Edit
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className="ti ti-trash"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                                        Delete
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr>
											<td className="">03-05-23</td>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src= {ALLImages('png38')}
															alt="Image Description"
															className="avatar avatar-xs rounded-sm"/>
													</div>
													<div className="text-sm">Outdoor Bomber Jacket</div>
												</div>
											</td>
											<td>
												<span className="font-semibold">#1902-9883</span>
											</td>
											<td><Link to={`${import.meta.env.BASE_URL}pagecomponent/invoice/invoicedetails/`}>#92065567861</Link></td>
											<td>
                                                    $99.99
											</td>
											<td>Cash On Delivery</td>
											<td>
												<span
													className="badge bg-danger/10 leading-none text-danger rounded-sm">Not
                                                        Available</span>
											</td>
											<td>
												<span className="">5,143</span>
											</td>
											<td>
												<span className="">$76,102.76</span>
											</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                                        View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                                        Edit
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className="ti ti-trash"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                                        Delete
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr>
											<td className="">04-05-23</td>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src= {ALLImages('png39')}
															alt="Image Description"
															className="avatar avatar-xs rounded-sm"/>
													</div>
													<div className="text-sm">Light Blue Teddy</div>
												</div>
											</td>
											<td>
												<span className="font-semibold">#8745-1232</span>
											</td>
											<td><Link to={`${import.meta.env.BASE_URL}pagecomponent/invoice/invoicedetails/`}>#31652851650</Link></td>
											<td>
                                                    $79.00
											</td>
											<td>Online</td>
											<td>
												<span
													className="badge bg-warning/10 leading-none text-warning rounded-sm">Pending</span>
											</td>
											<td>
												<span className="">7,183</span>
											</td>
											<td>
												<span className="">$78,211.83</span>
											</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                                        View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                                        Edit
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className="ti ti-trash"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                                        Delete
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr>
											<td className="">05-05-23</td>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src= {ALLImages('png40')}
															alt="Image Description"
															className="avatar avatar-xs rounded-sm"/>
													</div>
													<div className="text-sm">Orange Smart Watch (24mm)</div>
												</div>
											</td>
											<td>
												<span className="font-semibold">#1962-9033</span>
											</td>
											<td><Link to={`${import.meta.env.BASE_URL}pagecomponent/invoice/invoicedetails/`}>#23518898764</Link></td>
											<td>
                                                    $199.99
											</td>
											<td>Cash On Delivery</td>
											<td>
												<span
													className="badge bg-info/10 leading-none text-info rounded-sm">Shipping</span>
											</td>
											<td>
												<span className="">10,287</span>
											</td>
											<td>
												<span className="">$2,32,982.99</span>
											</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                                        View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                                        Edit
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className="ti ti-trash"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
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
							<div className="sm:flex items-center">
								<div className="">
                                        showing 5 Entries <i className="ri-arrow-right-line ml-2 font-semibold"></i>
								</div>
								<div className="ltr:ml-auto rtl:mr-auto">
									<nav className="flex justify-center items-center space-x-2 rtl:space-x-reverse">
										<Link className="text-gray-500 dark:text-white/70 hover:text-primary e py-1 px-2 leading-none inline-flex items-center gap-2 rounded-sm" to="#">
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
export default Ecommerce;
