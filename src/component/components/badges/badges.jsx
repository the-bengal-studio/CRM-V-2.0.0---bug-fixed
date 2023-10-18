import React from "react";
import { Link } from "react-router-dom";
import ALLImages from "../../../common/imagesData";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Badges = () => {
	return (
		<div>
         <PageHeader currentpage="Badges" activepage="Components" mainpage="Badges" />
			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Default Badges</h5>
						</div>
						<div className="box-body space-x-1 rtl:space-x-reverse">
							<span className="badge bg-primary text-white">Primary</span>
							<span className="badge bg-secondary text-white">Secondary</span>
							<span className="badge bg-warning text-white">Warning</span>
							<span className="badge bg-danger text-white">Danger</span>
							<span className="badge bg-info text-white">Info</span>
							<span className="badge bg-success text-white">Success</span>
							<span className="badge bg-red-500 text-white">Red</span>
							<span className="badge bg-yellow-500 text-white">Yellow</span>
							<span className="badge bg-green-500 text-white">Green</span>
							<span className="badge bg-indigo-500 text-white">Indigo</span>
							<span className="badge bg-purple-500 text-white">Purple</span>
							<span className="badge bg-pink-500 text-white">Pink</span>
							<span className="badge bg-gray-100 text-gray-500">Light</span>
							<span className="badge bg-gray-900 text-white">Dark</span>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Rounded Badges</h5>
						</div>
						<div className="box-body space-x-1 rtl:space-x-reverse">
							<span className="badge rounded-md bg-primary text-white">Primary</span>
							<span className="badge rounded-md bg-secondary text-white">Secondary</span>
							<span className="badge rounded-md bg-warning text-white">Warning</span>
							<span className="badge rounded-md bg-danger text-white">Danger</span>
							<span className="badge rounded-md bg-info text-white">Info</span>
							<span className="badge rounded-md bg-success text-white">Success</span>
							<span className="badge rounded-md bg-red-500 text-white">Red</span>
							<span className="badge rounded-md bg-yellow-500 text-white">Yellow</span>
							<span className="badge rounded-md bg-green-500 text-white">Green</span>
							<span className="badge rounded-md bg-indigo-500 text-white">Indigo</span>
							<span className="badge rounded-md bg-purple-500 text-white">Purple</span>
							<span className="badge rounded-md bg-pink-500 text-white">Pink</span>
							<span className="badge rounded-md bg-gray-100 text-gray-500">Light</span>
							<span className="badge rounded-md bg-gray-900 text-white">Dark</span>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Default Light Colored Badges</h5>
						</div>
						<div className="box-body space-x-1 rtl:space-x-reverse">
							<span className="badge bg-primary/10 text-primary">Primary</span>
							<span className="badge bg-secondary/10 text-secondary">Secondary</span>
							<span className="badge bg-warning/10 text-warning">Warning</span>
							<span className="badge bg-danger/10 text-danger">Danger</span>
							<span className="badge bg-info/10 text-info">Info</span>
							<span className="badge bg-success/10 text-success">Success</span>
							<span className="badge bg-red-100 text-red-800">Red</span>
							<span className="badge bg-yellow-100 text-yellow-800">Yellow</span>
							<span className="badge bg-green-100 text-green-800">Green</span>
							<span className="badge bg-indigo-100 text-indigo-800">Indigo</span>
							<span className="badge bg-purple-100 text-purple-800">Purple</span>
							<span className="badge bg-pink-100 text-pink-800">Pink</span>
							<span className="badge bg-gray-100/10 text-gray-500">Light</span>
							<span className="badge bg-gray-900/10 text-gray-900 dark:text-gray-300">Dark</span>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Rounded Light Colored Badges</h5>
						</div>
						<div className="box-body space-x-1 rtl:space-x-reverse">
							<span className="badge rounded-md bg-primary/10 text-primary">Primary</span>
							<span className="badge rounded-md bg-secondary/10 text-secondary">Secondary</span>
							<span className="badge rounded-md bg-warning/10 text-warning">Warning</span>
							<span className="badge rounded-md bg-danger/10 text-danger">Danger</span>
							<span className="badge rounded-md bg-info/10 text-info">Info</span>
							<span className="badge rounded-md bg-success/10 text-success">Success</span>
							<span className="badge rounded-md bg-red-100 text-red-800">Red</span>
							<span className="badge rounded-md bg-yellow-100 text-yellow-800">Yellow</span>
							<span className="badge rounded-md bg-green-100 text-green-800">Green</span>
							<span className="badge rounded-md bg-indigo-100 text-indigo-800">Indigo</span>
							<span className="badge rounded-md bg-purple-100 text-purple-800">Purple</span>
							<span className="badge rounded-md bg-pink-100 text-pink-800">Pink</span>
							<span className="badge rounded-md bg-gray-100/10 text-gray-500">Light</span>
							<span className="badge rounded-md bg-gray-900/10 text-gray-900 dark:text-gray-300">Dark</span>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Outline Badges</h5>
						</div>
						<div className="box-body space-x-1 rtl:space-x-reverse">
							<span className="badge border border-primary text-primary">Primary</span>
							<span className="badge border border-secondary text-secondary">Secondary</span>
							<span className="badge border border-warning text-warning">Warning</span>
							<span className="badge border border-danger text-danger">Danger</span>
							<span className="badge border border-info text-info">Info</span>
							<span className="badge border border-success text-success">Success</span>
							<span className="badge border border-red-500 text-red-500">Red</span>
							<span className="badge border border-yellow-500 text-yellow-500">Yellow</span>
							<span className="badge border border-green-500 text-green-500">Green</span>
							<span className="badge border border-indigo-500 text-indigo-500">Indigo</span>
							<span className="badge border border-purple-500 text-purple-500">Purple</span>
							<span className="badge border border-pink-500 text-pink-500">Pink</span>
							<span className="badge border border-gray-500 text-gray-500">Light</span>
							<span className="badge border border-gray-900 text-gray-900 dark:text-gray-300">Dark</span>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Rounded Outline Badges</h5>
						</div>
						<div className="box-body space-x-1 rtl:space-x-reverse">
							<span className="badge rounded-md border border-primary text-primary">Primary</span>
							<span className="badge rounded-md border border-secondary text-secondary">Secondary</span>
							<span className="badge rounded-md border border-warning text-warning">Warning</span>
							<span className="badge rounded-md border border-danger text-danger">Danger</span>
							<span className="badge rounded-md border border-info text-info">Info</span>
							<span className="badge rounded-md border border-success text-success">Success</span>
							<span className="badge rounded-md border border-red-500 text-red-500">Red</span>
							<span className="badge rounded-md border border-yellow-500 text-yellow-500">Yellow</span>
							<span className="badge rounded-md border border-green-500 text-green-500">Green</span>
							<span className="badge rounded-md border border-indigo-500 text-indigo-500">Indigo</span>
							<span className="badge rounded-md border border-purple-500 text-purple-500">Purple</span>
							<span className="badge rounded-md border border-pink-500 text-pink-500">Pink</span>
							<span className="badge rounded-md border border-gray-500 text-gray-500">Light</span>
							<span className="badge rounded-md border border-gray-900 text-gray-900 dark:text-gray-300">Dark</span>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Badges with Max-Width</h5>
						</div>
						<div className="box-body space-x-1 rtl:space-x-reverse">
							<span
								className="max-w-[10rem] truncate whitespace-nowrap inline-block py-1.5 px-3 rounded-md text-xs font-medium bg-primary/10 text-primary">This
                                    content is a little bit longer.</span>
							<span
								className="max-w-[10rem] truncate whitespace-nowrap inline-block py-1.5 px-3 rounded-md text-xs font-medium bg-red-100 text-red-800">This
                                    content is a little bit longer.</span>
							<span
								className="max-w-[10rem] truncate whitespace-nowrap inline-block py-1.5 px-3 rounded-md text-xs font-medium bg-yellow-100 text-yellow-800">This
                                    content is a little bit longer.</span>
							<span
								className="max-w-[10rem] truncate whitespace-nowrap inline-block py-1.5 px-3 rounded-md text-xs font-medium bg-orange-100 text-orange-800">This
                                    content is a little bit longer.</span>
							<span
								className="max-w-[10rem] truncate whitespace-nowrap inline-block py-1.5 px-3 rounded-md text-xs font-medium bg-green-100 text-green-800">This
                                    content is a little bit longer.</span>
							<span
								className="max-w-[10rem] truncate whitespace-nowrap inline-block py-1.5 px-3 rounded-md text-xs font-medium bg-indigo-100 text-indigo-800">This
                                    content is a little bit longer.</span>
						</div>
					</div>
				</div>
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Badge With Button</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse lg:space-y-0 space-y-2">
							<Link className="relative py-2 px-3 inline-flex justify-center items-center gap-1 rounded-md border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10"
								to="#">
                                    Notifications
								<span className="badge py-0.5 px-1.5 bg-black/50 text-white">5</span>
							</Link>
							<Link className="relative py-2 px-3 inline-flex justify-center items-center gap-1 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-0 focus:ring-red-500 focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10"
								to="#">
                                    Notifications
								<span className="badge py-0.5 px-1.5 bg-red-800 text-white">5</span>
							</Link>
							<Link className="relative py-2 px-3 inline-flex justify-center items-center gap-1 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-0 focus:ring-green-500 focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10"
								to="#">
                                    Notifications
								<span className="badge py-0.5 px-1.5 bg-green-800 text-white">5</span>
							</Link>
							<Link className="relative py-2 px-3 inline-flex justify-center items-center gap-1 rounded-md border border-transparent font-semibold bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-0 focus:ring-yellow-500 focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10"
								to="#">
                                    Notifications
								<span className="badge py-0.5 px-1.5 bg-yellow-800 text-white">5</span>
							</Link>
							<Link className="relative py-2 px-3 inline-flex justify-center items-center gap-1 rounded-md border border-transparent font-semibold bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-0 focus:ring-orange-500 focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10"
								to="#">
                                    Notifications
								<span className="badge py-0.5 px-1.5 bg-orange-800 text-white">5</span>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Badges with Remove Buton</h5>
						</div>
						<div className="box-body space-x-1 rtl:space-x-reverse">
							<span className="badge bg-primary/10 text-primary">
                                    Badge
								<button type="button"
									className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-primary hover:bg-primary hover:text-primary focus:outline-none focus:bg-primary focus:text-primary">
									<span className="sr-only">Remove badge</span>
									<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
										fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>
							</span>
							<span className="badge bg-yellow-100 text-yellow-800">
                                    Badge
								<button type="button"
									className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-yellow-600 hover:bg-yellow-200 hover:text-yellow-500 focus:outline-none focus:bg-yellow-200 focus:text-yellow-500">
									<span className="sr-only">Remove badge</span>
									<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
										fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>
							</span>
							<span className="badge bg-red-100 text-red-800">
                                    Badge
								<button type="button"
									className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-red-600 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:bg-red-200 focus:text-red-500">
									<span className="sr-only">Remove badge</span>
									<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
										fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>
							</span>
							<span className="badge bg-green-100 text-green-800">
                                    Badge
								<button type="button"
									className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-green-600 hover:bg-green-200 hover:text-green-500 focus:outline-none focus:bg-green-200 focus:text-green-500">
									<span className="sr-only">Remove badge</span>
									<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
										fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>
							</span>
							<span className="badge bg-purple-100 text-purple-800">
                                    Badge
								<button type="button"
									className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-purple-600 hover:bg-purple-200 hover:text-purple-500 focus:outline-none focus:bg-purple-200 focus:text-purple-500">
									<span className="sr-only">Remove badge</span>
									<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
										fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>
							</span>
							<span className="badge bg-pink-100 text-pink-800">
                                    Badge
								<button type="button"
									className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-pink-600 hover:bg-pink-200 hover:text-pink-500 focus:outline-none focus:bg-pink-200 focus:text-pink-500">
									<span className="sr-only">Remove badge</span>
									<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
										fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>
							</span>
							<span className="badge bg-orange-100 text-orange-800">
                                    Badge
								<button type="button"
									className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-orange-600 hover:bg-orange-200 hover:text-orange-500 focus:outline-none focus:bg-orange-200 focus:text-orange-500">
									<span className="sr-only">Remove badge</span>
									<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
										fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>
							</span>
							<span className="badge bg-indigo-100 text-indigo-800">
                                    Badge
								<button type="button"
									className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-indigo-600 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-200 focus:text-indigo-500">
									<span className="sr-only">Remove badge</span>
									<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
										fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>
							</span>
							<span className="badge bg-gray-100 text-gray-800">
                                    Badge
								<button type="button"
									className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
									<span className="sr-only">Remove badge</span>
									<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
										fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>
							</span>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Badge With Indicator</h5>
						</div>
						<div className="box-body space-x-1 rtl:space-x-reverse">
							<span className="badge bg-primary/10 text-primary">
								<span className="w-1.5 h-1.5 inline-block bg-primary rounded-full"></span>
                                    Badge
							</span>
							<span className="badge bg-yellow-100 text-yellow-800">
								<span className="w-1.5 h-1.5 inline-block bg-yellow-400 rounded-full"></span>
                                    Badge
							</span>
							<span className="badge bg-red-100 text-red-800">
								<span className="w-1.5 h-1.5 inline-block bg-red-400 rounded-full"></span>
                                    Badge
							</span>
							<span className="badge bg-green-100 text-green-800">
								<span className="w-1.5 h-1.5 inline-block bg-green-400 rounded-full"></span>
                                    Badge
							</span>
							<span className="badge bg-purple-100 text-purple-800">
								<span className="w-1.5 h-1.5 inline-block bg-purple-400 rounded-full"></span>
                                    Badge
							</span>
							<span className="badge bg-pink-100 text-pink-800">
								<span className="w-1.5 h-1.5 inline-block bg-pink-400 rounded-full"></span>
                                    Badge
							</span>
							<span className="badge bg-orange-100 text-orange-800">
								<span className="w-1.5 h-1.5 inline-block bg-orange-400 rounded-full"></span>
                                    Badge
							</span>
							<span className="badge bg-indigo-100 text-indigo-800">
								<span className="w-1.5 h-1.5 inline-block bg-indigo-400 rounded-full"></span>
                                    Badge
							</span>
							<span className="badge bg-gray-100 text-gray-800">
								<span className="w-1.5 h-1.5 inline-block bg-gray-400 rounded-full"></span>
                                    Badge
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Badge With Position</h5>
						</div>
						<div className="box-body grid">
							<Link className="mb-4 relative inline-flex flex-shrink-0 justify-center items-center h-[3.375rem] w-[3.375rem] rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
								to="#">
								<i className="ti ti-bell text-xl"></i>
								<span className="absolute top-0 ltr:left-0 rtl:right-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 bg-rose-500 text-white">99+</span>
							</Link>
							<Link className="mb-4 relative inline-flex flex-shrink-0 justify-center items-center h-[3.375rem] w-[3.375rem] rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
								to="#">
								<i className="ti ti-bell text-xl"></i>
								<span className="absolute top-0 ltr:right-0 rtl:left-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2 bg-rose-500 text-white">99+</span>
							</Link>
							<Link className="mb-4 relative inline-flex flex-shrink-0 justify-center items-center h-[3.375rem] w-[3.375rem] rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
								to="#">
								<i className="ti ti-bell text-xl"></i>
								<span className="absolute bottom-0 ltr:left-0 rtl:right-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform translate-y-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 bg-rose-500 text-white">99+</span>
							</Link>
							<Link className="mb-4 relative inline-flex flex-shrink-0 justify-center items-center h-[3.375rem] w-[3.375rem] rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
								to="#">
								<i className="ti ti-bell text-xl"></i>
								<span className="absolute bottom-0 ltr:right-0 rtl:left-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform translate-y-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2 bg-rose-500 text-white">99+</span>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Badge With Profile</h5>
						</div>
						<div className="box-body grid">
							<Link className="mb-4 relative inline-flex flex-shrink-0 justify-center items-center h-[3.375rem] w-[3.375rem] rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
								to="#">
								<img src={ALLImages('jpg57')} alt="profile-img" className="rounded-md"/>
								<span
									className="absolute top-0 ltr:left-0 rtl:right-0 inline-flex items-center w-3.5 h-3.5 rounded-full border-2 border-white text-xs font-medium transform -translate-y-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 bg-green-500 text-white">
									<span className="sr-only">Badge value</span>
								</span>
							</Link>
							<Link className="mb-4 relative inline-flex flex-shrink-0 justify-center items-center h-[3.375rem] w-[3.375rem] rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
								to="#">
								<img src={ALLImages('jpg57')} alt="profile-img" className="rounded-md"/>
								<span
									className="absolute top-0 ltr:right-0 rtl:left-0 inline-flex items-center w-3.5 h-3.5 rounded-full border-2 border-white text-xs font-medium transform -translate-y-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2 bg-green-500 text-white">
									<span className="sr-only">Badge value</span>
								</span>
							</Link>
							<Link className="mb-4 relative inline-flex flex-shrink-0 justify-center items-center h-[3.375rem] w-[3.375rem] rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
								to="#">
								<img src={ALLImages('jpg57')} alt="profile-img" className="rounded-md"/>
								<span
									className="absolute bottom-0 ltr:left-0 rtl:right-0 inline-flex items-center w-3.5 h-3.5 rounded-full border-2 border-white text-xs font-medium transform translate-y-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 bg-green-500 text-white">
									<span className="sr-only">Badge value</span>
								</span>
							</Link>
							<Link className="mb-4 relative inline-flex flex-shrink-0 justify-center items-center h-[3.375rem] w-[3.375rem] rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
								to="#">
								<img src={ALLImages('jpg57')} alt="profile-img" className="rounded-md"/>
								<span
									className="absolute bottom-0 ltr:right-0 rtl:left-0 inline-flex items-center w-3.5 h-3.5 rounded-full border-2 border-white text-xs font-medium transform translate-y-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2 bg-green-500 text-white">
									<span className="sr-only">Badge value</span>
								</span>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Customized Badges</h5>
						</div>
						<div className="box-body space-x-5 rtl:space-x-reverse flex jusftify-center items-center">
							<span className="badge rounded-md border border-danger text-base text-danger shadow-sm"><i className="ti ti-flame text-xl leading-none"></i>Hot</span>
							<span className="badge rounded-md bg-gray-100 text-gray-500"><i className="fe fe-eye"></i>13.2k</span>
							<span className="relative inline-flex flex-shrink-0 justify-center items-center rounded-md font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white">
								<span className="text-lg">Inbox</span>
								<span className="absolute top-0 ltr:right-0 rtl:left-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 rtl:-translate-x-1/2 bg-green-500 text-white">32</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Badges;
