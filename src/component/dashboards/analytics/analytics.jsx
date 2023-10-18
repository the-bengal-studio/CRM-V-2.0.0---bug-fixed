import React from "react";
import { Link } from "react-router-dom";
import { AudienceOverview, Deviceview, SessionOverview, SessionsByGender } from "../../../common/chartData";
import ALLImages from "../../../common/imagesData";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";


const Analytics = () => {
	return (
		<div>
			<PageHeader currentpage="Analytics Dashboard" activepage="Home" mainpage="Analytics Dashboard" />

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xxl:col-span-9">
					<div className="grid grid-cols-12 gap-x-6">
						<div className="col-span-12 md:col-span-4">
							<div className="box">
								<div className="box-body">
									<div className="flex items-start">
										<div className="ltr:mr-4 rtl:ml-4">
											<span className="avatar bg-primary/20 text-primary text-2xl p-3 rounded-sm"><i
												className="ri-flag-2-line leading-none"></i></span>
										</div>
										<div className="flex-1">
											<div className="font-medium text-sm mb-1">Total Sessions</div>
											<div className="flex items-center justify-between mb-1">
												<h5 className="text-xl font-bold text-gray-800 dark:text-white">1,289</h5>
												<span className="badge bg-success/20 text-success rounded-sm py-1">+12.2%</span>
											</div>
											<p className="text-gray-500 dark:text-white/70 mb-0 text-xs">since last 2 months</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 md:col-span-4">
							<div className="box">
								<div className="box-body">
									<div className="flex items-start">
										<div className="ltr:mr-4 rtl:ml-4">
											<span className="avatar bg-secondary/20 text-secondary text-2xl p-3 rounded-sm"><i
												className="ri-share-circle-line leading-none"></i></span>
										</div>
										<div className="flex-1">
											<div className="font-medium text-sm mb-1">Bounce Rate</div>
											<div className="flex items-center justify-between mb-1">
												<h5 className="text-xl font-bold text-gray-800 dark:text-white">19.8%</h5>
												<span className="badge bg-danger/20 text-danger rounded-sm py-1">-2.6%</span>
											</div>
											<p className="text-gray-500 dark:text-white/70 mb-0 text-xs">since last 2 months</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 md:col-span-4">
							<div className="box">
								<div className="box-body">
									<div className="flex items-start">
										<div className="ltr:mr-4 rtl:ml-4">
											<span className="avatar bg-danger/20 text-danger text-2xl p-3 rounded-sm"><i
												className="ri-eye-line leading-none"></i></span>
										</div>
										<div className="flex-1">
											<div className="font-medium text-sm mb-1">Page Views</div>
											<div className="flex items-center justify-between mb-1">
												<h5 className="text-xl font-bold text-gray-800 dark:text-white">15,250</h5>
												<span className="badge bg-success/20 text-success rounded-sm py-1">+35.6%</span>
											</div>
											<p className="text-gray-500 dark:text-white/70 mb-0 text-xs">since last 2 months</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 lg:col-span-8">
							<div className="box">
								<div className="box-header">
									<div className="flex justify-between">
										<h5 className="box-title my-auto">Session Overview</h5>
										<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
											<button type="button"
												className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                          This year <i className="ti ti-chevron-down"></i></button>
											<div className="hs-dropdown-menu ti-dropdown-menu hidden">
												<Link className="ti-dropdown-item" to="#">Today</Link>
												<Link className="ti-dropdown-item" to="#">This Week</Link>
												<Link className="ti-dropdown-item" to="#">This Month</Link>
												<Link className="ti-dropdown-item" to="#">This Year</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="box-body ">
								<SessionOverview/>
								</div>
							</div>
						</div>
						<div className="col-span-12 lg:col-span-4">
							<div className="box">
								<div className="box-header">
									<div className="flex justify-between">
										<h5 className="box-title my-auto">Visitors By Countries</h5>
										<button type="button"
											className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                        View All</button>
									</div>
								</div>
								<div className="box-body">
									<ul className="flex flex-col">
										<li className="p-0 mb-4 ti-list-group border-0 text-gray-800 dark:text-white">
											<Link to="#" className="w-full">
												<div className="flex items-center">
													<div className="avatar avatar-xs rounded-sm flex-none">
														<img src= {ALLImages('png64')} alt=""/>
													</div>
													<div className="ltr:ml-3 rtl:mr-3 flex-auto">
														<span className="text-sm">United States</span>
													</div>
													<div>
														<span className="badge rounded-sm bg-gray-100 text-gray-500 dark:bg-black/20 dark:text-white">32,190</span>
													</div>
												</div>
											</Link>
										</li>
										<li className="p-0 mb-4 ti-list-group border-0 text-gray-800 dark:text-white">
											<Link to="#" className="w-full">
												<div className="flex items-center">
													<div className="avatar avatar-xs rounded-sm flex-none">
														<img src= {ALLImages('png55')} alt=""/>
													</div>
													<div className="ltr:ml-3 rtl:mr-3 flex-auto">
														<span className="text-sm">Argentina</span>
													</div>
													<div>
														<span className="badge rounded-sm bg-gray-100 text-gray-500 dark:bg-black/20 dark:text-white">17,578</span>
													</div>
												</div>
											</Link>
										</li>
										<li className="p-0 mb-4 ti-list-group border-0 text-gray-800 dark:text-white">
											<Link to="#" className="w-full">
												<div className="flex items-center">
													<div className="">
														<img src= {ALLImages('png58')} alt="" className="avatar avatar-xs rounded-sm"/>
													</div>
													<div className="ltr:ml-3 rtl:mr-3 flex-auto">
														<span className="text-sm">Germany</span>
													</div>
													<div>
														<span className="badge rounded-sm bg-gray-100 text-gray-500 dark:bg-black/20 dark:text-white">8,798</span>
													</div>
												</div>
											</Link>
										</li>
										<li className="p-0 mb-4 ti-list-group border-0 text-gray-800 dark:text-white">
											<Link to="#" className="w-full">
												<div className="flex items-center">
													<div className="">
														<img src= {ALLImages('png59')} alt="" className="avatar avatar-xs rounded-sm"/>
													</div>
													<div className="ltr:ml-3 rtl:mr-3 flex-auto">
														<span className="text-sm">Mexico</span>
													</div>
													<div>
														<span className="badge rounded-sm bg-gray-100 text-gray-500 dark:bg-black/20 dark:text-white">16,885</span>
													</div>
												</div>
											</Link>
										</li>
										<li className="p-0 mb-4 ti-list-group border-0 text-gray-800 dark:text-white">
											<Link to="#" className="w-full">
												<div className="flex items-center">
													<div className="">
														<img src= {ALLImages('png61')} alt="" className="avatar avatar-xs rounded-sm"/>
													</div>
													<div className="ltr:ml-3 rtl:mr-3 flex-auto">
														<span className="text-sm">Russia</span>
													</div>
													<div>
														<span className="badge rounded-sm bg-gray-100 text-gray-500 dark:bg-black/20 dark:text-white">10,118</span>
													</div>
												</div>
											</Link>
										</li>
										<li className="p-0 mb-4 ti-list-group border-0 text-gray-800 dark:text-white">
											<Link to="#" className="w-full">
												<div className="flex items-center">
													<div className="">
														<img src= {ALLImages('png56')} alt="" className="avatar avatar-xs rounded-sm"/>
													</div>
													<div className="ltr:ml-3 rtl:mr-3 flex-auto">
														<span className="text-sm">Cannada</span>
													</div>
													<div>
														<span className="badge rounded-sm bg-gray-100 text-gray-500 dark:bg-black/20 dark:text-white">1,678</span>
													</div>
												</div>
											</Link>
										</li>
										<li className="p-0 mb-0 ti-list-group border-0 text-gray-800 dark:text-white">
											<Link to="#" className="w-full">
												<div className="flex items-center">
													<div className="">
														<img src= {ALLImages('png60')} alt="" className="avatar avatar-xs rounded-sm"/>
													</div>
													<div className="ltr:ml-3 rtl:mr-3 flex-auto">
														<span className="text-sm">Malaysia</span>
													</div>
													<div>
														<span className="badge rounded-sm bg-gray-100 text-gray-500 dark:bg-black/20 dark:text-white">6,578</span>
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
				<div className="col-span-12 xxl:col-span-3">
					<div className="box overflow-hidden">
						<div className="box-body">
							<div className="flex mb-4">
								<h5 className="box-title my-auto">Active Users</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" aria-label="button"
										className="hs-dropdown-toggle ti-dropdown-toggle text-gray-500 dark:text-white/70 p-0 border-0 shadow-none">
										<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
									<div className="hs-dropdown-menu ti-dropdown-menu">
										<Link className="ti-dropdown-item" to="#">Action</Link>
										<Link className="ti-dropdown-item" to="#">Another Acttion</Link>
										<Link className="ti-dropdown-item" to="#">Something Else Here</Link>
									</div>
								</div>
							</div>
							<div className="flex">
								<div className="ltr:mr-2 rtl:ml-2 my-auto">
									<span className="avatar rounded-full bg-primary text-white text-xl p-3"><i
										className="ri-pulse-line leading-none"></i></span>
								</div>
								<div className="flex-1">
									<p className="text-2xl text-gray-800 dark:text-white font-medium">12,890<span
										className="text-success text-xs ltr:ml-2 rtl:mr-2"><i
											className="ri-arrow-right-up-line text-xs"></i>10.5%</span></p>
									<p className="mb-0 text-xs text-gray-500 dark:text-white/70">Currently active now</p>
								</div>
							</div>
						</div>
					</div>
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Device views</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                      This year <i className="ti ti-chevron-down"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu hidden">
										<Link className="ti-dropdown-item" to="#">Today</Link>
										<Link className="ti-dropdown-item" to="#">This Week</Link>
										<Link className="ti-dropdown-item" to="#">This Month</Link>
										<Link className="ti-dropdown-item" to="#">This Year</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body ">
							<Deviceview/>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xxl:col-span-4">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Sessions By Gender</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" aria-label="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
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
							<SessionsByGender/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-4">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Traffic Sources</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" aria-label="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
									<div className="hs-dropdown-menu ti-dropdown-menu">
										<Link className="ti-dropdown-item" to="#">Download</Link>
										<Link className="ti-dropdown-item" to="#">Import</Link>
										<Link className="ti-dropdown-item" to="#">Export</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body p-0">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col">Browser</th>
											<th scope="col">Sessions</th>
											<th scope="col">Traffic</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="">
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2">
														<span className="avatar avatar-xs rounded-sm bg-primary/20 text-primary p-1.5"><i
															className="ri-chrome-line text-xl leading-none"></i></span>
													</div>
													<p className="mb-0">Chrome</p>
												</div>
											</td>
											<td className="">20,937<i
												className="ri-arrow-up-s-fill ltr:ml-2 rtl:mr-2 text-base text-success my-auto"></i></td>
											<td className="">
												<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
													<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: '80%'}}
														aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</td>
										</tr>
										<tr>
											<td className="">
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2">
														<span className="avatar avatar-xs rounded-sm bg-secondary/20 text-secondary p-1.5"><i
															className="ri-safari-line text-xl leading-none"></i></span>
													</div>
													<p className="mb-0">Safari</p>
												</div>
											</td>
											<td className="">23,379<i
												className="ri-arrow-up-s-fill ltr:ml-2 rtl:mr-2 text-base text-success my-auto"></i></td>
											<td className="">
												<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
													<div className="ti-main-progress-bar bg-secondary text-xs text-white text-center" role="progressbar" style={{width: '40%'}}
														aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</td>
										</tr>
										<tr>
											<td className="">
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2">
														<span className="avatar avatar-xs rounded-sm bg-danger/20 text-danger p-1.5"><i
															className="ri-opera-line text-xl leading-none"></i></span>
													</div>
													<p className="mb-0">Opera</p>
												</div>
											</td>
											<td className="">20,582<i
												className="ri-arrow-down-s-fill ltr:ml-2 rtl:mr-2 text-base text-danger my-auto"></i></td>
											<td className="">
												<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
													<div className="ti-main-progress-bar bg-danger text-xs text-white text-center" role="progressbar" style={{width: '30%'}}
														aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</td>
										</tr>
										<tr>
											<td className="">
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2">
														<span className="avatar avatar-xs rounded-sm bg-warning/20 text-warning p-1.5"><i
															className="ri-firefox-line text-xl leading-none"></i></span>
													</div>
													<p className="mb-0">Firefox</p>
												</div>
											</td>
											<td className="">18,120<i
												className="ri-arrow-up-s-fill ltr:ml-2 rtl:mr-2 text-base text-success my-auto"></i></td>
											<td className="">
												<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
													<div className="ti-main-progress-bar bg-warning text-xs text-white text-center" role="progressbar" style={{width: '50%'}}
														aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</td>
										</tr>
										<tr>
											<td className="">
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2">
														<span className="avatar avatar-xs rounded-sm bg-success/20 text-success p-1.5"><i
															className="ri-edge-line text-xl leading-none"></i></span>
													</div>
													<p className="mb-0">Edge</p>
												</div>
											</td>
											<td className="">11,352<i
												className="ri-arrow-up-s-fill ltr:ml-2 rtl:mr-2 text-base text-danger my-auto"></i></td>
											<td className="">
												<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
													<div className="ti-main-progress-bar bg-success text-xs text-white text-center" role="progressbar" style={{width: '25%'}}
														aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-4">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Audience Overview</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" aria-label="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
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
							<ul className="flex flex-wrap space-x-6 rtl:space-x-reverse">
								<li>
									<p className="inline-flex items-center">
										<span
											className="block w-3 h-3 rounded-full ltr:mr-2 rtl:ml-2 border-4 border-primary pointer-events-none"></span>
										<span className="flex items-center">
											<span
												className="text-base text-gray-800 dark:text-white font-bold ltr:mr-2 rtl:ml-2 pointer-events-none">New
                          Visitors</span>
										</span>
									</p>
								</li>
								<li>
									<p className="inline-flex items-center">
										<span
											className="block w-3 h-3 rounded-full ltr:mr-2 rtl:ml-2 border-4 border-gray-200 pointer-events-none"></span>
										<span className="flex items-center">
											<span
												className="text-base text-gray-800 dark:text-white font-bold ltr:mr-2 rtl:ml-2 pointer-events-none">Online
                          Visitors</span>
										</span>
									</p>
								</li>
							</ul>
							<AudienceOverview/>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Visitors By Channel</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button id="hs-dropdown-custom-icon-trigger" type="button"
										className="hs-dropdown-toggle px-2 py-1 ti-btn ti-btn-primary">Sort
                      By<i className="ri-arrow-down-s-line align-middle"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu hidden"
										aria-labelledby="hs-dropdown-custom-icon-trigger">
										<Link className="ti-dropdown-item" to="#">New</Link>
										<Link className="ti-dropdown-item" to="#">popular</Link>
										<Link className="ti-dropdown-item" to="#">Relevant</Link>
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
											<th scope="col" className="dark:text-white/80">Channel</th>
											<th scope="col" className="dark:text-white/80">Sessions</th>
											<th scope="col" className="dark:text-white/80">Bounce Rate</th>
											<th scope="col" className="dark:text-white/80">Avg Session Duration</th>
											<th scope="col" className="dark:text-white/80">Target Reached</th>
											<th scope="col" className="dark:text-white/80">Pages Per Session</th>
											<th scope="col" className="dark:text-white/80">Action</th>
										</tr>
									</thead>
									<tbody className="">
										<tr className="">
											<td>1</td>
											<td>
												<div className="flex items-center">
													<span className="avatar avatar-xs bg-primary/20 rounded-full p-2">
														<i className="ri-search-2-line text-base font-semibiold text-primary leading-none"></i>
													</span>
													<span className="ltr:ml-2 rtl:mr-2">Organic Search</span>
												</div>
											</td>
											<td>782</td>
											<td>32.09%</td>
											<td>0 hrs : 0 mins : 32 secs</td>
											<td><span className="badge bg-primary/20 rounded-sm text-primary">278</span></td>
											<td>2.9</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"role="tooltip">View</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">Edit</span>
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
												<div className="flex items-center">
													<span className="avatar avatar-xs bg-secondary/20 rounded-full p-2">
														<i className="ri-globe-line text-base font-semibiold text-secondary leading-none"></i>
													</span>
													<span className="ltr:ml-2 rtl:mr-2">
                              Direct
													</span>
												</div>
											</td>
											<td>882</td>
											<td>39.38%</td>
											<td>0 hrs : 2 mins : 45 secs</td>
											<td><span className="badge bg-secondary/20 rounded-sm text-secondary">782</span></td>
											<td>1.5</td>
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
												<div className="flex items-center">
													<span className="avatar avatar-xs bg-danger/20 rounded-full p-2">
														<i className="ri-share-forward-line text-base font-semibiold text-danger leading-none"></i>
													</span>
													<span className="ltr:ml-2 rtl:mr-2">
                              Referral
													</span>
												</div>
											</td>
											<td>322</td>
											<td>22.67%</td>
											<td>0 hrs : 38 mins : 28 secs</td>
											<td><span className="badge bg-danger/20 rounded-sm text-danger">622</span></td>
											<td>3.2</td>
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
												<div className="flex items-center">
													<span className="avatar avatar-xs bg-warning/20 rounded-full p-2">
														<i className="ri-reactjs-line text-base font-semibiold text-warning leading-none"></i>
													</span>
													<span className="ltr:ml-2 rtl:mr-2">
                              Social
													</span>
												</div>
											</td>
											<td>389</td>
											<td>25.11%</td>
											<td>0 hrs : 12 mins : 89 secs</td>
											<td><span className="badge bg-warning/20 rounded-sm text-warning">142</span></td>
											<td>1.4</td>
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
												<div className="flex items-center">
													<span className="avatar avatar-xs bg-info/20 rounded-full p-2">
														<i className="ri-mail-line text-base font-semibiold text-info leading-none"></i>
													</span>
													<span className="ltr:ml-2 rtl:mr-2">
                              Email
													</span>
												</div>
											</td>
											<td>378</td>
											<td>23.79%</td>
											<td>0 hrs : 14 mins : 27 secs</td>
											<td><span className="badge bg-info/20 rounded-sm text-info">178</span></td>
											<td>1.6</td>
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
												<div className="flex items-center">
													<span className="avatar avatar-xs bg-success/20 rounded-full p-2">
														<i className="ri-bank-card-line text-base font-semibiold text-success leading-none"></i>
													</span>
													<span className="ltr:ml-2 rtl:mr-2">
                              Paid Search
													</span>
												</div>
											</td>
											<td>488</td>
											<td>28.77%</td>
											<td>0 hrs : 16 mins : 28 secs</td>
											<td><span className="badge bg-success/20 rounded-sm text-success">578</span></td>
											<td>2.5</td>
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
										<Link className="text-gray-500 hover:text-primary e py-1 px-2 leading-none inline-flex itemLink-center gap-2 rounded-sm" to="#">
											<span aria-hidden="true">Prev</span>
											<span className="sr-only">Previous</span>
										</Link>
										<Link className="bg-primary text-white py-1 px-2 leading-none inline-flex items-center text-sm font-medium rounded-sm" to="#" aria-current="page">1</Link>
										<Link className="text-gray-500 hover:text-primary e py-1 px-2 leading-none inline-flex items-center text-Linkm font-medium rounded-sm" to="#">2</Link>
										<Link className="text-gray-500 hover:text-primary e py-1 px-2 leading-none inline-flex items-center text-Linkm font-medium rounded-sm" to="#">3</Link>
										<Link className="text-gray-500 hover:text-primary e py-1 px-2 leading-none inline-flex itemLink-center gap-2 rounded-sm" to="#">
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
export default Analytics;
