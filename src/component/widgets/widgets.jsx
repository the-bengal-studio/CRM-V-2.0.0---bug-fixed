import React from "react";
import { Link } from "react-router-dom";
import { Applicants, Bitcoins, DshCoin, Ethereum, Golem, SessionsDevice, TargetReport, WidgetsRevenue } from "../../common/chartData";
import PageHeader from "../../layout/layoutsection/pageHeader/pageHeader";
import WorldMap from "react-svg-worldmap";
import ALLImages from "../../common/imagesdata";
import store from "../../redux/store";
import { connect } from "react-redux"
import { ThemeChanger } from "../../redux/Action"
import { useEffect } from "react";

const Widgets = ({local_varaiable,ThemeChanger}) => {
	useEffect(() => {
		if (localStorage.Syntoverticalstyles == 'doublemenu') {
			const theme = store.getState()
			ThemeChanger({ ...theme, "toggled": "" })
		}
	}, [])
	
	

	const data = [
		{ country: "cn", value: 1389618778 }, // china
		{ country: "in", value: 1311559204 }, // india
		{ country: "us", value: 331883986 }, // united states
		{ country: "id", value: 264935824 }, // indonesia
		{ country: "pk", value: 210797836 }, // pakistan
		{ country: "br", value: 210301591 }, // brazil
		{ country: "ng", value: 208679114 }, // nigeria
		{ country: "bd", value: 161062905 }, // bangladesh
		{ country: "ru", value: 141944641 }, // russia
		{ country: "mx", value: 127318112 }, // mexico
	  ];

	return (
		<div>
			<PageHeader currentpage="Widgets" activepage="Home" mainpage="Widgets" />
			<div className= "grid grid-cols-12 gap-x-6">
				<div className= "xl:!col-span-3 sm:col-span-6 col-span-12">
					<div className= "box">
						<div className= "box-body">
							<div className= "flex">
								<div className= "ltr:mr-3 rtl:ml-3">
									<span className= "avatar w-6 h-6 shadow-sm rounded-full">
										<svg xmlns="http://www.w3.org/2000/svg" className= "fill-info" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z"/><path fill="#fff" d="M94.3 71.4c-.5-3.6-2.3-6.4-5.4-8.2-1.4-.8-3.1-1.4-4.7-2.1.2-.1.3-.3.4-.3 7.9-4.1 7.2-16.3 1.5-20.5-2.3-1.7-4.9-2.8-7.7-3.4-2-.4-3.9-.7-6-1.1 0-3.5.1-8.5.1-12.4H65c0 3.8-.1 8.7-.1 12.1H59c0-3.5 0-8.3.1-12.1h-7.4c0 4-.1 8.8-.1 12.3-5.1 0-10-.1-15-.1 0 2.7 0 5.3-.1 7.9h3c.9 0 1.9 0 2.8.1 2.6.2 3.9 1.6 3.9 4.2l-.3 31.9c0 2.3-1 3.3-3.3 3.3h-5c-.5 3-1 5.9-1.6 8.9 5 .1 10 .1 15 .2 0 3.8 0 8.7-.1 12.7h7.4c0-4 .1-8.7.1-12.5 2.1.1 4 .1 5.9.2 0 3.8-.1 8.4-.1 12.3h7.4c0-4 .1-8.7.1-12.4.3 0 .5-.1.6-.1 3.5-.6 7.2-.9 10.6-1.7 4.5-1.1 8.1-3.7 9.9-8.2 1.7-3.6 2-7.2 1.5-11zM59 44.3c4.6 0 9.1-.4 13.4 1.5 2.8 1.2 4.2 3.5 4 6.3-.2 2.9-1.9 5-4.8 6-4.1 1.3-8.3 1.3-12.7 1.1 0-5 .1-9.8.1-14.9zm16.2 37.1c-4.1 1.8-8.5 1.8-12.8 1.9-1.2 0-2.4-.1-3.8-.1.1-5.5.1-10.9.2-16.4 5.6 0 11.2-.4 16.5 1.9 2.7 1.2 4.3 3.3 4.3 6.4 0 3.1-1.6 5.1-4.4 6.3z"/></svg>
									</span>
								</div>
								<div className= "flex-auto">
									<div className= "flex flex-wrap items-center justify-between text-sm mb-2">
										<span className= "flex-auto">Bitcoin</span>
										<span className= "ml-1 text-gray-500 dark:text-white/70">BTC</span>
									</div>
									<div className= "flex flex-wrap items-center justify-between">
										<h5 className= "font-semibold mb-0 text-xl">$12,800</h5>
										<div className= "flex-auto">
											<span className= "ltr:ml-2 rtl:mr-2 badge bg-success/10 rounded-full text-success py-1">+25.8%</span>
										</div>
										<Bitcoins/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className= "xl:!col-span-3 sm:col-span-6 col-span-12">
					<div className= "box">
						<div className= "box-body">
							<div className= "flex">
								<div className= "ltr:mr-3 rtl:ml-3">
									<span className= "avatar w-6 h-6 shadow-sm rounded-full">
										<svg xmlns="http://www.w3.org/2000/svg" className= "fill-success" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z"></path><path fill="#fff" d="M65.2 87.2v22.7l28.1-39.5zM92.3 63.1l-27.1-45v32.7zM65.2 53.3v28l26.9-15.7zM35.8 63.1l27-45v32.7zM62.8 53.3v28L35.9 65.6zM62.8 87.2v22.7L34.7 70.4z"></path></svg>
									</span>
								</div>
								<div className= "flex-auto">
									<div className= "flex flex-wrap items-center justify-between text-sm mb-2">
										<span className= "flex-auto">Ethereum</span>
										<span className= "ml-1 text-gray-500 dark:text-white/70">ETH</span>
									</div>
									<div className= "flex flex-wrap items-center justify-between">
										<h5 className= "font-semibold mb-0 text-xl">$18,600</h5>
										<div className= "flex-auto">
											<span className= "ltr:ml-2 rtl:mr-2 badge bg-success/10 rounded-full text-success py-1">+12.9%</span>
										</div>
										<Ethereum/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className= "xl:!col-span-3 sm:col-span-6 col-span-12">
					<div className= "box">
						<div className= "box-body">
							<div className= "flex">
								<div className= "ltr:mr-3 rtl:ml-3">
									<span className= "avatar w-6 h-6 shadow-sm rounded-full">
										<svg xmlns="http://www.w3.org/2000/svg" className= "fill-danger" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z"></path><path fill="#fff" d="M20.8 89.3c1.4-4.1 2.7-7.9 4.1-11.8.1-.4.9-.7 1.3-.7 2.3-.1 4.7 0 7 0H79c1.2 0 1.8-.4 2.1-1.5 2.5-7.5 5.2-15 7.8-22.5.1-.4.2-.8.4-1.4H33.8c1.4-4.2 2.8-8.1 4.1-12 .1-.3.7-.6 1.1-.6 1.4-.1 2.8 0 4.2 0 18.8 0 37.6.1 56.3-.1 5.6-.1 11.6 4.3 9.2 12.5-1.8 6.1-4.1 12.1-6.2 18.2-.7 2.1-1.4 4.1-2.1 6.2-2.6 7.2-7.9 11.6-15.2 13.6-.7.2-1.4.2-2.1.2H22.3c-.4-.1-.8-.1-1.5-.1z"></path><path fill="#fff" d="M55.9 58.1c-1.4 4-2.8 7.7-4.2 11.4-.1.3-.7.5-1 .5H19.2c-.1 0-.3-.1-.6-.2 1.3-3.7 2.6-7.3 4-10.9.1-.3.7-.7 1-.7 10.7-.1 21.4-.1 32.3-.1z"></path></svg>
									</span>
								</div>
								<div className= "flex-auto">
									<div className= "flex flex-wrap items-center justify-between text-sm mb-2">
										<span className= "flex-auto">Dash</span>
										<span className= "ml-1 text-gray-500 dark:text-white/70">DSH</span>
									</div>
									<div className= "flex flex-wrap items-center justify-between">
										<h5 className= "font-semibold mb-0 text-xl">$16,580</h5>
										<div className= "flex-auto">
											<span className= "ltr:ml-2 rtl:mr-2 badge bg-success/10 rounded-full text-success py-1">+15.7%</span>
										</div>
										<DshCoin/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className= "xl:!col-span-3 sm:col-span-6 col-span-12">
					<div className= "box">
						<div className= "box-body">
							<div className= "flex">
								<div className= "ltr:mr-3 rtl:ml-3">
									<span className= "avatar w-6 h-6 shadow-sm rounded-full">
										<svg xmlns="http://www.w3.org/2000/svg" className= "fill-warning" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z"></path><path fill="#fff" d="M63.8 22.6c3.7-.1 7.2.6 10.2 2.7 1.4.9 2.4.8 3.6-.5 2.4-2.6 5-5 7.5-7.6.9-.9 1.8-1.5 2.9-.2 1.1 1.1.8 2-.2 2.9-2.6 2.6-5 5.2-7.6 7.8-1.1 1.1-1.3 1.9-.5 3.3 5.8 10.4 2.9 22.5-8.6 28.1-1.1.5-2.3.8-3.5 1-1.4.3-1.9 1-1.9 2.5.1 3 .1 6 0 8.9 0 1.6.5 2.3 2.1 2.7 6.2 1.5 10.6 5.2 13.3 10.9 2.6 5.5 1.9 15.4-3.8 21.3-4.8 4.9-13.2 6.9-19.5 4.4-7.5-3-12.1-9.6-12.2-17.5-.1-9.6 5.1-16.4 14.3-19 1.4-.4 2.2-1 2.1-2.5-.1-3.4 0-6.8-.2-10.2 0-.6-1.1-1.4-1.8-1.6-6-1.6-10.4-5.2-12.9-10.8-5.6-13 4.3-27.4 16.7-26.6zM79 92.8c0-7.9-6.9-15.1-14.5-15.1-8-.1-15.3 7-15.4 15-.1 7.9 7.3 15.6 14.9 15.5 8.1-.1 15-7.2 15-15.4zM49.3 41.1c0 8.6 6.6 15.6 14.9 15.6 7.7 0 14.8-7.1 14.8-15.1 0-7.4-5.5-15.2-14.7-15-8.4.1-14.9 6.3-15 14.5z"></path></svg>
									</span>
								</div>
								<div className= "flex-auto">
									<div className= "flex flex-wrap items-center justify-between text-sm mb-2">
										<span className= "flex-auto">Golem</span>
										<span className= "ml-1 text-gray-500 dark:text-white/70">GLM</span>
									</div>
									<div className= "flex flex-wrap items-center justify-between">
										<h5 className= "font-semibold mb-0 text-xl">$12,545</h5>
										<div className= "flex-auto">
											<span className= "ltr:ml-2 rtl:mr-2 badge bg-success/10 rounded-full text-success py-1">+12.1%</span>
										</div>
										<Golem/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className= "grid grid-cols-12 gap-x-6">
				<div className= "xxl:!col-span-2 lg:col-span-6 col-span-12">
					<div className= "box">
						<div className= "box-body">
							<div className= "flex flex-wrap justify-between">
								<div className= "flex-auto">
									<p className= "mb-0 text-gray-500 dark-gray-500 text-sm">Total Candidates</p>
									<div className= "flex items-center">
										<span className= "text-xl font-semibold text-gray-800 dark:text-white">9,231</span>
										<span className= "text-xs text-success ltr:ml-2 rtl:mr-2"><i className= "ti ti-trending-up ltr:mr-1 rtl:ml-1"></i>0.5%</span>
									</div>
								</div>
								<div>
									<span className= "avatar avatar-sm inline-flex justify-center items-center rounded-full bg-primary/10 text-primary text-lg">
										<i className= "ri-group-fill text-base"></i>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className= "box">
						<div className= "box-body">
							<div className= "flex flex-wrap justify-between">
								<div className= "flex-auto">
									<p className= "mb-0 text-gray-500 dark:text-white/70 text-sm">Total Subscriptions</p>
									<div className= "flex items-center">
										<span className= "text-xl font-semibold text-gray-800 dark:text-white">3,571</span>
										<span className= "text-xs text-success ltr:ml-2 rtl:mr-2"><i className= "ti ti-trending-up ltr:mr-1 rtl:ml-1"></i>0.42%</span>
									</div>
								</div>
								<div>
									<span className= "avatar avatar-sm inline-flex justify-center items-center rounded-full bg-secondary/10 text-secondary text-lg">
										<i className= "ri-contacts-fill text-base"></i>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className= "box">
						<div className= "box-body">
							<div className= "flex flex-wrap  justify-between">
								<div className= "flex-auto">
									<p className= "mb-0 text-gray-500 dark:text-white/70 text-sm">Page Views</p>
									<div className= "flex items-center">
										<span className= "text-xl font-semibold text-gray-800 dark:text-white">1,986</span>
										<span className= "text-xs text-success ltr:ml-2 rtl:mr-2"><i className= "ti ti-trending-up ltr:mr-1 rtl:ml-1"></i>5.1%</span>
									</div>
								</div>
								<div>
									<span className= "avatar avatar-sm inline-flex justify-center items-center rounded-full bg-success/10 text-success text-lg">
										<i className= "ri-eye-fill text-base"></i>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className= "box">
						<div className= "box-body">
							<div className= "flex flex-wrap justify-between">
								<div className= "flex-auto">
									<p className= "mb-0 text-gray-500 dark:text-white/70 text-sm">New Registrations</p>
									<div className= "flex items-center">
										<span className= "text-xl font-semibold text-gray-800 dark:text-white">773</span>
										<span className= "text-xs text-success ltr:ml-2 rtl:mr-2"><i className= "ti ti-trending-up ltr:mr-1 rtl:ml-1"></i>3.5%</span>
									</div>
								</div>
								<div>
									<span className= "avatar avatar-sm inline-flex justify-center items-center rounded-full bg-info/10 text-info text-lg">
										<i className= "ri-file-text-fill text-base"></i>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className= "xxl:!col-span-5 lg:col-span-6 col-span-12">
					<div className= "grid grid-cols-12 gap-x-6">
						<div className= "col-span-12 sm:col-span-6">
							<div className= "box">
								<div className= "box-body">
									<div className= "flex flex-wrap mb-2">
										<div className= "flex-auto">
											<p className= "mb-0 text-gray-500 dark:text-white/70">Total Recruiters</p>
										</div>
										<div className= "ltr:ml-2 rtl:mr-2">
											<span className= "avatar avatar-sm inline-flex justify-center items-center rounded-sm text-white bg-info text-lg">
												<i className= "ri-account-box-line"></i>
											</span>
										</div>
									</div>
									<span className= "text-xl font-semibold text-gray-800 dark:text-white">9,231</span>
									<span className= "text-xs text-success ltr:ml-1 rtl:mr-1"><i className= "ti ti-trending-up ltr:mr-1 rtl:ml-1"></i>0.5%</span>
								</div>
							</div>
						</div>
						<div className= "col-span-12 sm:col-span-6">
							<div className= "box !bg-primary text-white">
								<div className= "box-body">
									<div className= "flex mb-2">
										<div className= "flex-auto">
											<p className= "mb-0 opacity-70">Premium Recruiters</p>
										</div>
										<div className= "ltr:ml-2 rtl:mr-2">
											<span className= "avatar avatar-sm inline-flex justify-center items-center rounded-sm bg-secondary text-white shadow-sm text-lg ring-0">
												<i className= "ri-account-box-line"></i>
											</span>
										</div>
									</div>
									<span className= "text-xl font-semibold text-white">9,231</span>
									<span className= "text-xs opacity-70 ltr:ml-1 rtl:mr-1"><i className= "ti ti-trending-up ltr:mr-1 rtl:ml-1"></i>0.5%</span>
								</div>
							</div>
						</div>
						<div className= "col-span-12 sm:col-span-6">
							<div className= "box overflow-hidden">
								<div className= "box-body p-0">
									<div className= "p-4">
										<div className= "flex items-center mb-2">
											<span className= "avatar avatar-sm inline-flex justify-center items-center rounded-full bg-secondary text-white ltr:mr-2 rtl:ml-2">
												<i className= "ri-file-list-2-line text-base"></i>
											</span>
											<p className= "mb-0 flex-auto text-gray-500 dark:text-white/70">Total Revenue</p>
										</div>
										<span className= "text-xl font-semibold text-gray-800 dark:text-white">$12,897</span>
										<span className= "text-xs text-success ltr:ml-1 rtl:mr-1"><i className= "ti ti-trending-up ltr:mr-1 rtl:ml-1"></i>3.5%</span>
									</div>
									<WidgetsRevenue/>
								</div>
							</div>
						</div>
						<div className= "col-span-12 sm:col-span-6">
							<div className= "box">
								<div className= "box-body">
									<div className= "flex items-center mb-3">
										<span className= "avatar avatar-sm inline-flex justify-center items-center rounded-full bg-success text-white ltr:mr-2 rtl:ml-2">
											<i className= "ri-group-line text-base"></i>
										</span>
										<p className= "mb-0 flex-auto text-gray-500 dark:text-white/70">Active Members</p>
									</div>
									<span className= "text-xl font-semibold text-gray-800 dark:text-white">$12,897</span>
									<span className= "text-xs text-success"><i className= "ti ti-trending-up ltr:mr-1 rtl:ml-1"></i>3.5%</span>
									<div className= "font-normal flex items-center mb-2 mt-4">
										<p className= "mb-0 flex-auto">Active Candidates</p>
										<span>3,274</span>
									</div>
									<div className= "ti-main-progress bg-gray-200 dark:bg-black/20 mb-4">
										<div className= "ti-main-progress-bar bg-success text-xs text-white text-center" role="progressbar" style={{width: "25%"}} aria-valuenow={25} aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<div className= "font-normal flex items-center mb-2">
										<p className= "mb-0 flex-auto">Active Recruiters</p>
										<span>8,726</span>
									</div>
									<div className= "ti-main-progress bg-gray-200 dark:bg-black/20 mb-2">
										<div className= "ti-main-progress-bar bg-success text-xs text-white text-center" role="progressbar" style={{width: "75%"}} aria-valuenow={75} aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
								<div className= "box-footer text-center">
									<div className= "d-grid">
										<Link to="#" className= "text-primary">View Details <i className= "ti ti-external-link"></i></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className= "xxl:!col-span-3 lg:col-span-6 col-span-12">
					<div className= "box">
						<div className= "box-body">
							<div className= "flex items-center mb-2">
								<div className= "flex-auto flex items-center">
									<div className= "ltr:mr-2 rtl:ml-2">
										<span className= "avatar inline-flex justify-center items-center rounded-sm bg-primary text-white text-xl"><i className= "ri-group-line"></i></span>
									</div>
									<div className= "flex-auto">
										<p className= "mb-0 ">Premium Recruiters</p>
										<span className= "text-success text-xs">7 New</span>
									</div>
								</div>
								<div>
									<Link to="#" className= "ti-btn ti-btn-soft-primary" aria-label="View All"><i className= "ri-arrow-right-s-line rtl:rotate-180"></i></Link>
								</div>
							</div>
							<p className= "mb-2 text-xl font-semibold text-gray-800 dark:text-white">386</p>
							<p className= "mb-2 text-gray-500 dark:text-white/70 font-normal">Recents</p>
							<div className= "flex items-center justify-between">
								<div className= "flex -space-x-2 rtl:space-x-reverse">
									<img className= "avatar w-6 h-6 rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
									<img className= "avatar w-6 h-6 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
									<img className= "avatar w-6 h-6 rounded-full" src= {ALLImages('jpg58')} alt="Image Description"/>
									<img className= "avatar w-6 h-6 rounded-full" src= {ALLImages('jpg59')} alt="Image Description"/>
									<span className= "inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
										<span className= "font-medium text-gray-500 leading-none dark:text-white/70">4+</span>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className= "box">
						<div className= "box-body p-4">
							<div className= "flex items-center">
								<div className= "flex-auto">
									<p className= "mb-1 text-xl text-gray-800 dark:text-white font-semibold">1,773</p>
									<p className= "mb-0 text-gray-500 dark:text-white/70 text-sm">Active Members</p>
									<p className= "mb-0 text-xs"><Link to="#" className= "text-success underline">View All</Link></p>
								</div>
								<div className= "ltr:ml-2 rtl:mr-2">
									<span className= "avatar inline-flex items-center justify-center bg-info text-white rounded-full text-xl"><i className= "ri-group-line"></i></span>
								</div>
							</div>
						</div>
					</div>
					<div className= "box">
						<div className= "box-body p-4">
							<div className= "flex items-center">
								<div className= "flex-auto">
									<p className= "mb-1 text-xl text-gray-800 dark:text-white font-semibold">116</p>
									<p className= "mb-0 text-gray-500 dark:text-white/70 text-sm">Registrations</p>
									<p className= "mb-0 text-xs"><Link to="#" className= "text-success underline">View All</Link></p>
								</div>
								<div className= "ltr:ml-2 rtl:mr-2">
									<span className= "avatar inline-flex items-center justify-center text-white bg-success rounded-full text-xl"><i className= "ri-file-text-line"></i></span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className= "xxl:!col-span-2 lg:col-span-6 col-span-12">
					<div className= "box !bg-primary text-white">
						<div className= "box-header flex justify-between border-b-0 bg-white/10">
							<div className= "box-title my-auto text-white">
                            Premium Recruiters
							</div>
							<div>
								<button aria-label="button" type="button" className= "ti-btn ti-btn-primary p-2"><i className= "ri-arrow-right-s-line rtl:rotate-180"></i></button>
							</div>
						</div>
						<div className= "box-body">
							<div className= "flex flex-wrap ">
								<div className= "flex-auto overflow-hidden">
									<p className= "mb-2 leading-none text-xl font-semibold">9,231</p>
									<p className= "mb-0 text-xs text-white opacity-70">
										<span><i className= "ri-arrow-up-s-fill"></i> 2.3%</span>
										<span className= "opacity-70 ltr:ml-1 rtl:mr-1">From Last Month</span>
									</p>
								</div>
								<div>
									<span className= "avatar inline-flex justify-center items-center w-6 h-6 bg-success rounded-full ring-0 text-white"><i className= "text-xs ri-group-fill"></i></span>
								</div>
							</div>
						</div>
					</div>
					<div className= "box">
						<div className= "box-body p-0">
							<div className= "p-3">
								<div className= "flex flex-wrap mb-1">
									<Link aria-label="anchor" to="#" className= "ltr:pr-2 rtl:pl-2">
										<span className= "avatar rounded-sm inline-flex justify-center items-center border border-gray-200 dark:border-white/10 text-primary"><i className= "ri-apple-fill text-lg"></i></span>
									</Link>
									<div className= "flex-auto">
										<div className= "flex flex-wrap items-center justify-between mb-1 text-sm">
											<span className= "font-semibold">App1e</span>
											<span className= "text-success text-end"><i className= "ti ti-trending-up text-xs ltr:mr-1 rtl:ml-1"></i>0.14%</span>
										</div>
										<div className= "flex flex-wrap items-center justify-between text-xs mb-3">
											<span className= "text-gray-500 dark:text-white/70">$12,289.44</span>
											<span className= "text-success text-end">+$1,780.80</span>
										</div>
									</div>
								</div>
								<div className= "flex items-center">
									<Link to="#" className= "flex-auto ti-btn m-0 py-1 bg-gray-100 text-gray-800 hover:text-white hover:bg-black/20 ring-offset-white focus:ring-white/10 dark:bg-black/20 dark:hover:bg-gray-900 dark:text-white ltr:mr-2 rtl:ml-2">Short</Link>
									<Link to="#" className= "flex-auto ti-btn ti-btn-soft-primary py-1">Buy</Link>
								</div>
							</div>
						</div>
					</div>
					<div className= "box">
						<div className= "box-body p-0">
							<div className= "p-3">
								<div className= "flex flex-wrap mb-1">
									<Link  aria-label="anchor" to="#" className= "ltr:pr-2 rtl:pl-2">
										<span className= "avatar rounded-sm inline-flex justify-center items-center border border-gray-200 dark:border-white/10 text-primary"><i className= "ri-bit-coin-fill text-lg"></i></span>
									</Link>
									<div className= "flex-auto">
										<div className= "flex flex-wrap items-center justify-between mb-1 text-sm">
											<span className= "font-semibold">Bitcoin</span>
											<span className= "text-success text-end"><i className= "ti ti-trending-up text-xs ltr:mr-1 rtl:ml-1"></i>2.14%</span>
										</div>
										<div className= "flex flex-wrap items-center justify-between text-xs mb-3">
											<span className= "text-gray-500 dark:text-white/70">$58,151.02</span>
											<span className= "text-success text-end">+$5,745.62</span>
										</div>
									</div>
								</div>
								<div className= "flex items-center">
									<Link to="#" className= "flex-auto ti-btn m-0 py-1 bg-gray-100 text-gray-800 hover:text-white hover:bg-black/20 ring-offset-white focus:ring-white/10 dark:bg-black/20 dark:hover:bg-gray-900 dark:text-white ltr:mr-2 rtl:ml-2">Short</Link>
									<Link to="#" className= "flex-auto ti-btn ti-btn-soft-primary py-1">Buy</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className= "grid grid-cols-12 gap-x-6">
				<div className= "xxl:!col-span-3 md:col-span-6 col-span-12">
					<div className= "box">
						<div className= "box-body">
							<div className= "flex justify-between mb-6">
								<div className= "flex-auto flex">
									<div className= "ltr:mr-2 rtl:ml-2">
										<span className= "avatar inline-flex justify-center items-center avatar-sm text-primary border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-black/20 rounded-sm"><i className= "ti ti-users text-lg"></i></span>
									</div>
									<div className= "flex-auto">
										<p className= "font-semibold text-sm mb-0">Total Candidates</p>
										<p className= "mb-0 text-gray-500 dark:text-white/70 text-xs opacity-70">Magna sit elitr kasd consetetur.</p>
									</div>
								</div>
								<div className= "hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button  aria-label="button" type="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										<i className= "text-sm leading-none ti ti-dots"></i> </button>
									<div className= "hs-dropdown-menu ti-dropdown-menu">
										<Link className= "ti-dropdown-item" to="#">Action</Link>
										<Link className= "ti-dropdown-item" to="#">Another Action</Link>
										<Link className= "ti-dropdown-item" to="#">Something else
                                        here</Link>
									</div>
								</div>
							</div>
							<div className= "flex items-center mb-0">
								<p className= "mb-0 text-xl font-semibold">2,460</p>
								<span className= "text-gray-500 dark:text-white/70 ltr:ml-2 rtl:mr-2"><i className= "ti ti-trending-up align-middle text-success ltr:mr-1 rtl:ml-1"></i>2.5%</span>
							</div>
							<div className= "flex items-center">
								<div className= "flex-auto">
									<div className= "ti-main-progress bg-gray-200 dark:bg-black/20">
										<div className= "ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "14%"}} aria-valuenow={14} aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
								<div className= "ltr:ml-3 rtl:mr-3">
									<span className= "text-xs text-gray-500 dark:text-white/70">14% Target</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className= "xxl:!col-span-3 md:col-span-6 col-span-12">
					<div className= "box">
						<div className= "box-body">
							<div className= "flex justify-between mb-6">
								<div className= "flex-auto flex">
									<div className= "ltr:mr-2 rtl:ml-2">
										<span className= "avatar inline-flex justify-center items-center avatar-sm text-secondary border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-black/20 rounded-sm"><i className= "ti ti-user-circle text-lg"></i></span>
									</div>
									<div className= "flex-auto">
										<p className= "font-semibold text-sm mb-0">Recruiters</p>
										<p className= "mb-0 text-gray-500 dark:text-white/70 text-xs opacity-70">Elitr at gubergren sit sed.</p>
									</div>
								</div>
								<div className= "hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button  aria-label="button" type="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										<i className= "text-sm leading-none ti ti-dots"></i> </button>
									<div className= "hs-dropdown-menu ti-dropdown-menu">
										<Link className= "ti-dropdown-item" to="#">Action</Link>
										<Link className= "ti-dropdown-item" to="#">Another Action</Link>
										<Link className= "ti-dropdown-item" to="#">Something else
                                        here</Link>
									</div>
								</div>
							</div>
							<div className= "flex items-center mb-0">
								<p className= "mb-0 text-xl font-semibold">7,539</p>
								<span className= "text-gray-500 dark:text-white/70 ltr:ml-2 rtl:mr-2"><i className= "ti ti-trending-up align-middle text-success ltr:mr-1 rtl:ml-1"></i>3.1%</span>
							</div>
							<div className= "flex items-center">
								<div className= "flex-auto">
									<div className= "ti-main-progress bg-gray-200 dark:bg-black/20">
										<div className= "ti-main-progress-bar bg-secondary text-xs text-white text-center" role="progressbar" style={{width: "55%"}} aria-valuenow={55} aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
								<div className= "ltr:ml-3 rtl:mr-3">
									<span className= "text-xs text-gray-500 dark:text-white/70">55% Target</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className= "xxl:!col-span-3 md:col-span-6 col-span-12">
					<div className= "box">
						<div className= "box-body">
							<div className= "flex justify-between mb-6">
								<div className= "flex-auto flex">
									<div className= "ltr:mr-2 rtl:ml-2">
										<span className= "avatar inline-flex justify-center items-center avatar-sm text-success border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-black/20 rounded-sm"><i className= "ti ti-view-360 text-lg"></i></span>
									</div>
									<div className= "flex-auto">
										<p className= "font-semibold text-sm mb-0">Page Views</p>
										<p className= "mb-0 text-gray-500 dark:text-white/70 text-xs opacity-70">Sed duo ut sanctus gubergren.</p>
									</div>
								</div>
								<div className= "hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button  aria-label="button" type="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										<i className= "text-sm leading-none ti ti-dots"></i> </button>
									<div className= "hs-dropdown-menu ti-dropdown-menu">
										<Link className= "ti-dropdown-item" to="#">Action</Link>
										<Link className= "ti-dropdown-item" to="#">Another Action</Link>
										<Link className= "ti-dropdown-item" to="#">Something else
                                        here</Link>
									</div>
								</div>
							</div>
							<div className= "flex items-center mb-0">
								<p className= "mb-0 text-xl font-semibold">13,693</p>
								<span className= "text-gray-500 dark:text-white/70 ltr:ml-2 rtl:mr-2"><i className= "ti ti-trending-up align-middle text-success ltr:mr-1 rtl:ml-1"></i>5.4%</span>
							</div>
							<div className= "flex items-center">
								<div className= "flex-auto">
									<div className= "ti-main-progress bg-gray-200 dark:bg-black/20">
										<div className= "ti-main-progress-bar bg-success text-xs text-white text-center" role="progressbar" style={{width: "24%"}} aria-valuenow={24} aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
								<div className= "ltr:ml-3 rtl:mr-3">
									<span className= "text-xs text-gray-500 dark:text-white/70">24% Target</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className= "xxl:!col-span-3 md:col-span-6 col-span-12">
					<div className= "box">
						<div className= "box-body">
							<div className= "flex justify-between mb-6">
								<div className= "flex-auto flex">
									<div className= "ltr:mr-2 rtl:ml-2">
										<span className= "avatar inline-flex justify-center items-center avatar-sm text-info border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-black/20 rounded-sm"><i className= "ti ti-view-360 text-lg"></i></span>
									</div>
									<div className= "flex-auto">
										<p className= "font-semibold text-sm mb-0">Total Subscriptions</p>
										<p className= "mb-0 text-gray-500 dark:text-white/70 text-xs opacity-70">Invidunt magna voluptua.</p>
									</div>
								</div>
								<div className= "hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button  aria-label="button" type="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										<i className= "text-sm leading-none ti ti-dots"></i> </button>
									<div className= "hs-dropdown-menu ti-dropdown-menu">
										<Link className= "ti-dropdown-item" to="#">Action</Link>
										<Link className= "ti-dropdown-item" to="#">Another Action</Link>
										<Link className= "ti-dropdown-item" to="#">Something else
                                        here</Link>
									</div>
								</div>
							</div>
							<div className= "flex items-center mb-0">
								<p className= "mb-0 text-xl font-semibold">1,116</p>
								<span className= "text-gray-500 dark:text-white/70 ltr:ml-2 rtl:mr-2"><i className= "ti ti-trending-down align-middle text-danger ltr:mr-1 rtl:ml-1"></i>3.2%</span>
							</div>
							<div className= "flex items-center">
								<div className= "flex-auto">
									<div className= "ti-main-progress bg-gray-200 dark:bg-black/20">
										<div className= "ti-main-progress-bar bg-info text-xs text-white text-center" role="progressbar" style={{width: "67%"}} aria-valuenow={67} aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
								<div className= "ltr:ml-3 rtl:mr-3">
									<span className= "text-xs text-gray-500 dark:text-white/70">67% Target</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className= "grid grid-cols-12 gap-x-6">
				<div className= "xxl:col-span-9 col-span-12">
					<div className= "box">
						<div className= "box-body p-0">
							<div className= "grid grid-cols-12">
								<div className= "col-span-12 md:col-span-3 md:ltr:border-r md:rtl:border-l md:border-b-0 border-b border-dashed border-gray-200 dark:border-white/10">
									<div className= "flex flex-wrap p-6">
										<div className= "ltr:mr-3 rtl:ml-3 leading-none">
											<span className= "avatar inline-flex justify-center items-center avatar-sm rounded-full bg-primary text-white shadow-sm">
												<i className= "ti ti-package text-lg"></i>
											</span>
										</div>
										<div className= "flex-auto">
											<h5 className= "font-semibold mb-1">45,280</h5>
											<p className= "text-gray-500 dark:text-white/70 mb-0 text-xs">Total Products</p>
										</div>
										<div className="mt-2">
											<span className= "badge bg-success/10 text-success py-1 rounded-sm"><i className= "ri-arrow-up-s-line align-middle"></i>1.31%</span>
										</div>
									</div>
								</div>
								<div className= "col-span-12 md:col-span-3 md:ltr:border-r md:rtl:border-l md:border-b-0 border-b border-dashed border-gray-200 dark:border-white/10">
									<div className= "flex flex-wrap p-6">
										<div className= "ltr:mr-3 rtl:ml-3 leading-none">
											<span className= "avatar inline-flex justify-center items-center avatar-sm rounded-full bg-secondary text-white shadow-sm">
												<i className= "ti ti-rocket text-lg"></i>
											</span>
										</div>
										<div className= "flex-auto">
											<h5 className= "font-semibold mb-1">10,500</h5>
											<p className= "text-gray-500 dark:text-white/70 mb-0 text-xs">Total Sales</p>
										</div>
										<div className="mt-2">
											<span className= "badge bg-danger/10 text-danger py-1 rounded-sm"><i className= "ri-arrow-down-s-line align-middle"></i>1.14%</span>
										</div>
									</div>
								</div>
								<div className= "col-span-12 md:col-span-3 md:ltr:border-r md:rtl:border-l md:border-b-0 border-b border-dashed border-gray-200 dark:border-white/10">
									<div className= "flex flex-wrap p-6">
										<div className= "ltr:mr-3 rtl:ml-3 leading-none">
											<span className= "avatar inline-flex justify-center items-center avatar-sm rounded-full bg-success text-white shadow-sm">
												<i className= "ti ti-wallet text-lg"></i>
											</span>
										</div>
										<div className= "flex-auto">
											<h5 className= "font-semibold mb-1">$69,270</h5>
											<p className= "text-gray-500 dark:text-white/70 mb-0 text-xs">Income</p>
										</div>
										<div className="mt-2">
											<span className= "badge bg-success/10 text-success py-1 rounded-sm"><i className= "ri-arrow-up-s-line align-middle"></i>2.58%</span>
										</div>
									</div>
								</div>
								<div className= "col-span-12 md:col-span-3">
									<div className= "flex flex-wrap p-6">
										<div className= "ltr:mr-3 rtl:ml-3 leading-none">
											<span className= "avatar inline-flex justify-center items-center avatar-sm rounded-full bg-warning text-white shadow-sm">
												<i className= "ti ti-box text-lg"></i>
											</span>
										</div>
										<div className= "flex-auto">
											<h5 className= "font-semibold mb-1">12,088</h5>
											<p className= "text-gray-500 dark:text-white/70 mb-0 text-xs">Total Orders</p>
										</div>
										<div className="mt-2">
											<span className= "badge bg-success/10 text-success py-1 rounded-sm"><i className= "ri-arrow-up-s-line align-middle"></i>12.05%</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className= "col-span-12 xxl:col-span-3">
					<div className= "box !bg-primary text-white">
						<div className= "box-body p-0">
							<div className= "flex p-6">
								<div className= "ltr:mr-3 rtl:ml-3 leading-none">
									<span className= "avatar inline-flex justify-center items-center avatar-sm rounded-full bg-white text-primary shadow-sm">
										<i className= "ti ti-coin text-lg"></i>
									</span>
								</div>
								<div className= "flex-auto">
									<h5 className= "font-semibold mb-1">$21,520</h5>
									<p className= "opacity-70 mb-0 text-xs">Expenses</p>
								</div>
								<div>
									<span className= "badge bg-success text-white py-1 rounded-sm"><i className= "ri-arrow-up-s-line align-middle"></i>14.69%</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className= "grid grid-cols-12 gap-x-6">
				<div className= "xxl:!col-span-2 md:!col-span-4 sm:col-span-6 col-span-12">
					<div className= "box border-t-4 !border-t-primary">
						<div className= "box-body">
							<div className= "text-center">
								<span className= "avatar inline-flex justify-center items-center avatar-sm bg-primary text-white shadow-sm rounded-full mb-2">
									<i className= "ri-briefcase-2-line text-base"></i>
								</span>
								<p className= "text-sm font-semibold mb-2">Total Sales</p>
								<div className= "flex items-center justify-center">
									<h5 className= "mb-0 font-semibold">15,800</h5>
									<span className= "badge bg-success/10 rounded-full ltr:ml-1 rtl:mr-1 py-1 text-success">+25.8%</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className= "xxl:!col-span-2 md:!col-span-4 sm:col-span-6 col-span-12">
					<div className= "box border-t-4 !border-t-secondary">
						<div className= "box-body">
							<div className= "text-center">
								<span className= "avatar inline-flex justify-center items-center avatar-sm bg-secondary text-white shadow-sm rounded-full mb-2">
									<i className= "ri-bill-line text-base"></i>
								</span>
								<p className= "text-sm font-semibold mb-2">Total Tax</p>
								<div className= "flex items-center justify-center">
									<h5 className= "mb-0 font-semibold">$12,650</h5>
									<span className= "badge bg-success/10 rounded-full ltr:ml-1 rtl:mr-1 py-1 text-success">+12.2%</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className= "xxl:!col-span-2 md:!col-span-4 sm:col-span-6 col-span-12">
					<div className= "box border-t-4 !border-t-success">
						<div className= "box-body">
							<div className= "text-center">
								<span className= "avatar inline-flex justify-center items-center avatar-sm bg-success text-white shadow-sm rounded-full mb-2">
									<i className= "ri-wallet-2-line text-base"></i>
								</span>
								<p className= "text-sm font-semibold mb-2">Total Income</p>
								<div className= "flex items-center justify-center">
									<h5 className= "mb-0 font-semibold">$14,800</h5>
									<span className= "badge bg-success/10 rounded-full ltr:ml-1 rtl:mr-1 py-1 text-success">+7.45%</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className= "xxl:!col-span-2 md:!col-span-4 sm:col-span-6 col-span-12">
					<div className= "box border-t-4 !border-t-info">
						<div className= "box-body">
							<div className= "text-center">
								<span className= "avatar inline-flex justify-center items-center avatar-sm bg-info text-white shadow-sm rounded-full mb-2">
									<i className= "ri-line-chart-line text-base"></i>
								</span>
								<p className= "text-sm font-semibold mb-2">Total Expenses</p>
								<div className= "flex items-center justify-center">
									<h5 className= "mb-0 font-semibold">$7,566</h5>
									<span className= "badge bg-danger/10 rounded-full ltr:ml-1 rtl:mr-1 py-1 text-danger">-3.21%</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className= "xxl:!col-span-2 md:!col-span-4 sm:col-span-6 col-span-12">
					<div className= "box border-t-4 !border-t-warning">
						<div className= "box-body">
							<div className= "text-center">
								<span className= "avatar inline-flex justify-center items-center avatar-sm bg-warning text-white shadow-sm rounded-full mb-2">
									<i className= "ri-money-dollar-box-line text-base"></i>
								</span>
								<p className= "text-sm font-semibold mb-2">Sales Profit</p>
								<div className= "flex items-center justify-center">
									<h5 className= "mb-0 font-semibold">$7,474</h5>
									<span className= "badge bg-success/10  rounded-full ltr:ml-1 rtl:mr-1 py-1 text-success">+36.03%</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className= "xxl:!col-span-2 md:!col-span-4 sm:col-span-6 col-span-12">
					<div className= "box border-t-4 !border-t-danger">
						<div className= "box-body">
							<div className= "text-center">
								<span className= "avatar inline-flex justify-center items-center avatar-sm bg-danger text-white shadow-sm rounded-full mb-2">
									<i className= "ri-profile-line text-base"></i>
								</span>
								<p className= "text-sm font-semibold mb-2">Opex Ratio</p>
								<div className= "flex items-center justify-center">
									<h5 className= "mb-0 font-semibold">32%</h5>
									<span className= "badge bg-success/10  rounded-full ltr:ml-1 rtl:mr-1 py-1 text-success">+0.89%</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className= "grid grid-cols-12 gap-x-6">
				<div className= "xxl:col-span-6 col-span-12">
					<div className= "box">
						<div className= "box-header justify-between flex">
							<div className= "box-title my-auto">
                            Upcoming Events
							</div>
							<div>
								<button aria-label="button" type="button" className= "ti-btn ti-btn-soft-primary ltr:mr-2 rtl:ml-2 py-1 m-0">View All</button>
							</div>
						</div>
						<div className= "box-body overflow-auto">
							<nav className= "flex space-x-1 rtl:space-x-reverse justify-between mb-6" aria-label="Tabs" role="tablist">
								<button type="button" className= "hs-tab-active:text-white hs-tab-active:bg-primary dark:hs-tab-active:bg-primary dark:hs-tab-active:text-white p-2 sm:p-3 w-full text-sm leading-none font-medium text-center bg-gray-100 text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:text-white/70 dark:hover:text-gray-300 active" id="mon-item-1" data-hs-tab="#mon-1" aria-controls="mon-1" role="tab">
									<span className= "block mb-1">09</span>
									<span className= "block mb-0 opacity-70 text-xs">Mon</span>
								</button>
								<button type="button" className= "hs-tab-active:text-white hs-tab-active:bg-primary dark:hs-tab-active:bg-primary dark:hs-tab-active:text-white p-2 sm:p-3 w-full text-sm leading-none font-medium text-center bg-gray-100 text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:text-white/70 dark:hover:text-gray-300" id="tue-item-2" data-hs-tab="#tue-2" aria-controls="tue-2" role="tab">
									<span className= "block mb-1">10</span>
									<span className= "block mb-0 opacity-70 text-xs">Tue</span>
								</button>
								<button type="button" className= "hs-tab-active:text-white hs-tab-active:bg-primary dark:hs-tab-active:bg-primary dark:hs-tab-active:text-white p-2 sm:p-3 w-full text-sm leading-none font-medium text-center bg-gray-100 text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:text-white/70 dark:hover:text-gray-300" id="wed-item-2" data-hs-tab="#wed-2" aria-controls="wed-2" role="tab">
									<span className= "block mb-1">11</span>
									<span className= "block mb-0 opacity-70 text-xs">Wed</span>
								</button>
								<button type="button" className= "hs-tab-active:text-white hs-tab-active:bg-primary dark:hs-tab-active:bg-primary dark:hs-tab-active:text-white p-2 sm:p-3 w-full text-sm leading-none font-medium text-center bg-gray-100 text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:text-white/70 dark:hover:text-gray-300" id="thu-item-2" data-hs-tab="#thu-2" aria-controls="thu-2" role="tab">
									<span className= "block mb-1">12</span>
									<span className= "block mb-0 opacity-70 text-xs">Thu</span>
								</button>
								<button type="button" className= "hs-tab-active:text-white hs-tab-active:bg-primary dark:hs-tab-active:bg-primary dark:hs-tab-active:text-white p-2 sm:p-3 w-full text-sm leading-none font-medium text-center bg-gray-100 text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:text-white/70 dark:hover:text-gray-300" id="fri-item-2" data-hs-tab="#fri-2" aria-controls="fri-2" role="tab">
									<span className= "block mb-1">13</span>
									<span className= "block mb-0 opacity-70 text-xs">Fri</span>
								</button>
								<button type="button" className= "hidden sm:block hs-tab-active:text-white hs-tab-active:bg-primary dark:hs-tab-active:bg-primary dark:hs-tab-active:text-white p-2 sm:p-3 w-full text-sm leading-none font-medium text-center bg-gray-100 text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:text-white/70 dark:hover:text-gray-300" id="sat-item-2" data-hs-tab="#sat-2" aria-controls="sat-2" role="tab">
									<span className= "block mb-1">14</span>
									<span className= "block mb-0 opacity-70 text-xs">Sat</span>
								</button>
								<button type="button" className= "hidden sm:block hs-tab-active:text-white hs-tab-active:bg-primary dark:hs-tab-active:bg-primary dark:hs-tab-active:text-white p-2 sm:p-3 w-full text-sm leading-none font-medium text-center bg-gray-100 text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:text-white/70 dark:hover:text-gray-300" id="sun-item-2" data-hs-tab="#sun-2" aria-controls="sun-2" role="tab">
									<span className= "block mb-1">15</span>
									<span className= "block mb-0 opacity-70 text-xs">Sun</span>
								</button>
							</nav>
							<div className= "pt-2">
								<div id="mon-1" className= "" role="tabpanel" aria-labelledby="mon-item-1">
									<ul className= "list-unstyled mb-0 upcoming-events-list">
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">Meeting with client</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">Video Conference</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>9:00am - 10:00am</span>
												</div>
											</div>
										</li>
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">Lunch with team members</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">Dolores Ait Labore Sit</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>12:00pm - 12:45am</span>
												</div>
											</div>
										</li>
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">General board meeting</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">Golden PArk</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>4:00pm - 5:30pm</span>
												</div>
											</div>
										</li>
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">Create New Registration Page</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">2UA Project</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>5:00pm - 5:45pm</span>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div id="tue-2" className= "hidden" role="tabpanel" aria-labelledby="tue-item-2">
									<ul className= "list-unstyled mb-0 upcoming-events-list">
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">Meeting with client</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">Video Conference</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>9:00am - 10:00am</span>
												</div>
											</div>
										</li>
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">Lunch with team members</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">Dolores Ait Labore Sit</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>12:00pm - 12:45am</span>
												</div>
											</div>
										</li>
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">General board meeting</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">Golden PArk</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>4:00pm - 5:30pm</span>
												</div>
											</div>
										</li>
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">Create New Registration Page</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">2UA Project</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>5:00pm - 5:45pm</span>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div id="wed-2" className= "hidden" role="tabpanel" aria-labelledby="wed-item-2">
									<ul className= "list-unstyled mb-0 upcoming-events-list">
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">Meeting with client</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">Video Conference</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>9:00am - 10:00am</span>
												</div>
											</div>
										</li>
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">Lunch with team members</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">Dolores Ait Labore Sit</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>12:00pm - 12:45am</span>
												</div>
											</div>
										</li>
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">General board meeting</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">Golden PArk</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>4:00pm - 5:30pm</span>
												</div>
											</div>
										</li>
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">Create New Registration Page</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">2UA Project</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>5:00pm - 5:45pm</span>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div id="thu-2" className= "hidden" role="tabpanel" aria-labelledby="thu-item-2">
									<ul className= "list-unstyled mb-0 upcoming-events-list">
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">Meeting with client</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">Video Conference</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>9:00am - 10:00am</span>
												</div>
											</div>
										</li>
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">Lunch with team members</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">Dolores Ait Labore Sit</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>12:00pm - 12:45am</span>
												</div>
											</div>
										</li>
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">General board meeting</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">Golden PArk</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>4:00pm - 5:30pm</span>
												</div>
											</div>
										</li>
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">Create New Registration Page</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">2UA Project</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>5:00pm - 5:45pm</span>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div id="fri-2" className= "hidden" role="tabpanel" aria-labelledby="fri-item-2">
									<ul className= "list-unstyled mb-0 upcoming-events-list">
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">Meeting with client</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">Video Conference</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>9:00am - 10:00am</span>
												</div>
											</div>
										</li>
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">Lunch with team members</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">Dolores Ait Labore Sit</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>12:00pm - 12:45am</span>
												</div>
											</div>
										</li>
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">General board meeting</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">Golden PArk</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>4:00pm - 5:30pm</span>
												</div>
											</div>
										</li>
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">Create New Registration Page</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">2UA Project</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>5:00pm - 5:45pm</span>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div id="sat-2" className= "hidden" role="tabpanel" aria-labelledby="sat-item-2">
									<ul className= "list-unstyled mb-0 upcoming-events-list">
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">Meeting with client</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">Video Conference</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>9:00am - 10:00am</span>
												</div>
											</div>
										</li>
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">Lunch with team members</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">Dolores Ait Labore Sit</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>12:00pm - 12:45am</span>
												</div>
											</div>
										</li>
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">General board meeting</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">Golden PArk</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>4:00pm - 5:30pm</span>
												</div>
											</div>
										</li>
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">Create New Registration Page</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">2UA Project</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>5:00pm - 5:45pm</span>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div id="sun-2" className= "hidden" role="tabpanel" aria-labelledby="sun-item-2">
									<ul className= "list-unstyled mb-0 upcoming-events-list">
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">Meeting with client</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">Video Conference</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>9:00am - 10:00am</span>
												</div>
											</div>
										</li>
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">Lunch with team members</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">Dolores Ait Labore Sit</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>12:00pm - 12:45am</span>
												</div>
											</div>
										</li>
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">General board meeting</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">Golden PArk</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>4:00pm - 5:30pm</span>
												</div>
											</div>
										</li>
										<li className= "ti-list-group border-0 p-0 w-full">
											<div className= "sm:flex justify-between w-full">
												<div className= "flex-auto">
													<p className= "mb-0 text-sm">Create New Registration Page</p>
													<p className= "mb-0 text-gray-500 dark:text-white/70">2UA Project</p>
												</div>
												<div>
													<span className= "text-gray-500 dark:text-white/70"><i className= "ri-time-line align-middle ltr:mr-1 rtl:ml-1"></i>5:00pm - 5:45pm</span>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className= "xxl:col-span-6 col-span-12">
					<div className= "box">
						<div className= "box-header justify-between flex">
							<div className= "box-title my-auto">
                            Timeline
							</div>
							<div>
								<button type="button"  aria-label="button" className= "ti-btn ti-btn-soft-primary ltr:mr-2 rtl:ml-2 py-1 m-0">View All</button>
							</div>
						</div>
						<div className= "box-body">
							<div className= "overflow-x-auto">
								<ul className= "list-unstyled timeline-widget mb-0">
									<li className= "ti-list-group border-0 p-0 w-full timeline-widget-list">
										<div className= "flex w-full">
											<div className= "ltr:mr-12 rtl:ml-12 text-center">
												<span className= "block text-sm font-semibold">02</span>
												<span className= "block text-xs text-gray-500 dark:text-white/70">Mon</span>
											</div>
											<div className= "flex flex-wrap flex-auto items-center justify-between">
												<div>
													<p className= "mb-1 truncate timeline-widget-content text-sm text-wrap">You have an announcement - Ipsum Est Diam Eirmod</p>
													<p className= "mb-0 text-xs leading-none text-gray-500 dark:text-white/70">10:00AM<span className= "badge bg-primary/10 ltr:ml-2 rtl:mr-2 py-1 text-xs text-primary rounded-sm">Announcement</span></p>
												</div>
												<div className= "hs-dropdown ti-dropdown">
													<Link  aria-label="anchor" to="#" className= "text-lg leading-none text-gray-500">
														<i className= "ri-more-2-line"></i>
													</Link>
													<div className= "hs-dropdown-menu ti-dropdown-menu hidden">
														<Link className= "ti-dropdown-item" to="#">
                                                        Action
														</Link>
														<Link className= "ti-dropdown-item" to="#">
                                                        Another action
														</Link>
														<Link className= "ti-dropdown-item" to="#">
                                                        Something else here
														</Link>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className= "ti-list-group border-0 p-0 w-full timeline-widget-list">
										<div className= "flex w-full">
											<div className= "ltr:mr-12 rtl:ml-12 text-center">
												<span className= "block text-sm font-semibold">15</span>
												<span className= "block text-xs text-gray-500 dark:text-white/70">Sun</span>
											</div>
											<div className= "flex flex-wrap flex-auto items-center justify-between">
												<div>
													<p className= "mb-1 truncate timeline-widget-content text-sm text-wrap">National holiday - Vero Jayanti</p>
													<p className= "mb-0 text-xs leading-none text-gray-500 dark:text-white/70"><span className= "badge bg-warning/10 ltr:ml-2 rtl:mr-2 py-1 text-xs text-warning rounded-sm">Holiday</span></p>
												</div>
												<div className= "hs-dropdown ti-dropdown">
													<Link  aria-label="anchor" to="#" className= "text-lg leading-none text-gray-500">
														<i className= "ri-more-2-line"></i>
													</Link>
													<div className= "hs-dropdown-menu ti-dropdown-menu hidden">
														<Link className= "ti-dropdown-item" to="#">
                                                        Action
														</Link>
														<Link className= "ti-dropdown-item" to="#">
                                                        Another action
														</Link>
														<Link className= "ti-dropdown-item" to="#">
                                                        Something else here
														</Link>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className= "ti-list-group border-0 p-0 w-full timeline-widget-list">
										<div className= "flex w-full">
											<div className= "ltr:mr-12 rtl:ml-12 text-center">
												<span className= "block text-sm font-semibold">23</span>
												<span className= "block text-xs text-gray-500 dark:text-white/70">Mon</span>
											</div>
											<div className= "flex flex-wrap flex-auto items-center justify-between">
												<div>
													<p className= "mb-1 truncate timeline-widget-content text-sm text-wrap">John pup birthday - Team Member</p>
													<p className= "mb-4 text-xs leading-none text-gray-500 dark:text-white/70">09:00AM<span className= "badge bg-success/10 ltr:ml-2 rtl:mr-2">Birthday</span></p>
													<p className= "mb-1 truncate timeline-widget-content text-sm text-wrap">Amet sed no dolor kasd - Et Dolores Tempor Erat</p>
													<p className= "mb-0 text-xs leading-none text-gray-500 dark:text-white/70">04:00PM<span className= "badge bg-primary/10 ltr:ml-2 rtl:mr-2 py-1 text-xs text-primary rounded-sm">Announcement</span></p>
												</div>
												<div className= "hs-dropdown ti-dropdown">
													<Link aria-label="anchor" to="#" className= "text-lg leading-none text-gray-500">
														<i className= "ri-more-2-line"></i>
													</Link>
													<div className= "hs-dropdown-menu ti-dropdown-menu hidden">
														<Link className= "ti-dropdown-item" to="#">
                                                        Action
														</Link>
														<Link className= "ti-dropdown-item" to="#">
                                                        Another action
														</Link>
														<Link className= "ti-dropdown-item" to="#">
                                                        Something else here
														</Link>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className= "ti-list-group border-0 p-0 w-full timeline-widget-list">
										<div className= "flex w-full">
											<div className= "ltr:mr-12 rtl:ml-12 text-center">
												<span className= "block text-sm font-semibold">31</span>
												<span className= "block text-xs text-gray-500 dark:text-white/70">Tue</span>
											</div>
											<div className= "flex flex-wrap flex-auto items-center justify-between">
												<div>
													<p className= "mb-1 truncate timeline-widget-content text-sm text-wrap">National Holiday - Dolore Ipsum</p>
													<p className= "mb-0 text-xs leading-none text-gray-500 dark:text-white/70"><span className= "badge bg-warning/10 ltr:ml-2 rtl:mr-2 py-1 text-xs text-warning rounded-sm">Holiday</span></p>
												</div>
												<div className= "hs-dropdown ti-dropdown">
													<Link  aria-label="anchor" to="#" className= "text-lg leading-none text-gray-500">
														<i className= "ri-more-2-line"></i>
													</Link>
													<div className= "hs-dropdown-menu ti-dropdown-menu hidden">
														<Link className= "ti-dropdown-item" to="#">
                                                        Action
														</Link>
														<Link className= "ti-dropdown-item" to="#">
                                                        Another action
														</Link>
														<Link className= "ti-dropdown-item" to="#">
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
				<div className= "xxl:col-span-6 col-span-12">
					<div className= "box">
						<div className= "box-header flex justify-between">
							<div className= "box-title my-auto">
                            Traffic Sources
							</div>
							<div className= "hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
								<button type="button"
									className="hs-dropdown-toggle ti-dropdown-toggle text-xs rounded-sm px-2 py-1 !border-0 hover:!bg-transparent text-gray-500 shadow-none">
                                View All<i
										className="text-xs leading-none ri-arrow-down-s-line align-middle ml-1"></i></button>
								<div className= "hs-dropdown-menu ti-dropdown-menu">
									<Link className= "ti-dropdown-item" to="#">Download</Link>
									<Link className= "ti-dropdown-item" to="#">Import</Link>
									<Link className= "ti-dropdown-item" to="#">Export</Link>
								</div>
							</div>
						</div>
						<div className= "box-body p-0 widget-table">
							<div className= "overflow-auto">
								<table className= "ti-custom-table ti-custom-table-head whitespace-nowrap">
									<thead>
										<tr>
											<th scope="col" className= "text-center">Browser</th>
											<th scope="col">Sessions</th>
											<th scope="col">Views</th>
											<th scope="col">Traffic</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div className= "flex items-center">
													<span className= "avatar rounded-full avatar-xs p-2 bg-primary ltr:mr-2 rtl:ml-2 inline-flex justify-center align-center">
														<i className= "ri-google-fill text-lg text-white leading-none"></i>
													</span>
													<div className= "font-semibold">Google</div>
												</div>
											</td>
											<td>
												<span><i className= "ri-arrow-up-s-fill ltr:mr-1 rtl:ml-1 text-success align-middle text-lg"></i>23,379</span>
											</td>
											<td>
												<span>16,890</span>
											</td>
											<td>
												<div className= "ti-main-progress bg-gray-200 dark:bg-black/20">
													<div className= "ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "34%"}} aria-valuenow={34} aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className= "flex items-center">
													<span className= "avatar rounded-full avatar-xs p-2 bg-primary ltr:mr-2 rtl:ml-2 inline-flex justify-center align-center">
														<i className= "ri-safari-line text-lg text-white leading-none"></i>
													</span>
													<div className= "font-semibold">Safari</div>
												</div>

											</td>
											<td>
												<span><i className= "ri-arrow-up-s-fill ltr:mr-1 rtl:ml-1 text-success align-middle text-lg"></i>78,973</span>
											</td>
											<td>
												<span>29,906</span>
											</td>
											<td>
												<div className= "ti-main-progress bg-gray-200 dark:bg-black/20">
													<div className= "ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "58%"}} aria-valuenow={58} aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className= "flex items-center">
													<span className= "avatar rounded-full avatar-xs p-2 bg-primary ltr:mr-2 rtl:ml-2 inline-flex justify-center align-center">
														<i className= "ri-opera-fill text-lg text-white leading-none"></i>
													</span>
													<div className= "font-semibold">Opera</div>
												</div>

											</td>
											<td>
												<span><i className= "ri-arrow-up-s-fill ltr:mr-1 rtl:ml-1 text-success align-middle text-lg"></i>12,457</span>
											</td>
											<td>
												<span>8,674</span>
											</td>
											<td>
												<div className= "ti-main-progress bg-gray-200 dark:bg-black/20">
													<div className= "ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "62%"}} aria-valuenow={62} aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className= "flex items-center">
													<span className= "avatar rounded-full avatar-xs p-2 bg-primary ltr:mr-2 rtl:ml-2 inline-flex justify-center align-center">
														<i className= "ri-edge-fill text-lg text-white leading-none"></i>
													</span>
													<div className= "font-semibold">Edge</div>
												</div>

											</td>
											<td>
												<span><i className= "ri-arrow-up-s-fill ltr:mr-1 rtl:ml-1 text-success align-middle text-lg"></i>8,570</span>
											</td>
											<td>
												<span>4,980</span>
											</td>
											<td>
												<div className= "ti-main-progress bg-gray-200 dark:bg-black/20">
													<div className= "ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "71%"}} aria-valuenow={71} aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className= "flex items-center">
													<span className= "avatar rounded-full avatar-xs p-2 bg-primary ltr:mr-2 rtl:ml-2 inline-flex justify-center align-center">
														<i className= "ri-firefox-fill text-lg text-white leading-none"></i>
													</span>
													<div className= "font-semibold">Firefox</div>
												</div>

											</td>
											<td>
												<span><i className= "ri-arrow-up-s-fill ltr:mr-1 rtl:ml-1 text-success align-middle text-lg"></i>6,135</span>
											</td>
											<td>
												<span>4,436</span>
											</td>
											<td>
												<div className= "ti-main-progress bg-gray-200 dark:bg-black/20">
													<div className= "ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "48%"}} aria-valuenow={48} aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className= "flex items-center">
													<span className= "avatar rounded-full avatar-xs p-2 bg-primary ltr:mr-2 rtl:ml-2 inline-flex justify-center align-center">
														<i className= "ri-ubuntu-fill text-lg text-white leading-none"></i>
													</span>
													<div className= "font-semibold">Ubuntu</div>
												</div>

											</td>
											<td>
												<span><i className= "ri-arrow-up-s-fill ltr:mr-1 rtl:ml-1 text-success align-middle text-lg"></i>4,789</span>
											</td>
											<td>
												<span>2,447</span>
											</td>
											<td>
												<div className= "ti-main-progress bg-gray-200 dark:bg-black/20">
													<div className= "ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "28%"}} aria-valuenow={28} aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className= "xxl:col-span-6 col-span-12">
					<div className= "box">
						<div className= "box-header flex justify-between">
							<div className= "box-title my-auto">
                            Recent Tasks
							</div>
							<div className= "hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
								<button type="button"
									className="hs-dropdown-toggle ti-dropdown-toggle text-xs rounded-sm px-2 py-1 !border-0 hover:!bg-transparent text-gray-500 shadow-none">
                                View All<i
										className="text-xs leading-none ri-arrow-down-s-line align-middle ml-1"></i></button>
								<div className= "hs-dropdown-menu ti-dropdown-menu">
									<Link className= "ti-dropdown-item" to="#">Download</Link>
									<Link className= "ti-dropdown-item" to="#">Import</Link>
									<Link className= "ti-dropdown-item" to="#">Export</Link>
								</div>
							</div>
						</div>
						<div className= "box-body widget-table">
							<div className= "table-bordered rounded-sm overflow-auto">
								<table className= "ti-custom-table ti-custom-table-head whitespace-nowrap">
									<thead>
										<tr>
											<th scope="col">S.No</th>
											<th scope="col">Title</th>
											<th scope="col">Assigned To</th>
											<th scope="col">Progress</th>
											<th scope="col">Status</th>
											<th scope="col">Due Date</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>01</td>
											<td>Server Side Validation</td>
											<td>
												<div className= "flex -space-x-2 rtl:space-x-reverse">
													<img className= "avatar w-5 h-5 rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
													<img className= "avatar w-5 h-5 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
													<img className= "avatar w-5 h-5 rounded-full" src= {ALLImages('jpg58')} alt="Image Description"/>
													<img className= "avatar w-5 h-5 rounded-full" src= {ALLImages('jpg59')} alt="Image Description"/>
													<span className= "inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary border-2 border-primary dark:bg-primary dark:primary">
														<span className= "font-medium text-white leading-none dark:text-white">2+</span>
													</span>
												</div>
											</td>
											<td>
												<div className= "ti-main-progress bg-gray-200 dark:bg-black/20">
													<div className= "ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "60%"}} aria-valuenow={60} aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</td>
											<td>
												<span className= "badge bg-primary/10 text-primary py-1 rounded-sm">In Progress</span>
											</td>
											<td>
                                            17-04-2023
											</td>
										</tr>
										<tr>
											<td>02</td>
											<td>Multipurpose Dashboard Template</td>
											<td>

												<div className= "flex -space-x-2 rtl:space-x-reverse">
													<img className= "avatar w-5 h-5 rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
													<img className= "avatar w-5 h-5 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
												</div>
											</td>
											<td>
												<div className= "ti-main-progress bg-gray-200 dark:bg-black/20">
													<div className= "ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "0%"}} aria-valuenow={0}aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</td>
											<td>
												<span className= "badge bg-warning/10 text-warning py-1 rounded-sm">Pending</span>
											</td>
											<td>
                                            14-05-2023
											</td>
										</tr>
										<tr>
											<td>03</td>
											<td>Documentation Project</td>
											<td>

												<div className= "flex -space-x-2 rtl:space-x-reverse">
													<img className= "avatar w-5 h-5 rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
													<img className= "avatar w-5 h-5 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
													<img className= "avatar w-5 h-5 rounded-full" src= {ALLImages('jpg59')} alt="Image Description"/>
													<span className= "inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary border-2 border-primary dark:bg-primary dark:primary">
														<span className= "font-medium text-white leading-none dark:text-white">1+</span>
													</span>
												</div>
											</td>
											<td>
												<div className= "ti-main-progress bg-gray-200 dark:bg-black/20">
													<div className= "ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "100%"}} aria-valuenow={100} aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</td>
											<td>
												<span className= "badge bg-success/10 text-success py-1 rounded-sm">Completed</span>
											</td>
											<td>
                                            20-04-2023
											</td>
										</tr>
										<tr>
											<td>04</td>
											<td>HR Management Template Design</td>
											<td>
												<div className= "flex -space-x-2 rtl:space-x-reverse">
													<img className= "avatar w-5 h-5 rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
													<img className= "avatar w-5 h-5 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
													<img className= "avatar w-5 h-5 rounded-full" src= {ALLImages('jpg58')} alt="Image Description"/>
												</div>
											</td>
											<td>
												<div className= "ti-main-progress bg-gray-200 dark:bg-black/20">
													<div className= "ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "50%"}} aria-valuenow={50} aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</td>
											<td>
												<span className= "badge bg-primary/10 text-primary py-1 rounded-sm">In Progress</span>
											</td>
											<td>
                                            29-05-2023
											</td>
										</tr>
										<tr>
											<td>05</td>
											<td>Developing Backend</td>
											<td>
												<div className= "flex -space-x-2 rtl:space-x-reverse">
													<img className= "avatar w-5 h-5 rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
													<img className= "avatar w-5 h-5 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
													<img className= "avatar w-5 h-5 rounded-full" src= {ALLImages('jpg58')} alt="Image Description"/>
													<img className= "avatar w-5 h-5 rounded-full" src= {ALLImages('jpg59')} alt="Image Description"/>
													<span className= "inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary border-2 border-primary dark:bg-primary dark:primary">
														<span className= "font-medium text-white leading-none dark:text-white">3+</span>
													</span>
												</div>
											</td>
											<td>
												<div className= "ti-main-progress bg-gray-200 dark:bg-black/20">
													<div className= "ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "40%"}} aria-valuenow={40} aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</td>
											<td>
												<span className= "badge bg-primary/10 text-primary py-1 rounded-sm">In Progress</span>
											</td>
											<td>
                                            25-05-2023
											</td>
										</tr>
										<tr>
											<td>06</td>
											<td>	Design New Dashboard Template</td>
											<td>
												<div className= "flex -space-x-2 rtl:space-x-reverse">
													<img className= "avatar w-5 h-5 rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
													<img className= "avatar w-5 h-5 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
													<img className= "avatar w-5 h-5 rounded-full" src= {ALLImages('jpg58')} alt="Image Description"/>
													<img className= "avatar w-5 h-5 rounded-full" src= {ALLImages('jpg59')} alt="Image Description"/>
													<span className= "inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary border-2 border-primary dark:bg-primary dark:primary">
														<span className= "font-medium text-white leading-none dark:text-white">3+</span>
													</span>
												</div>
											</td>
											<td>
												<div className= "ti-main-progress bg-gray-200 dark:bg-black/20">
													<div className= "ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "100%"}} aria-valuenow={100} aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</td>
											<td>
												<span className= "badge bg-success/10 text-succbg-success py-1 rounded-sm">Completed</span>
											</td>
											<td>
                                            04-05-2023
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className= "grid grid-cols-12 gap-x-6">
				<div className= "col-span-12">
					<div className= "box">
						<div className= "box-header">
							<div className= "box-title">
                            Users By Country
							</div>
						</div>
						<div className= "box-body">
							<div className= "md:flex space-y-3 md:space-y-0 flex-wrap justify-between mb-2">
								<div className= "ltr:mr-12 rtl:ml-12 flex items-center">
									<div className= "ltr:mr-2 rtl:ml-2">
										<span className= "avatar inline-flex justify-center items-center rounded-full bg-primary/10 text-primary"><i className= "ri-user-3-line text-base"></i></span>
									</div>
									<div className= "flex-auto">
										<p className= "text-lg leading-none mb-0 text-primary font-semibold">25,350</p>
										<span className= "text-gray-500 dark:text-white/70 text-xs">This month</span>
									</div>
								</div>
								<div className= "ltr:mr-6 rtl:ml-6 flex items-center">
									<div className= "ltr:mr-2 rtl:ml-2">
										<span className= "avatar inline-flex justify-center items-center rounded-full bg-gray-100 dark:bg-black/20"><i className= "ri-user-3-line text-base"></i></span>
									</div>
									<div className= "flex-auto">
										<p className= "text-lg leading-none mb-0 font-semibold">19,200</p>
										<span className= "text-gray-500 dark:text-white/70 text-xs">Last month</span>
									</div>
								</div>
								<div className= "ltr:mr-6 rtl:ml-6 flex items-center">
									<div className= "ltr:mr-2 rtl:ml-2">
										<span className= "avatar inline-flex justify-center items-center rounded-full bg-success/10 text-success"><i className= "ri-user-3-line text-base"></i></span>
									</div>
									<div className= "flex-auto">
										<p className= "text-lg leading-none mb-0 text-success font-semibold">1,24,890</p>
										<span className= "text-gray-500 dark:text-white/70 text-xs">This Year</span>
									</div>
								</div>
								<div className= "ltr:mr-6 rtl:ml-6 flex items-center">
									<div className= "ltr:mr-2 rtl:ml-2">
										<span className= "avatar inline-flex justify-center items-center rounded-full bg-info/10 text-info"><i className= "ri-user-3-line text-base"></i></span>
									</div>
									<div className= "flex-auto">
										<p className= "text-lg leading-none mb-0 text-info font-semibold">1,24,890</p>
										<span className= "text-gray-500 dark:text-white/70 text-xs">This Year</span>
									</div>
								</div>
							</div>
							<div className= "sm:grid sm:grid-cols-12 gap-x-6 space-y-6 sm:space-y-0">
								<div className= "col-span-12 md:col-span-12 xl:col-span-5 my-auto">
									<div className= "h-full my-auto">
										<ul className= "list-group">
											<li className= "ti-list-group border-gray-200 bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white w-full">
												<div className= "flex items-center justify-between w-full">
													<div className="inline-flex align-middle">
														<i className= "ri-checkbox-blank-circle-fill text-primary my-auto text-xs ltr:mr-1 rtl:ml-1 align-middle"></i>Brazil</div>
													<div>1,290</div>
													<div className= "text-success"><i className= "ri-arrow-up-s-line align-middle ltr:mr-1 rtl:ml-1"></i>2.90%</div>
												</div>
											</li>
											<li className= "ti-list-group border-gray-200 bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white w-full">
												<div className= "flex items-center justify-between w-full">
													<div className="inline-flex align-middle"><i className= "ri-checkbox-blank-circle-fill text-secondary my-auto text-xs ltr:mr-1 rtl:ml-1 align-middle"></i>Greenland</div>
													<div>2,596</div>
													<div className= "text-danger"><i className= "ri-arrow-down-s-line align-middle ltr:mr-1 rtl:ml-1"></i>1.1%</div>
												</div>
											</li>
											<li className= "ti-list-group border-gray-200 bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white w-full">
												<div className= "flex items-center justify-between w-full">
													<div className="inline-flex align-middle"><i className= "ri-checkbox-blank-circle-fill text-success my-auto text-xs ltr:mr-1 rtl:ml-1 align-middle"></i>Russia</div>
													<div>3,710</div>
													<div className= "text-success"><i className= "ri-arrow-up-s-line align-middle ltr:mr-1 rtl:ml-1"></i>0.8%</div>
												</div>
											</li>
											<li className= "ti-list-group border-gray-200 bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white w-full">
												<div className= "flex items-center justify-between w-full">
													<div className="inline-flex align-middle"><i className= "ri-checkbox-blank-circle-fill text-warning my-auto text-xs ltr:mr-1 rtl:ml-1 align-middle"></i>Palestine</div>
													<div>1,116</div>
													<div className= "text-danger"><i className= "ri-arrow-up-s-line align-middle ltr:mr-1 rtl:ml-1"></i>10.06%</div>
												</div>
											</li>
											<li className= "ti-list-group border-gray-200 bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white w-full">
												<div className= "flex items-center justify-between w-full">
													<div className="inline-flex align-middle"><i className= "ri-checkbox-blank-circle-fill my-auto text-danger text-xs ltr:mr-1 rtl:ml-1 align-middle"></i>Canada</div>
													<div>12,150</div>
													<div className= "text-success"><i className= "ri-arrow-up-s-line align-middle ltr:mr-1 rtl:ml-1"></i>9.05%</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className= "col-span-12 md:col-span-12 xl:col-span-7 flex justify-center user-by-country">
									<WorldMap color="#5a66f1" tooltipBgColor='#5a66f1' value-suffix="people" size="lg" data={data} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className= "grid grid-cols-12 gap-x-6">
				<div className= "xxl:col-span-4 col-span-12">
					<div className= "box">
						<div className= "box-header">
							<div className= "box-title">Recent Applicants</div>
						</div>
						<div className= "box-body">
							<Applicants/>
						</div>
					</div>
				</div>
				<div className= "xxl:col-span-4 col-span-12">
					<div className= "box">
						<div className= "box-header">
							<div className= "box-title">Sessions By Device</div>
						</div>
						<div className= "box-body">
							<SessionsDevice/>
						</div>
					</div>
				</div>
				<div className= "xxl:col-span-4 col-span-12">
					<div className= "box">
						<div className= "box-header flex justify-between">
							<div className= "box-title my-auto">Target Report</div>
							<div className= "hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto">
								<button type="button"
									className="hs-dropdown-toggle px-2 py-1 ti-btn ti-btn-primary">Sort By<i className= "ri-arrow-down-s-line align-middle"></i></button>
								<div className= "hs-dropdown-menu ti-dropdown-menu">
									<Link className= "ti-dropdown-item" to="#">New</Link>
									<Link className= "ti-dropdown-item" to="#">popular</Link>
									<Link className= "ti-dropdown-item" to="#">Relevant</Link>
								</div>
							</div>
						</div>
						<div className= "box-body pb-4">
							<div className= "mb-6">
								<svg xmlns="http://www.w3.org/2000/svg" className= "ltr:float-right rtl:float-left text-primary" fill="currentColor" width="36px" height="36px" viewBox="0 0 24 24"><path fill="currentColor" d="M11,9h4a1,1,0,0,0,0-2H13V6a1,1,0,0,0-2,0V7a3,3,0,0,0,0,6h2a1,1,0,0,1,0,2H9a1,1,0,0,0,0,2h2v1a1,1,0,0,0,2,0V17a3,3,0,0,0,0-6H11a1,1,0,0,1,0-2Zm1-8A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"/></svg>
								<p className= "text-primary font-medium mb-2">Revenue by week</p>
								<h4 className= "mb-2 font-semibold">$54,125.03</h4>
								<span className= "text-danger ltr:mr-1 rtl:ml-1 text-sm"> - 1.3%<i className= "ri-arrow-down-s-fill align-middle"></i>  </span>
								<span className= "text-gray-500 dark:text-white/70 text-xs">33% of target reached</span>
							</div>
							<TargetReport/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	local_varaiable: state
  })

export default connect(mapStateToProps,{ThemeChanger})(Widgets);


// export default Widgets;
