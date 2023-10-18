import React from "react";
import { Link } from "react-router-dom";
import ALLImages from "../../../common/imagesData";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Avatars = () => {
	return (
		<div>
          <PageHeader currentpage="Avatars" activepage="Components" mainpage="Avatars" />

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Circular avatars
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-6">
							<img className="avatar avatar-xs rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
							<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
							<img className="avatar rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
							<img className="avatar avatar-lg rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Square avatars
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-6">
							<img className="rounded-sm avatar avatar-xs" src= {ALLImages('jpg57')} alt="Image Description"/>
							<img className="rounded-sm avatar avatar-sm" src= {ALLImages('jpg57')} alt="Image Description"/>
							<img className="rounded-sm avatar" src= {ALLImages('jpg57')} alt="Image Description"/>
							<img className="rounded-sm avatar avatar-lg" src= {ALLImages('jpg57')} alt="Image Description"/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Radius avatars
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-6">
							<img className="avatar avatar-xs rounded-md" src= {ALLImages('jpg57')} alt="Image Description"/>
							<img className="avatar avatar-sm rounded-md" src= {ALLImages('jpg57')} alt="Image Description"/>
							<img className="avatar rounded-md" src= {ALLImages('jpg57')} alt="Image Description"/>
							<img className="avatar avatar-lg rounded-md" src= {ALLImages('jpg57')} alt="Image Description"/>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Circular avatars With Top Status
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-6">
							<div className="relative inline-block">
								<img className="avatar avatar-xs rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute top-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-gray-400"></span>
							</div>
							<div className="relative inline-block">
								<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute top-0 ltr:right-0 rtl:left-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-red-400"></span>
							</div>
							<div className="relative inline-block">
								<img className="avatar rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span className="absolute top-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
							</div>
							<div className="relative inline-block">
								<img className="avatar avatar-lg rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute top-0 ltr:right-0 rtl:left-0 block h-3.5 w-3.5 rounded-full ring-2 ring-white bg-orange-400"></span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Square avatars With Top Status
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-6">
							<div className="relative inline-block">
								<img className="avatar rounded-sm avatar-xs" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute top-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full transform -translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-gray-400"></span>
							</div>
							<div className="relative inline-block">
								<img className="avatar rounded-sm avatar-sm" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute top-0 ltr:right-0 rtl:left-0 block h-2.5 w-2.5 rounded-full transform -translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-red-400"></span>
							</div>
							<div className="relative inline-block">
								<img className="avatar rounded-sm" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute top-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full transform -translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-green-400"></span>
							</div>
							<div className="relative inline-block">
								<img className="avatar rounded-sm avatar-lg" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute top-0 ltr:right-0 rtl:left-0 block h-3.5 w-3.5 rounded-full transform -translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-orange-400"></span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Radius avatars With Top Status
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-6">
							<div className="relative inline-block">
								<img className="avatar avatar-xs rounded-md" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute top-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full transform -translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-gray-400"></span>
							</div>
							<div className="relative inline-block">
								<img className="avatar avatar-sm rounded-md" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute top-0 ltr:right-0 rtl:left-0 block h-2.5 w-2.5 rounded-full transform -translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-red-400"></span>
							</div>
							<div className="relative inline-block">
								<img className="avatar rounded-md" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute top-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full transform -translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-green-400"></span>
							</div>
							<div className="relative inline-block">
								<img className="avatar avatar-lg rounded-md" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute top-0 ltr:right-0 rtl:left-0 block h-3.5 w-3.5 rounded-full transform -translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-orange-400"></span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Circular avatars With Bottom Status
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-6">
							<div className="relative inline-block">
								<img className="avatar avatar-xs rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-gray-400"></span>
							</div>
							<div className="relative inline-block">
								<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-red-400"></span>
							</div>
							<div className="relative inline-block">
								<img className="avatar rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
							</div>
							<div className="relative inline-block">
								<img className="avatar avatar-lg rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-3.5 w-3.5 rounded-full ring-2 ring-white bg-orange-400"></span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Square avatars With Bottom Status
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-6">
							<div className="relative inline-block">
								<img className="avatar rounded-sm avatar-xs" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-gray-400"></span>
							</div>
							<div className="relative inline-block">
								<img className="avatar rounded-sm avatar-sm" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-2.5 w-2.5 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-red-400"></span>
							</div>
							<div className="relative inline-block">
								<img className="avatar rounded-sm" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-green-400"></span>
							</div>
							<div className="relative inline-block">
								<img className="avatar rounded-sm avatar-lg" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-3.5 w-3.5 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-orange-400"></span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Radius avatars With Bottom Status
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-6">
							<div className="relative inline-block">
								<img className="avatar avatar-xs rounded-md" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-gray-400"></span>
							</div>
							<div className="relative inline-block">
								<img className="avatar avatar-sm rounded-md" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-2.5 w-2.5 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-red-400"></span>
							</div>
							<div className="relative inline-block">
								<img className="avatar rounded-md" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-green-400"></span>
							</div>
							<div className="relative inline-block">
								<img className="avatar avatar-lg rounded-md" src= {ALLImages('jpg57')} alt="Image Description"/>
								<span
									className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-3.5 w-3.5 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-orange-400"></span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Circular Avatars with Displaying a Tooltip
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-6">
							<div className="hs-tooltip inline-block">
								<Link className="hs-tooltip-toggle relative inline-block" to="#">
									<img className="avatar avatar-xs rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
									<span
										className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
									<div
										className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
										role="tooltip">
                      Maria Wanner is online
									</div>
								</Link>
							</div>
							<div className="hs-tooltip inline-block">
								<Link className="hs-tooltip-toggle relative inline-block" to="#">
									<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
									<span
										className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
									<div
										className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
										role="tooltip">
                      Maria Wanner is online
									</div>
								</Link>
							</div>
							<div className="hs-tooltip inline-block">
								<Link className="hs-tooltip-toggle relative inline-block" to="#">
									<img className="avatar rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
									<span
										className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
									<div
										className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
										role="tooltip">
                      Maria Wanner is online
									</div>
								</Link>
							</div>
							<div className="hs-tooltip inline-block">
								<Link className="hs-tooltip-toggle relative inline-block" to="#">
									<img className="avatar avatar-lg rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
									<span
										className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
									<div
										className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
										role="tooltip">
                      Maria Wanner is online
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Square Avatars with Displaying a Tooltip
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-6">
							<div className="hs-tooltip inline-block">
								<Link className="hs-tooltip-toggle relative inline-block" to="#">
									<img className="avatar rounded-sm avatar-xs" src= {ALLImages('jpg57')} alt="Image Description"/>
									<span
										className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-green-400"></span>
									<div
										className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
										role="tooltip">
                      Maria Wanner is online
									</div>
								</Link>
							</div>
							<div className="hs-tooltip inline-block">
								<Link className="hs-tooltip-toggle relative inline-block" to="#">
									<img className="avatar rounded-sm avatar-sm" src= {ALLImages('jpg57')} alt="Image Description"/>
									<span
										className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-green-400"></span>
									<div
										className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
										role="tooltip">
                      Maria Wanner is online
									</div>
								</Link>
							</div>
							<div className="hs-tooltip inline-block">
								<Link className="hs-tooltip-toggle relative inline-block" to="#">
									<img className="avatar rounded-sm" src= {ALLImages('jpg57')} alt="Image Description"/>
									<span
										className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-green-400"></span>
									<div
										className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
										role="tooltip">
                      Maria Wanner is online
									</div>
								</Link>
							</div>
							<div className="hs-tooltip inline-block">
								<Link className="hs-tooltip-toggle relative inline-block" to="#">
									<img className="avatar rounded-sm avatar-lg" src= {ALLImages('jpg57')} alt="Image Description"/>
									<span
										className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-green-400"></span>
									<div
										className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
										role="tooltip">
                      Maria Wanner is online
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Radius Avatars with Displaying a Tooltip
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-6">
							<div className="hs-tooltip inline-block">
								<Link className="hs-tooltip-toggle relative inline-block" to="#">
									<img className="avatar avatar-xs rounded-md" src= {ALLImages('jpg57')} alt="Image Description"/>
									<span
										className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-green-400"></span>
									<div
										className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
										role="tooltip">
                      Maria Wanner is online
									</div>
								</Link>
							</div>
							<div className="hs-tooltip inline-block">
								<Link className="hs-tooltip-toggle relative inline-block" to="#">
									<img className="avatar avatar-sm rounded-md" src= {ALLImages('jpg57')} alt="Image Description"/>
									<span
										className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-green-400"></span>
									<div
										className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
										role="tooltip">
                      Maria Wanner is online
									</div>
								</Link>
							</div>
							<div className="hs-tooltip inline-block">
								<Link className="hs-tooltip-toggle relative inline-block" to="#">
									<img className="avatar rounded-md" src= {ALLImages('jpg57')} alt="Image Description"/>
									<span
										className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-green-400"></span>
									<div
										className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
										role="tooltip">
                      Maria Wanner is online
									</div>
								</Link>
							</div>
							<div className="hs-tooltip inline-block">
								<Link className="hs-tooltip-toggle relative inline-block" to="#">
									<img className="avatar avatar-lg rounded-md" src= {ALLImages('jpg57')} alt="Image Description"/>
									<span
										className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-green-400"></span>
									<div
										className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
										role="tooltip">
                      Maria Wanner is online
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Avatars with Placeholder Icons
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-6">
							<span className="inline-block h-6 w-6 bg-gray-100 rounded-full overflow-hidden">
								<img src= {ALLImages('jpg77')} alt="userimg"/>
							</span>

							<span className="inline-block h-[2.375rem] w-[2.375rem] bg-gray-100 rounded-full overflow-hidden">
								<img src= {ALLImages('jpg77')} alt="userimg"/>
							</span>

							<span className="inline-block h-[2.875rem] w-[2.875rem] bg-gray-100 rounded-full overflow-hidden">
								<img src= {ALLImages('jpg77')} alt="userimg"/>
							</span>

							<span className="inline-block h-[3.875rem] w-[3.875rem] bg-gray-100 rounded-full overflow-hidden">
								<img src= {ALLImages('jpg77')} alt="userimg"/>
							</span>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Avatars with Placeholder Initials
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-6">
							<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-600 dark:bg-black/20">
								<span className="text-xs font-medium text-white leading-none">AC</span>
							</span>

							<span
								className="inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-gray-600 dark:bg-black/20">
								<span className="text-sm font-medium text-white leading-none">AC</span>
							</span>

							<span
								className="inline-flex items-center justify-center h-[2.875rem] w-[2.875rem] rounded-full bg-gray-600 dark:bg-black/20">
								<span className="font-medium text-white leading-none">AC</span>
							</span>

							<span
								className="inline-flex items-center justify-center h-[3.875rem] w-[3.875rem] rounded-full bg-gray-600 dark:bg-black/20">
								<span className="text-lg font-medium text-white leading-none">AC</span>
							</span>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Avatar with Media</h5>
						</div>
						<div className="box-body">
							<div className="flex-shrink-0 group block">
								<div className="flex items-center">
									<img className="inline-block flex-shrink-0 h-[3.875rem] w-[3.875rem] rounded-full"
										src= {ALLImages('jpg57')} alt="Image Description"/>
									<div className="ltr:ml-3 rtl:mr-3">
										<h3 className="font-semibold text-gray-800 dark:text-white">Maria Wanner</h3>
										<p className="text-sm font-medium text-gray-500 dark:text-white/70">maria@gmail.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Avatars Stack
							</h5>
						</div>
						<div className="box-body">
							<div className="grid gap-10 sm:items-end">
								<div className="flex -space-x-2 rtl:space-x-reverse">
									<img className="avatar avatar-xs rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
									<img className="avatar avatar-xs rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
									<img className="avatar avatar-xs rounded-full" src= {ALLImages('jpg58')} alt="Image Description"/>
									<img className="avatar avatar-xs rounded-full" src= {ALLImages('jpg59')} alt="Image Description"/>
								</div>
								<div className="flex -space-x-2 rtl:space-x-reverse">
									<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
									<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
									<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg58')} alt="Image Description"/>
									<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg59')} alt="Image Description"/>
								</div>
								<div className="flex -space-x-2 rtl:space-x-reverse">
									<img className="avatar rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
									<img className="avatar rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
									<img className="avatar rounded-full" src= {ALLImages('jpg58')} alt="Image Description"/>
									<img className="avatar rounded-full" src= {ALLImages('jpg59')} alt="Image Description"/>
								</div>
								<div className="flex -space-x-2 rtl:space-x-reverse">
									<img className="avatar avatar-lg rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
									<img className="avatar avatar-lg rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
									<img className="avatar avatar-lg rounded-full" src= {ALLImages('jpg58')} alt="Image Description"/>
									<img className="avatar avatar-lg rounded-full hidden sm:block" src= {ALLImages('jpg59')} alt="Image Description"/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Avatars Stack With Tooltip
							</h5>
						</div>
						<div className="box-body">
							<div className="grid gap-10 sm:items-end">
								<div className="flex -space-x-2 rtl:space-x-reverse">
									<div className="hs-tooltip inline-block">
										<Link className="hs-tooltip-toggle relative inline-block" to="#">
											<img className="avatar avatar-xs rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
											<div
												className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
												role="tooltip">
                          Maria Wanner
											</div>
										</Link>
									</div>
									<div className="hs-tooltip inline-block">
										<Link className="hs-tooltip-toggle relative inline-block" to="#">
											<img className="avatar avatar-xs rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
											<div
												className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
												role="tooltip">
                          Maria Wanner
											</div>
										</Link>
									</div>
									<div className="hs-tooltip inline-block">
										<Link className="hs-tooltip-toggle relative inline-block" to="#">
											<img className="avatar avatar-xs rounded-full" src= {ALLImages('jpg58')} alt="Image Description"/>
											<div
												className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
												role="tooltip">
                          Maria Wanner
											</div>
										</Link>
									</div>
									<div className="hs-tooltip inline-block">
										<Link className="hs-tooltip-toggle relative inline-block" to="#">
											<img className="avatar avatar-xs rounded-full" src= {ALLImages('jpg59')} alt="Image Description"/>
											<div
												className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
												role="tooltip">
                          Maria Wanner
											</div>
										</Link>
									</div>
								</div>
								<div className="flex -space-x-2 rtl:space-x-reverse">
									<div className="hs-tooltip inline-block">
										<Link className="hs-tooltip-toggle relative inline-block" to="#">
											<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
											<div
												className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
												role="tooltip">
                          Maria Wanner
											</div>
										</Link>
									</div>
									<div className="hs-tooltip inline-block">
										<Link className="hs-tooltip-toggle relative inline-block" to="#">
											<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
											<div
												className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
												role="tooltip">
                          Maria Wanner
											</div>
										</Link>
									</div>
									<div className="hs-tooltip inline-block">
										<Link className="hs-tooltip-toggle relative inline-block" to="#">
											<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg58')} alt="Image Description"/>
											<div
												className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
												role="tooltip">
                          Maria Wanner
											</div>
										</Link>
									</div>
									<div className="hs-tooltip inline-block">
										<Link className="hs-tooltip-toggle relative inline-block" to="#">
											<img className="avatar avatar-sm rounded-full" src= {ALLImages('jpg59')} alt="Image Description"/>
											<div
												className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
												role="tooltip">
                          Maria Wanner
											</div>
										</Link>
									</div>
								</div>
								<div className="flex -space-x-2 rtl:space-x-reverse">
									<div className="hs-tooltip inline-block">
										<Link className="hs-tooltip-toggle relative inline-block" to="#">
											<img className="avatar rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
											<div
												className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
												role="tooltip">
                          Maria Wanner
											</div>
										</Link>
									</div>
									<div className="hs-tooltip inline-block">
										<Link className="hs-tooltip-toggle relative inline-block" to="#">
											<img className="avatar rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
											<div
												className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
												role="tooltip">
                          Maria Wanner
											</div>
										</Link>
									</div>
									<div className="hs-tooltip inline-block">
										<Link className="hs-tooltip-toggle relative inline-block" to="#">
											<img className="avatar rounded-full" src= {ALLImages('jpg58')} alt="Image Description"/>
											<div
												className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
												role="tooltip">
                          Maria Wanner
											</div>
										</Link>
									</div>
									<div className="hs-tooltip inline-block">
										<Link className="hs-tooltip-toggle relative inline-block" to="#">
											<img className="avatar rounded-full" src= {ALLImages('jpg59')} alt="Image Description"/>
											<div
												className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
												role="tooltip">
                          Maria Wanner
											</div>
										</Link>
									</div>
								</div>
								<div className="flex -space-x-2 rtl:space-x-reverse">
									<div className="hs-tooltip inline-block">
										<Link className="hs-tooltip-toggle relative inline-block" to="#">
											<img className="avatar avatar-lg rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
											<div
												className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
												role="tooltip">
                          Maria Wanner
											</div>
										</Link>
									</div>
									<div className="hs-tooltip inline-block">
										<Link className="hs-tooltip-toggle relative inline-block" to="#">
											<img className="avatar avatar-lg rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
											<div
												className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
												role="tooltip">
                          Maria Wanner
											</div>
										</Link>
									</div>
									<div className="hs-tooltip inline-block">
										<Link className="hs-tooltip-toggle relative inline-block" to="#">
											<img className="avatar avatar-lg rounded-full" src= {ALLImages('jpg58')} alt="Image Description"/>
											<div
												className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
												role="tooltip">
                          Maria Wanner
											</div>
										</Link>
									</div>
									<div className="hs-tooltip hidden sm:inline-block">
										<Link className="hs-tooltip-toggle relative inline-block" to="#">
											<img className="avatar avatar-lg rounded-full" src= {ALLImages('jpg59')} alt="Image Description"/>
											<div
												className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
												role="tooltip">
                          Maria Wanner
											</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xxl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Avatars Grid
							</h5>
						</div>
						<div className="box-body">
							<div className="grid gap-10 sm:items-end">
								<div className="grid xxl:!grid-cols-8 md:!grid-cols-11 sm:grid-cols-7 grid-cols-4 gap-4">
									<img
										className="avatar rounded-full"
										src= {ALLImages('jpg57')} alt="Image Description"/>
									<img
										className="avatar rounded-full"
										src= {ALLImages('jpg60')} alt="Image Description"/>
									<img
										className="avatar rounded-full"
										src= {ALLImages('jpg62')} alt="Image Description"/>
									<img
										className="avatar rounded-full"
										src= {ALLImages('jpg61')} alt="Image Description"/>
									<img
										className="avatar rounded-full"
										src= {ALLImages('jpg63')} alt="Image Description"/>
									<img
										className="avatar rounded-full"
										src= {ALLImages('jpg58')} alt="Image Description"/>
									<img
										className="avatar rounded-full"
										src= {ALLImages('jpg65')} alt="Image Description"/>
									<img
										className="avatar rounded-full"
										src= {ALLImages('jpg57')} alt="Image Description"/>
									<img
										className="avatar rounded-full"
										src= {ALLImages('jpg60')} alt="Image Description"/>
									<img
										className="avatar rounded-full"
										src= {ALLImages('jpg62')} alt="Image Description"/>
									<img
										className="avatar rounded-full"
										src= {ALLImages('jpg61')} alt="Image Description"/>
									<img
										className="avatar rounded-full"
										src= {ALLImages('jpg63')} alt="Image Description"/>
									<img
										className="avatar rounded-full"
										src= {ALLImages('jpg58')} alt="Image Description"/>
									<img
										className="avatar rounded-full"
										src= {ALLImages('jpg65')} alt="Image Description"/>
									<span
										className="inline-flex items-center justify-center h-[2.875rem] w-[2.875rem] rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
										<span className="font-medium text-gray-500 leading-none dark:text-white/70">9+</span>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Avatars Bodered
							</h5>
						</div>
						<div className="box-body">
							<div className="flex -space-x-2 rtl:space-x-reverse overflow-auto p-2">
								<img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src= {ALLImages('jpg57')} alt="Image Description"/>
								<img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src= {ALLImages('jpg58')} alt="Image Description"/>
								<img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src= {ALLImages('jpg59')} alt="Image Description"/>
								<img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src= {ALLImages('jpg61')} alt="Image Description"/>
								<img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src= {ALLImages('jpg64')} alt="Image Description"/>
								<img className="hidden sm:inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src= {ALLImages('jpg60')} alt="Image Description"/>
								<img className="hidden sm:inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src= {ALLImages('jpg62')} alt="Image Description"/>
								<img className="hidden sm:inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src= {ALLImages('jpg63')} alt="Image Description"/>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Avatars With Dropdown
							</h5>
						</div>
						<div className="box-body">
							<div className="flex -space-x-2 rtl:space-x-reverse">
								<img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src= {ALLImages('jpg64')} alt="Image Description"/>
								<img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src= {ALLImages('jpg60')} alt="Image Description"/>
								<img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src= {ALLImages('jpg62')} alt="Image Description"/>
								<img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src= {ALLImages('jpg63')} alt="Image Description"/>
								<div className="hs-dropdown relative inline-flex" data-hs-dropdown-placement="top-left">
									<button type="button" id="hs-dropdown-avatar-more" className="hs-dropdown-toggle inline-flex items-center justify-center h-[2.875rem] w-[2.875rem] rounded-full bg-gray-200 border-2 border-white font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-300 focus:outline-none focus:bg-primary focus:text-white focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:bg-primary dark:focus:text-white dark:focus:ring-offset-white/10">
										<span className="font-medium leading-none">9+</span>
									</button>
									<div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-72 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-bgdark dark:border dark:border-white/10 dark:divide-white/10">
										<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                        Chris Lynch
										</Link>
										<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                        Maria Guan
										</Link>
										<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                        Amil Evara
										</Link>
										<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                        Ebele Egbuna
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>  

	);
};
export default Avatars;
