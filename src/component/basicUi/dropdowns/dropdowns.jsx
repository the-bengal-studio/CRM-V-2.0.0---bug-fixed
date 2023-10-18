import React from "react";
import { Link } from "react-router-dom";
import ALLImages from "../../../common/imagesData";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Dropdowns = () => {
	return (
		<div>
			<PageHeader currentpage="Dropdown" activepage="Basic Ui" mainpage="Dropdown" />

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Default Dropdown</h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-default" type="button"
									className="hs-dropdown-toggle ti-dropdown-toggle">
									Actions
									<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>

								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-default">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Dropdown Hover Event</h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown [--trigger:hover]" >
								<button id="hs-dropdown-hover-event" type="button"
									className="hs-dropdown-toggle ti-dropdown-toggle">
									Actions
									<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>

								<div className="hs-dropdown-menu ti-dropdown-menu ti-dropdown-menu-hover"
									aria-labelledby="hs-dropdown-hover-event">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Dropdown Dividers</h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-with-dividers" type="button"
									className="hs-dropdown-toggle ti-dropdown-toggle">
									Actions
									<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>

								<div className="hs-dropdown-menu hidden ti-dropdown-menu divide-y divide-gray-200"
									aria-labelledby="hs-dropdown-with-dividers">
									<div className="ti-dropdown-divider">
										<Link className="ti-dropdown-item" to="#">
											Newsletter
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Purchases
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Downloads
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Team Account
										</Link>
									</div>
									<div className="ti-dropdown-divider">
										<Link className="ti-dropdown-item" to="#">
											Upgrade License
										</Link>
									</div>
									<div className="ti-dropdown-divider">
										<Link className="ti-dropdown-item" to="#">
											Account Settings
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Sign out
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Dropdown With Icons</h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-with-icons" type="button"
									className="hs-dropdown-toggle ti-dropdown-toggle">
									Actions
									<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>

								<div className="hs-dropdown-menu ti-dropdown-menu divide-y divide-gray-200"
									aria-labelledby="hs-dropdown-with-icons">
									<div className="ti-dropdown-divider">
										<Link className="ti-dropdown-item" to="#">
											<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16"
												fill="currentColor">
												<path
													d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z">
												</path>
											</svg>
											Newsletter
										</Link>
										<Link className="ti-dropdown-item" to="#">
											<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16"
												fill="currentColor">
												<path
													d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z">
												</path>
												<path
													d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z">
												</path>
											</svg>
											Purchases
										</Link>
										<Link className="ti-dropdown-item" to="#">
											<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16"
												fill="currentColor">
												<path fillRule="evenodd"
													d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z">
												</path>
												<path
													d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z">
												</path>
											</svg>
											Downloads
										</Link>
										<Link className="ti-dropdown-item" to="#">
											<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16"
												fill="currentColor">
												<path
													d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z">
												</path>
											</svg>
											Team Account
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Dropdown With Title</h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-with-title" type="button"
									className="hs-dropdown-toggle ti-dropdown-toggle">
									Actions
									<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret " width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>

								<div className="hs-dropdown-menu ti-dropdown-menu transition-none divide-y divide-gray-200"
									aria-labelledby="hs-dropdown-with-title">
									<div className="ti-dropdown-divider">
										<span className="ti-dropdown-title">
											Settings
										</span>
										<Link className="ti-dropdown-item" to="#">
											<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16"
												fill="currentColor">
												<path
													d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
											</svg>
											Newsletter
										</Link>
										<Link className="ti-dropdown-item" to="#">
											<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16"
												fill="currentColor">
												<path
													d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
												<path
													d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
											</svg>
											Purchases
										</Link>
										<Link className="ti-dropdown-item" to="#">
											<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16"
												fill="currentColor">
												<path fillRule="evenodd"
													d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z" />
												<path
													d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
											</svg>
											Downloads
										</Link>
										<Link className="ti-dropdown-item" to="#">
											<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16"
												fill="currentColor">
												<path
													d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
											</svg>
											Team Account
										</Link>
									</div>
									<div className="ti-dropdown-divider">
										<span className="ti-dropdown-title">
											Contacts
										</span>
										<Link className="ti-dropdown-item" to="#">
											<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16"
												fill="currentColor">
												<path
													d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
												<path
													d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
											</svg>
											Contact support
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Dropdown With Header</h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-with-header" type="button"
									className="hs-dropdown-toggle ti-dropdown-toggle">
									Actions
									<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret " width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>

								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-with-header">
									<div className="ti-dropdown-header">
										<p className="ti-dropdown-header-title">Signed in as</p>
										<p className="ti-dropdown-header-content">james@site.com</p>
									</div>
									<div className="mt-2 ti-dropdown-divider">
										<Link className="ti-dropdown-item" to="#">
											<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16"
												fill="currentColor">
												<path
													d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
											</svg>
											Newsletter
										</Link>
										<Link className="ti-dropdown-item" to="#">
											<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16"
												fill="currentColor">
												<path
													d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
												<path
													d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
											</svg>
											Purchases
										</Link>
										<Link className="ti-dropdown-item" to="#">
											<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16"
												fill="currentColor">
												<path fillRule="evenodd"
													d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z" />
												<path
													d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
											</svg>
											Downloads
										</Link>
										<Link className="ti-dropdown-item" to="#">
											<svg className="flex-none" width="16" height="16" viewBox="0 0 16 16"
												fill="currentColor">
												<path
													d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
											</svg>
											Team Account
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Custom Trigger Dropdown</h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-custom-trigger" type="button"
									className="hs-dropdown-toggle py-1 ltr:pl-1 ltr:pr-3 rtl:pr-1 rtl:pl-3 ti-dropdown-toggle rounded-full dark:hover:bg-black/20">
									<img className="ti-dropdowm-profileimg" src={ALLImages('jpg57')} alt="Maria" />
									<span className="ti-dropdowm-profileimg-content">Maria</span>
									<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>

								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-custom-trigger">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Custom Trigger Dropdown</h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown">
								<button aria-label="button" id="hs-dropdown-custom-icon-trigger" type="button"
									className="hs-dropdown-toggle p-3 ti-dropdown-toggle">
									<svg className="ti-dropdown-icon" xmlns="http://www.w3.org/2000/svg" width="16"
										height="16" fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z">
										</path>
									</svg>
								</button>

								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-custom-trigger">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Dropdown With Slide Up Animation</h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-slideup-animation" type="button"
									className="hs-dropdown-toggle ti-dropdown-toggle">
									Actions
									<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>

								<div className="hs-dropdown-menu duration-300 ti-dropdown-menu"
									aria-labelledby="hs-dropdown-slideup-animation">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Dropdown With Transform Style</h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-transform-style" type="button"
									className="hs-dropdown-toggle ti-dropdown-toggle">
									Actions
									<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>

								<div className="hs-dropdown-menu hidden z-10">
									<div className="hs-dropdown-open:ease-in hs-dropdown-open:opacity-100 hs-dropdown-open:scale-100 transition ease-out scale-95 duration-200 origin-top-left ti-dropdown-menu block"
										aria-labelledby="hs-dropdown-transform-style" data-hs-transition>
										<Link className="ti-dropdown-item" to="#">
											Newsletter
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Purchases
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Downloads
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Team Account
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Dropdown Item Checkbox</h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown" data-hs-dropdown-auto-close="inside">
								<button id="hs-dropdown-item-checkbox1" type="button"
									className="hs-dropdown-toggle ti-dropdown-toggle">
									Actions
									<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>

								<div className="hs-dropdown-menu ti-dropdown-menu transition-none" aria-labelledby="hs-dropdown-item-checkbox1">
									<div
										className="relative flex items-start py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-black/20">
										<div className="flex items-center h-5 mt-1">
											<input id="hs-dropdown-item-checkbox-delete"
												name="hs-dropdown-item-checkbox-delete" type="checkbox"
												className="ti-form-checkbox"
												aria-describedby="hs-dropdown-item-checkbox-delete-description"
												defaultChecked />
										</div>
										<label htmlFor="hs-dropdown-item-checkbox-delete" className="ltr:ml-3.5 rtl:mr-3.5">
											<span
												className="block text-sm font-semibold text-gray-800 dark:text-white">Delete</span>
											<span id="hs-dropdown-item-checkbox-delete-description"
												className="block text-sm text-gray-600 dark:text-white/70">Notify me
												when this action happens.</span>
										</label>
									</div>
									<div
										className="relative flex items-start py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-black/20">
										<div className="flex items-center h-5 mt-1">
											<input id="hs-dropdown-item-checkbox-archive1"
												name="hs-dropdown-item-checkbox-archive1" type="checkbox"
												className="ti-form-checkbox"
												aria-describedby="hs-dropdown-item-checkbox-archive-description" />
										</div>
										<label htmlFor="hs-dropdown-item-checkbox-archive1" className="ltr:ml-3.5 rtl:mr-3.5">
											<span
												className="block text-sm font-semibold text-gray-800 dark:text-white">Archive</span>
											<span id="hs-dropdown-item-checkbox-archive-description"
												className="block text-sm text-gray-600 dark:text-white/70">Notify me
												when this action happens.</span>
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6  xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Dropdown Item Radio</h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown" data-hs-dropdown-auto-close="inside">
								<button id="hs-dropdown-item-checkbox2" type="button" className="hs-dropdown-toggle ti-dropdown-toggle">
									Actions
									<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>

								<div className="hs-dropdown-menu transition-none ti-dropdown-menu" aria-labelledby="hs-dropdown-item-checkbox2">
									<div className="relative flex items-start py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-black/20">
										<div className="flex items-center h-5 mt-1">
											<input id="hs-dropdown-item-radio-delete" name="hs-dropdown-item-radio" type="radio" className="ti-form-radio" aria-describedby="hs-dropdown-item-radio-delete-description" defaultChecked />
										</div>
										<label htmlFor="hs-dropdown-item-radio-delete" className="ltr:ml-3.5 rtl:mr-3.5">
											<span className="block text-sm font-semibold text-gray-800 dark:text-white">Delete</span>
											<span id="hs-dropdown-item-radio-delete-description" className="block text-sm text-gray-600 dark:text-white/70">Notify me when this action happens.</span>
										</label>
									</div>
									<div className="relative flex items-start py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-black/20">
										<div className="flex items-center h-5 mt-1">
											<input id="hs-dropdown-item-radio-archive" name="hs-dropdown-item-radio" type="radio" className="ti-form-radio" aria-describedby="hs-dropdown-item-radio-archive-description" />
										</div>
										<label htmlFor="hs-dropdown-item-radio-archive" className="ltr:ml-3.5 rtl:mr-3.5">
											<span className="block text-sm font-semibold text-gray-800 dark:text-white">Archive</span>
											<span id="hs-dropdown-item-radio-archive-description" className="block text-sm text-gray-600 dark:text-white/70">Notify me when this action happens.</span>
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xxl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Dropdown</h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown [--placement:bottom-left] m-1">
								<button id="hs-dropdown" type="button" className="hs-dropdown-toggle ti-dropdown-toggle">
									Dropdown
									<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>

								<div className="hs-dropdown-menu mt-0 transition-none ti-dropdown-menu" aria-labelledby="hs-dropdown">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>

							<div className="ti-dropdown m-1">
								<button type="button" className="relative ltr:rounded-l-md rtl:rounded-r-md focus:z-10 ti-dropdown-toggle rounded-none">
									Split dropdown
								</button>
								<div className="hs-dropdown ti-dropdown [--placement:bottom-left]">
									<button id="hs-split-dropdown" type="button" className="hs-dropdown-toggle relative ltr:-ml-[.3125rem] rtl:-mr-[.3125rem] h-[2.875rem] w-[2.875rem] ltr:rounded-r-md rtl:rounded-l-md focus:z-10 ti-dropdown-toggle rounded-none">
										<span className="sr-only">Toggle Dropdown</span>
										<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
										</svg>
									</button>

									<div className="hs-dropdown-menu transition-none ti-dropdown-menu" aria-labelledby="hs-split-dropdown">
										<Link className="ti-dropdown-item" to="#">
											Newsletter
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Purchases
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Downloads
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Team Account
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xxl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Dropleft</h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown [--placement:left-top] m-1">
								<button id="hs-dropleft" type="button" className="hs-dropdown-toggle ti-dropdown-toggle">
									Dropleft
									<svg className="w-auto h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11 1L5.31305 7.16086C5.13625 7.35239 5.13625 7.64761 5.31305 7.83914L11 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>

								<div className="hs-dropdown-menu transition-none ti-dropdown-menu" aria-labelledby="hs-dropleft">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>

							<div className="ti-dropdown m-1">
								<button type="button" className="relative ti-dropdown-toggle rounded-none ltr:rounded-l-md rtl:rounded-r-md focus:z-10">
									Split dropleft
								</button>
								<div className="hs-dropdown ti-dropdown [--placement:left-top]">
									<button id="hs-split-dropleft" type="button" className="hs-dropdown-toggle relative ltr:-ml-[.3125rem] rtl:-mr-[.3125rem] ti-dropdown-toggle rounded-none h-[2.875rem] w-[2.875rem] ltr:rounded-r-md rtl:rounded-l-md focus:z-10">
										<span className="sr-only">Toggle Dropdown</span>
										<svg className="w-auto h-2.5 ti-dropdown-caret" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M11 1L5.31305 7.16086C5.13625 7.35239 5.13625 7.64761 5.31305 7.83914L11 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
										</svg>
									</button>

									<div className="hs-dropdown-menu transition-none ti-dropdown-menu" aria-labelledby="hs-split-dropleft">
										<Link className="ti-dropdown-item" to="#">
											Newsletter
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Purchases
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Downloads
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Team Account
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xxl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Dropright</h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown [--placement:right-top] m-1">
								<button id="hs-dropright" type="button" className="hs-dropdown-toggle ti-dropdown-toggle">
									Dropright
									<svg className="w-auto h-2.5 ti-dropdown-caret" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>

								<div className="hs-dropdown-menu ti-dropdown-menu transition-none" aria-labelledby="hs-dropright">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>

							<div className="ti-dropdown m-1">
								<button type="button" className="relative ti-dropdown-toggle rounded-none ltr:rounded-l-md rtl:rounded-r-md focus:z-10">
									Split dropright
								</button>
								<div className="hs-dropdown ti-dropdown [--placement:right-top]">
									<button id="hs-split-dropright" type="button" className="hs-dropdown-toggle relative ltr:-ml-[.3125rem] rtl:-mr-[.3125rem] ti-dropdown-toggle rounded-none h-[2.875rem] w-[2.875rem] ltr:rounded-r-md rtl:rounded-l-md focus:z-10">
										<span className="sr-only">Toggle Dropdown</span>
										<svg className="w-auto h-2.5 ti-dropdown-caret" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
										</svg>
									</button>

									<div className="hs-dropdown-menu ti-dropdown-menu transition-none" aria-labelledby="hs-split-dropright">
										<Link className="ti-dropdown-item" to="#">
											Newsletter
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Purchases
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Downloads
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Team Account
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xxl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">DropUp</h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown [--placement:top-left] m-1">
								<button id="hs-dropup" type="button" className="hs-dropdown-toggle ti-dropdown-toggle">
									Dropup
									<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>

								<div className="hs-dropdown-menu mt-0 transition-none ti-dropdown-menu" aria-labelledby="hs-dropup">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>

							<div className="ti-dropdown m-1">
								<button type="button" className="relative ti-dropdown-toggle rounded-none ltr:rounded-l-md rtl:rounded-r-md focus:z-10 ">
									Split dropup
								</button>
								<div className="hs-dropdown ti-dropdown [--placement:top-left]">
									<button id="hs-split-dropup" type="button" className="hs-dropdown-toggle relative ltr:-ml-[.3125rem] rtl:-mr-[.3125rem] ti-dropdown-toggle rounded-none h-[2.875rem] w-[2.875rem] ltr:rounded-r-md rtl:rounded-l-md focus:z-10 ">
										<span className="sr-only">Toggle Dropdown</span>
										<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
										</svg>
									</button>

									<div className="hs-dropdown-menu transition-none mt-0 ti-dropdown-menu" aria-labelledby="hs-split-dropup">
										<Link className="ti-dropdown-item" to="#">
											Newsletter
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Purchases
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Downloads
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Team Account
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Dropdown Autoclose Behaviour</h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown m-1" data-hs-dropdown-auto-close="inside">
								<button id="hs-dropdown-auto-close-inside" type="button"
									className="hs-dropdown-toggle ti-dropdown-toggle">
									Clickable inside
									<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>

								<div className="hs-dropdown-menu ti-dropdown-menu transition-none"
									aria-labelledby="hs-dropdown-auto-close-inside">
									<div
										className="relative flex items-start py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-black/20">
										<div className="flex items-center h-5 mt-1">
											<input id="hs-dropdown-item-checkbox-delete1"
												name="hs-dropdown-item-checkbox-delete1" type="checkbox"
												className="ti-form-checkbox" defaultChecked />
										</div>
										<label htmlFor="hs-dropdown-item-checkbox-delete1" className="ltr:ml-3.5 rtl:mr-3.5">
											<span
												className="mt-1 block text-sm font-semibold text-gray-800 dark:text-white">Delete</span>
										</label>
									</div>
									<div
										className="relative flex items-start py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-black/20">
										<div className="flex items-center h-5 mt-1">
											<input id="hs-dropdown-item-checkbox-archive"
												name="hs-dropdown-item-checkbox-archive" type="checkbox"
												className="ti-form-checkbox" />
										</div>
										<label htmlFor="hs-dropdown-item-checkbox-archive" className="ltr:ml-3.5 rtl:mr-3.5">
											<span
												className="mt-1 block text-sm font-semibold text-gray-800 dark:text-white">Archive</span>
										</label>
									</div>
								</div>
							</div>

							<div className="hs-dropdown ti-dropdown m-1" data-hs-dropdown-auto-close="outside">
								<button id="hs-dropdown-auto-close-outside" type="button"
									className="hs-dropdown-toggle ti-dropdown-toggle">
									Clickable outside
									<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>

								<div className="hs-dropdown-menu ti-dropdown-menu transition-none"
									aria-labelledby="hs-dropdown-auto-close-outside">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>

							<div className="hs-dropdown ti-dropdown m-1" data-hs-dropdown-auto-close="false">
								<button id="hs-dropdown-auto-close-false" type="button"
									className="hs-dropdown-toggle ti-dropdown-toggle">
									False
									<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>

								<div className="hs-dropdown-menu ti-dropdown-menu transition-none"
									aria-labelledby="hs-dropdown-auto-close-false">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Left Aligned Responsive Dropdown</h5>
						</div>
						<div className="box-body">
							<div
								className="hs-dropdown ti-dropdown"
								data-hs-dropdown-strategy="absolute"
							>
								<button
									id="hs-dropdown-left-but-right-on-lg"
									type="button"
									className="hs-dropdown-toggle ti-dropdown-toggle"
								>
									Left aligned but right aligned when large screen
									<svg
										className="hs-dropdown-open:rotate-180 ti-dropdown-caret w-6"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</button>

								<div
									className="hs-dropdown-menu w-72 ti-dropdown-menu transition-none top-0 ltr:lg:left-auto ltr:lg:right-0 rtl:lg:right-auto rtl:lg:left-0 min-w-[16.5rem]"
									aria-labelledby="hs-dropdown-left-but-right-on-lg"
								>
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Right Aligned Responsive Dropdown</h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown" data-hs-dropdown-strategy="absolute">
								<button id="hs-dropdown-right-but-left-on-lg" type="button" className="hs-dropdown-toggle ti-dropdown-toggle">
									Right aligned but left aligned when large screen
									<svg className="hs-dropdown-open:rotate-180 w-6 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>

								<div className="hs-dropdown-menu ti-dropdown-menu transition-none top-0 min-w-[16.5rem]" aria-labelledby="hs-dropdown-right-but-left-on-lg">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Default Dropdowns</h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-default1" type="button"
									className="hs-dropdown-toggle ti-btn ti-btn-primary">
									Actions
									<svg className="fill-white text-white hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>
								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-default1">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-default2" type="button"
									className="hs-dropdown-toggle ti-btn ti-btn-secondary">
									Actions
									<svg className="fill-white text-white hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>
								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-default2">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-default3" type="button"
									className="hs-dropdown-toggle ti-btn ti-btn-warning">
									Actions
									<svg className="fill-white text-white hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>
								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-default3">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-default4" type="button"
									className="hs-dropdown-toggle ti-btn ti-btn-danger">
									Actions
									<svg className="fill-white text-white hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>
								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-default4">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-default5" type="button"
									className="hs-dropdown-toggle ti-btn ti-btn-info">
									Actions
									<svg className="fill-white text-white hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>
								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-default5">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-default6" type="button"
									className="hs-dropdown-toggle ti-btn ti-btn-success">
									Actions
									<svg className="fill-white text-white hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>
								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-default6">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Default Dropdowns</h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-default7" type="button"
									className="hs-dropdown-toggle ti-btn ti-btn-primary rounded-full">
									Actions
									<svg className="fill-white text-white hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>
								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-default7">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-default8" type="button"
									className="hs-dropdown-toggle ti-btn ti-btn-secondary rounded-full">
									Actions
									<svg className="fill-white text-white hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>
								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-default8">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-default9" type="button"
									className="hs-dropdown-toggle ti-btn ti-btn-warning rounded-full">
									Actions
									<svg className="fill-white text-white hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>
								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-default9">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-default10" type="button"
									className="hs-dropdown-toggle ti-btn ti-btn-danger rounded-full">
									Actions
									<svg className="fill-white text-white hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>
								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-default10">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-default11" type="button"
									className="hs-dropdown-toggle ti-btn ti-btn-info rounded-full">
									Actions
									<svg className="fill-white text-white hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>
								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-default11">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-default12" type="button"
									className="hs-dropdown-toggle ti-btn ti-btn-success rounded-full">
									Actions
									<svg className="fill-white text-white hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>
								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-default12">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Dropdowns Sizes</h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-default13" type="button"
									className="hs-dropdown-toggle py-2 px-3 ti-btn ti-btn-primary">
									Small Dropdown
									<svg className="fill-white text-white hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>
								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-default13">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-default14" type="button"
									className="hs-dropdown-toggle py-3 px-4 ti-btn ti-btn-primary">
									Medium Dropdown
									<svg className="fill-white text-white hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>
								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-default14">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
							<div className="hs-dropdown ti-dropdown">
								<button id="hs-dropdown-default15" type="button"
									className="hs-dropdown-toggle py-3 px-4 ti-btn bg-primary text-white hover:bg-primary focus:ring-primary sm:p-5 dark:focus:ring-offset-white/10">
									Large Dropdown
									<svg className="fill-white text-white hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
										height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								</button>
								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-default15">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Dropdowns With Icon Sizes </h5>
						</div>
						<div className="box-body">
							<div className="hs-dropdown ti-dropdown">
								<button aria-label="button" id="hs-dropdown-default16" type="button" className="hs-dropdown-toggle ti-btn p-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] ti-btn-primary">
									<svg className="fill-white ti-dropdown-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
										<path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z">
										</path>
									</svg>
								</button>
								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-default16">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
							<div className="hs-dropdown ti-dropdown">
								<button aria-label="button" id="hs-dropdown-default17" type="button" className="hs-dropdown-toggle ti-btn p-0 flex-shrink-0 h-[2.875rem] w-[2.875rem] ti-btn-primary">
									<svg className="fill-white ti-dropdown-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
										<path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z">
										</path>
									</svg>
								</button>
								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-default17">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
							<div className="hs-dropdown ti-dropdown">
								<button aria-label="button" id="hs-dropdown-default18" type="button" className="hs-dropdown-toggle ti-btn p-0 flex-shrink-0 h-[3.875rem] w-[3.875rem] ti-btn-primary">
									<svg className="fill-white ti-dropdown-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
										<path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z">
										</path>
									</svg>
								</button>
								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-default18">
									<Link className="ti-dropdown-item" to="#">
										Newsletter
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Purchases
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Downloads
									</Link>
									<Link className="ti-dropdown-item" to="#">
										Team Account
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Dropdowns;
