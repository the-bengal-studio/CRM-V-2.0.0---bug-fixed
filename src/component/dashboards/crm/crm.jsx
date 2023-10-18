import React from "react";
import { Link } from "react-router-dom";
import { LeadsBySource, Revenue } from "../../../common/chartData";
import ALLImages from "../../../common/imagesData";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Crm = () => {
	return (
		<div>
			<PageHeader currentpage="CRM Dashboard" activepage="Home" mainpage="CRM Dashboard" />

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 xxl:col-span-9">
					<div className="grid grid-cols-12 gap-x-5">
						<div className="col-span-12 lg:col-span-4">
							<div className="box">
								<div className="box-body space-y-4">
									<div className="flex space-x-4 rtl:space-x-reverse justify-between items-center">
										<div>
											<p className="text-gray-500 dark:text-white/70 text-base mb-2">Total Customers</p>
											<div className="flex items-center">
												<h5 className="text-gray-800 dark:text-white text-2xl font-semibold">1,1125</h5>
												<span className="text-success text-sm ltr:ml-2 rtl:mr-2"><i
													className="ti ti-arrow-up-right"></i>+12.86%</span>
											</div>
										</div>
										<div>
											<span className="avatar rounded-sm bg-primary/20 p-3 text-primary">
												<i className="ti ti-users text-xl leading-none"></i>
											</span>
										</div>
									</div>
									<div className="flex items-center">
										<div className="ti-main-progress  h-2 bg-gray-200 dark:bg-black/20">
											<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width:"50%"}}
												aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<span className="font-semibold text-sm ltr:ml-2 rtl:mr-2">50%</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 lg:col-span-4">
							<div className="box">
								<div className="box-body space-y-4">
									<div className="flex space-x-4 rtl:space-x-reverse justify-between items-center">
										<div>
											<p className="text-gray-500 dark:text-white/70 text-base mb-2">Total Deals</p>
											<div className="flex items-center">
												<h5 className="text-gray-800 dark:text-white text-2xl font-semibold">968</h5>
												<span className="text-success text-sm ltr:ml-2 rtl:mr-2"><i
													className="ti ti-arrow-up-right"></i>+5.46%</span>
											</div>
										</div>
										<div>
											<span className="avatar rounded-sm bg-secondary/20 p-3 text-secondary">
												<i className="ti ti-briefcase  text-xl leading-none"></i>
											</span>
										</div>
									</div>
									<div className="flex items-center">
										<div className="ti-main-progress  h-2 bg-gray-200 dark:bg-black/20">
											<div className="ti-main-progress-bar bg-secondary text-xs text-white text-center" role="progressbar" style={{width:"80%"}}
												aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<span className="font-semibold text-sm ltr:ml-2 rtl:mr-2">80%</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 lg:col-span-4">
							<div className="box">
								<div className="box-body space-y-4">
									<div className="flex space-x-4 rtl:space-x-reverse justify-between items-center">
										<div>
											<p className="text-gray-500 dark:text-white/70 text-base mb-2">Conversion Ratio</p>
											<div className="flex items-center">
												<h5 className="text-gray-800 dark:text-white text-2xl font-semibold">12.08%</h5>
												<span className="text-success text-sm ltr:ml-2 rtl:mr-2"><i
													className="ti ti-arrow-up-right"></i>+3.20%</span>
											</div>
										</div>
										<div>
											<span className="avatar rounded-sm bg-info/20 p-3 text-info">
												<i className="ti ti-wave-square text-xl leading-none"></i>
											</span>
										</div>
									</div>
									<div className="flex items-center">
										<div className="ti-main-progress  h-2 bg-gray-200 dark:bg-black/20">
											<div className="ti-main-progress-bar bg-info text-xs text-white text-center" role="progressbar" style={{width:"65%"}}
												aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<span className="font-semibold text-sm ltr:ml-2 rtl:mr-2">65%</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 lg:col-span-5">
							<div className="box">
								<div className="box-header">
									<div className="flex">
										<h5 className="box-title my-auto">Top Deals</h5>
										<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
											<button type="button" aria-label="button" className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
												<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
											<div className="hs-dropdown-menu ti-dropdown-menu">
												<Link className="ti-dropdown-item" to="#">Download</Link>
												<Link className="ti-dropdown-item" to="#">Import</Link>
												<Link className="ti-dropdown-item" to="#">Export</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="box-body">
									<ul className="flex flex-col">
										<li className="px-0 pt-0 ti-list-group border-0 text-gray-800 dark:text-white">
											<Link to="#" className="flex  justify-between items-center w-full">
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg58')} alt="Image Description"/>
													<div className="flex w-full">
														<div className="block my-auto">
															<p className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                                  Socrates Itumay</p>
															<p className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                                  socratesitumay@gmail.com</p>
														</div>
													</div>
												</div>
												<div className=""><span className="text-sm font-bold">$1,835</span></div>
											</Link>
										</li>
										<li className="px-0 pt-2 ti-list-group border-0 text-gray-800 dark:text-white">
											<Link to="#" className="flex  justify-between items-center w-full">
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg59')} alt="Image Description"/>
													<div className="flex w-full">
														<div className="block my-auto">
															<p className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                                  Json Taylor</p>
															<p className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                                  jsontaylor2416@gmail.com</p>
														</div>
													</div>
												</div>
												<div className=""><span className="text-sm font-bold">$2,415</span></div>
											</Link>
										</li>
										<li className="px-0 pt-2 ti-list-group border-0 text-gray-800 dark:text-white">
											<Link to="#" className="flex  justify-between items-center w-full">
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg60')} alt="Image Description"/>
													<div className="flex w-full">
														<div className="block my-auto">
															<p className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                                  Suzika Stallone</p>
															<p className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                                  suzikastallone3214@gmail.com</p>
														</div>
													</div>
												</div>
												<div className=""><span className="text-sm font-bold">$2,341</span></div>
											</Link>
										</li>
										<li className="px-0 pt-2 ti-list-group border-0 text-gray-800 dark:text-white">
											<Link to="#" className="flex  justify-between items-center w-full">
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg61')} alt="Image Description"/>
													<div className="flex w-full">
														<div className="block my-auto">
															<p className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                                  Angelina Hose</p>
															<p className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                                  AngelinaHose3214@gmail.com</p>
														</div>
													</div>
												</div>
												<div className=""><span className="text-sm font-bold">2,624</span></div>
											</Link>
										</li>
										<li className="px-0 pt-2 ti-list-group border-0 text-gray-800 dark:text-white">
											<Link to="#" className="flex  justify-between items-center w-full">
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg62')} alt="Image Description"/>
													<div className="flex w-full">
														<div className="block my-auto">
															<p className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                                  Selena Deoyl</p>
															<p className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                                  selenadeoyl114@gmail.com</p>
														</div>
													</div>
												</div>
												<div className=""><span className="text-sm font-bold">$1,035</span></div>
											</Link>
										</li>
										<li className="px-0 pt-2 pb-0 ti-list-group border-0 text-gray-800 dark:text-white">
											<Link to="#" className="flex  justify-between items-center w-full">
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg66')} alt="Image Description"/>
													<div className="flex w-full">
														<div className="block my-auto">
															<p className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                                  Charlie Davieson</p>
															<p className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                                  charliedavieson@gmail.com</p>
														</div>
													</div>
												</div>
												<div className=""><span className="text-sm font-bold">$1,835</span></div>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-span-12 lg:col-span-7">
							<div className="box">
								<div className="box-header">
									<div className="flex">
										<h5 className="box-title my-auto">Revenue</h5>
										<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
											<button type="button" className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                          This Year <i className="ti ti-chevron-down"></i></button>
											<div className="hs-dropdown-menu ti-dropdown-menu hidden">
												<Link className="ti-dropdown-item" to="#">This Week</Link>
												<Link className="ti-dropdown-item" to="#">This Month</Link>
												<Link className="ti-dropdown-item" to="#">This Year</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="box-body">
									<ul className="flex flex-wrap space-x-6 rtl:space-x-reverse">
										<li>
											<p className="inline-flex items-center">
												<span className="block w-3 h-3 rounded-full ltr:mr-2 rtl:ml-2 border-4 border-primary pointer-events-none"></span>
												<span className="flex items-center">
													<span className="text-2xl text-gray-800 dark:text-white font-medium ltr:mr-2 rtl:ml-2 pointer-events-none">$12.36K</span>
													<span className="text-sm text-gray-400 dark:text-white/80">/ Current Period</span>
												</span>
											</p>
										</li>
										<li>
											<p className="inline-flex items-center">
												<span className="block w-3 h-3 rounded-full ltr:mr-2 rtl:ml-2 border-4 border-gray-200 pointer-events-none"></span>
												<span className="flex items-center">
													<span className="text-2xl text-gray-800 dark:text-white font-medium ltr:mr-2 rtl:ml-2 pointer-events-none">$8.25K</span>
													<span className="text-sm text-gray-400 dark:text-white/80">/ Previous Period</span>
												</span>
											</p>
										</li>
									</ul>
									<Revenue/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-3">
					<div className="box">
						<div className="box-header flex justify-between">
							<div className="box-title my-auto">
                 Recent Activities
							</div>
							<div className=" block ltr:ml-auto rtl:mr-auto my-auto">
								<button type="button"
									className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                    View All</button>
							</div>
						</div>
						<div className="box-body">
							<ul className="list-unstyled mb-0 crm-recent-activity">
								<li className="crm-recent-activity-content">
									<div className="flex items-top">
										<div className="ltr:mr-3 rtl:ml-3">
											<span className="avatar w-5 h-5 text-primary rounded-full inline-flex">
												<i className="ri-checkbox-blank-circle-fill leading-none text-xs opacity-50 mx-auto my-auto"></i>
											</span>
										</div>
										<div className="crm-timeline-content">
											<span className="font-semibold">Update of calendar events &amp;</span><span><Link to="#" className="text-primary font-semibold"> Added new events in next week.</Link></span>
										</div>
										<div className="flex-auto text-end">
											<span className="block text-gray-500 dark:text-white/70 text-xs opacity-70">4:45PM</span>
										</div>
									</div>
								</li>
								<li className="crm-recent-activity-content">
									<div className="flex items-top">
										<div className="ltr:mr-3 rtl:ml-3">
											<span className="avatar w-5 h-5 text-secondary rounded-full inline-flex">
												<i className="ri-checkbox-blank-circle-fill leading-none text-xs opacity-50 mx-auto my-auto"></i>
											</span>
										</div>
										<div className="crm-timeline-content">
											<span>New theme for <span className="font-semibold">Spruko Website</span> completed</span>
											<span className="block fs-12 text-muted">Lorem ipsum, dolor sit amet.</span>
										</div>
										<div className="flex-auto text-end">
											<span className="block text-gray-500 dark:text-white/70 text-xs opacity-70">3 hrs</span>
										</div>
									</div>
								</li>
								<li className="crm-recent-activity-content">
									<div className="flex items-top">
										<div className="ltr:mr-3 rtl:ml-3">
											<span className="avatar w-5 h-5 text-success rounded-full inline-flex">
												<i className="ri-checkbox-blank-circle-fill leading-none text-xs opacity-50 mx-auto my-auto"></i>
											</span>
										</div>
										<div className="crm-timeline-content">
											<span>Created a <span className="text-success font-semibold">New Task</span> today <span className="avatar w-5 h-5 bg-purple-transparent rounded-full inline-flex ms-1"><i className="ri-add-fill text-purple fs-12"></i></span></span>
										</div>
										<div className="flex-auto text-end">
											<span className="block text-gray-500 dark:text-white/70 text-xs opacity-70">22 hrs</span>
										</div>
									</div>
								</li>
								<li className="crm-recent-activity-content">
									<div className="flex items-top">
										<div className="ltr:mr-3 rtl:ml-3">
											<span className="avatar w-5 h-5 text-danger rounded-full inline-flex">
												<i className="ri-checkbox-blank-circle-fill leading-none text-xs opacity-50 mx-auto my-auto"></i>
											</span>
										</div>
										<div className="crm-timeline-content">
											<span>New member <span className="badge bg-primary/20 text-primary p-1 rounded-sm">@andreas gurrero</span> added today to AI Summit.</span>
										</div>
										<div className="flex-auto text-end">
											<span className="block text-gray-500 dark:text-white/70 text-xs opacity-70">Today</span>
										</div>
									</div>
								</li>
								<li className="crm-recent-activity-content">
									<div className="flex items-top">
										<div className="ltr:mr-3 rtl:ml-3">
											<span className="avatar w-5 h-5 text-warning rounded-full inline-flex">
												<i className="ri-checkbox-blank-circle-fill leading-none text-xs opacity-50 mx-auto my-auto"></i>
											</span>
										</div>
										<div className="crm-timeline-content">
											<span>32 New people joined summit.</span>
										</div>
										<div className="flex-auto text-end">
											<span className="block text-gray-500 dark:text-white/70 text-xs opacity-70">22 hrs</span>
										</div>
									</div>
								</li>
								<li className="crm-recent-activity-content">
									<div className="flex items-top">
										<div className="ltr:mr-3 rtl:ml-3">
											<span className="avatar w-5 h-5 text-info rounded-full inline-flex">
												<i className="ri-checkbox-blank-circle-fill leading-none text-xs opacity-50 mx-auto my-auto"></i>
											</span>
										</div>
										<div className="crm-timeline-content">
											<span>Neon Tarly added <span className="text-info font-semibold">Robert Bright</span> to AI summit project.</span>
										</div>
										<div className="flex-auto text-end">
											<span className="block text-gray-500 dark:text-white/70 text-xs opacity-70">12 hrs</span>
										</div>
									</div>
								</li>
								<li className="crm-recent-activity-content">
									<div className="flex items-top">
										<div className="ltr:mr-3 rtl:ml-3">
											<span className="avatar w-5 h-5 text-pink-500 rounded-full inline-flex">
												<i className="ri-checkbox-blank-circle-fill leading-none text-xs opacity-50 mx-auto my-auto"></i>
											</span>
										</div>
										<div className="crm-timeline-content">
											<span>Replied to new support request <i className="ri-checkbox-circle-line text-success fs-16 align-middle"></i></span>
										</div>
										<div className="flex-auto text-end">
											<span className="block text-gray-500 dark:text-white/70 text-xs opacity-70">4 hrs</span>
										</div>
									</div>
								</li>
								<li className="crm-recent-activity-content">
									<div className="flex items-top">
										<div className="ltr:mr-3 rtl:ml-3">
											<span className="avatar w-5 h-5 text-primary rounded-full inline-flex">
												<i className="ri-checkbox-blank-circle-fill leading-none text-xs opacity-50 mx-auto my-auto"></i>
											</span>
										</div>
										<div className="crm-timeline-content">
											<span className="font-semibold">Update of calendar events &amp;</span><span><Link to="#" className="text-primary font-semibold"> Added new events in next week.</Link></span>
										</div>
										<div className="flex-auto text-end">
											<span className="block text-gray-500 dark:text-white/70 text-xs opacity-70">4:45PM</span>
										</div>
									</div>
								</li>
								<li className="crm-recent-activity-content">
									<div className="flex items-top">
										<div className="ltr:mr-3 rtl:ml-3">
											<span className="avatar w-5 h-5 text-secondary rounded-full inline-flex">
												<i className="ri-checkbox-blank-circle-fill leading-none text-xs opacity-50 mx-auto my-auto"></i>
											</span>
										</div>
										<div className="crm-timeline-content">
											<span>New theme for <span className="font-semibold">Spruko Website</span> completed</span>
											<span className="block fs-12 text-muted">Lorem ipsum, dolor sit amet.</span>
										</div>
										<div className="flex-auto text-end">
											<span className="block text-gray-500 dark:text-white/70 text-xs opacity-70">3 hrs</span>
										</div>
									</div>
								</li>
								<li className="crm-recent-activity-content">
									<div className="flex items-top">
										<div className="ltr:mr-3 rtl:ml-3">
											<span className="avatar w-5 h-5 text-success rounded-full inline-flex">
												<i className="ri-checkbox-blank-circle-fill leading-none text-xs opacity-50 mx-auto my-auto"></i>
											</span>
										</div>
										<div className="crm-timeline-content">
											<span>Created a <span className="text-success font-semibold">New Task</span> today <span className="avatar w-5 h-5 bg-purple-transparent rounded-full inline-flex ms-1"><i className="ri-add-fill text-purple fs-12"></i></span></span>
										</div>
										<div className="flex-auto text-end">
											<span className="block text-gray-500 dark:text-white/70 text-xs opacity-70">22 hrs</span>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 md:col-span-6 xxl:col-span-4">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Leads By Source</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                      This Week <i className="ti ti-chevron-down"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu hidden">
										<Link className="ti-dropdown-item" to="#">This Week</Link>
										<Link className="ti-dropdown-item" to="#">This Month</Link>
										<Link className="ti-dropdown-item" to="#">This Year</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body p-0">
							<div className="px-3">
								<LeadsBySource/>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxl:col-span-5">
					<div className="box">
						<div className="box-header flex">
							<h5 className="box-title my-auto">Deals Overview</h5>
							<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
								<button type="button" aria-label="button" className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
									<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
								<div className="hs-dropdown-menu ti-dropdown-menu">
									<Link className="ti-dropdown-item" to="#">Action</Link>
									<Link className="ti-dropdown-item" to="#">Another Action</Link>
									<Link className="ti-dropdown-item" to="#">Something else
                      here</Link>
								</div>
							</div>
						</div>
						<div className="box-body p-0">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col" className="text-center">Deal</th>
											<th scope="col" className="">Amount</th>
											<th scope="col" className="">Probability</th>
											<th scope="col" className="">Status</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="leading-none !text-gray-800 dark:!text-white">
												<div className="flex space-x-3 rtl:space-x-reverse text-start">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg58')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Socrates
                                Itumay</p>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">socratesitumay@gmail.com</span>
													</div>
												</div>
											</td>
											<td className="">$54,900</td>
											<td className="">24%</td>
											<td className=" text-sm"><span className="badge leading-none bg-primary/10 text-primary rounded-sm">Qualified</span></td>
										</tr>
										<tr>
											<td className="leading-none !text-gray-800 dark:!text-white">
												<div className="flex space-x-3 rtl:space-x-reverse text-start">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg59')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Json Taylor</p>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">jsontaylor2416@gmail.com</span>
													</div>
												</div>
											</td>
											<td className="">$16,800</td>
											<td className="">70%</td>
											<td className=" text-sm"><span className="badge leading-none bg-warning/10 text-warning rounded-sm">Review</span></td>
										</tr>
										<tr>
											<td className="leading-none !text-gray-800 dark:!text-white">
												<div className="flex space-x-3 rtl:space-x-reverse text-start">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('png68')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Inferno Tech Et.</p>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">InfernoTech@gmail.com</span>
													</div>
												</div>
											</td>
											<td className="">$12,000</td>
											<td className="">90%</td>
											<td className=" text-sm"><span className="badge leading-none bg-success/10 text-success rounded-sm">Closed Won</span></td>
										</tr>
										<tr>
											<td className="leading-none !text-gray-800 dark:!text-white">
												<div className="flex space-x-3 rtl:space-x-reverse text-start">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg69')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Andrew Garfield</p>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">andrewgarfield@gmail.com</span>
													</div>
												</div>
											</td>
											<td className="">$16,800</td>
											<td className="">70%</td>
											<td className=" text-sm"><span className="badge leading-none bg-danger/10 text-danger rounded-sm">Closed Lost</span></td>
										</tr>
										<tr>
											<td className="leading-none !text-gray-800 dark:!text-white">
												<div className="flex space-x-3 rtl:space-x-reverse text-start">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('png75')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Jack Pvt.Ltd</p>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">JackTech@gmail.com</span>
													</div>
												</div>
											</td>
											<td className="">$12,000</td>
											<td className="">90%</td>
											<td className=" text-sm"><span className="badge leading-none bg-success/10 text-success rounded-sm">Closed Won</span></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-3">
					<div className="box">
						<div className="box-header flex justify-between">
							<div className="box-title my-auto">
                Leads Response
							</div>
							<div className=" block ltr:ml-auto rtl:mr-auto my-auto">
								<button type="button" className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                    View All</button>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="ltr:mr-3 rtl:ml-3">
									<div className="text-primary"><i className="ti ti-clock-hour-4 text-3xl"></i></div>
								</div>
								<div className="flex-1">
									<h5 className="text-xl text-gray-800 dark:text-white font-semibold">3.54</h5>
									<p className="text-sm text-gray-500 dark:text-white/70">Average Lead Response Time</p>
								</div>
							</div>
							<ul className="flex flex-col mt-6">
								<li className="px-0 pt-0 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="flex  justify-between items-center w-full">
										<div className="flex space-x-3 rtl:space-x-reverse w-full">
											<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg58')} alt="Image Description"/>
											<div className="w-full">
												<div className="flex items-center justify-between mb-1 text-sm">
													<p className="mb-0">Helen Beth</p>
													<span>2.7</span>
												</div>
												<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
													<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
									</Link>
								</li>
								<li className="px-0 pt-3 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="flex  justify-between items-center w-full">
										<div className="flex space-x-3 rtl:space-x-reverse w-full">
											<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg68')} alt="Image Description"/>
											<div className="w-full">
												<div className="flex items-center justify-between mb-1 text-sm">
													<p className="mb-0">Bickle Travis</p>
													<span>1.7</span>
												</div>
												<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
													<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
									</Link>
								</li>
								<li className="px-0 pt-3 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="flex  justify-between items-center w-full">
										<div className="flex space-x-3 rtl:space-x-reverse w-full">
											<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg59')} alt="Image Description"/>
											<div className="w-full">
												<div className="flex items-center justify-between mb-1 text-sm">
													<p className="mb-0">Json Taylor</p>
													<span>1.8</span>
												</div>
												<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
													<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
									</Link>
								</li>
								<li className="px-0 pt-3 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="flex  justify-between items-center w-full">
										<div className="flex space-x-3 rtl:space-x-reverse w-full">
											<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg69')} alt="Image Description"/>
											<div className="w-full">
												<div className="flex items-center justify-between mb-1 text-sm">
													<p className="mb-0">Andrew Garfield</p>
													<span>2.5</span>
												</div>
												<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
													<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
									</Link>
								</li>
								<li className="px-0 pt-3 pb-0 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="flex  justify-between items-center w-full">
										<div className="flex space-x-3 rtl:space-x-reverse w-full">
											<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg60')} alt="Image Description"/>
											<div className="w-full">
												<div className="flex items-center justify-between mb-1 text-sm">
													<p className="mb-0">Socrates Itumay</p>
													<span>2.1</span>
												</div>
												<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
													<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "30%"}} aria-valuenow="53" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
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
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Leads Report</h5>
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
											<th scope="col" className="dark:text-white/80">Lead</th>
											<th scope="col" className="dark:text-white/80">Phone Number</th>
											<th scope="col" className="dark:text-white/80">Company Name</th>
											<th scope="col" className="dark:text-white/80">Location</th>
											<th scope="col" className="dark:text-white/80">date</th>
											<th scope="col" className="dark:text-white/80">Status</th>
											<th scope="col" className="dark:text-white/80">Action</th>
										</tr>
									</thead>
									<tbody className="">
										<tr className="">
											<td>1</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse text-start min-w-[200px]">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg58')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Socrates
                                Itumay</p>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">socratesitumay@gmail.com</span>
													</div>
												</div>
											</td>
											<td>+1(555) 354 2345</td>
											<td>Beckle Heth Corp.</td>
											<td>
												<div className="inline-flex items-center">
													<i className="ri-map-pin-fill text-gray-500 dark:text-white/70 text-xs"></i>
													<span className="ltr:ml-1 rtl:mr-1">Germany</span>
												</div>
											</td>
											<td>02-04-2023</td>
											<td><span className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-success/10 text-success/80">Won Lead</span>
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
													<Link to="#" className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
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
												<div className="flex space-x-3 rtl:space-x-reverse text-start min-w-[200px]">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg68')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Luke Cooper</p>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">LukeCooper@gmail.com</span>
													</div>
												</div>
											</td>
											<td>+1(555) 873 8923</td>
											<td>Lackme Info Et.</td>
											<td>
												<div className="inline-flex items-center">
													<i className="ri-map-pin-fill text-gray-500 dark:text-white/70 text-xs"></i>
													<span className="ltr:ml-1 rtl:mr-1">London</span>
												</div>
											</td>
											<td>03-04-2023</td>
											<td><span className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">New Lead</span>
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
													<Link to="#" className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
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
												<div className="flex space-x-3 rtl:space-x-reverse text-start min-w-[200px]">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg70')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Rony Brad</p>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">RonyBrad@gmail.com</span>
													</div>
												</div>
											</td>
											<td>+1(555) 347 0923</td>
											<td>Mevengo Tech Et Sed</td>
											<td>
												<div className="inline-flex items-center">
													<i className="ri-map-pin-fill text-gray-500 dark:text-white/70 text-xs"></i>
													<span className="ltr:ml-1 rtl:mr-1">Usa</span>
												</div>
											</td>
											<td>04-04-2023</td>
											<td><span className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">New Lead</span>
											</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1" role="tooltip" data-popper-placement="top" >
                                View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
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
												<div className="flex space-x-3 rtl:space-x-reverse text-start min-w-[200px]">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg60')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Sophia Khud</p>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">RonyBrad@gmail.com</span>
													</div>
												</div>
											</td>
											<td>+1(555) 674 7824</td>
											<td>Jeveda Group En.</td>
											<td>
												<div className="inline-flex items-center">
													<i className="ri-map-pin-fill text-gray-500 dark:text-white/70 text-xs"></i>
													<span className="ltr:ml-1 rtl:mr-1">Canada</span>
												</div>
											</td>
											<td>05-04-2023</td>
											<td><span className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-danger/10 text-danger/80">Lost Lead</span>
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
													<Link to="#" className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
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
												<div className="flex space-x-3 rtl:space-x-reverse text-start min-w-[200px]">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg59')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Cooper Hard</p>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">CooperHard@gmail.com</span>
													</div>
												</div>
											</td>
											<td>+1(555) 985 2893</td>
											<td>Neveia Exp Sid</td>
											<td>
												<div className="inline-flex items-center">
													<i className="ri-map-pin-fill text-gray-500 dark:text-white/70 text-xs"></i>
													<span className="ltr:ml-1 rtl:mr-1">England</span>
												</div>
											</td>
											<td>06-04-2023</td>
											<td><span className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">New Lead</span>
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
													<Link to="#" className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
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
											<td>6</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse text-start min-w-[200px]">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg61')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Chad Xic</p>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">ChadXic@gmail.com</span>
													</div>
												</div>
											</td>
											<td>+1(555) 238 2342</td>
											<td>Ixin Corp.</td>
											<td>
												<div className="inline-flex items-center">
													<i className="ri-map-pin-fill text-gray-500 dark:text-white/70 text-xs"></i>
													<span className="ltr:ml-1 rtl:mr-1">Australia</span>
												</div>
											</td>
											<td>07-04-2023</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">New
                            Lead</span>
											</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1"
															role="tooltip" data-popper-placement="top"
															>
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
												<div className="flex space-x-3 rtl:space-x-reverse text-start min-w-[200px]">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg71')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Rover Imo</p>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">RoverImo@gmail.com</span>
													</div>
												</div>
											</td>
											<td>+1(555) 972 9883</td>
											<td>Myami Group &amp; Tech.</td>
											<td>
												<div className="inline-flex items-center">
													<i className="ri-map-pin-fill text-gray-500 dark:text-white/70 text-xs"></i>
													<span className="ltr:ml-1 rtl:mr-1">Spain</span>
												</div>
											</td>
											<td>08-04-2023</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-success/10 text-success/80">Won
                            Lead</span>
											</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1"
															role="tooltip" data-popper-placement="top"
															>
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
												<div className="flex space-x-3 rtl:space-x-reverse text-start min-w-[200px]">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg67')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Helen Sha</p>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">HelenSha@gmail.com</span>
													</div>
												</div>
											</td>
											<td>+1(555) 890 5687</td>
											<td>Inferno Xo</td>
											<td>
												<div className="inline-flex items-center">
													<i className="ri-map-pin-fill text-gray-500 dark:text-white/70 text-xs"></i>
													<span className="ltr:ml-1 rtl:mr-1">China</span>
												</div>
											</td>
											<td>09-04-2023</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">New
                            Lead</span>
											</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1"
															role="tooltip" data-popper-placement="top"
															>
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
												<div className="flex space-x-3 rtl:space-x-reverse text-start min-w-[200px]">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg64')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Shakira Neo</p>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">ShakiraNeo@gmail.com</span>
													</div>
												</div>
											</td>
											<td>+1(555) 765 8937</td>
											<td>Ideal IT Sol.</td>
											<td>
												<div className="inline-flex items-center">
													<i className="ri-map-pin-fill text-gray-500 dark:text-white/70 text-xs"></i>
													<span className="ltr:ml-1 rtl:mr-1">Italy</span>
												</div>
											</td>
											<td>10-04-2023</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-danger/10 text-danger/80">Lost
                            Lead</span>
											</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1"
															role="tooltip" data-popper-placement="top"
															>
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
												<div className="flex space-x-3 rtl:space-x-reverse text-start min-w-[200px]">
													<img className="avatar avatar-sm rounded-sm" src= {ALLImages('jpg69')} alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Shaggy Yt</p>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">ShaggyYt@gmail.com</span>
													</div>
												</div>
											</td>
											<td>+1(555) 675 4680</td>
											<td>Xenon Tech. Ed.</td>
											<td>
												<div className="inline-flex items-center">
													<i className="ri-map-pin-fill text-gray-500 dark:text-white/70 text-xs"></i>
													<span className="ltr:ml-1 rtl:mr-1">Europe</span>
												</div>
											</td>
											<td>11-04-2023</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">New
                            Lead</span>
											</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden style1"
															role="tooltip" data-popper-placement="top"
															>
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
export default Crm;
