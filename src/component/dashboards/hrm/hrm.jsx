import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import ALLImages from "../../../common/imagesData";
import { SalesOverviewHRM } from "../../../common/chartData";

const Hrm = () => {
	return (
		<div>
			<PageHeader currentpage="HRM Dashboard" activepage="Home" mainpage="HRM Dashboard" />

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 sm:col-span-6 xl:col-span-3">
					<div className="box">
						<div className="box-body">
							<div className="flex">
								<div className="ltr:mr-3 rtl:ml-3">
									<div className="avatar rounded-sm text-primary p-2.5 bg-primary/20 "><i
										className="ti ti-users text-2xl leading-none"></i></div>
								</div>
								<div className="flex-1">
									<p className="text-sm">Total Employees</p>
									<div className="flex justify-between items-center">
										<h5 className="mb-0 text-2xl font-semibold text-gray-800 dark:text-white">1,238</h5>
										<span className="text-success badge bg-success/20 rounded-sm p-1"><i
											className="ti ti-trending-up leading-none"></i> +1.03%</span>
									</div>
									<span className="text-xs text-gray-500 dark:text-white/70">This Month</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 sm:col-span-6 xl:col-span-3">
					<div className="box">
						<div className="box-body">
							<div className="flex">
								<div className="ltr:mr-3 rtl:ml-3">
									<div className="avatar rounded-sm text-primary p-2.5 bg-primary/20 "><i
										className="ti ti-users-minus text-2xl leading-none"></i></div>
								</div>
								<div className="flex-1">
									<p className="text-sm">Employees In Leave</p>
									<div className="flex justify-between items-center">
										<h5 className="mb-0 text-2xl font-semibold text-gray-800 dark:text-white">116</h5>
										<span className="text-success badge bg-success/20 rounded-sm p-1"><i
											className="ti ti-trending-up leading-none"></i> +0.36%</span>
									</div>
									<span className=" text-gray-500 dark:text-white/70 text-xs">This Month</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 sm:col-span-6 xl:col-span-3">
					<div className="box">
						<div className="box-body">
							<div className="flex">
								<div className="ltr:mr-3 rtl:ml-3">
									<div className="avatar rounded-sm text-primary p-2.5 bg-primary/20 "><i
										className="ti ti-briefcase text-2xl leading-none"></i></div>
								</div>
								<div className="flex-1">
									<p className="text-sm">Total Clients</p>
									<div className="flex justify-between items-center">
										<h5 className="mb-0 text-2xl font-semibold text-gray-800 dark:text-white">2,159</h5>
										<span className="text-danger badge bg-danger/20 rounded-sm p-1"><i
											className="ti ti-trending-down leading-none"></i> -1.28%</span>
									</div>
									<span className=" text-gray-500 dark:text-white/70 text-xs">This Month</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 sm:col-span-6 xl:col-span-3">
					<div className="box">
						<div className="box-body">
							<div className="flex">
								<div className="ltr:mr-3 rtl:ml-3">
									<div className="avatar rounded-sm text-primary p-2.5 bg-primary/20 "><i
										className="ti ti-chart-bar text-2xl leading-none"></i></div>
								</div>
								<div className="flex-1">
									<p className="text-sm">New Leads</p>
									<div className="flex justify-between items-center">
										<h5 className="mb-0 text-2xl font-semibold text-gray-800 dark:text-white">773</h5>
										<span className="text-success badge bg-success/20 rounded-sm p-1"><i
											className="ti ti-trending-down leading-none"></i>+4.25%</span>
									</div>
									<span className=" text-gray-500 dark:text-white/70 text-xs">This Month</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<div className="sm:flex justify-between">
								<h5 className="box-title my-auto">Sales Overview</h5>
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
							<SalesOverviewHRM/>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xl:col-span-3">
					<div className="box">
						<div className="box-header justify-between flex">
							<div className="box-title my-auto">
                  Upcoming Events
							</div>
							<div>
								<button type="button" aria-label="button"
									className="ti-btn ti-btn-soft-primary ltr:mr-2 rtl:ml-2 py-1 m-0">View All</button>
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
														<p className="mb-0 text-xs leading-none text-gray-500 dark:text-white/70">10:00AM<span
															className="badge bg-primary/10 ltr:ml-2 rtl:mr-2 py-1 text-xs text-primary rounded-sm">Announcement</span>
														</p>
													</Link>
												</div>
												<div className="hs-dropdown ti-dropdown">
													<Link aria-label="anchor" to="#"
														className="text-lg leading-none text-gray-500">
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
														<p className="mb-0 text-xs leading-none text-gray-500 dark:text-white/70"><span
															className="badge bg-warning/10 ltr:ml-2 rtl:mr-2 py-1 text-xs text-warning rounded-sm">Holiday</span>
														</p>
													</Link>
												</div>
												<div className="hs-dropdown ti-dropdown">
													<Link aria-label="anchor" to="#"
														className="text-lg leading-none text-gray-500">
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
														<p className="mb-4 text-xs leading-none text-gray-500 dark:text-white/70">09:00AM<span
															className="badge bg-success/10 ltr:ml-2 rtl:mr-2">Birthday</span></p>
														<p className="mb-1 truncate timeline-widget-content text-sm text-wrap !max-w-[15rem]">Amet sed
                                no dolor kasd - Et Dolores Tempor Erat</p>
														<p className="mb-0 text-xs leading-none text-gray-500 dark:text-white/70">04:00PM<span
															className="badge bg-primary/10 ltr:ml-2 rtl:mr-2 py-1 text-xs text-primary rounded-sm">Announcement</span>
														</p>
													</Link>
												</div>
												<div className="hs-dropdown ti-dropdown">
													<Link aria-label="anchor" to="#"
														className="text-lg leading-none text-gray-500">
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
														<p className="mb-0 text-xs leading-none text-gray-500 dark:text-white/70"><span
															className="badge bg-warning/10 ltr:ml-2 rtl:mr-2 py-1 text-xs text-warning rounded-sm">Holiday</span>
														</p>
													</Link>
												</div>
												<div className="hs-dropdown ti-dropdown">
													<Link aria-label="anchor" to="#"
														className="text-lg leading-none text-gray-500">
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
				<div className="col-span-12 md:col-span-6 xl:col-span-3">
					<div className="box">
						<div className="box-header justify-between flex">
							<div className="box-title my-auto">
                  Notice Board
							</div>
							<div>
								<button type="button" aria-label="button"
									className="ti-btn ti-btn-soft-primary ltr:mr-2 rtl:ml-2 py-1 m-0">View All</button>
							</div>
						</div>
						<div className="box-body">
							<ul className="list-unstyled mb-0">
								<li className="ti-list-group mb-6 border-0 p-0 w-full">
									<div className="flex border-0">
										<div className="ltr:mr-3 rtl:ml-3">
											<div className="calendar-icon icons">
												<div className="avatar bg-primary/20 text-primary text-sm rounded-sm text-center p-1.5 leading-none">
													<span className="block mb-1">10</span>
													<span className="block">April</span>
												</div>
											</div>
										</div>
										<div className="ltr:ml-1 rtl:mr-1 my-auto">
											<div className="font-semibold text-sm text-gray-800 dark:text-white">Board meeting Completed</div> <small className="text-xs font-normal text-gray-500 dark:text-white/70">attend the
                          company mangers...</small>
										</div>
									</div>
								</li>
								<li className="ti-list-group mb-6 border-0 p-0 w-full">
									<div className="flex border-0">
										<div className="ltr:mr-3 rtl:ml-3">
											<div className="calendar-icon icons">
												<div className="avatar bg-info/20 text-info text-sm rounded-sm text-center p-1.5 leading-none">
													<span className="block mb-1">07</span>
													<span className="block">April</span>
												</div>
											</div>
										</div>
										<div className="ltr:ml-1 rtl:mr-1 my-auto">
											<div className="font-semibold text-sm text-gray-800 dark:text-white">Good Friday</div>
											<small className="text-xs font-normal text-gray-500 dark:text-white/70">participate the all employess</small>
										</div>
									</div>
								</li>
								<li className="ti-list-group mb-6 border-0 p-0 w-full">
									<div className="flex border-0">
										<div className="ltr:mr-3 rtl:ml-3">
											<div className="calendar-icon icons">
												<div className="avatar bg-secondary/20 text-secondary text-sm rounded-sm text-center p-1.5 leading-none">
													<span className="block mb-1">16</span>
													<span className="block">April</span>
												</div>
											</div>
										</div>
										<div className="ltr:ml-1 rtl:mr-1 my-auto">
											<div className="font-semibold text-sm text-gray-800 dark:text-white">Updated the Company Policy</div>
											<small className="text-xs font-normal text-gray-500 dark:text-white/70">some changes &amp; add the terms &amp; conditions</small>
										</div>
									</div>
								</li>
								<li className="ti-list-group mb-6 border-0 p-0 w-full">
									<div className="flex border-0">
										<div className="ltr:mr-3 rtl:ml-3">
											<div className="calendar-icon icons">
												<div className="avatar bg-warning/20 text-warning text-sm rounded-sm text-center p-1.5 leading-none">
													<span className="block mb-1">20</span>
													<span className="block">April</span>
												</div>
											</div>
										</div>
										<div className="ltr:ml-1 rtl:mr-1 my-auto">
											<div className="font-semibold text-sm text-gray-800 dark:text-white">Office Timings Changed</div>
											<small className="text-xs font-normal text-gray-500 dark:text-white/70">this effetct after May 01st 9:00 Am To 5:00 Pm</small>
										</div>
									</div>
								</li>
								<li className="ti-list-group mb-0 border-0 p-0 w-full">
									<div className="flex border-0">
										<div className="ltr:mr-3 rtl:ml-3">
											<div className="calendar-icon icons">
												<div className="avatar bg-danger/20 text-danger text-sm rounded-sm text-center p-1.5 leading-none">
													<span className="block mb-1">01</span>
													<span className="block">May</span>
												</div>
											</div>
										</div>
										<div className="ltr:ml-1 rtl:mr-1 my-auto">
											<div className="font-semibold text-sm text-gray-800 dark:text-white">May Day</div>
											<small className="text-xs font-normal text-gray-500 dark:text-white/70">participate the all employess</small>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12">
					<div className="box">
						<div className="box-body p-0">
							<div className="grid grid-cols-12">
								<div className="col-span-12  sm:col-span-6 xl:col-span-3 sm:border-b-0 ltr:border-r rtl:border-l border-b border-gray-200 dark:border-white/10">
									<div className="flex flex-wrap p-6 items-center">
										<div className="ltr:mr-3 rtl:ml-3 leading-none">
											<span
												className="avatar inline-flex justify-center items-center rounded-full bg-primary/20 text-primary shadow-sm">
												<i className="ti ti-package text-lg"></i>
											</span>
										</div>
										<div className="flex-1 font-semibold">
											<div className="flex justify-between items-center mb-2">
												<p className="mb-0 text-gray-800 dark:text-white">Projects</p>
												<span>85/120</span>
											</div>
											<div className="ti-main-progress bg-gray-200 dark:bg-black/20 mb-2">
												<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "55%"}}
													aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<Link to="#" className="text-gray-500 dark:text-white/70 text-xs flex">Full
                          Details<i className="ri-arrow-right-s-line ltr:ml-2 rtl:mr-2"></i></Link>
										</div>
									</div>
								</div>
								<div className="col-span-12  sm:col-span-6 xl:col-span-3 sm:border-b-0 ltr:border-r rtl:border-l border-b border-gray-200 dark:border-white/10">
									<div className="flex flex-wrap p-6 items-center">
										<div className="ltr:mr-3 rtl:ml-3 leading-none">
											<span
												className="avatar inline-flex justify-center items-center rounded-full bg-secondary/20 text-secondary shadow-sm">
												<i className="ti ti-ticket text-lg"></i>
											</span>
										</div>
										<div className="flex-1 font-semibold">
											<div className="flex justify-between items-center mb-2">
												<p className="mb-0 text-gray-800 dark:text-white">Open Tickets</p>
												<span>350/390</span>
											</div>
											<div className="ti-main-progress bg-gray-200 dark:bg-black/20 mb-2">
												<div className="ti-main-progress-bar bg-secondary text-xs text-white text-center" role="progressbar" 
													style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<Link to="#" className="text-gray-500 dark:text-white/70 text-xs flex">Full
                          Details<i className="ri-arrow-right-s-line ltr:ml-2 rtl:mr-2"></i></Link>
										</div>
									</div>
								</div>
								<div className="col-span-12  sm:col-span-6 xl:col-span-3 sm:border-b-0 ltr:border-r rtl:border-l border-b border-gray-200 dark:border-white/10">
									<div className="flex flex-wrap p-6 items-center">
										<div className="ltr:mr-3 rtl:ml-3 leading-none">
											<span
												className="avatar inline-flex justify-center items-center rounded-full bg-danger/20 text-danger shadow-sm">
												<i className="ti ti-file-invoice text-lg"></i>
											</span>
										</div>
										<div className="flex-1 font-semibold">
											<div className="flex justify-between items-center mb-2">
												<p className="mb-0 text-gray-800 dark:text-white">Invoices</p>
												<span>110/200</span>
											</div>
											<div className="ti-main-progress bg-gray-200 dark:bg-black/20 mb-2">
												<div className="ti-main-progress-bar bg-danger text-xs text-white text-center" style={{width: "75%"}} role="progressbar" 
													aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<Link to="#" className="text-gray-500 dark:text-white/70 text-xs flex">Full
                          Details<i className="ri-arrow-right-s-line ltr:ml-2 rtl:mr-2"></i></Link>
										</div>
									</div>
								</div>
								<div className="col-span-12  sm:col-span-6 xl:col-span-3">
									<div className="flex flex-wrap p-6 items-center">
										<div className="ltr:mr-3 rtl:ml-3 leading-none">
											<span
												className="avatar inline-flex justify-center items-center rounded-full bg-info/20 text-info shadow-sm">
												<i className="ti ti-vocabulary text-lg"></i>
											</span>
										</div>
										<div className="flex-1 font-semibold">
											<div className="flex justify-between items-center mb-2">
												<p className="mb-0 text-gray-800 dark:text-white">Tasks</p>
												<span>100/200</span>
											</div>
											<div className="ti-main-progress bg-gray-200 dark:bg-black/20 mb-2">
												<div className="ti-main-progress-bar bg-info text-xs text-white text-center" style={{width: "55%"}} role="progressbar" 
													aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<Link to="#" className="text-gray-500 dark:text-white/70 text-xs flex">Full
                          Details<i className="ri-arrow-right-s-line ltr:ml-2 rtl:mr-2"></i></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 lg:col-span-5">
					<div className="box">
						<div className="box-header flex justify-between">
							<div className="box-title my-auto">
                    Attendance
							</div>
							<div className=" block ltr:ml-auto rtl:mr-auto my-auto">
								<button type="button" className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                      View All</button>
							</div>
						</div>
						<div className="box-body p-0 attendance-table">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head whitespace-nowrap">
									<thead>
										<tr>
											<th scope="col">S.no</th>
											<th scope="col">Employee</th>
											<th scope="col">Status</th>
											<th scope="col">Checkin</th>
											<th scope="col">Checkout</th>
											<th scope="col">Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr className="">
											<td>1</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg59')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">Alice Rex</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">Tester</span>
													</div>
												</div>
											</td>
											<td><span className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-success/10 text-success/80">Present</span></td>
											<td>09:30 Am</td>
											<td>06:30 Pm</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-phone"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
                                    Call
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-message-circle"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
                                    Chat
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="">
											<td>2</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg61')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">Rehna Eni</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">UI/UX Designer
														</span>
													</div>
												</div>
											</td>
											<td><span className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-success/10 text-success/80">Present</span></td>
											<td>09:45 Am</td>
											<td>06:50 Pm</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-phone"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
                                    Call
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-message-circle"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
                                    Chat
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="">
											<td>3</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg62')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">
                                    Bob Upt</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">Backend
														</span>
													</div>
												</div>
											</td>
											<td><span className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-danger/10 text-danger/80">Absent</span></td>
											<td>00:00 Am</td>
											<td>00:00 Pm</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-phone"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
                                    Call
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-message-circle"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
                                    Chat
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="">
											<td>4</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg71')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">Charlie Davieson</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">Team Lead
														</span>
													</div>
												</div>
											</td>
											<td><span className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-success/10 text-success/80">Present</span></td>
											<td>10:00 Am</td>
											<td>07:00 Pm</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-phone"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
                                    Call
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-message-circle"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
                                    Chat
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="">
											<td>5</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg77')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">Suzika Stallone</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">UI Designer
														</span>
													</div>
												</div>
											</td>
											<td><span className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-success/10 text-success/80">Present</span></td>
											<td>09:30 Am</td>
											<td>05:15 Pm</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-phone"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
                                    Call
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-message-circle"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
                                    Chat
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="">
											<td>6</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg68')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">Mc Greggor</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">Java Developer
														</span>
													</div>
												</div>
											</td>
											<td><span className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-danger/10 text-danger/80">Absent</span></td>
											<td>00:00 Am</td>
											<td>00:00 Pm</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-phone"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
                                    Call
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-message-circle"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
                                    Chat
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
				<div className="col-span-12 lg:col-span-7">
					<div className="box">
						<div className="box-header flex justify-between">
							<div className="box-title my-auto">
                    Leave Request
							</div>
							<div className=" block ltr:ml-auto rtl:mr-auto my-auto">
								<button type="button" className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                      View All</button>
							</div>
						</div>
						<div className="box-body p-0">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head whitespace-nowrap">
									<thead>
										<tr>
											<th scope="col">Employee</th>
											<th scope="col">Type</th>
											<th scope="col">From</th>
											<th scope="col">To</th>
											<th scope="col">Status</th>
											<th scope="col">Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr className="">
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg58')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">Socrates Itumay</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">Team Lead</span>
													</div>
												</div>
											</td>
											<td>Sick Leave</td>
											<td>05-04-2023</td>
											<td>08-04-2023</td>
											<td><span className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-success/10 text-success">Approved</span></td>
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
										<tr className="">
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg60')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">Samantha Paul</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">Sr.UI Developer</span>
													</div>
												</div>
											</td>
											<td>Casual Leave</td>
											<td>20-04-2023</td>
											<td>24-04-2023</td>
											<td><span className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-warning/10 text-warning">Pending</span></td>
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
										<tr className="">
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg70')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">Gray Noal</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">Java Developer</span>
													</div>
												</div>
											</td>
											<td>Paternity Leave</td>
											<td>18-04-2023</td>
											<td>24-04-2023</td>
											<td><span className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-success/10 text-success">Approved</span></td>
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
										<tr className="">
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg71')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">Gray Noal</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">React Developer</span>
													</div>
												</div>
											</td>
											<td>Personal Leave</td>
											<td>05-04-2023</td>
											<td>06-04-2023</td>
											<td><span className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-danger/10 text-danger">Rejected</span></td>
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
										<tr className="">
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg64')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">Emiley Jackson</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">Full Stack Developer</span>
													</div>
												</div>
											</td>
											<td>Maternity Leave</td>
											<td>05-04-2023</td>
											<td>06-06-2023</td>
											<td><span className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-success/10 text-success">Approved</span></td>
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
										<tr className="">
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg72')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">Pope Johnson</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">Jr.Java Developer</span>
													</div>
												</div>
											</td>
											<td>Gifted Leave</td>
											<td>06-04-2023</td>
											<td>20-04-2023</td>
											<td><span className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-warning/10 text-warning">Pending</span></td>
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
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Employee Salary Details</h5>
								<div className=" block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                      View All</button>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-sm ti-custom-table-head overflow-auto">
								<table className="ti-custom-table ti-custom-table-head whitespace-nowrap">
									<thead className="bg-gray-50 dark:bg-black/20">
										<tr className="">
											<th scope="col" className="dark:text-white/80">S.no</th>
											<th scope="col" className="dark:text-white/80">Employee Details</th>
											<th scope="col" className="dark:text-white/80">Department</th>
											<th scope="col" className="dark:text-white/80">Designation</th>
											<th scope="col" className="dark:text-white/80">Salary</th>
											<th scope="col" className="dark:text-white/80">Leaves</th>
											<th scope="col" className="dark:text-white/80">Net Salary</th>
											<th scope="col" className="dark:text-white/80">Status</th>
											<th scope="col" className="dark:text-white/80">Actions</th>
										</tr>
									</thead>
									<tbody className="">
										<tr>
											<td>1</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full min-w-[200px]">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg64')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">Robert Steeve</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">robertsteeve112@demo.com</span>
													</div>
												</div>
											</td>
											<td><span>Front End</span></td>
											<td><span>UI Designer</span></td>
											<td><span>$12,000</span></td>
											<td><span>2</span></td>
											<td><span>$11,890</span></td>
											<td><span className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-success/10 text-success">Paid</span></td>
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
											<td className="tx-center">2</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full min-w-[200px]">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg60')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">Steeve Robert</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">steeverobert121@demo.com</span>
													</div>
												</div>
											</td>
											<td><span>Front End</span></td>
											<td><span>UI Developer</span></td>
											<td><span>$15,000</span></td>
											<td><span>0</span></td>
											<td><span>$15,000</span></td>
											<td><span
												className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-success/10 text-success">Paid</span>
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
											<td className="tx-center">3</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full min-w-[200px]">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg59')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">Mary Rose</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">marymary334@demo.com</span>
													</div>
												</div>
											</td>
											<td><span>Back End</span></td>
											<td><span>PHP Developer</span></td>
											<td><span>$22,000</span></td>
											<td><span>1</span></td>
											<td><span>$21,890</span></td>
											<td><span
												className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-warning/10 text-warning">pending</span>
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
											<td className="tx-center">4</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full min-w-[200px]">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg77')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">Stella Rose</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">stellarose258@demo.com</span>
													</div>
												</div>
											</td>
											<td><span>Android</span></td>
											<td><span>Ionic Developer</span></td>
											<td><span>$21,500</span></td>
											<td><span>0</span></td>
											<td><span>$21,500</span></td>
											<td><span
												className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-danger/10 text-danger">Technical
                          Issue</span></td>
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
											<td className="tx-center">5</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full min-w-[200px]">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg67')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">John Abraham</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">abrahamjohn394@demo.com</span>
													</div>
												</div>
											</td>
											<td><span>Front End</span></td>
											<td><span>UI Designer</span></td>
											<td><span>$12,000</span></td>
											<td><span>3</span></td>
											<td><span>$11,835</span></td>
											<td><span
												className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-success/10 text-success">Paid</span>
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
											<td className="tx-center">6</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full min-w-[200px]">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg68')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">Richard Bose</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">richardrichi.1233@demo.com</span>
													</div>
												</div>
											</td>
											<td><span>Front End</span></td>
											<td><span>UI Developer</span></td>
											<td><span>$12,000</span></td>
											<td><span>4</span></td>
											<td><span>$11,780</span></td>
											<td><span
												className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-warning/10 text-warning">pending</span>
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
											<td className="tx-center">7</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full min-w-[200px]">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg69')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">Abagnale Mal</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">abgnalemal000@demo.com</span>
													</div>
												</div>
											</td>
											<td><span>Back End</span></td>
											<td><span>Java Developer</span></td>
											<td><span>$25,000</span></td>
											<td><span>0</span></td>
											<td><span>$25,000</span></td>
											<td><span
												className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-success/10 text-success">Paid</span>
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
											<td className="tx-center">8</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full min-w-[200px]">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg61')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">Rose Mary</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">rosemary434@demo.com</span>
													</div>
												</div>
											</td>
											<td><span>Back End</span></td>
											<td><span>PHP Developer</span></td>
											<td><span>$22,000</span></td>
											<td><span>0</span></td>
											<td><span>$22,000</span></td>
											<td><span
												className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-danger/10 text-danger">Technical
                          Issue</span></td>
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
											<td className="tx-center">9</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full min-w-[200px]">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg62')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">Johnson Oley</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">johnsonoley394@demo.com</span>
													</div>
												</div>
											</td>
											<td><span>Android</span></td>
											<td><span>Ionic Developer</span></td>
											<td><span>$21,500</span></td>
											<td><span>1</span></td>
											<td><span>$21,455</span></td>
											<td><span
												className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-warning/10 text-warning">pending</span>
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
											<td className="tx-center">10</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full min-w-[200px]">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg63')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span className="block text-sm font-semibold text-gray-800 dark:text-gray-300 max-w-[180px] truncate">Stephen Msi</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">stephenmsi222@demo.com</span>
													</div>
												</div>
											</td>
											<td><span>Back End</span></td>
											<td><span>PHP Developer</span></td>
											<td><span>$25,000</span></td>
											<td><span>0</span></td>
											<td><span>$25,000</span></td>
											<td><span
												className="whitespace-nowrap inline-block py-1 px-3 rounded-sm text-xs font-medium bg-success/10 text-success">Paid</span>
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
export default Hrm;
