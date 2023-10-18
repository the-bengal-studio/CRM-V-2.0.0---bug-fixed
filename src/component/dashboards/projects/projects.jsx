import React from "react";
import { Link } from "react-router-dom";
import { ProjectAnalysis } from "../../../common/chartData";
import ALLImages from "../../../common/imagesData";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Projects = () => {
	return (
		<div>
			<PageHeader currentpage="Projects Dashboard" activepage="Home" mainpage="Projects Dashboard" />


			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12">
					<div className="grid grid-cols-12 gap-x-6">
						<div className="col-span-12 xl:col-span-3">
							<div className="box">
								<div className="box-body">
									<div className="flex flex-wrap">
										<div className="flex-1">
											<p className="mb-2 font-semibold text-sm text-gray-500 dark:text-white/70">Total Projects</p>
											<h3 className="mb-2 font-semibold text-2xl text-gray-800 dark:text-white">1,293</h3>
											<p className="mb-0 text-xs"><span
												className="badge bg-danger/20 text-danger py-1 rounded-full font-semibold ltr:mr-1 rtl:ml-1">1.35%</span><span
												className="tx-muted font-semibold text-gray-500 dark:text-white/70">Since Last Month</span></p>
										</div>
										<div className="min-w-fit ltr:ml-2 rtl:mr-2">
											<div className="avatar bg-primary text-white rounded-sm p-2.5">
												<i className="ri-book-open-line leading-none text-2xl"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="box">
								<div className="box-body">
									<div className="flex flex-wrap">
										<div className="flex-1">
											<p className="mb-2 font-semibold text-sm text-gray-500 dark:text-white/70">Completed</p>
											<h3 className="mb-2 font-semibold text-2xl text-gray-800 dark:text-white">853</h3>
											<p className="mb-0 text-xs"><span
												className="badge bg-success/20 text-success py-1 rounded-full font-semibold ltr:mr-1 rtl:ml-1">1.25%</span><span
												className="tx-muted font-semibold text-gray-500 dark:text-white/70">Since Last Month</span></p>
										</div>
										<div className="min-w-fit ltr:ml-2 rtl:mr-2">
											<div className="avatar bg-secondary text-white rounded-sm p-2.5">
												<i className="ri-task-line leading-none text-2xl"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="box">
								<div className="box-body">
									<div className="flex flex-wrap">
										<div className="flex-1">
											<p className="mb-2 font-semibold text-sm text-gray-500 dark:text-white/70">In Complete</p>
											<h3 className="mb-2 font-semibold text-2xl text-gray-800 dark:text-white">625</h3>
											<p className="mb-0 text-xs"><span
												className="badge bg-danger/20 text-danger py-1 rounded-full font-semibold ltr:mr-1 rtl:ml-1">2.23%</span><span
												className="tx-muted font-semibold text-gray-500 dark:text-white/70">Since Last Month</span></p>
										</div>
										<div className="min-w-fit ltr:ml-2 rtl:mr-2">
											<div className="avatar bg-info text-white rounded-sm p-2.5">
												<i className="ri-file-warning-line leading-none text-2xl"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 xl:col-span-6">
							<div className="box">
								<div className="box-header">
									<div className="flex">
										<h5 className="box-title my-auto">Project Analysis</h5>
										<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
											<button type="button" className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"> This Week <i className="ti ti-chevron-down"></i></button>
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
									<ProjectAnalysis/>
								</div>
							</div>
						</div>
						<div className="col-span-12 xl:col-span-3">
							<div className="box projects-tracking-card overflow-hidden text-center">
								<div className="box-body text-center">
									<img src= {ALLImages('png119')} alt="Project-img" className="h-40 w-40 mx-auto"/>
									<div>
										<h5 className="font-semibold text-gray-800 dark:text-white text-xl mb-1"> Welcome Back ...!</h5>
										<p className="text-xs text-gray-500 dark:text-white/70 mb-4">Start Working On the Assigned project....
										</p>
										<button type="button" className="ti-btn ti-btn-primary">Let's Start</button>
									</div>
								</div>
								<span className="shape-1 text-primary"><i className="ti ti-circle text-base font-bold"></i></span>
								<span className="shape-2 text-secondary"><i className="ti ti-triangle text-base font-bold"></i></span>
								<span className="shape-3 text-warning"><i className="ti ti-square text-base font-bold"></i></span>
								<span className="shape-4 text-info"><i className="ti ti-square-rotated text-base font-bold"></i></span>
								<span className="shape-5 text-success"><i className="ti ti-pentagon text-base font-bold"></i></span>
								<span className="shape-6 text-danger"><i className="ti ti-star text-base font-bold"></i></span>
								<span className="shape-7 text-pink-500"><i className="ti ti-hexagon text-base font-bold"></i></span>
								<span className="shape-8 text-teal-500"><i className="ti ti-octagon text-base font-bold"></i></span>
								<span className="shape-9 text-primary"><i className="ti ti-circle text-base font-bold"></i></span>
								<span className="shape-10 text-secondary"><i className="ti ti-triangle text-base font-bold"></i></span>
								<span className="shape-11 text-warning"><i className="ti ti-square text-base font-bold"></i></span>
								<span className="shape-12 text-info"><i className="ti ti-square-rotated text-base font-bold"></i></span>
								<span className="shape-13 text-success"><i className="ti ti-pentagon text-base font-bold"></i></span>
							</div>
							<div className="box !bg-primary !text-white">
								<div className="box-body">
									<div className="flex mb-5 relative">
										<div className="flex-1">
											<div className="flex items-center mb-1">
												<p className="mb-0 font-semibold text-base">Designing Landing Page</p>
												<span className="badge rounded-sm bg-gray-100 text-gray-500 py-1 ltr:ml-2 rtl:mr-2">High</span>
											</div>
											<p className="mb-0 font-semibold">
												<span className="opacity-50 ltr:mr-1 rtl:ml-1">Tasks:</span>
												<span className="opacity-60">112 / 369</span>
											</p>
										</div>
										<div className="ltr:ml-2 rtl:mr-2 min-w-fit">
											<div className="avatar bg-white/20 text-white ring-transparent p-3"><i
												className="ri-codepen-line text-2xl leading-none"></i></div>
										</div>
										<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}dashboards/projects`} className="absolute h-full w-full top-0 left-0"></Link>
									</div>
									<div className="flex justify-between items-center">
										<div className="flex -space-x-2 rtl:space-x-reverse">
											<img className="inline-block avatar avatar-xs rounded-full ring-0" src= {ALLImages('jpg64')}
												alt="Image Description"/>
											<img className="inline-block avatar avatar-xs rounded-full ring-0" src= {ALLImages('jpg60')}
												alt="Image Description"/>
											<img className="inline-block avatar avatar-xs rounded-full ring-0" src= {ALLImages('jpg62')}
												alt="Image Description"/>
											<img className="inline-block avatar avatar-xs rounded-full ring-0" src= {ALLImages('jpg63')}
												alt="Image Description"/>
											<span
												className="inline-flex items-center justify-center avatar avatar-xs rounded-full bg-white/20 border-2 border-white/20 ring-0">
												<span className="font-medium text-white leading-none">9+</span>
											</span>
										</div>
										<div className="ltr:ml-1 rtl:mr-1 min-w-fit">
											<Link to="#" className="ltr:mr-2 rtl:ml-2 opacity-60 text-sm text-white"><i
												className="ri-attachment-2 ltr:mr-1 rtl:ml-1 text-sm "></i>3</Link>
											<Link to="#" className="opacity-60 text-sm text-white"><i
												className="ri-chat-3-line ltr:mr-1 rtl:ml-1 text-sm"></i>29</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="grid grid-cols-12 gap-x-6">
				<div className="xxl:col-span-5 col-span-12 ">
					<div className="box">
						<div className="box-header flex">
							<h5 className="box-title my-auto">On Going Projects</h5>
							<button aria-label="button" type="button" className="ti-btn ti-btn-soft-primary ltr:mr-2 rtl:ml-2 py-1 m-0">View All</button>
						</div>
						<div className="box-body p-0">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col" className="text-center !p-[0.75rem]">Member</th>
											<th scope="col" className="!p-[0.75rem]">Role</th>
											<th scope="col" className="!p-[0.75rem]">Hours</th>
											<th scope="col" className="!p-[0.75rem]">Tasks</th>
											<th scope="col" className="!p-[0.75rem]">Status</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="leading-none !text-gray-800 dark:!text-white !p-[0.75rem]">
												<div className="flex">
													<div className="ltr:mr-3 rtl:ml-3">
														<span className="avatar avatar-sm"><img src= {ALLImages('jpg58')} alt="img" className="rounded-full"/></span>
													</div>
													<div className="flex-1">
														<h6 className="font-semibold text-sm">Richard Dom</h6>
														<span className="text-xs text-gray-500 dark:text-white/70">richarddom1116@demo.com</span>
													</div>
												</div>
											</td>
											<td className="!p-[0.75rem]">Team Leader</td>
											<td className="!p-[0.75rem]">31h<span className="ltr:ml-2 rtl:mr-2 text-gray-500 dark:text-white/70 opacity-50">/ 36h</span></td>
											<td className="!p-[0.75rem]">
												<span className="text-sm font-semibold">143</span>
											</td>
											<td className="!p-[0.75rem] text-sm"><span className="badge leading-none bg-success/10 text-success rounded-sm py-1">Online</span></td>
										</tr>
										<tr>
											<td className="leading-none !text-gray-800 dark:!text-white !p-[0.75rem]">
												<div className="flex">
													<div className="ltr:mr-3 rtl:ml-3">
														<span className="avatar avatar-sm"><img src= {ALLImages('jpg77')} alt="img" className="rounded-full"/></span>
													</div>
													<div className="flex-1">
														<h6 className="font-semibold text-sm">Jennifer Tab</h6>
														<span className="text-xs text-gray-500 dark:text-white/70">jenny258@demo.com</span>
													</div>
												</div>
											</td>
											<td className="!p-[0.75rem]">Project Manager</td>
											<td className="!p-[0.75rem]">11h<span className="ltr:ml-2 rtl:mr-2 text-gray-500 dark:text-white/70 opacity-50">/ 20h</span></td>
											<td className="!p-[0.75rem]">
												<span className="text-sm font-semibold">186</span>
											</td>
											<td className="!p-[0.75rem] text-sm"><span className="badge leading-none bg-success/10 text-success rounded-sm py-1">Online</span></td>
										</tr>
										<tr>
											<td className="leading-none !text-gray-800 dark:!text-white !p-[0.75rem]">
												<div className="flex">
													<div className="ltr:mr-3 rtl:ml-3">
														<span className="avatar avatar-sm"><img src= {ALLImages('jpg59')} alt="img" className="rounded-full"/></span>
													</div>
													<div className="flex-1">
														<h6 className="font-semibold text-sm">Nikki Jey</h6>
														<span className="text-xs text-gray-500 dark:text-white/70">nikkiJ141@demo.com</span>
													</div>
												</div>
											</td>
											<td className="!p-[0.75rem]">UI Developer</td>
											<td className="!p-[0.75rem]">20h<span className="ltr:ml-2 rtl:mr-2 text-gray-500 dark:text-white/70 opacity-50">/ 22h</span></td>
											<td className="!p-[0.75rem]">
												<span className="text-sm font-semibold">652</span>
											</td>
											<td className="!p-[0.75rem] text-sm"><span className="badge leading-none bg-gray-200 text-gray-500 rounded-sm py-1">Offline</span></td>
										</tr>
										<tr>
											<td className="leading-none !text-gray-800 dark:!text-white !p-[0.75rem]">
												<div className="flex">
													<div className="ltr:mr-3 rtl:ml-3">
														<span className="avatar avatar-sm"><img src= {ALLImages('jpg77')} alt="img" className="rounded-full"/></span>
													</div>
													<div className="flex-1">
														<h6 className="font-semibold text-sm">Arifa Zed</h6>
														<span className="text-xs text-gray-500 dark:text-white/70">arifaZ@demo.com</span>
													</div>
												</div>
											</td>
											<td className="!p-[0.75rem]">Web Developer</td>
											<td className="!p-[0.75rem]">83h<span className="ltr:ml-2 rtl:mr-2 text-gray-500 dark:text-white/70 opacity-50">/ 83h</span></td>
											<td className="!p-[0.75rem]">
												<span className="text-sm font-semibold">752</span>
											</td>
											<td className="!p-[0.75rem] text-sm"><span className="badge leading-none bg-success/10 text-success rounded-sm py-1">Online</span></td>
										</tr>
										<tr>
											<td className="leading-none !text-gray-800 dark:!text-white !p-[0.75rem]">
												<div className="flex">
													<div className="ltr:mr-3 rtl:ml-3">
														<span className="avatar avatar-sm"><img src= {ALLImages('jpg60')} alt="img" className="rounded-full"/></span>
													</div>
													<div className="flex-1">
														<h6 className="font-semibold text-sm">Xiong Yu</h6>
														<span className="text-xs text-gray-500 dark:text-white/70">xingzing444@demo.com</span>
													</div>
												</div>
											</td>
											<td className="!p-[0.75rem]">Team Member</td>
											<td className="!p-[0.75rem]">51h<span className="ltr:ml-2 rtl:mr-2 text-gray-500 dark:text-white/70 opacity-50">/ 62h</span></td>
											<td className="!p-[0.75rem]">
												<span className="text-sm font-semibold">268</span>
											</td>
											<td className="!p-[0.75rem] text-sm"><span className="badge leading-none bg-gray-200 text-gray-500 rounded-sm py-1">Offline</span></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-4 col-span-12">
					<div className="box">
						<div className="box-header justify-between flex">
							<div className="box-title my-auto">
                          Upcoming Events
							</div>
							<div>
								<button aria-label="button" type="button" className="ti-btn ti-btn-soft-primary ltr:mr-2 rtl:ml-2 py-1 m-0">View All</button>
							</div>
						</div>
						<div className="box-body">
							<div className="overflow-auto">
								<nav className="flex space-x-1 rtl:space-x-reverse justify-between mb-6" aria-label="Tabs" role="tablist">
									<button type="button" className="hs-tab-active:text-white hs-tab-active:bg-primary dark:hs-tab-active:bg-primary dark:hs-tab-active:text-white p-2 sm:p-3 w-full text-sm leading-none font-medium text-center bg-gray-100 text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:text-white/70 dark:hover:text-gray-300 active" id="mon-item-1" data-hs-tab="#mon-1" aria-controls="mon-1" role="tab">
										<span className="block mb-1">09</span>
										<span className="block mb-0 opacity-70 text-xs">Mon</span>
									</button>
									<button type="button" className="hs-tab-active:text-white hs-tab-active:bg-primary dark:hs-tab-active:bg-primary dark:hs-tab-active:text-white p-2 sm:p-3 w-full text-sm leading-none font-medium text-center bg-gray-100 text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:text-white/70 dark:hover:text-gray-300" id="tue-item-2" data-hs-tab="#tue-2" aria-controls="tue-2" role="tab">
										<span className="block mb-1">10</span>
										<span className="block mb-0 opacity-70 text-xs">Tue</span>
									</button>
									<button type="button" className="hs-tab-active:text-white hs-tab-active:bg-primary dark:hs-tab-active:bg-primary dark:hs-tab-active:text-white p-2 sm:p-3 w-full text-sm leading-none font-medium text-center bg-gray-100 text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:text-white/70 dark:hover:text-gray-300" id="wed-item-2" data-hs-tab="#wed-2" aria-controls="wed-2" role="tab">
										<span className="block mb-1">11</span>
										<span className="block mb-0 opacity-70 text-xs">Wed</span>
									</button>
									<button type="button" className="hs-tab-active:text-white hs-tab-active:bg-primary dark:hs-tab-active:bg-primary dark:hs-tab-active:text-white p-2 sm:p-3 w-full text-sm leading-none font-medium text-center bg-gray-100 text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:text-white/70 dark:hover:text-gray-300" id="thu-item-2" data-hs-tab="#thu-2" aria-controls="thu-2" role="tab">
										<span className="block mb-1">12</span>
										<span className="block mb-0 opacity-70 text-xs">Thu</span>
									</button>
									<button type="button" className="hs-tab-active:text-white hs-tab-active:bg-primary dark:hs-tab-active:bg-primary dark:hs-tab-active:text-white p-2 sm:p-3 w-full text-sm leading-none font-medium text-center bg-gray-100 text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:text-white/70 dark:hover:text-gray-300" id="fri-item-2" data-hs-tab="#fri-2" aria-controls="fri-2" role="tab">
										<span className="block mb-1">13</span>
										<span className="block mb-0 opacity-70 text-xs">Fri</span>
									</button>
									<button type="button" className="hidden sm:block hs-tab-active:text-white hs-tab-active:bg-primary dark:hs-tab-active:bg-primary dark:hs-tab-active:text-white p-2 sm:p-3 w-full text-sm leading-none font-medium text-center bg-gray-100 text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:text-white/70 dark:hover:text-gray-300" id="sat-item-2" data-hs-tab="#sat-2" aria-controls="sat-2" role="tab">
										<span className="block mb-1">14</span>
										<span className="block mb-0 opacity-70 text-xs">Sat</span>
									</button>
									<button type="button" className="hidden sm:block hs-tab-active:text-white hs-tab-active:bg-primary dark:hs-tab-active:bg-primary dark:hs-tab-active:text-white p-2 sm:p-3 w-full text-sm leading-none font-medium text-center bg-gray-100 text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:text-white/70 dark:hover:text-gray-300" id="sun-item-2" data-hs-tab="#sun-2" aria-controls="sun-2" role="tab">
										<span className="block mb-1">15</span>
										<span className="block mb-0 opacity-70 text-xs">Sun</span>
									</button>
								</nav>
								<div className="pt-2">
									<div id="mon-1" className="" role="tabpanel" aria-labelledby="mon-item-1">
										<ul className="list-unstyled mb-0 upcoming-events-list">
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">Meeting with client</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">Video Conference</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>9:00am - 10:00am</span>
													</div>
												</div>
											</li>
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">Lunch with team members</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">Dolores Ait Labore Sit</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>12:00pm - 12:45am</span>
													</div>
												</div>
											</li>
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">General board meeting</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">Golden PArk</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>4:00pm - 5:30pm</span>
													</div>
												</div>
											</li>
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">Create New Registration Page</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">2UA Project</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>5:00pm - 5:45pm</span>
													</div>
												</div>
											</li>
										</ul>
									</div>
									<div id="tue-2" className="hidden" role="tabpanel" aria-labelledby="tue-item-2">
										<ul className="list-unstyled mb-0 upcoming-events-list">
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">Meeting with client</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">Video Conference</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>9:00am - 10:00am</span>
													</div>
												</div>
											</li>
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">Lunch with team members</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">Dolores Ait Labore Sit</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>12:00pm - 12:45am</span>
													</div>
												</div>
											</li>
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">General board meeting</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">Golden PArk</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>4:00pm - 5:30pm</span>
													</div>
												</div>
											</li>
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">Create New Registration Page</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">2UA Project</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>5:00pm - 5:45pm</span>
													</div>
												</div>
											</li>
										</ul>
									</div>
									<div id="wed-2" className="hidden" role="tabpanel" aria-labelledby="wed-item-2">
										<ul className="list-unstyled mb-0 upcoming-events-list">
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">Meeting with client</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">Video Conference</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>9:00am - 10:00am</span>
													</div>
												</div>
											</li>
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">Lunch with team members</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">Dolores Ait Labore Sit</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>12:00pm - 12:45am</span>
													</div>
												</div>
											</li>
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">General board meeting</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">Golden PArk</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>4:00pm - 5:30pm</span>
													</div>
												</div>
											</li>
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">Create New Registration Page</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">2UA Project</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>5:00pm - 5:45pm</span>
													</div>
												</div>
											</li>
										</ul>
									</div>
									<div id="thu-2" className="hidden" role="tabpanel" aria-labelledby="thu-item-2">
										<ul className="list-unstyled mb-0 upcoming-events-list">
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">Meeting with client</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">Video Conference</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>9:00am - 10:00am</span>
													</div>
												</div>
											</li>
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">Lunch with team members</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">Dolores Ait Labore Sit</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>12:00pm - 12:45am</span>
													</div>
												</div>
											</li>
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">General board meeting</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">Golden PArk</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>4:00pm - 5:30pm</span>
													</div>
												</div>
											</li>
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">Create New Registration Page</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">2UA Project</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>5:00pm - 5:45pm</span>
													</div>
												</div>
											</li>
										</ul>
									</div>
									<div id="fri-2" className="hidden" role="tabpanel" aria-labelledby="fri-item-2">
										<ul className="list-unstyled mb-0 upcoming-events-list">
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">Meeting with client</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">Video Conference</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>9:00am - 10:00am</span>
													</div>
												</div>
											</li>
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">Lunch with team members</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">Dolores Ait Labore Sit</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>12:00pm - 12:45am</span>
													</div>
												</div>
											</li>
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">General board meeting</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">Golden PArk</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>4:00pm - 5:30pm</span>
													</div>
												</div>
											</li>
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">Create New Registration Page</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">2UA Project</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>5:00pm - 5:45pm</span>
													</div>
												</div>
											</li>
										</ul>
									</div>
									<div id="sat-2" className="hidden" role="tabpanel" aria-labelledby="sat-item-2">
										<ul className="list-unstyled mb-0 upcoming-events-list">
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">Meeting with client</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">Video Conference</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>9:00am - 10:00am</span>
													</div>
												</div>
											</li>
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">Lunch with team members</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">Dolores Ait Labore Sit</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>12:00pm - 12:45am</span>
													</div>
												</div>
											</li>
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">General board meeting</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">Golden PArk</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>4:00pm - 5:30pm</span>
													</div>
												</div>
											</li>
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">Create New Registration Page</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">2UA Project</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>5:00pm - 5:45pm</span>
													</div>
												</div>
											</li>
										</ul>
									</div>
									<div id="sun-2" className="hidden" role="tabpanel" aria-labelledby="sun-item-2">
										<ul className="list-unstyled mb-0 upcoming-events-list">
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">Meeting with client</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">Video Conference</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>9:00am - 10:00am</span>
													</div>
												</div>
											</li>
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">Lunch with team members</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">Dolores Ait Labore Sit</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>12:00pm - 12:45am</span>
													</div>
												</div>
											</li>
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">General board meeting</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">Golden PArk</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>4:00pm - 5:30pm</span>
													</div>
												</div>
											</li>
											<li className="ti-list-group border-0 p-0 w-full">
												<div className="sm:flex justify-between w-full">
													<div className="flex-auto">
														<p className="mb-0 text-sm">Create New Registration Page</p>
														<p className="mb-0 text-gray-500 dark:text-white/70">2UA Project</p>
													</div>
													<div>
														<span className="text-gray-500 dark:text-white/70"><i className="ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>5:00pm - 5:45pm</span>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
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
								<li className="ti-list-group mb-5 border-0 p-0 w-full">
									<div className="flex w-full">
										<div className="ltr:mr-3 rtl:ml-3">
											<div className="flex">
												<input type="checkbox" className="ti-form-checkbox mt-0.5" id="hs-default-checkbox"/>
											</div>
										</div>
										<div className="flex-1">
											<div className="flex items-center justify-between mb-1">
												<h5 className="mb-1 text-sm font-semibold text-gray-800 dark:text-white">Designing a landing page</h5>
												<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
													<button type="button" aria-label="button" className="shadow-none hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-0 bg-transparent border-0 text-gray-500 dark:bg-transparent">
														<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
													<div className="hs-dropdown-menu ti-dropdown-menu hidden" >
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
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg62')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg63')} alt="Image Description"/>
												</div>
												<span className="text-gray-500 dark:text-white/70 flex text-xs"><i className="ri-time-line ltr:mr-1 rtl:ml-1 my-auto "></i>10-04-23</span>
											</div>
										</div>
									</div>
								</li>
								<li className="ti-list-group mb-5 border-0 p-0 w-full">
									<div className="flex w-full">
										<div className="ltr:mr-3 rtl:ml-3">
											<div className="flex">
												<input type="checkbox" className="ti-form-checkbox mt-0.5" id="hs-default-checkbox2"/>
											</div>
										</div>
										<div className="flex-1">
											<div className="flex items-center justify-between mb-1">
												<h5 className="mb-1 text-sm font-semibold text-gray-800 dark:text-white">Fixing Responsive Issues</h5>
												<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
													<button type="button" aria-label="button" className="shadow-none hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-0 bg-transparent border-0 text-gray-500 dark:bg-transparent">
														<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
													<div className="hs-dropdown-menu ti-dropdown-menu hidden" >
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
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg62')} alt="Image Description"/>
													<span className="inline-flex items-center justify-center avatar w-6 h-6  rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
														<span className="font-medium text-gray-500 leading-none dark:text-white/70">9+</span>
													</span>
												</div>
												<span className="text-gray-500 dark:text-white/70 flex text-xs"><i className="ri-time-line ltr:mr-1 rtl:ml-1 my-auto "></i>10-04-23</span>
											</div>
										</div>
									</div>
								</li>
								<li className="ti-list-group mb-5 border-0 p-0 w-full">
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
													<button type="button" aria-label="button" className="shadow-none hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-0 bg-transparent border-0 text-gray-500 dark:bg-transparent">
														<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
													<div className="hs-dropdown-menu ti-dropdown-menu hidden" >
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
												</div>
												<span className="text-gray-500 dark:text-white/70 flex text-xs"><i className="ri-time-line ltr:mr-1 rtl:ml-1 my-auto "></i>10-04-23</span>
											</div>
										</div>
									</div>
								</li>
								<li className="ti-list-group mb-5 border-0 p-0 w-full">
									<div className="flex w-full">
										<div className="ltr:mr-3 rtl:ml-3">
											<div className="flex">
												<input type="checkbox" className="ti-form-checkbox mt-0.5" id="hs-default-checkbox4"/>
											</div>
										</div>
										<div className="flex-1">
											<div className="flex items-center justify-between mb-1">
												<h5 className="mb-1 text-sm font-semibold text-gray-800 dark:text-white">Fixing Javascript Issues</h5>
												<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
													<button type="button" aria-label="button" className="shadow-none hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-0 bg-transparent border-0 text-gray-500 dark:bg-transparent">
														<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
													<div className="hs-dropdown-menu ti-dropdown-menu hidden" >
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
													<div className="hs-dropdown-menu ti-dropdown-menu hidden" >
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



			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Project Summary</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                      View All <i className="ti ti-chevron-down"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu">
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
											<th scope="col" className="dark:text-white/80">Project Title</th>
											<th scope="col" className="dark:text-white/80">Assigned Team</th>
											<th scope="col" className="dark:text-white/80">Tasks</th>
											<th scope="col" className="dark:text-white/80">Progress</th>
											<th scope="col" className="dark:text-white/80">Status</th>
											<th scope="col" className="dark:text-white/80">Due Date</th>
											<th scope="col" className="dark:text-white/80">Action</th>
										</tr>
									</thead>
									<tbody className="">
										<tr className="">
											<td>1</td>
											<td>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">Home Page</span>
											</td>
											<td>
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg62')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg63')} alt="Image Description"/>
												</div>
											</td>
											<td>110<span className="ltr:ml-1 rtl:mr-1 text-gray-500 dark:text-white/70 opacity-70">/ 180</span></td>
											<td>
												<div className="flex items-center">
													<div className="w-2/3">
														<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
															<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: '15%'}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													<div className="ltr:ml-2 rtl:mr-2">25%</div>
												</div>
											</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">In Progress</span>
											</td>
											<td>14-04-2023</td>
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
											<td>2</td>
											<td>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">Landing Design</span>
											</td>
											<td>
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg62')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg63')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg75')} alt="Image Description"/>
												</div>
											</td>
											<td>95<span className="ltr:ml-1 rtl:mr-1 text-gray-500 dark:text-white/70 opacity-70">/ 100</span></td>
											<td>
												<div className="flex items-center">
													<div className="w-2/3">
														<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
															<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													<div className="ltr:ml-2 rtl:mr-2">90%</div>
												</div>
											</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">In Progress</span>
											</td>
											<td>20-04-2023</td>
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
											<td>3</td>
											<td>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">New Template Design</span>
											</td>
											<td>
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg72')} alt="Image Description"/>
												</div>
											</td>
											<td>0<span className="ltr:ml-1 rtl:mr-1 text-gray-500 dark:text-white/70 opacity-70">/ 50</span></td>
											<td>
												<div className="flex items-center">
													<div className="w-2/3">
														<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
															<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "0%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													<div className="ltr:ml-2 rtl:mr-2">0%</div>
												</div>
											</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-warning/10 text-warning/80">Pending</span>
											</td>
											<td>29-04-2023</td>
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
											<td>4</td>
											<td>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">HR Management Template Design</span>
											</td>
											<td>
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg70')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg72')} alt="Image Description"/>
													<span className="inline-flex items-center justify-center avatar w-6 h-6  rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
														<span className="font-medium text-gray-500 leading-none dark:text-white/70">2+</span>
													</span>
												</div>
											</td>
											<td>30<span className="ltr:ml-1 rtl:mr-1 text-gray-500 dark:text-white/70 opacity-70">/ 70</span></td>
											<td>
												<div className="flex items-center">
													<div className="w-2/3">
														<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
															<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													<div className="ltr:ml-2 rtl:mr-2">40%</div>
												</div>
											</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">In Progress</span>
											</td>
											<td>18-04-2023</td>
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
											<td>5</td>
											<td>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">Designing New Template</span>
											</td>
											<td>
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg70')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg72')} alt="Image Description"/>
													<span className="inline-flex items-center justify-center avatar w-6 h-6  rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
														<span className="font-medium text-gray-500 leading-none dark:text-white/70">3+</span>
													</span>
												</div>
											</td>
											<td>120<span className="ltr:ml-1 rtl:mr-1 text-gray-500 dark:text-white/70 opacity-70">/ 120</span></td>
											<td>
												<div className="flex items-center">
													<div className="w-2/3">
														<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
															<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													<div className="ltr:ml-2 rtl:mr-2">100%</div>
												</div>
											</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-success/10 text-success/80">Completed</span>
											</td>
											<td>02-04-2023</td>
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
											<td>6</td>
											<td>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">Documentation Project</span>
											</td>
											<td>
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg70')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg72')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg77')} alt="Image Description"/>
												</div>
											</td>
											<td>40<span className="ltr:ml-1 rtl:mr-1 text-gray-500 dark:text-white/70 opacity-70">/ 80</span></td>
											<td>
												<div className="flex items-center">
													<div className="w-2/3">
														<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
															<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													<div className="ltr:ml-2 rtl:mr-2">50%</div>
												</div>
											</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">In Progress</span>
											</td>
											<td>05-04-2023</td>
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
											<td>7</td>
											<td>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">Developing Backend</span>
											</td>
											<td>
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg70')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg77')} alt="Image Description"/>
													<span className="inline-flex items-center justify-center avatar w-6 h-6  rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
														<span className="font-medium text-gray-500 leading-none dark:text-white/70">3+</span>
													</span>
												</div>
											</td>
											<td>50<span className="ltr:ml-1 rtl:mr-1 text-gray-500 dark:text-white/70 opacity-70">/ 60</span></td>
											<td>
												<div className="flex items-center">
													<div className="w-2/3">
														<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
															<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													<div className="ltr:ml-2 rtl:mr-2">80%</div>
												</div>
											</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">In Progress</span>
											</td>
											<td>08-04-2023</td>
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
											<td>8</td>
											<td>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">Multipurpose Dashboard Template</span>
											</td>
											<td>
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg70')} alt="Image Description"/>
												</div>
											</td>
											<td>0<span className="ltr:ml-1 rtl:mr-1 text-gray-500 dark:text-white/70 opacity-70">/ 60</span></td>
											<td>
												<div className="flex items-center">
													<div className="w-2/3">
														<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
															<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "0%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													<div className="ltr:ml-2 rtl:mr-2">0%</div>
												</div>
											</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-warning/10 text-warning/80">Pending</span>
											</td>
											<td>30-04-2023</td>
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
											<td>9</td>
											<td>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">Design New Dashboard Template</span>
											</td>
											<td>
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg70')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg72')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg59')} alt="Image Description"/>
												</div>
											</td>
											<td>100<span className="ltr:ml-1 rtl:mr-1 text-gray-500 dark:text-white/70 opacity-70">/ 100</span></td>
											<td>
												<div className="flex items-center">
													<div className="w-2/3">
														<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
															<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													<div className="ltr:ml-2 rtl:mr-2">100%</div>
												</div>
											</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-success/10 text-success/80">Completed</span>
											</td>
											<td>03-04-2023</td>
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
											<td>10</td>
											<td>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">Server Side Validation</span>
											</td>
											<td>
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg70')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg72')} alt="Image Description"/>
													<span className="inline-flex items-center justify-center avatar w-6 h-6  rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
														<span className="font-medium text-gray-500 leading-none dark:text-white/70">2+</span>
													</span>
												</div>
											</td>
											<td>80<span className="ltr:ml-1 rtl:mr-1 text-gray-500 dark:text-white/70 opacity-70">/ 160</span></td>
											<td>
												<div className="flex items-center">
													<div className="w-2/3">
														<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
															<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													<div className="ltr:ml-2 rtl:mr-2">50%</div>
												</div>
											</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">In Progress</span>
											</td>
											<td>10-04-2023</td>
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
							<div className="flex items-center">
								<div className="">
                        showing 5 Entries <i className="ri-arrow-right-line ml-2 font-semibold"></i>
								</div>
								<div className="ltr:ml-auto rtl:mr-auto">
									<nav className="flex justify-center items-center space-x-2 rtl:space-x-reverse">
										<Link className="text-gray-500 hover:text-primary e py-1 px-2 leading-none inline-flex Linktems-center gap-2 rounded-sm" to="#">
											<span aria-hidden="true">Prev</span>
											<span className="sr-only">Previous</span>
										</Link>
										<Link className="bg-primary text-white py-1 px-2 leading-none inline-flex items-center text-sm font-medium rounded-sm" to="#" aria-current="page">1</Link>
										<Link className="text-gray-500 hover:text-primary e py-1 px-2 leading-none inline-flex items-center tLinkxt-sm font-medium rounded-sm" to="#">2</Link>
										<Link className="text-gray-500 hover:text-primary e py-1 px-2 leading-none inline-flex items-center tLinkxt-sm font-medium rounded-sm" to="#">3</Link>
										<Link className="text-gray-500 hover:text-primary e py-1 px-2 leading-none inline-flex Linktems-center gap-2 rounded-sm" to="#">
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
export default Projects;
