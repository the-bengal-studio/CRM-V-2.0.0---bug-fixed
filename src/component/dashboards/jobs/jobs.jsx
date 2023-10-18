import React from "react";
import { AcceptanceRatio, ApplicationsOverview } from "../../../common/chartData";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import { Link } from "react-router-dom";
import ALLImages from "../../../common/imagesdata";
const Jobs = () => {
	return (
		<div>
			<PageHeader currentpage="Job Dashboard" activepage="Home" mainpage="Job Dashboard"/>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xxxl:col-span-9">
					<div className="grid grid-cols-12 gap-x-6">
						<div className="col-span-12 sm:col-span-6 xxl:col-span-3">
							<div className="box">
								<div className="box-body">
									<div className="flex items-start space-x-3 rtl:space-x-reverse">
										<span className="">
											<i
												className="ri-group-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
										</span>
										<div className="w-full">
											<div className="flex mb-2 items-start justify-between">
												<h5 className="text-xl font-semibold mb-0 leading-none">256</h5>
												<div className="text-danger text-sm font-semibold"><i
													className="ri-arrow-down-s-fill ltr:mr-1 rtl:ml-1 align-middle"></i>-1.05%
												</div>
											</div>
											<p
												className="mb-0 text-xs leading-none opacity-70 text-gray-500 dark:text-white/70">
                                                    Total Applicants</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 sm:col-span-6 xxl:col-span-3">
							<div className="box">
								<div className="box-body">
									<div className="flex items-start space-x-3 rtl:space-x-reverse">
										<span className="">
											<i
												className="ri-user-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-secondary/10 text-secondary leading-none"></i>
										</span>
										<div className="w-full">
											<div className="flex mb-2 items-start justify-between">
												<h5 className="text-xl font-semibold mb-0 leading-none">4,026</h5>
												<div className="text-success text-sm font-semibold"><i
													className="ri-arrow-up-s-fill ltr:mr-1 rtl:ml-1 align-middle"></i>+0.40%
												</div>
											</div>
											<p
												className="mb-0 text-xs leading-none opacity-70 text-gray-500 dark:text-white/70">
                                                    Total Shortlisted</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 sm:col-span-6 xxl:col-span-3">
							<div className="box">
								<div className="box-body">
									<div className="flex items-start space-x-3 rtl:space-x-reverse">
										<span className="">
											<i
												className="ri-user-follow-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-warning/10 text-warning leading-none"></i>
										</span>
										<div className="w-full">
											<div className="flex mb-2 items-start justify-between">
												<h5 className="text-xl font-semibold mb-0 leading-none">148</h5>
												<div className="text-success text-sm font-semibold"><i
													className="ri-arrow-up-s-fill ltr:mr-1 rtl:ml-1 align-middle"></i>+0.82%
												</div>
											</div>
											<p
												className="mb-0 text-xs leading-none opacity-70 text-gray-500 dark:text-white/70">
                                                    Hired Candidates</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 sm:col-span-6 xxl:col-span-3">
							<div className="box">
								<div className="box-body">
									<div className="flex items-start space-x-3 rtl:space-x-reverse">
										<span className="">
											<i
												className="ri-user-unfollow-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-success/10 text-success leading-none"></i>
										</span>
										<div className="w-full">
											<div className="flex mb-2 items-start justify-between">
												<h5 className="text-xl font-semibold mb-0 leading-none">1,116</h5>
												<div className="text-success text-sm font-semibold"><i
													className="ri-arrow-up-s-fill ltr:mr-1 rtl:ml-1 align-middle"></i>+0.21%
												</div>
											</div>
											<p
												className="mb-0 text-xs leading-none opacity-70 text-gray-500 dark:text-white/70">
                                                    Rejected Applicants</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 xl:col-span-9">
							<div className="box overflow-hidden">
								<div className="box-header">
									<div className="flex justify-between">
										<h5 className="box-title my-auto">Applications Overview</h5>
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
									<div
										className="grid grid-cols-12 gap-6 border-b border-dashed border-gray-200 dark:border-white/10 px-6">
										<div className="col-span-12 sm:col-span-4">
											<div className="py-4 sm:text-start text-center">
												<p className="text-xl font-semibold mb-0">1,117</p>
												<p className="mb-0 text-sm text-gray-500 dark:text-white/70">Total
                                                        Candidates
												</p>
											</div>
										</div>
										<div className="col-span-12 sm:col-span-4">
											<div className="p-3 sm:text-start text-center">
												<p className="text-xl font-semibold mb-0"><span
													className="basic-subscription">742</span></p>
												<p className="mb-0 text-sm text-gray-500 dark:text-white/70">
                                                        Applications
												</p>
											</div>
										</div>
										<div className="col-span-12 sm:col-span-4">
											<div className="p-3 text-sm-start text-center">
												<p className="text-xl font-semibold mb-0"><span
													className="pro-subscription">259</span></p>
												<p className="mb-0 text-sm text-gray-500 dark:text-white/70">Shortlisted
												</p>
											</div>
										</div>
									</div>
									<ApplicationsOverview/>
								</div>
							</div>
						</div>
						<div className="col-span-12 xl:col-span-3">
							<div className="box">
								<div className="box-header">
									<div className="flex justify-between">
										<h5 className="box-title my-auto">New Applicants</h5>
										<button type="button" className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                                View All</button>
									</div>
								</div>
								<div className="box-body">
									<ul>
										<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white w-full">
											<Link to="#" className="w-full">
												<div className="flex items-center">
													<img className="avatar avatar-sm rounded-full"
														src= {ALLImages('jpg65')} alt="image"/>
													<div className="flex-auto ltr:ml-2 rtl:mr-2">
														<p
															className="text-sm font-semibold mb-0 text-gray-800 dark:text-white">
                                                                Charlie Davieson</p>
														<p className="text-xs mb-0 !font-normal"><span
															className="text-gray-400 dark:text-white/80 ">Applied For
														</span> <span className="font-medium">Java Developer</span></p>
													</div>
												</div>
											</Link>
										</li>
										<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white w-full">
											<Link to="#" className="w-full">
												<div className="flex items-center">
													<img className="avatar avatar-sm rounded-full"
														src= {ALLImages('jpg58')} alt="image"/>
													<div className="flex-auto ltr:ml-2 rtl:mr-2">
														<p
															className="text-sm font-semibold mb-0 text-gray-800 dark:text-white">
                                                                Nasiha</p>
														<p className="text-xs mb-0 !font-normal"><span
															className="text-gray-400 dark:text-white/80 ">Applied For
														</span> <span className="font-medium">Data Analyst</span></p>
													</div>
												</div>
											</Link>
										</li>
										<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white w-full">
											<Link to="#" className="w-full">
												<div className="flex items-center">
													<img className="avatar avatar-sm rounded-full"
														src= {ALLImages('jpg60')} alt="image"/>
													<div className="flex-auto ltr:ml-2 rtl:mr-2">
														<p className="text-sm font-semibold mb-0 text-gray-800 dark:text-white">Hasi Nah</p>
														<p className="text-xs mb-0 !font-normal"><span
															className="text-gray-400 dark:text-white/80 ">Applied For
														</span> <span className="font-medium">Executive Officer</span></p>
													</div>
												</div>
											</Link>
										</li>
										<li className="p-0 mb-6 ti-list-group border-0 text-gray-800 dark:text-white w-full">
											<Link to="#" className="w-full">
												<div className="flex items-center">
													<img className="avatar avatar-sm rounded-full"
														src= {ALLImages('jpg70')} alt="image"/>
													<div className="flex-auto ltr:ml-2 rtl:mr-2">
														<p className="text-sm font-semibold mb-0 text-gray-800 dark:text-white">David</p>
														<p className="text-xs mb-0 !font-normal"><span
															className="text-gray-400 dark:text-white/80 ">Applied For
														</span> <span className="font-medium">Developer</span></p>
													</div>
												</div>
											</Link>
										</li>
										<li className="p-0 mb-0 ti-list-group border-0 text-gray-800 dark:text-white w-full">
											<Link to="#" className="w-full">
												<div className="flex items-center">
													<img className="avatar avatar-sm rounded-full"
														src= {ALLImages('jpg72')} alt="image"/>
													<div className="flex-auto ltr:ml-2 rtl:mr-2">
														<p className="text-sm font-semibold mb-0 text-gray-800 dark:text-white">Jack Bruce</p>
														<p className="text-xs mb-0 !font-normal"><span
															className="text-gray-400 dark:text-white/80 ">Applied For
														</span> <span className="font-medium">Data Scientist</span></p>
													</div>
												</div>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Acceptance Ratio</h5>
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
							
							<AcceptanceRatio/>
							<div className="grid grid-cols-2">
								<div className="p-5 ltr:border-r rtl:border-l border-gray-200 dark:border-white/10">
									<div className="flex items-center">
										<div className="ltr:mr-2 rtl:ml-2">
											<span
												className="avatar avatar-sm rounded-full bg-primary/20 text-primary p-2.5"><i
													className="ri-checkbox-circle-line text-xl leading-none"></i></span>
										</div>
										<div className="flex-1">
											<p className="mb-0 font-weight-semibold">Accepted</p>
											<span className="tx-muted tx-12">565</span>
										</div>
									</div>
								</div>
								<div className="p-5">
									<div className="flex items-center">
										<div className="ltr:mr-2 rtl:ml-2">
											<span
												className="avatar avatar-sm rounded-full bg-secondary/20 text-secondary p-2.5"><i
													className="ri-close-circle-line text-xl leading-none"></i></span>
										</div>
										<div className="flex-1">
											<p className="mb-0 font-weight-semibold">Rejected</p>
											<span className="tx-muted tx-12">208</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="box bg-gradient-to-r from-primary to-secondary">
						<div className="box-body">
							<div className="flex ">
								<div>
									<h2 className="text-xl text-white font-semibold">Upgrade to Pro</h2>
									<p className="text-sm text-white/80">For Premium benifits</p>
								</div>
								<button type="button" className="ti-btn ti-btn-light my-auto ltr:ml-auto rtl:mr-auto">Upgrade</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Recent Recruiter Registrations</h5>
								<button type="button" className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                        View All</button>
							</div>
						</div>
						<div className="box-body p-0">
							<div className="grid md:grid-cols-3  xxl:grid-cols-5">
								<div className="p-4 ltr:md:border-r rtl:md:border-l xxl:border-b-0 border-b border-gray-200 dark:border-white/10">
									<div className="flex items-start mb-6">
										<img src= {ALLImages('jpg60')} alt=""
											className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2 leading-none"/>
										<div className="flex-auto">
											<div className="recent-recruiter">
												<p className="text-sm font-semibold mb-0 truncate">Hr@Spruko</p>
												<p className="mb-0 text-xs text-gray-500 dark:text-white/70 truncate">
                                                        hr.spruko@gmail.com</p>
											</div>
										</div>
										<div>
											<button type="button" aria-label="button"
												className="ti-btn bg-gray-100 text-gray-500 hover:text-gray-600 hover:bg-gray-200 ring-offset-white focus:ring-gray-500 dark:bg-black/20 dark:hover:bg-black/30 dark:focus:ring-gray-600 dark:text-white dark:focus:ring-offset-white/10">
												<i className="ri-arrow-right-s-line rtl:rotate-180"></i>
											</button>
										</div>
									</div>
									<div className="flex  justify-between mb-2">
										<div className="text-gray-500 dark:text-white/70 text-xs">
                                                Vacancies
										</div>
										<div className="font-semibold text-sm">
                                                07
										</div>
									</div>
									<div className="flex  justify-between mb-0">
										<div className="text-gray-500 dark:text-white/70 text-xs">
                                                Position
										</div>
										<div>
											<span
												className="badge bg-info/10 text-info leading-none rounded-sm text-xs py-1">Aws
                                                    Engineer</span>
										</div>
									</div>
								</div>
								<div className="p-4 ltr:md:border-r rtl:md:border-l xxl:border-b-0 border-b border-gray-200 dark:border-white/10">
									<div className="flex items-start mb-6">
										<img src= {ALLImages('jpg77')} alt=""
											className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2 leading-none"/>
										<div className="flex-auto">
											<div className="recent-recruiter">
												<p className="text-sm font-semibold mb-0 truncate">Hr@Nicero</p>
												<p className="mb-0 text-xs text-gray-500 dark:text-white/70 truncate">
                                                        nicero.help@gmail.com</p>
											</div>
										</div>
										<div>
											<button type="button" aria-label="button"
												className="ti-btn bg-gray-100 text-gray-500 hover:text-gray-600 hover:bg-gray-200 ring-offset-white focus:ring-gray-500 dark:bg-black/20 dark:hover:bg-black/30 dark:focus:ring-gray-600 dark:text-white/70 dark:focus:ring-offset-white/10">
												<i className="ri-arrow-right-s-line rtl:rotate-180"></i>
											</button>
										</div>
									</div>
									<div className="flex  justify-between mb-2">
										<div className="text-gray-500 dark:text-white/70 text-xs">
                                                Vacancies
										</div>
										<div className="font-semibold text-sm">
                                                16
										</div>
									</div>
									<div className="flex  justify-between mb-0">
										<div className="text-gray-500 dark:text-white/70 text-xs">
                                                Position
										</div>
										<div>
											<span
												className="badge bg-warning/10 text-warning leading-none rounded-sm text-xs py-1">React
                                                    Developer</span>
										</div>
									</div>
								</div>
								<div className="p-4 ltr:md:border-r rtl:md:border-l xxl:border-b-0 border-b border-gray-200 dark:border-white/10">
									<div className="flex items-start mb-6">
										<img src= {ALLImages('jpg68')} alt=""
											className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2 leading-none"/>
										<div className="flex-auto">
											<div className="recent-recruiter">
												<p className="text-sm font-semibold mb-0 truncate">Hr@David</p>
												<p className="mb-0 text-xs text-gray-500 dark:text-white/70 truncate">
                                                        David.525@gmail.com</p>
											</div>
										</div>
										<div>
											<button type="button" aria-label="button"
												className="ti-btn bg-gray-100 text-gray-500 hover:text-gray-600 hover:bg-gray-200 ring-offset-white focus:ring-gray-500 dark:bg-black/20 dark:hover:bg-black/30 dark:focus:ring-gray-600 dark:text-white/70 dark:focus:ring-offset-white/10">
												<i className="ri-arrow-right-s-line rtl:rotate-180"></i>
											</button>
										</div>
									</div>
									<div className="flex  justify-between mb-2">
										<div className="text-gray-500 dark:text-white/70 text-xs">
                                                Vacancies
										</div>
										<div className="font-semibold text-sm">
                                                10
										</div>
									</div>
									<div className="flex  justify-between mb-0">
										<div className="text-gray-500 dark:text-white/70 text-xs">
                                                Position
										</div>
										<div>
											<span
												className="badge bg-secondary/10 text-secondary leading-none rounded-sm text-xs py-1">Full Stack
                                                    Developer</span>
										</div>
									</div>
								</div>
								<div className="p-4 ltr:md:border-r rtl:md:border-l md:border-b-0 border-b border-gray-200 dark:border-white/10">
									<div className="flex items-start mb-6">
										<img src= {ALLImages('jpg71')} alt=""
											className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2 leading-none"/>
										<div className="flex-auto">
											<div className="recent-recruiter">
												<p className="text-sm font-semibold mb-0 truncate">JosephSmith</p>
												<p className="mb-0 text-xs text-gray-500 dark:text-white/70 truncate">
                                                        josephsmith@gmail.com</p>
											</div>
										</div>
										<div>
											<button type="button" aria-label="button"
												className="ti-btn bg-gray-100 text-gray-500 hover:text-gray-600 hover:bg-gray-200 ring-offset-white focus:ring-gray-500 dark:bg-black/20 dark:hover:bg-black/30 dark:focus:ring-gray-600 dark:text-white/70 dark:focus:ring-offset-white/10">
												<i className="ri-arrow-right-s-line rtl:rotate-180"></i>
											</button>
										</div>
									</div>
									<div className="flex  justify-between mb-2">
										<div className="text-gray-500 dark:text-white/70 text-xs">
                                                Vacancies
										</div>
										<div className="font-semibold text-sm">
                                                32
										</div>
									</div>
									<div className="flex  justify-between mb-0">
										<div className="text-gray-500 dark:text-white/70 text-xs">
                                                Position
										</div>
										<div>
											<span
												className="badge bg-primary/10 text-primary leading-none rounded-sm text-xs py-1">UI
                                                    Developer</span>
										</div>
									</div>
								</div>
								<div className="p-4">
									<div className="flex items-start mb-6">
										<img src= {ALLImages('jpg59')} alt=""
											className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2 leading-none"/>
										<div className="flex-auto">
											<div className="recent-recruiter">
												<p className="text-sm font-semibold mb-0 truncate">Kristie Nah</p>
												<p className="mb-0 text-xs text-gray-500 dark:text-white/70 truncate">
                                                        Kristie Nah@gmail.com</p>
											</div>
										</div>
										<div>
											<button type="button" aria-label="button"
												className="ti-btn bg-gray-100 text-gray-500 hover:text-gray-600 hover:bg-gray-200 ring-offset-white focus:ring-gray-500 dark:bg-black/20 dark:hover:bg-black/30 dark:focus:ring-gray-600 dark:text-white/70 dark:focus:ring-offset-white/10">
												<i className="ri-arrow-right-s-line rtl:rotate-180"></i>
											</button>
										</div>
									</div>
									<div className="flex  justify-between mb-2">
										<div className="text-gray-500 dark:text-white/70 text-xs">
                                                Vacancies
										</div>
										<div className="font-semibold text-sm">
                                                12
										</div>
									</div>
									<div className="flex  justify-between mb-0">
										<div className="text-gray-500 dark:text-white/70 text-xs">
                                                Position
										</div>
										<div>
											<span
												className="badge bg-primary/10 text-primary leading-none rounded-sm text-xs py-1">Angular Developer</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xxl:col-span-4">
					<div className="box overflow-hidden">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Registers By Country</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button id="hs-dropdown-custom-icon-trigger5" type="button" aria-label="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
									<div className="hs-dropdown-menu ti-dropdown-menu"
										aria-labelledby="hs-dropdown-custom-icon-trigger5">
										<Link className="ti-dropdown-item" to="#">Action</Link>
										<Link className="ti-dropdown-item" to="#">Another Action</Link>
										<Link className="ti-dropdown-item" to="#">Something else
                                                here</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body p-0 activity-table">
							<div className="overflow-auto">
								<table className="text-center ti-custom-table ti-custom-table-head whitespace-nowrap">
									<thead>
										<tr>
											<th scope="col" className="min-w-[155px]">Country</th>
											<th scope="col">Date</th>
											<th scope="col">Total Registers</th>
											<th scope="col">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src= {ALLImages('png64')} alt=""
															className="avatar avatar-xs rounded-full"/>
													</div>
													<div>
														<span className="text-sm font-semibold">
                                                                U.S.A
														</span>
													</div>
												</div>
											</td>
											<td>21,Dec 2022</td>
											<td>782</td>
											<td>
												<button type="button" aria-label="button"
													className="ti-btn ti-btn-soft-success py-0 px-2 m-0">View</button>
											</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src= {ALLImages('png57')} alt=""
															className="avatar avatar-xs rounded-full"/>
													</div>
													<div>
														<span className="text-sm font-semibold">
                                                                France
														</span>
													</div>
												</div>
											</td>
											<td>29,April 2023</td>
											<td>53</td>
											<td>
												<button type="button" aria-label="button"
													className="ti-btn ti-btn-soft-success py-0 px-2 m-0">View</button>
											</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src= {ALLImages('png56')} alt=""
															className="avatar avatar-xs rounded-full"/>
													</div>
													<div>
														<span className="text-sm font-semibold">
                                                                Canada
														</span>
													</div>
												</div>
											</td>
											<td>30,Nov 2023</td>
											<td>15</td>
											<td>
												<button type="button" aria-label="button"
													className="ti-btn ti-btn-soft-success py-0 px-2 m-0">View</button>
											</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src= {ALLImages('png58')} alt=""
															className="avatar avatar-xs rounded-full"/>
													</div>
													<div>
														<span className="text-sm font-semibold">
                                                                Germany
														</span>
													</div>
												</div>
											</td>
											<td>18,Mar 2023</td>
											<td>19</td>
											<td>
												<button type="button" aria-label="button"
													className="ti-btn ti-btn-soft-success py-0 px-2 m-0">View</button>
											</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src= {ALLImages('png55')} alt=""
															className="avatar avatar-xs rounded-full"/>
													</div>
													<div>
														<span className="text-sm font-semibold">
                                                                Argentina
														</span>
													</div>
												</div>
											</td>
											<td>25,Apr 2023</td>
											<td>92</td>
											<td>
												<button type="button" aria-label="button"
													className="ti-btn ti-btn-soft-success py-0 px-2 m-0">View</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-5">
					<div className="box overflow-hidden">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Top Recruiters</h5>
								<button type="button" className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                        View All</button>
							</div>
						</div>
						<div className="box-body p-0 activity-table2">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head whitespace-nowrap">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Subscription</th>
											<th scope="col">Total Employees</th>
											<th scope="col">Recruiter Since</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2">
														<span
															className="avatar avatar-sm">
															<img src= {ALLImages('png71')} alt=""/>
														</span>
													</div>
													<div>
														<p className="text-xs font-semibold mb-0">Obligation Pvt.Ltd</p>
														<p
															className="font-normal text-xs text-gray-500 dark:text-white/70 mb-0">
                                                                Remote/Onsite</p>
													</div>
												</div>
											</td>
											<td className="text-center">
												<span
													className="badge bg-primary/10 text-primary leading-none rounded-sm text-xs py-1">Basic</span>
											</td>
											<td className="text-center">547</td>
											<td className="text-center">24,Nov 2021</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2">
														<span
															className="avatar avatar-sm">
															<img src= {ALLImages('png77')} alt=""/>
														</span>
													</div>
													<div>
														<p className="text-xs font-semibold mb-0">Voluptatem Pvt.Ltd</p>
														<p
															className="font-normal text-xs text-gray-500 dark:text-white/70 mb-0">
                                                                Remote/Onsite</p>
													</div>
												</div>
											</td>
											<td className="text-center">
												<span
													className="badge bg-secondary/10 text-secondary leading-none rounded-sm text-xs py-1">Pro</span>
											</td>
											<td className="text-center">223</td>
											<td className="text-center">13,Jan 2020</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2">
														<span
															className="avatar avatar-sm">
															<img src= {ALLImages('png75')} alt=""/>
														</span>
													</div>
													<div>
														<p className="text-xs font-semibold mb-0">BloomTech.Inc</p>
														<p
															className="font-normal text-xs text-gray-500 dark:text-white/70 mb-0">
                                                                Remote/Onsite</p>
													</div>
												</div>
											</td>
											<td className="text-center">
												<span
													className="badge bg-primary/10 text-primary leading-none rounded-sm text-xs py-1">Basic</span>
											</td>
											<td className="text-center">189</td>
											<td className="text-center">06,Sep 2020</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2">
														<span
															className="avatar avatar-sm">
															<img src= {ALLImages('png68')} alt=""/>
														</span>
													</div>
													<div>
														<p className="text-xs font-semibold mb-0">Beatae Industries</p>
														<p
															className="font-normal text-xs text-gray-500 dark:text-white/70 mb-0">
                                                                Remote/Onsite</p>
													</div>
												</div>
											</td>
											<td className="text-center">
												<span
													className="badge bg-primary/10 text-primary leading-none rounded-sm text-xs py-1">Basic</span>
											</td>
											<td className="text-center">106</td>
											<td className="text-center">19,Mar 2020</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2">
														<span
															className="avatar avatar-sm">
															<img src= {ALLImages('png73')} alt=""/>
														</span>
													</div>
													<div>
														<p className="text-xs font-semibold mb-0">Jack Pvt.Ltd</p>
														<p
															className="font-normal text-xs text-gray-500 dark:text-white/70 mb-0">
                                                                Remote/Onsite</p>
													</div>
												</div>
											</td>
											<td className="text-center">
												<span
													className="badge bg-primary/10 text-primary leading-none rounded-sm text-xs py-1">Basic</span>
											</td>
											<td className="text-center">106</td>
											<td className="text-center">19,Mar 2020</td>
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
								<h5 className="box-title my-auto">Recent Jobs</h5>
								<button type="button" className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                        View All</button>
							</div>
						</div>
						<div className="box-body">
							<ul className="">
								<li className="p-0 mb-3 ti-list-group border-0 text-gray-800 dark:text-white w-full">
									<div className="flex items-center w-full">
										<Link aria-label="anchor" to="#" className="ltr:pr-3 rtl:pl-3">
											<span className="avatar rounded-sm bg-primary/20 text-primary p-3"><i className="ri-smartphone-line text-2xl leading-none"></i></span>
										</Link>
										<div className="flex-1 flex justify-between items-center relative">
											<div className="flex-1">
												<Link to="#" className="text-sm font-semibold">Sr. Mobile App Developer</Link>
												<p className="mb-0 text-xs text-gray-500 dark:text-white/70"><i className="ri-map-pin-line text-xs ltr:mr-1 rtl:ml-1"></i>Georgia, XY</p>
												<Link to="#" className="text-xs">1116 Applicants</Link>
											</div>
											<div className="min-w-fit text-end">
												<span className="text-xs text-gray-500 dark:text-white/70">1 day ago</span>
												<p className="mb-0 text-xs">29 days left
												</p></div>
										</div>
									</div>
								</li>
								<li className="p-0 mb-3 ti-list-group border-0 text-gray-800 dark:text-white w-full">
									<div className="flex items-center w-full">
										<Link aria-label="anchor" to="#" className="ltr:pr-3 rtl:pl-3">
											<span className="avatar rounded-sm bg-secondary/20 text-secondary p-3"><i className="ri-briefcase-5-line text-2xl leading-none"></i></span>
										</Link>
										<div className="flex-1 flex justify-between items-center relative">
											<div className="flex-1">
												<Link to="#" className="text-sm font-semibold">Data Scientist Trainee</Link>
												<p className="mb-0 text-xs text-gray-500 dark:text-white/70"><i className="ri-map-pin-line text-xs ltr:mr-1 rtl:ml-1"></i>Siberia, PQ</p>
												<Link to="#" className="text-xs">773 Applicants</Link>
											</div>
											<div className="min-w-fit text-end">
												<span className="text-xs text-gray-500 dark:text-white/70">3 days ago</span>
												<p className="mb-0 text-xs">27 days left
												</p></div>
										</div>
									</div>
								</li>
								<li className="p-0 mb-3 ti-list-group border-0 text-gray-800 dark:text-white w-full">
									<div className="flex items-center w-full">
										<Link aria-label="anchor" to="#" className="ltr:pr-3 rtl:pl-3">
											<span className="avatar rounded-sm bg-warning/20 text-warning p-3"><i className="ri-stack-line text-2xl leading-none"></i></span>
										</Link>
										<div className="flex-1 flex justify-between items-center relative">
											<div className="flex-1">
												<Link to="#" className="text-sm font-semibold">Sr. Backend Developer</Link>
												<p className="mb-0 text-xs text-gray-500 dark:text-white/70"><i className="ri-map-pin-line text-xs ltr:mr-1 rtl:ml-1"></i>Italy, RS</p>
												<Link to="#" className="text-xs">16 Applicants</Link>
											</div>
											<div className="min-w-fit text-end">
												<span className="text-xs text-gray-500 dark:text-white/70">1 week ago</span>
												<p className="mb-0 text-xs">22  days left
												</p></div>
										</div>
									</div>
								</li>
								<li className="p-0 mb-3 ti-list-group border-0 text-gray-800 dark:text-white w-full">
									<div className="flex items-center w-full">
										<Link aria-label="anchor" to="#" className="ltr:pr-3 rtl:pl-3">
											<span className="avatar rounded-sm bg-success/20 text-success p-3"><i className="ri-bar-chart-2-line text-2xl leading-none"></i></span>
										</Link>
										<div className="flex-1 flex justify-between items-center relative">
											<div className="flex-1">
												<Link to="#" className="text-sm font-semibold"> Data Visualization Engineer</Link>
												<p className="mb-0 text-xs text-gray-500 dark:text-white/70"><i className="ri-map-pin-line text-xs ltr:mr-1 rtl:ml-1"></i>India, IN</p>
												<Link to="#" className="text-xs">11 Applicants</Link>
											</div>
											<div className="min-w-fit text-end">
												<span className="text-xs text-gray-500 dark:text-white/70">
                                                        1 month ago</span>
												<p className="mb-0 text-xs text-danger">1 day left
												</p></div>
										</div>
									</div>
								</li>
								<li className="p-0 mb-0 ti-list-group border-0 text-gray-800 dark:text-white w-full">
									<div className="flex items-center w-full">
										<Link aria-label="anchor" to="#" className="ltr:pr-3 rtl:pl-3">
											<span className="avatar rounded-sm bg-danger/20 text-danger p-3"><i className="ri-bar-chart-2-line text-2xl leading-none"></i></span>
										</Link>
										<div className="flex-1 flex justify-between items-center relative">
											<div className="flex-1">
												<Link to="#" className="text-sm font-semibold"> Executive Officer</Link>
												<p className="mb-0 text-xs text-gray-500 dark:text-white/70"><i className="ri-map-pin-line text-xs ltr:mr-1 rtl:ml-1"></i>England, EN</p>
												<Link to="#" className="text-xs">15 Applicants</Link>
											</div>
											<div className="min-w-fit text-end">
												<span className="text-xs text-gray-500 dark:text-white/70">
                                                        1 month ago</span>
												<p className="mb-0 text-xs text-danger">closing soon
												</p></div>
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
					<div className="box orders-table">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Recent Employers</h5>
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
											<th scope="col">Employer</th>
											<th scope="col">Role</th>
											<th scope="col">Designation</th>
											<th scope="col">Mail</th>
											<th scope="col">Location</th>
											<th scope="col">Date</th>
											<th scope="col">Type</th>
											<th scope="col">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div className="flex align-items-center font-semibold min-w-[180px]">
													<img src= {ALLImages('jpg60')}
														className="avatar avatar-xs ltr:mr-2 rtl:ml-2 rounded-full"
														alt=""/>
													<span className="my-auto text-sm">Mayor Kelly</span>
												</div>
											</td>
											<td>Manufacture</td>
											<td><span
												className="badge bg-primary/10 text-primary leading-none rounded-sm text-xs py-1">Team
                                                        Lead</span></td>
											<td>mayorkelly@gmail.com</td>
											<td>
												<div className="inline-flex items-center">
													<i
														className="ri-map-pin-fill text-gray-500 dark:text-white/70 text-xs"></i>
													<span className="ltr:ml-1 rtl:mr-1">Germany</span>
												</div>
											</td>
											<td>Sep 15 - Oct 12, 2023</td>
											<td>Full Time</td>
											<td>
												<div
													className="flex items-center flex-row self-stretch gap-2 text-base">
													<Link aria-label="anchor" to="#"
														className="ti-btn ti-btn-soft-success py-1 px-2"><i
															className="ri-download-2-line"></i></Link>
													<Link aria-label="anchor" to="#"
														className="ti-btn ti-btn-soft-primary py-1 px-2"><i
															className="ri-edit-line"></i></Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className="flex align-items-center font-semibold min-w-[180px]">
													<img src= {ALLImages('jpg71')}
														className="avatar avatar-xs ltr:mr-2 rtl:ml-2 rounded-full"
														alt=""/>
													<span className="my-auto text-sm">Andrew Garfield </span>
												</div>
											</td>
											<td>Development</td>
											<td><span
												className="badge bg-secondary/10 text-secondary leading-none rounded-sm text-xs py-1">Director</span>
											</td>
											<td>andrewgarfield@gmail.com</td>
											<td>
												<div className="inline-flex items-center">
													<i
														className="ri-map-pin-fill text-gray-500 dark:text-white/70 text-xs"></i>
													<span className="ltr:ml-1 rtl:mr-1">Canada</span>
												</div>
											</td>
											<td>Apr 10 - Dec 12, 2023</td>
											<td>Full Time</td>
											<td>
												<div
													className="flex items-center flex-row self-stretch gap-2 text-base">
													<Link aria-label="anchor" to="#"
														className="ti-btn ti-btn-soft-success py-1 px-2"><i
															className="ri-download-2-line"></i></Link>
													<Link aria-label="anchor" to="#"
														className="ti-btn ti-btn-soft-primary py-1 px-2"><i
															className="ri-edit-line"></i></Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className="flex align-items-center font-semibold min-w-[180px]">
													<img src= {ALLImages('jpg67')}
														className="avatar avatar-xs ltr:mr-2 rtl:ml-2 rounded-full"
														alt=""/>
													<span className="my-auto text-sm">Simon Cowel</span>
												</div>
											</td>
											<td>Service</td>
											<td><span
												className="badge bg-success/10 text-success leading-none rounded-sm text-xs py-1">Manager</span>
											</td>
											<td>simoncowel234@gmail.com</td>
											<td>
												<div className="inline-flex items-center">
													<i
														className="ri-map-pin-fill text-gray-500 dark:text-white/70 text-xs"></i>
													<span className="ltr:ml-1 rtl:mr-1">Europe</span>
												</div>
											</td>
											<td>Sep 15 - Oct 12, 2023</td>
											<td>Part Time</td>
											<td>
												<div
													className="flex items-center flex-row self-stretch gap-2 text-base">
													<Link aria-label="anchor" to="#"
														className="ti-btn ti-btn-soft-success py-1 px-2"><i
															className="ri-download-2-line"></i></Link>
													<Link aria-label="anchor" to="#"
														className="ti-btn ti-btn-soft-primary py-1 px-2"><i
															className="ri-edit-line"></i></Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className="flex align-items-center font-semibold min-w-[180px]">
													<img src= {ALLImages('jpg64')}
														className="avatar avatar-xs ltr:mr-2 rtl:ml-2 rounded-full"
														alt=""/>
													<span className="my-auto text-sm">Mirinda Hers</span>
												</div>
											</td>
											<td>Marketing</td>
											<td><span
												className="badge bg-danger/10 text-danger leading-none rounded-sm text-xs py-1">Employee</span>
											</td>
											<td>mirindahers@gmail.com</td>
											<td>
												<div className="inline-flex items-center">
													<i
														className="ri-map-pin-fill text-gray-500 dark:text-white/70 text-xs"></i>
													<span className="ltr:ml-1 rtl:mr-1">USA</span>
												</div>
											</td>
											<td>Apr 10 - Dec 12, 2023</td>
											<td>Hybrid</td>
											<td>
												<div
													className="flex items-center flex-row self-stretch gap-2 text-base">
													<Link aria-label="anchor" to="#"
														className="ti-btn ti-btn-soft-success py-1 px-2"><i
															className="ri-download-2-line"></i></Link>
													<Link aria-label="anchor" to="#"
														className="ti-btn ti-btn-soft-primary py-1 px-2"><i
															className="ri-edit-line"></i></Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className="flex align-items-center font-semibold min-w-[180px]">
													<img src= {ALLImages('jpg72')}
														className="avatar avatar-xs ltr:mr-2 rtl:ml-2 rounded-full"
														alt=""/>
													<span className="my-auto text-sm">Andrew Garfield </span>
												</div>
											</td>
											<td>Development</td>
											<td><span
												className="badge bg-warning/10 text-warning leading-none rounded-sm text-xs py-1">Director</span>
											</td>
											<td>andrewgarfield@gmail.com</td>
											<td>
												<div className="inline-flex items-center">
													<i
														className="ri-map-pin-fill text-gray-500 dark:text-white/70 text-xs"></i>
													<span className="ltr:ml-1 rtl:mr-1">London</span>
												</div>
											</td>
											<td>Jun 10 - Dec 12, 2022</td>
											<td>Freelancer</td>
											<td>
												<div
													className="flex items-center flex-row self-stretch gap-2 text-base">
													<Link aria-label="anchor" to="#"
														className="ti-btn ti-btn-soft-success py-1 px-2"><i
															className="ri-download-2-line"></i></Link>
													<Link aria-label="anchor" to="#"
														className="ti-btn ti-btn-soft-primary py-1 px-2"><i
															className="ri-edit-line"></i></Link>
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
										<Link className="text-gray-500 hover:text-primary e py-1 px-2 leading-none inline-flex items-center gap-2 rounded-sm"
											to="#">
											<span aria-hidden="true">Prev</span>
											<span className="sr-only">Previous</span>
										</Link>
										<Link className="bg-primary text-white py-1 px-2 leading-none inline-flex items-center text-sm font-medium rounded-sm"
											to="#" aria-current="page">1</Link>
										<Link className="text-gray-500 hover:text-primary e py-1 px-2 leading-none inline-flex items-center text-sm font-medium rounded-sm"
											to="#">2</Link>
										<Link className="text-gray-500 hover:text-primary e py-1 px-2 leading-none inline-flex items-center text-sm font-medium rounded-sm"
											to="#">3</Link>
										<Link className="text-gray-500 hover:text-primary e py-1 px-2 leading-none inline-flex items-center gap-2 rounded-sm"
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
export default Jobs;
