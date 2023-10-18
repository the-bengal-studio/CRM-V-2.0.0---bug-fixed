import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Listgroup = () => {
	return (
		<div>
         <PageHeader currentpage="List Group" activepage="Components" mainpage="List Group" />

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 md:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Basic List Group </h5>
						</div>
						<div className="box-body">
							<ul className="max-w-xs flex flex-col">
								<li
									className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                        Profile
								</li>
								<li
									className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                        Settings
								</li>
								<li
									className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                        Newsletter
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">List Group With Icons</h5>
						</div>
						<div className="box-body">
							<ul className="max-w-xs flex flex-col">
								<li
									className="ti-list-group gap-x-3.5 bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
									<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16"
										fill="currentColor">
										<path
											d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
									</svg>
                                        Newsletter
								</li>
								<li
									className="ti-list-group gap-x-3.5 bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
									<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16"
										fill="currentColor">
										<path fillRule="evenodd"
											d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z" />
										<path
											d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
									</svg>
                                        Downloads
								</li>
								<li
									className="ti-list-group gap-x-3.5 bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
									<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16"
										fill="currentColor">
										<path
											d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
									</svg>
                                        Team Account
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">List With Icons Links</h5>
						</div>
						<div className="box-body">
							<div className="max-w-xs flex flex-col">
								<Link className="ti-list-group gap-x-3.5 text-primary ti-icon-link focus:ring-primary dark:border-white/10" to="#">
									<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
										<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
									</svg>
                                      Active
								</Link>
								<Link className="ti-list-group gap-x-3.5 bg-white text-gray-800 hover:text-primary ti-icon-link focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white dark:hover:text-primary" to="#">
									<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
										<path fillRule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"/>
										<path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
									</svg>
                                      Link
								</Link>
								<Link className="ti-list-group gap-x-3.5 text-gray-400 ti-list-group-disabled ti-icon-link focus:ring-primary dark:border-white/10 dark:text-white/70" to="#">
									<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
										<path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
									</svg>
                                      Disabled
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">List With Button Icons Links</h5>
						</div>
						<div className="box-body">
							<div className="max-w-xs flex flex-col">
								<button type="button" className="ti-list-group text-primary ti-icon-link focus:ring-primary dark:border-white/10">
									<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
										<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
									</svg>
                                      Active
								</button>
								<button type="button" className="ti-list-group bg-white text-gray-800 hover:text-primary ti-icon-link focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white dark:hover:text-primary">
									<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
										<path fillRule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"/>
										<path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
									</svg>
                                      Link
								</button>
								<button type="button" className="ti-list-group text-gray-400 ti-icon-link ti-list-group-disabled focus:ring-primary dark:border-white/10 dark:text-white/70" disabled>
									<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
										<path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
									</svg>
                                      Disabled
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Striped List Group </h5>
						</div>
						<div className="box-body">
							<ul className="max-w-xs flex flex-col">
								<li className="ti-list-group odd:bg-gray-100 bg-white text-gray-800 dark:odd:bg-black/20 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                      Profile
								</li>
								<li className="ti-list-group odd:bg-gray-100 bg-white text-gray-800 dark:odd:bg-black/20 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                      Settings
								</li>
								<li className="ti-list-group odd:bg-gray-100 bg-white text-gray-800 dark:odd:bg-black/20 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                      Newsletter
								</li>
								<li className="ti-list-group odd:bg-gray-100 bg-white text-gray-800 dark:odd:bg-black/20 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                      Downloads
								</li>
								<li className="ti-list-group odd:bg-gray-100 bg-white text-gray-800 dark:odd:bg-black/20 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                      Team Account
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Flush List Group </h5>
						</div>
						<div className="box-body">
							<ul className="max-w-xs flex flex-col divide-y divide-gray-200 dark:divide-white/10">
								<li className="ti-list-group border-0 text-gray-800 dark:text-white">
                                      Profile
								</li>
								<li className="ti-list-group border-0 text-gray-800 dark:text-white">
                                      Settings
								</li>
								<li className="ti-list-group border-0 text-gray-800 dark:text-white">
                                      Newsletter
								</li>
								<li className="ti-list-group border-0 text-gray-800 dark:text-white">
                                      Downloads
								</li>
								<li className="ti-list-group border-0 text-gray-800 dark:text-white">
                                      Team Account
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">List Group with Badges</h5>
						</div>
						<div className="box-body">
							<ul className="max-w-xs flex flex-col">
								<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
									<div className="flex justify-between w-full">
                                        Profile
										<span className="badge py-1 px-2 mb-0 bg-primary text-white">New</span>
									</div>
								</li>
								<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
									<div className="flex justify-between w-full">
                                        Settings
										<span className="badge py-1 px-2 mb-0 bg-primary text-white">2</span>
									</div>
								</li>
								<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
									<div className="flex justify-between w-full">
                                        Newsletter
										<span className="badge py-1 px-2 mb-0 bg-primary text-white">99+</span>
									</div>
								</li>
								<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
									<div className="flex justify-between w-full">
                                        Downloads
										<span className="badge py-1 px-2 mb-0 bg-primary text-white">10</span>
									</div>
								</li>
								<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
									<div className="flex justify-between w-full">
                                        Team Account
										<span className="badge py-1 px-2 mb-0 bg-primary text-white">5</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">List with No Gutters</h5>
						</div>
						<div className="box-body">
							<ul className="max-w-xs flex flex-col divide-y divide-gray-200 dark:divide-white/10">
								<li className="ti-list-group border-0 text-gray-800 dark:text-white">
                                      Profile
								</li>
								<li className="ti-list-group border-0 text-gray-800 dark:text-white">
                                      Settings
								</li>
								<li className="ti-list-group border-0 text-gray-800 dark:text-white">
                                      Newsletter
								</li>
								<li className="ti-list-group border-0 text-gray-800 dark:text-white">
                                      Downloads
								</li>
								<li className="ti-list-group border-0 text-gray-800 dark:text-white">
                                      Team Account
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">List Group with No Gutters</h5>
						</div>
						<div className="box-body">
							<ul className="flex flex-col sm:flex-row">
								<li className="ti-list-group gap-x-2.5 bg-white text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
									<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
										<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
									</svg>
                                      Newsletter
								</li>
								<li className="ti-list-group gap-x-2.5 bg-white text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
									<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
										<path fillRule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"/>
										<path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
									</svg>
                                      Downloads
								</li>
								<li className="ti-list-group gap-x-2.5 bg-white text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
									<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
										<path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
									</svg>
                                      Team Account
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Soft Colored Lists</h5>
						</div>
						<div className="box-body">
							<ul className="flex flex-col">
								<li className="ti-list-group">
                                A simple default list group item
								</li>
								<li className="ti-list-group bg-primary/10 text-primary">
                                A simple primary list group item
								</li>
								<li className="ti-list-group bg-secondary/10 text-secondary">
                                A simple secondary list group item
								</li>
								<li className="ti-list-group bg-danger/10 text-danger">
                                A simple danger list group item
								</li>
								<li className="ti-list-group bg-warning/10 text-warning">
                                A simple warning list group item
								</li>
								<li className="ti-list-group bg-info/10 text-info">
                                A simple info list group item
								</li>
								<li className="ti-list-group bg-success/10 text-success">
                                A simple success list group item
								</li>
								<li className="ti-list-group bg-gray-100 border border-gray-200 text-gray-600 ">
                                A simple light list group item
								</li>
								<li className="ti-list-group bg-black/20/[.1] border border-gray-200 text-gray-600 dark:bg-gray-900/[.1] dark:border-white/10 dark:text-white">
                                A simple dark list group item
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Solid Colored Lists</h5>
						</div>
						<div className="box-body">
							<ul className="flex flex-col">
								<li className="ti-list-group">
                                A simple default list group item
								</li>
								<li className="ti-list-group bg-primary border-primary text-white">
                                A simple primary list group item
								</li>
								<li className="ti-list-group bg-secondary border-secondary text-white">
                                A simple secondary list group item
								</li>
								<li className="ti-list-group bg-danger border-danger text-white">
                                A simple danger list group item
								</li>
								<li className="ti-list-group bg-warning border-warning text-white">
                                A simple warning list group item
								</li>
								<li className="ti-list-group bg-info border-info text-white">
                                A simple info list group item
								</li>
								<li className="ti-list-group bg-success border-success text-white">
                                A simple success list group item
								</li>
								<li className="ti-list-group bg-gray-100 border border-gray-200 text-gray-600">
                                A simple light list group item
								</li>
								<li className="ti-list-group bg-black/20 border border-white/10 text-white dark:bg-gray-900 dark:text-white">
                                A simple dark list group item
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
 
		</div>
	);
};
export default Listgroup;
