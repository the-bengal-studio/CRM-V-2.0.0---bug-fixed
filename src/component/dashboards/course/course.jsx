import React from "react";
import { Link } from "react-router-dom";
import { EarningReport } from "../../../common/chartData";
import ALLImages from "../../../common/imagesData";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Course = () => {
	return (
		<div>
			<PageHeader currentpage="Course Dashboard" activepage="Home" mainpage="Course Dashboard" />

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 sm:col-span-6 xxl:col-span-3">
					<div className="box">
						<div className="box-body relative">
							<Link aria-label="anchor" to="#" className="absolute w-full h-full inset-0"></Link>
							<div className="flex items-center">
								<Link aria-label="anchor" to="#" className="ltr:pr-4 rtl:pl-4 block">
									<span className="avatar rounded-sm bg-primary/20 text-primary p-3"><i
										className="ti ti-wallet text-2xl leading-none"></i></span>
								</Link>
								<div className="flex-1 font-semibold">
									<h4 className="text-2xl text-gray-800 dark:text-white font-semibold">$98,450</h4>
									<div className="flex justify-between items-center">
										<span className="text-gray-500 dark:text-white/70 text-xs">YTD Earning</span>
										<span className="text-success text-xs"><i
											className="ti ti-trending-up text-base ltr:mr-1 rtl:ml-1"></i>+2.02%</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 sm:col-span-6 xxl:col-span-3">
					<div className="box">
						<div className="box-body relative">
							<Link aria-label="anchor" to="#" className="absolute w-full h-full inset-0"></Link>
							<div className="flex items-center">
								<Link aria-label="anchor" to="#" className="ltr:pr-4 rtl:pl-4 block">
									<span className="avatar rounded-sm bg-secondary/20 text-secondary p-3"><i
										className="ti ti-users  text-2xl leading-none"></i></span>
								</Link>
								<div className="flex-1 font-semibold">
									<h4 className="text-2xl text-gray-800 dark:text-white font-semibold">15,379</h4>
									<div className="flex justify-between items-center">
										<span className="text-gray-500 dark:text-white/70 text-xs">Total Students</span>
										<span className="text-danger text-xs"><i
											className="ti ti-trending-down text-base ltr:mr-1 rtl:ml-1"></i>+2.02%</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 sm:col-span-6 xxl:col-span-3">
					<div className="box">
						<div className="box-body relative">
							<Link aria-label="anchor" to="#" className="absolute w-full h-full inset-0"></Link>
							<div className="flex items-center">
								<Link aria-label="anchor" to="#" className="ltr:pr-4 rtl:pl-4 block">
									<span className="avatar rounded-sm bg-warning/20 text-warning p-3"><i
										className="ti ti-id text-2xl leading-none"></i></span>
								</Link>
								<div className="flex-1 font-semibold">
									<h4 className="text-2xl text-gray-800 dark:text-white font-semibold">377</h4>
									<div className="flex justify-between items-center">
										<span className="text-gray-500 dark:text-white/70 text-xs">Total Instructors</span>
										<span className="text-danger text-xs"><i
											className="ti ti-trending-down text-base ltr:mr-1 rtl:ml-1"></i>+2.02%</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 sm:col-span-6 xxl:col-span-3">
					<div className="box">
						<div className="box-body relative">
							<Link aria-label="anchor" to="#" className="absolute w-full h-full inset-0"></Link>
							<div className="flex items-center">
								<Link aria-label="anchor" to="#" className="ltr:pr-4 rtl:pl-4 block">
									<span className="avatar rounded-sm bg-danger/20 text-danger p-3"><i
										className="ti ti-gift text-2xl leading-none"></i></span>
								</Link>
								<div className="flex-1 font-semibold">
									<h4 className="text-2xl text-gray-800 dark:text-white font-semibold">11,016</h4>
									<div className="flex justify-between items-center">
										<span className="text-gray-500 dark:text-white/70 text-xs">Total Courses</span>
										<span className="text-success text-xs"><i
											className="ti ti-trending-up text-base ltr:mr-1 rtl:ml-1"></i>+2.02%</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 xl:col-span-7">
					<div className="box">
						<div className="box-header">
							<div className="sm:flex justify-between">
								<h5 className="box-title my-auto">Earnings Report</h5>
								<div className="inline-flex rounded-md shadow-sm">
									<button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary">1D</button>
									<button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary">1W</button>
									<button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary">1M</button>
									<button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary">3M</button>
									<button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-soft-primary">6M</button>
									<button type="button" className="ti-btn-group text-xs !border-0 py-2 px-3 ti-btn-primary">1Y</button>
								</div>
							</div>
						</div>
						<div className="box-body">
							<EarningReport/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-5">
					<div className="box">
						<div className="box-header flex">
							<h5 className="box-title my-auto">New Students</h5>
							<div className=" block ltr:ml-auto rtl:mr-auto my-auto">
								<button type="button"
									className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                    View All</button>
							</div>
						</div>
						<div className="box-body p-0">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col" className="text-center !p-[0.65rem]">Name</th>
											<th scope="col" className="!p-[0.65rem]">Courses</th>
											<th scope="col" className="!p-[0.65rem]">Completed</th>
											<th scope="col" className="!p-[0.65rem]">Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="!p-[0.65rem]">
												<div className="flex items-center min-w-[200px]">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src= {ALLImages('jpg67')} alt=""
															className="avatar avatar-xs rounded-full bg-gray-100 dark:bg-black/20"/>
													</div>
													<div className="items-center">
														<p className="text-sm mb-0 text-gray-800 dark:text-white">Richard Dom</p>
														<span className="text-xs text-gray-500 dark:text-white/70">richarddom1116@demo.com</span>
													</div>
												</div>
											</td>
											<td className="!p-[0.65rem] text-center">9</td>
											<td className="!p-[0.65rem] text-center">1</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse !p-[0.65rem]">
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
											<td className="!p-[0.65rem]">
												<div className="flex items-center min-w-[200px]">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src= {ALLImages('jpg60')} alt=""
															className="avatar avatar-xs rounded-full bg-gray-100 dark:bg-black/20"/>
													</div>
													<div className="items-center">
														<p className="text-sm mb-0 text-gray-800 dark:text-white">Jonathan Ion</p>
														<span className="text-xs text-gray-500 dark:text-white/70">john.ion@demo</span>
													</div>
												</div>
											</td>
											<td className="!p-[0.65rem] text-center">1</td>
											<td className="!p-[0.65rem] text-center">0</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse !p-[0.65rem]">
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
											<td className="!p-[0.65rem]">
												<div className="flex items-center min-w-[200px]">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src= {ALLImages('jpg59')} alt=""
															className="avatar avatar-xs rounded-full bg-gray-100 dark:bg-black/20"/>
													</div>
													<div className="items-center">
														<p className="text-sm mb-0 text-gray-800 dark:text-white">Mary Curie</p>
														<span className="text-xs text-gray-500 dark:text-white/70">mary.11@demo.com</span>
													</div>
												</div>
											</td>
											<td className="!p-[0.65rem] text-center">15</td>
											<td className="!p-[0.65rem] text-center">0</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse !p-[0.65rem]">
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
											<td className="!p-[0.65rem]">
												<div className="flex items-center min-w-[200px]">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src= {ALLImages('jpg69')} alt=""
															className="avatar avatar-xs rounded-full bg-gray-100 dark:bg-black/20"/>
													</div>
													<div className="items-center">
														<p className="text-sm mb-0 text-gray-800 dark:text-white">Richard Nike</p>
														<span className="text-xs text-gray-500 dark:text-white/70">richard.16@demo.com</span>
													</div>
												</div>
											</td>
											<td className="!p-[0.65rem] text-center">16</td>
											<td className="!p-[0.65rem] text-center">3</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse !p-[0.65rem]">
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
											<td className="!p-[0.65rem]">
												<div className="flex items-center min-w-[200px]">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src= {ALLImages('jpg58')} alt=""
															className="avatar avatar-xs rounded-full bg-gray-100 dark:bg-black/20"/>
													</div>
													<div className="items-center">
														<p className="text-sm mb-0 text-gray-800 dark:text-white">Socrates Itumay</p>
														<span className="text-xs text-gray-500 dark:text-white/70">socratesitumay@gmail.com</span>
													</div>
												</div>
											</td>
											<td className="!p-[0.65rem] text-center">10</td>
											<td className="!p-[0.65rem] text-center">5</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse !p-[0.65rem]">
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
											<td className="!p-[0.65rem]">
												<div className="flex items-center min-w-[200px]">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src= {ALLImages('jpg68')} alt=""
															className="avatar avatar-xs rounded-full bg-gray-100 dark:bg-black/20"/>
													</div>
													<div className="items-center">
														<p className="text-sm mb-0 text-gray-800 dark:text-white">Charlie Davieson</p>
														<span className="text-xs text-gray-500 dark:text-white/70">charliedavieson@gmail.com</span>
													</div>
												</div>
											</td>
											<td className="!p-[0.65rem] text-center">10</td>
											<td className="!p-[0.65rem] text-center">5</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse !p-[0.65rem]">
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
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Top Instructors</h5>
								<div className=" block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button"
										className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                      View All</button>
								</div>
							</div>
						</div>
						<div className="box-body">
							<ul className="flex flex-col">
								<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center">
											<div className="leading-none flex-none">
												<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg58')} alt="image"/>
											</div>
											<div className="flex-auto ltr:ml-2 rtl:mr-2">
												<p className="text-sm font-semibold mb-0">John Hny</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0 !font-normal">M.tech</p>
											</div>
											<div className="block text-end">
												<span className="text-sm text-gray-800 dark:text-white font-semibold">321 Courses</span>
												<p className="text-xs text-gray-500 dark:text-white/70 !font-normal">Digital Marketing</p>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center">
											<div className="leading-none flex-none">
												<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg68')} alt="image"/>
											</div>
											<div className="flex-auto ltr:ml-2 rtl:mr-2">
												<p className="text-sm font-semibold mb-0">Mortal Yun</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0 !font-normal">Phd</p>
											</div>
											<div className="block text-end">
												<span className="text-sm text-gray-800 dark:text-white font-semibold">25 Courses</span>
												<p className="text-xs text-gray-500 dark:text-white/70 !font-normal">Stocks &amp; Trading</p>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center">
											<div className="leading-none flex-none">
												<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg69')} alt="image"/>
											</div>
											<div className="flex-auto ltr:ml-2 rtl:mr-2">
												<p className="text-sm font-semibold mb-0">Trex Con</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0 !font-normal">MBBS</p>
											</div>
											<div className="block text-end">
												<span className="text-sm text-gray-800 dark:text-white font-semibold">39 Courses</span>
												<p className="text-xs text-gray-500 dark:text-white/70 !font-normal">Science</p>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center">
											<div className="leading-none flex-none">
												<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg59')} alt="image"/>
											</div>
											<div className="flex-auto ltr:ml-2 rtl:mr-2">
												<p className="text-sm font-semibold mb-0">Saiu Sarah</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0 !font-normal">Phd</p>
											</div>
											<div className="block text-end">
												<span className="text-sm text-gray-800 dark:text-white font-semibold">11 Courses</span>
												<p className="text-xs text-gray-500 dark:text-white/70 !font-normal">Science</p>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center">
											<div className="leading-none flex-none">
												<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg60')} alt="image"/>
											</div>
											<div className="flex-auto ltr:ml-2 rtl:mr-2">
												<p className="text-sm font-semibold mb-0">Ion Hao</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0 !font-normal">M.tech</p>
											</div>
											<div className="block text-end">
												<span className="text-sm text-gray-800 dark:text-white font-semibold">124 Courses</span>
												<p className="text-xs text-gray-500 dark:text-white/70 !font-normal">Web Development</p>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center">
											<div className="leading-none flex-none">
												<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg70')} alt="image"/>
											</div>
											<div className="flex-auto ltr:ml-2 rtl:mr-2">
												<p className="text-sm font-semibold mb-0">Roman Killon</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0 !font-normal">M.tech</p>
											</div>
											<div className="block text-end">
												<span className="text-sm text-gray-800 dark:text-white font-semibold">163 Courses</span>
												<p className="text-xs text-gray-500 dark:text-white/70 !font-normal">Ui / Ux Designing</p>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center">
											<div className="leading-none flex-none">
												<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg61')} alt="image"/>
											</div>
											<div className="flex-auto ltr:ml-2 rtl:mr-2">
												<p className="text-sm font-semibold mb-0">Suzika Stallone</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0 !font-normal">Phd</p>
											</div>
											<div className="block text-end">
												<span className="text-sm text-gray-800 dark:text-white font-semibold">110 Courses</span>
												<p className="text-xs text-gray-500 dark:text-white/70 !font-normal">Machine Leadning</p>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-0 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center">
											<div className="leading-none flex-none">
												<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg71')} alt="image"/>
											</div>
											<div className="flex-auto ltr:ml-2 rtl:mr-2">
												<p className="text-sm font-semibold mb-0">Robert Lewis</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0 !font-normal">Phd</p>
											</div>
											<div className="block text-end">
												<span className="text-sm text-gray-800 dark:text-white font-semibold">150 Courses</span>
												<p className="text-xs text-gray-500 dark:text-white/70 !font-normal">Java Development</p>
											</div>
										</div>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-6">
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Popular Courses</h5>
								<div className=" block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button"
										className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                      View All</button>
								</div>
							</div>
						</div>
						<div className="box-body">
							<ul className="flex flex-col">
								<li className="mb-6 !rounded-sm ti-list-group text-gray-800 dark:text-white w-full">
									<div className="sm:flex items-center w-full">
										<Link to="#" className="ltr:pr-4 rtl:pl-4 inline-block">
											<img src= {ALLImages('jpg21')} alt="img" className="avatar w-28 h-28 rounded-sm"/>
										</Link>
										<div className="mt-4 sm:mt-0 flex-1 font-semibold">
											<Link to="#"
												className="text-gray-500 dark:text-white/70 block mb-1 font-medium text-xs" title="Category"><i
													className="ri-price-tag-3-line text-xs"></i>&nbsp;UI/UX</Link>
											<Link to="#" className="block mb-3 text-sm font-semibold">CSS Zero to Hero
                          Class-11: What are Pseudo Classes In CSS? How To Write Pseudo Classes?</Link>
											<div className="sm:flex justify-between items-center">
												<div className="flex items-center" title="Instructor">
													<Link to="#" className="ltr:pr-2 rtl:pl-2">
														<img src= {ALLImages('jpg59')} alt="img" className="avatar avatar-xs rounded-full"/>
													</Link>
													<Link to="#" className="flex-1 text-gray-500 dark:text-white/70">Natasha
                              Sil</Link>
												</div>
												<div className="min-w-fit text-xs text-gray-500 dark:text-white/70 inline-flex">
													<span className="ltr:mr-2 rtl:ml-2 my-auto">2,189 Views</span>
													<span><i className="ri-star-fill text-warning"></i>&nbsp;(4.2)</span>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-6 !rounded-sm ti-list-group text-gray-800 dark:text-white w-full">
									<div className="sm:flex items-center w-full">
										<Link to="#" className="ltr:pr-4 rtl:pl-4 inline-block">
											<img src= {ALLImages('jpg24')} alt="img" className="avatar w-28 h-28 rounded-sm"/>
										</Link>
										<div className="mt-4 sm:mt-0 flex-1 font-semibold">
											<Link to="#"
												className="text-gray-500 dark:text-white/70 block mb-1 font-medium text-xs" title="Category"><i
													className="ri-price-tag-3-line text-xs"></i>&nbsp; Marketing</Link>
											<Link to="#" className="block mb-3 text-sm font-semibold">Marketing Class-27: What
                          Is Marketing? How Marketing Helpful To Business? Basic Introduction To Marketing.</Link>
											<div className="sm:flex justify-between items-center">
												<div className="flex items-center" title="Instructor">
													<Link to="#" className="ltr:pr-2 rtl:pl-2">
														<img src= {ALLImages('jpg60')} alt="img" className="avatar avatar-xs rounded-full"/>
													</Link>
													<Link to="#" className="flex-1 text-gray-500 dark:text-white/70">Mosh Nah</Link>
												</div>
												<div className="min-w-fit text-xs text-gray-500 dark:text-white/70 inline-flex">
													<span className="ltr:mr-2 rtl:ml-2 my-auto">1,116 Views</span>
													<span><i className="ri-star-fill text-warning"></i>&nbsp;(4.5)</span>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-0 !rounded-sm ti-list-group text-gray-800 dark:text-white w-full">
									<div className="sm:flex items-center w-full">
										<Link to="#" className="ltr:pr-4 rtl:pl-4 inline-block">
											<img src= {ALLImages('jpg44')} alt="img" className="avatar w-28 h-28 rounded-sm"/>
										</Link>
										<div className="mt-4 sm:mt-0 flex-1 font-semibold">
											<Link to="#"
												className="text-gray-500 dark:text-white/70 block mb-1 font-medium text-xs" title="Category"><i
													className="ri-price-tag-3-line text-xs"></i>&nbsp; Programming</Link>
											<Link to="#" className="block mb-3 text-sm font-semibold">Learn Python-16: What Is
                          The Difference Between Shallow Copy and Deep Copy? Implementing Deep Copy In Python.</Link>
											<div className="sm:flex justify-between items-center">
												<div className="flex items-center" title="Instructor">
													<Link to="#" className="ltr:pr-2 rtl:pl-2">
														<img src= {ALLImages('jpg68')} alt="img" className="avatar avatar-xs rounded-full"/>
													</Link>
													<Link to="#" className="flex-1 text-gray-500 dark:text-white/70">Telsko
                              Navin</Link>
												</div>
												<div className="min-w-fit text-xs text-gray-500 dark:text-white/70 inline-flex">
													<span className="ltr:mr-2 rtl:ml-2 my-auto">2,125 Views</span>
													<span><i className="ri-star-fill text-warning"></i>&nbsp;(4.8)</span>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Top Categories</h5>
								<div className=" block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button"
										className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                      View All</button>
								</div>
							</div>
						</div>
						<div className="box-body">
							<ul className="flex flex-col">
								<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center">
											<span className="avatar rounded-sm bg-primary/20 text-primary p-3"><i
												className="ri-dashboard-line text-2xl leading-none"></i></span>
											<div className="flex-auto ltr:ml-3 rtl:mr-3">
												<p className="text-sm font-semibold mb-0">UI / UX Design</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0">10,000 + Courses</p>
											</div>
											<div>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">$199.99</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center">
											<span className="avatar rounded-sm bg-secondary/20 text-secondary p-3"><i
												className="ri-advertisement-line text-2xl leading-none"></i></span>
											<div className="flex-auto ltr:ml-3 rtl:mr-3">
												<p className="text-sm font-semibold mb-0">Digital Marketing</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0">90 + Courses</p>
											</div>
											<div>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">$599.99</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center">
											<span className="avatar rounded-sm bg-success/20 text-success p-3"><i
												className="ri-code-box-line text-2xl leading-none"></i></span>
											<div className="flex-auto ltr:ml-3 rtl:mr-3">
												<p className="text-sm font-semibold mb-0">Web Development</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0">250 + Courses</p>
											</div>
											<div>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">$299.99</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center">
											<span className="avatar rounded-sm bg-warning/20 text-warning p-3"><i
												className="ri-bar-chart-2-line text-2xl leading-none"></i></span>
											<div className="flex-auto ltr:ml-3 rtl:mr-3">
												<p className="text-sm font-semibold mb-0">Stocks &amp; Trading</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0">100 + Courses</p>
											</div>
											<div>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">$999.99</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center">
											<span className="avatar rounded-sm bg-danger/20 text-danger p-3"><i
												className="ri-angularjs-line text-2xl leading-none"></i></span>
											<div className="flex-auto ltr:ml-3 rtl:mr-3">
												<p className="text-sm font-semibold mb-0">Angular Course</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0">300 + Courses</p>
											</div>
											<div>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">$399.99</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center">
											<span className="avatar rounded-sm bg-info/20 text-info p-3"><i
												className="ri-reactjs-line text-2xl leading-none"></i></span>
											<div className="flex-auto ltr:ml-3 rtl:mr-3">
												<p className="text-sm font-semibold mb-0">React Course</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0">150 + Courses</p>
											</div>
											<div>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">$599.99</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-0 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="w-full">
										<div className="flex items-center">
											<span className="avatar rounded-sm bg-pink-500/20 text-pink-500 p-3"><i
												className="ri-database-2-line text-2xl leading-none"></i></span>
											<div className="flex-auto ltr:ml-3 rtl:mr-3">
												<p className="text-sm font-semibold mb-0">Full Stack Course</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0">500 + Courses</p>
											</div>
											<div>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">$199.99</span>
											</div>
										</div>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Course List</h5>
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
											<th scope="col" className="dark:text-white/80">S.no</th>
											<th scope="col" className="dark:text-white/80">Course</th>
											<th scope="col" className="dark:text-white/80">Category</th>
											<th scope="col" className="dark:text-white/80">Classes</th>
											<th scope="col" className="dark:text-white/80">Last Updated</th>
											<th scope="col" className="dark:text-white/80">Instructor</th>
											<th scope="col" className="dark:text-white/80">Students</th>
											<th scope="col" className="dark:text-white/80">Actions</th>
										</tr>
									</thead>
									<tbody className="">
										<tr className="">
											<td>1</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse text-start">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg21')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="  block text-sm font-semibold my-auto text-gray-800 dark:text-white min-w-[400px]">CSS Zero to Hero Master Class</p>
													</div>
												</div>
											</td>
											<td>UI/UX</td>
											<td>51</td>
											<td>22-06-2023</td>
											<td>Burak Oin</td>
											<td>252</td>
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
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1" role="tooltip" data-popper-placement="top">
                                Edit
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
											<td>2</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse text-start">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg24')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="  block text-sm font-semibold my-auto text-gray-800 dark:text-white min-w-[400px]">Digital Marketing Course From Scratch</p>
													</div>
												</div>
											</td>
											<td>Marketing</td>
											<td>115</td>
											<td>21-06-2023</td>
											<td>Stuart Little</td>
											<td>1,189</td>
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
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1" role="tooltip" data-popper-placement="top">
                                Edit
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
											<td>3</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse text-start">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg30')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="  block text-sm font-semibold my-auto text-gray-800 dark:text-white min-w-[400px]">Data Structures &amp; Algorithms For Beginners</p>
													</div>
												</div>
											</td>
											<td>Programming</td>
											<td>30</td>
											<td>15-06-2023</td>
											<td>Boran Ray</td>
											<td>3,365</td>
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
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1" role="tooltip" data-popper-placement="top">
                                Edit
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
											<td>4</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse text-start">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg35')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="  block text-sm font-semibold my-auto text-gray-800 dark:text-white min-w-[400px]">Master Linear Algebra Medium Level</p>
													</div>
												</div>
											</td>
											<td>Mathematics</td>
											<td>90</td>
											<td>11-06-2023</td>
											<td>Arya Neo</td>
											<td>773</td>
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
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1" role="tooltip" data-popper-placement="top">
                                Edit
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
											<td>5</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse text-start">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg44')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="  block text-sm font-semibold my-auto text-gray-800 dark:text-white min-w-[400px]">Learn How to Trade &amp; Invest - For Absolute Beginners</p>
													</div>
												</div>
											</td>
											<td>Stocks &amp; Trading</td>
											<td>161</td>
											<td>10-06-2023</td>
											<td>Sia Niu</td>
											<td>51</td>
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
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1" role="tooltip" data-popper-placement="top">
                                Edit
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
							<div className="sm:flex items-center">
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
export default Course;
