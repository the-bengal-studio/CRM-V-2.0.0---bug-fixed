/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Modal = () => {
	return (
		<div>
			<PageHeader currentpage="Modals" activepage="Basic Ui" mainpage="Modals" />

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 sm:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Default Modal</h5>
						</div>
						<div className="box-body">
							<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary" data-hs-overlay="#hs-basic-modal"> Open modal</button>

							<div id="hs-basic-modal" className="hs-overlay ti-modal hidden">
								<div className="ti-modal-box">
									<div className="ti-modal-content">
										<div className="ti-modal-header">
											<h3 className="ti-modal-title">Modal title</h3>
											<button type="button" className="hs-dropdown-toggle ti-modal-clode-btn"
												data-hs-overlay="#hs-basic-modal">
												<span className="sr-only">Close</span>
												<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
														fill="currentColor" />
												</svg>
											</button>
										</div>
										<div className="ti-modal-body">
											<p className="mt-1 text-gray-800 dark:text-white/70">
                          This is a wider card with supporting text below as a natural lead-in to additional content.
											</p>
										</div>
										<div className="ti-modal-footer">
											<button type="button"
												className="hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
												data-hs-overlay="#hs-basic-modal"> Close </button>
											<Link className="ti-btn ti-btn-primary"
												to="#"> Save changes </Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 sm:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Modal With Slide Down Animation</h5>
						</div>
						<div className="box-body">
							<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary"
								data-hs-overlay="#hs-slide-down-animation-modal">
                  Open modal
							</button>

							<div id="hs-slide-down-animation-modal" className="hs-overlay hidden ti-modal">
								<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
									<div className="ti-modal-content">
										<div className="ti-modal-header">
											<h3 className="ti-modal-title">
                          Modal title
											</h3>
											<button type="button" className="hs-dropdown-toggle ti-modal-close-btn"
												data-hs-overlay="#hs-slide-down-animation-modal">
												<span className="sr-only">Close</span>
												<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
														fill="currentColor" />
												</svg>
											</button>
										</div>
										<div className="ti-modal-body">
											<p className="mt-1 text-gray-800 dark:text-white/70">
                          This is a wider card with supporting text below as a natural lead-in to additional content.
											</p>
										</div>
										<div className="ti-modal-footer">
											<button type="button"
												className="hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
												data-hs-overlay="#hs-slide-down-animation-modal">
                          Close
											</button>
											<Link className="ti-btn ti-btn-primary"
												to="#">
                          Save changes
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 sm:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Modal With Slide Up Animation</h5>
						</div>
						<div className="box-body">
							<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary"
								data-hs-overlay="#hs-slide-up-animation-modal">
                  Open modal
							</button>

							<div id="hs-slide-up-animation-modal" className="hs-overlay hidden ti-modal">
								<div className="hs-overlay-open:!mt-7 !mt-14 ease-out ti-modal-box">
									<div className="ti-modal-content">
										<div className="ti-modal-header">
											<h3 className="ti-modal-title">
                          Modal title
											</h3>
											<button type="button" className="hs-dropdown-toggle ti-modal-close-btn"
												data-hs-overlay="#hs-slide-up-animation-modal">
												<span className="sr-only">Close</span>
												<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
														fill="currentColor" />
												</svg>
											</button>
										</div>
										<div className="ti-modal-body">
											<p className="mt-1 text-gray-800 dark:text-white/70">
                          This is a wider card with supporting text below as a natural lead-in to additional content.
											</p>
										</div>
										<div className="ti-modal-footer">
											<button type="button"
												className="hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
												data-hs-overlay="#hs-slide-up-animation-modal">
                          Close
											</button>
											<Link className="ti-btn ti-btn-primary"
												to="#">
                          Save changes
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 sm:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Modal Sizes</h5>
						</div>
						<div className="box-body">
							<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary" data-hs-overlay="#hs-small-modal"> Small </button>

							<div id="hs-small-modal" className="hs-overlay hidden ti-modal">
								<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
									<div className="ti-modal-content">
										<div className="ti-modal-header">
											<h3 className="ti-modal-title">  Modal title </h3>
											<button type="button" className="hs-dropdown-toggle ti-modal-close-btn"
												data-hs-overlay="#hs-small-modal">
												<span className="sr-only">Close</span>
												<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
														fill="currentColor" />
												</svg>
											</button>
										</div>
										<div className="ti-modal-body">
											<p className="mt-1 text-gray-800 dark:text-white/70"> This is a wider card with supporting text below as a natural lead-in to additional content. </p>
										</div>
										<div className="ti-modal-footer">
											<button type="button"
												className="hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
												data-hs-overlay="#hs-small-modal"> Close </button>
											<Link className="ti-btn bg-primary text-white hover:bg-primary  focus:ring-primary  dark:focus:ring-offset-white/10" to="#"> Save changes </Link>
										</div>
									</div>
								</div>
							</div>

							<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary" data-hs-overlay="#hs-medium-modal">
                  Medium
							</button>

							<div id="hs-medium-modal" className="hs-overlay hidden ti-modal">
								<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out md:!max-w-2xl md:w-full m-3 md:mx-auto">
									<div className="ti-modal-content">
										<div className="ti-modal-header">
											<h3 className="ti-modal-title">
                          Modal title
											</h3>
											<button type="button" className="hs-dropdown-toggle ti-modal-close-btn"
												data-hs-overlay="#hs-medium-modal">
												<span className="sr-only">Close</span>
												<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
														fill="currentColor" />
												</svg>
											</button>
										</div>
										<div className="ti-modal-body">
											<p className="mt-1 text-gray-800 dark:text-white/70">
                          This is a wider card with supporting text below as a natural lead-in to additional content.
											</p>
										</div>
										<div className="ti-modal-footer">
											<button type="button"
												className="hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
												data-hs-overlay="#hs-medium-modal">
                          Close
											</button>
											<Link className="ti-btn  bg-primary text-white hover:bg-primary  focus:ring-primary  dark:focus:ring-offset-white/10"
												to="#">
                          Save changes
											</Link>
										</div>
									</div>
								</div>
							</div>

							<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary" data-hs-overlay="#hs-large-modal">
                  Large
							</button>

							<div id="hs-large-modal" className="hs-overlay hidden ti-modal">
								<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out lg:!max-w-4xl lg:w-full m-3 lg:!mx-auto">
									<div className="ti-modal-content">
										<div className="ti-modal-header">
											<h3 className="ti-modal-title">
                          Modal title
											</h3>
											<button type="button" className="hs-dropdown-toggle ti-modal-close-btn"
												data-hs-overlay="#hs-large-modal">
												<span className="sr-only">Close</span>
												<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
														fill="currentColor" />
												</svg>
											</button>
										</div>
										<div className="ti-modal-body">
											<p className="mt-1 text-gray-800 dark:text-white/70">
                          This is a wider card with supporting text below as a natural lead-in to additional content.
											</p>
										</div>
										<div className="ti-modal-footer">
											<button type="button"
												className="hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
												data-hs-overlay="#hs-large-modal">
                          Close
											</button>
											<Link className="ti-btn  bg-primary text-white hover:bg-primary  focus:ring-primary  dark:focus:ring-offset-white/10"
												to="#">
                          Save changes
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 sm:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Static Modal</h5>
						</div>
						<div className="box-body">
							<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary" data-hs-overlay="#hs-static-backdrop-modal">
                  Open modal
							</button>

							<div id="hs-static-backdrop-modal" className="hs-overlay hidden ti-modal" data-hs-overlay-keyboard="false"
								data-hs-overlay-backdrop="static">
								<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
									<div className="ti-modal-content">
										<div className="ti-modal-header">
											<h3 className="ti-modal-title">
                          Modal title
											</h3>
											<button type="button" className="hs-dropdown-toggle ti-modal-close-btn"
												data-hs-overlay="#hs-static-backdrop-modal">
												<span className="sr-only">Close</span>
												<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
														fill="currentColor" />
												</svg>
											</button>
										</div>
										<div className="ti-modal-body">
											<p className="mt-1 text-gray-800 dark:text-white/70">
                          This is a wider card with supporting text below as a natural lead-in to additional content.
											</p>
										</div>
										<div className="ti-modal-footer">
											<button type="button"
												className="hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
												data-hs-overlay="#hs-static-backdrop-modal">
                          Close
											</button>
											<Link className="ti-btn ti-btn-primary"
												to="#">
                          Understood
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 sm:col-span-6 xl:!col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Modal Scrolling Behavior</h5>
						</div>
						<div className="box-body">
							<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary"
								data-hs-overlay="#hs-scroll-inside-body-modal">
                  Scroll inside body
							</button>

							<div id="hs-scroll-inside-body-modal" className="hs-overlay hidden ti-modal">
								<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out h-[calc(100%-3.5rem)]">
									<div className="max-h-full overflow-hidden ti-modal-content">
										<div className="ti-modal-header">
											<h3 className="ti-modal-title">
                          Modal title
											</h3>
											<button type="button" className="hs-dropdown-toggle ti-modal-close-btn"
												data-hs-overlay="#hs-scroll-inside-body-modal">
												<span className="sr-only">Close</span>
												<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
														fill="currentColor" />
												</svg>
											</button>
										</div>
										<div className="ti-modal-body ">
											<div className="space-y-4">
												<div>
													<h3 className="text-lg font-semibold text-gray-800 dark:text-white">Be bold</h3>
													<p className="mt-1 text-gray-800 dark:text-white/70">
                              Motivate teams to do their best work. Offer best practices to get users going in the right
                              direction. Be bold and offer just enough help to get the work started, and then get out of
                              the way. Give accurate information so users can make educated decisions. Know your user's
                              struggles and desired outcomes and give just enough information to let them get where they
                              need to go.
													</p>
												</div>

												<div>
													<h3 className="text-lg font-semibold text-gray-800 dark:text-white">Be optimistic</h3>
													<p className="mt-1 text-gray-800 dark:text-white/70">
                              Focusing on the details gives people confidence in our products. Weave a consistent story
                              across our fabric and be diligent about vocabulary across all messaging by being brand
                              conscious across products to create a seamless flow across all the things. Let people know
                              that they can jump in and start working expecting to find a dependable experience across
                              all the things. Keep teams in the loop about what is happening by informing them of
                              relevant features, products and opportunities for success. Be on the journey with them and
                              highlight the key points that will help them the most - right now. Be in the moment by
                              focusing attention on the important bits first.
													</p>
												</div>

												<div>
													<h3 className="text-lg font-semibold text-gray-800 dark:text-white">Be practical, with a wink
													</h3>
													<p className="mt-1 text-gray-800 dark:text-white/70">
                              Keep our own story short and give teams just enough to get moving. Get to the point and be
                              direct. Be concise - we tell the story of how we can help, but we do it directly and with
                              purpose. Be on the lookout for opportunities and be quick to offer a helping hand. At the
                              same time realize that nobody likes a nosy neighbor. Give the user just enough to know
                              that something awesome is around the corner and then get out of the way. Write clear,
                              accurate, and concise text that makes interusers more usable and consistent - and builds
                              trust. We strive to write text that is understandable by anyone, anywhere, regardless of
                              their culture or language so that everyone feels they are part of the team.
													</p>
												</div>
											</div>
										</div>
										<div className="ti-modal-footer">
											<button type="button"
												className="hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
												data-hs-overlay="#hs-scroll-inside-body-modal">
                          Close
											</button>
											<Link className="ti-btn ti-btn-primary"
												to="#">
                          Save changes
											</Link>
										</div>
									</div>
								</div>
							</div>

							<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary"
								data-hs-overlay="#hs-scroll-inside-viewport-modal">
                  Scroll inside viewport
							</button>

							<div id="hs-scroll-inside-viewport-modal" className="hs-overlay hidden ti-modal">
								<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
									<div className="ti-modal-content">
										<div className="ti-modal-header">
											<h3 className="ti-modal-title">
                          Modal title
											</h3>
											<button type="button" className="hs-dropdown-toggle ti-modal-close-btn"
												data-hs-overlay="#hs-scroll-inside-viewport-modal">
												<span className="sr-only">Close</span>
												<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
														fill="currentColor" />
												</svg>
											</button>
										</div>
										<div className="ti-modal-body ">
											<div className="space-y-4">
												<div>
													<h3 className="text-lg font-semibold text-gray-800 dark:text-white">Be bold</h3>
													<p className="mt-1 text-gray-800 dark:text-white/70">
                              Motivate teams to do their best work. Offer best practices to get users going in the right
                              direction. Be bold and offer just enough help to get the work started, and then get out of
                              the way. Give accurate information so users can make educated decisions. Know your user's
                              struggles and desired outcomes and give just enough information to let them get where they
                              need to go.
													</p>
												</div>

												<div>
													<h3 className="text-lg font-semibold text-gray-800 dark:text-white">Be optimistic</h3>
													<p className="mt-1 text-gray-800 dark:text-white/70">
                              Focusing on the details gives people confidence in our products. Weave a consistent story
                              across our fabric and be diligent about vocabulary across all messaging by being brand
                              conscious across products to create a seamless flow across all the things. Let people know
                              that they can jump in and start working expecting to find a dependable experience across
                              all the things. Keep teams in the loop about what is happening by informing them of
                              relevant features, products and opportunities for success. Be on the journey with them and
                              highlight the key points that will help them the most - right now. Be in the moment by
                              focusing attention on the important bits first.
													</p>
												</div>

												<div>
													<h3 className="text-lg font-semibold text-gray-800 dark:text-white">Be practical, with a wink
													</h3>
													<p className="mt-1 text-gray-800 dark:text-white/70">
                              Keep our own story short and give teams just enough to get moving. Get to the point and be
                              direct. Be concise - we tell the story of how we can help, but we do it directly and with
                              purpose. Be on the lookout for opportunities and be quick to offer a helping hand. At the
                              same time realize that novbody likes a nosy neighbor. Give the user just enough to know
                              that something awesome is around the corner and then get out of the way. Write clear,
                              accurate, and concise text that makes interusers more usable and consistent - and builds
                              trust. We strive to write text that is understandable by anyone, anywhere, regardless of
                              their culture or language so that everyone feels they are part of the team.
													</p>
												</div>
											</div>
										</div>
										<div className="ti-modal-footer">
											<button type="button"
												className="hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
												data-hs-overlay="#hs-scroll-inside-viewport-modal">
                          Close
											</button>
											<Link className="ti-btn ti-btn-primary"
												to="#">
                          Save changes
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 sm:col-span-6 xl:!col-span-5">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Vertically Centered Modals</h5>
						</div>
						<div className="box-body">
							<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary" data-hs-overlay="#hs-vertically-centered-modal"> Vertically centered modal </button>

							<div id="hs-vertically-centered-modal" className="hs-overlay hidden ti-modal">
								<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
									<div className="ti-modal-content">
										<div className="ti-modal-header">
											<h3 className="ti-modal-title"> Modal title </h3>
											<button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-vertically-centered-modal">
												<span className="sr-only">Close</span>
												<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
												</svg>
											</button>
										</div>
										<div className="ti-modal-body">
											<p className="text-gray-800 dark:text-white/70"> This is a wider card with supporting text below as a natural lead-in to additional content. </p>
										</div>
										<div className="ti-modal-footer">
											<button type="button" className="hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10" data-hs-overlay="#hs-vertically-centered-modal">
                          Close
											</button>
											<Link className="ti-btn ti-btn-primary" to="#">
                          Save changes
											</Link>
										</div>
									</div>
								</div>
							</div>

							<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary" data-hs-overlay="#hs-vertically-centered-scrollable-modal">
                  Vertically centered scrollable modal
							</button>

							<div id="hs-vertically-centered-scrollable-modal" className="hs-overlay hidden ti-modal">
								<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
									<div className="max-h-full overflow-hidden ti-modal-content">
										<div className="ti-modal-header">
											<h3 className="ti-modal-title">
                          Modal title
											</h3>
											<button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-vertically-centered-scrollable-modal">
												<span className="sr-only">Close</span>
												<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
												</svg>
											</button>
										</div>
										<div className="ti-modal-body">
											<div className="space-y-4">
												<div>
													<h3 className="text-lg font-semibold text-gray-800 dark:text-white">Be bold</h3>
													<p className="mt-1 text-gray-800 dark:text-white/70">
                              Motivate teams to do their best work. Offer best practices to get users going in the right direction. Be bold and offer just enough help to get the work started, and then get out of the way. Give accurate information so users can make educated decisions. Know your user's struggles and desired outcomes and give just enough information to let them get where they need to go.
													</p>
												</div>

												<div>
													<h3 className="text-lg font-semibold text-gray-800 dark:text-white">Be optimistic</h3>
													<p className="mt-1 text-gray-800 dark:text-white/70">
                              Focusing on the details gives people confidence in our products. Weave a consistent story across our fabric and be diligent about vocabulary across all messaging by being brand conscious across products to create a seamless flow across all the things. Let people know that they can jump in and start working expecting to find a dependable experience across all the things. Keep teams in the loop about what is happening by informing them of relevant features, products and opportunities for success. Be on the journey with them and highlight the key points that will help them the most - right now. Be in the moment by focusing attention on the important bits first.
													</p>
												</div>

												<div>
													<h3 className="text-lg font-semibold text-gray-800 dark:text-white">Be practical, with a wink</h3>
													<p className="mt-1 text-gray-800 dark:text-white/70">
                              Keep our own story short and give teams just enough to get moving. Get to the point and be direct. Be concise - we tell the story of how we can help, but we do it directly and with purpose. Be on the lookout for opportunities and be quick to offer a helping hand. At the same time realize that novbody likes a nosy neighbor. Give the user just enough to know that something awesome is around the corner and then get out of the way. Write clear, accurate, and concise text that makes interusers more usable and consistent - and builds trust. We strive to write text that is understandable by anyone, anywhere, regardless of their culture or language so that everyone feels they are part of the team.
													</p>
												</div>
											</div>
										</div>
										<div className="ti-modal-footer">
											<button type="button" className="hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10" data-hs-overlay="#hs-vertically-centered-scrollable-modal">
                          Close
											</button>
											<Link className="ti-btn ti-btn-primary" to="#">
                          Save changes
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 sm:col-span-6 xl:!col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Modal Focus Management</h5>
						</div>
						<div className="box-body">
							<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary" data-hs-overlay="#hs-focus-management-modal">
                  Open modal
							</button>

							<div id="hs-focus-management-modal" className="hs-overlay hidden ti-modal">
								<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
									<div className="ti-modal-content">
										<div className="ti-modal-header">
											<h3 className="ti-modal-title">
                          Modal title
											</h3>
											<button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-focus-management-modal">
												<span className="sr-only">Close</span>
												<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
												</svg>
											</button>
										</div>
										<div className="ti-modal-body">
											<label htmlFor="input-label" className="ti-form-label">Email</label>
											<input type="email" id="input-label" className="ti-form-input" placeholder="you@site.com" autoFocus/>
										</div>
										<div className="ti-modal-footer">
											<button type="button" className="hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10" data-hs-overlay="#hs-focus-management-modal">
                          Close
											</button>
											<Link className="ti-btn ti-btn-primary" to="#">
                          Save changes
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 sm:col-span-6 xl:!col-span-2">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Toggle Between Modals</h5>
						</div>
						<div className="box-body">
							<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary" data-hs-overlay="#hs-toggle-between-modals-first-modal">
                  Open modal
							</button>

							<div id="hs-toggle-between-modals-first-modal" className="hs-overlay hidden ti-modal">
								<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
									<div className="ti-modal-content">
										<div className="ti-modal-header">
											<h3 className="ti-modal-title">
                          Modal 1
											</h3>
											<button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-toggle-between-modals-first-modal" data-hs-overlay-close>
												<span className="sr-only">Close</span>
												<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
												</svg>
											</button>
										</div>
										<div className="ti-modal-body">
											<p className="mt-1 text-gray-800 dark:text-white/70">
                          Show a second modal and hide this one with the button below.
											</p>
										</div>
										<div className="ti-modal-footer">
											<button type="button" className="ti-btn ti-btn-primary" data-hs-overlay="#hs-toggle-between-modals-second-modal">
                          Open second modal
											</button>
										</div>
									</div>
								</div>
							</div>

							<div id="hs-toggle-between-modals-second-modal" className="hs-overlay hidden ti-modal">
								<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
									<div className="ti-modal-content">
										<div className="ti-modal-header">
											<h3 className="ti-modal-title">
                          Modal 2
											</h3>
											<button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-toggle-between-modals-second-modal" data-hs-overlay-close>
												<span className="sr-only">Close</span>
												<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
												</svg>
											</button>
										</div>
										<div className="ti-modal-body">
											<p className="mt-1 text-gray-800 dark:text-white/70">
                          Hide this modal and show the first with the button below.
											</p>
										</div>
										<div className="ti-modal-footer">
											<button type="button" className="ti-btn ti-btn-primary" data-hs-overlay="#hs-toggle-between-modals-first-modal">
                          Back to first
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 sm:col-span-6 xl:!col-span-7">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Fullscreen Modal</h5>
						</div>
						<div className="box-body">
							<button type="button" className="m-1 ti-btn ti-btn-primary" data-hs-overlay="#hs-full-screen-modal"> Full screen </button>

							<div id="hs-full-screen-modal" className="hs-overlay hidden ti-modal">
								<div className="hs-overlay-open:mt-0 ti-modal-box mt-10 !m-0 !max-w-full !w-full">
									<div className="ti-modal-content !rounded-none">
										<div className="ti-modal-header">
											<h3 className="ti-modal-title"> Modal title </h3>
											<button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-full-screen-modal">
												<span className="sr-only">Close</span>
												<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
												</svg>
											</button>
										</div>
										<div className="ti-modal-body">
											<p className="mt-1 text-gray-800 dark:text-white/70"> This is a wider card with supporting text below as a natural lead-in to additional content. </p>
										</div>
										<div className="ti-modal-footer">
											<button type="button" className="hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10" data-hs-overlay="#hs-full-screen-modal">Close</button>
											<Link className="ti-btn ti-btn-primary" to="#"> Save changes</Link>
										</div>
									</div>
								</div>
							</div>

							<button type="button" className="m-1 ti-btn ti-btn-primary" data-hs-overlay="#hs-full-screen-modal-below-sm">
                  Full screen below sm
							</button>

							<div id="hs-full-screen-modal-below-sm" className="hs-overlay hidden ti-modal">
								<div className="hs-overlay-open:mt-0 ti-modal-box mt-10 max-w-full w-full !m-0 sm:hs-overlay-open:!mt-10 sm:!mt-0 sm:max-w-lg sm:!mx-auto">
									<div className="ti-modal-content sm:border sm:rounded-xl sm:shadow-sm dark:bg-bgdark sm:dark:border-white/10">
										<div className="ti-modal-header">
											<h3 className="ti-modal-title">
                          Modal title
											</h3>
											<button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-full-screen-modal-below-sm">
												<span className="sr-only">Close</span>
												<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
												</svg>
											</button>
										</div>
										<div className="ti-modal-body">
											<p className="mt-1 text-gray-800 dark:text-white/70">
                          This is a wider card with supporting text below as a natural lead-in to additional content.
											</p>
										</div>
										<div className="ti-modal-footer">
											<button type="button" className="hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10" data-hs-overlay="#hs-full-screen-modal-below-sm">
                          Close
											</button>
											<Link className="ti-btn ti-btn-primary" to="#">
                          Save changes
											</Link>
										</div>
									</div>
								</div>
							</div>

							<button type="button" className="m-1 ti-btn ti-btn-primary" data-hs-overlay="#hs-full-screen-modal-below-md">
                  Full screen below md
							</button>

							<div id="hs-full-screen-modal-below-md" className="hs-overlay hidden ti-modal">
								<div className="hs-overlay-open:mt-0 ti-modal-box mt-10 max-w-full w-full !m-0 md:hs-overlay-open:!mt-10 md:!mt-0 md:max-w-lg md:!mx-auto">
									<div className="ti-modal-content md:border md:rounded-xl md:shadow-sm md:dark:border-white/10">
										<div className="ti-modal-header">
											<h3 className="ti-modal-title">
                          Modal title
											</h3>
											<button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-full-screen-modal-below-md">
												<span className="sr-only">Close</span>
												<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
												</svg>
											</button>
										</div>
										<div className="ti-modal-body">
											<p className="mt-1 text-gray-800 dark:text-white/70">
                          This is a wider card with supporting text below as a natural lead-in to additional content.
											</p>
										</div>
										<div className="ti-modal-footer">
											<button type="button" className="hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10" data-hs-overlay="#hs-full-screen-modal-below-md">
                          Close
											</button>
											<Link className="ti-btn ti-btn-primary" to="#">
                          Save changes
											</Link>
										</div>
									</div>
								</div>
							</div>

							<button type="button" className="m-1 ti-btn ti-btn-primary" data-hs-overlay="#hs-full-screen-modal-below-lg">
                  Full screen below lg
							</button>

							<div id="hs-full-screen-modal-below-lg" className="hs-overlay hidden ti-modal">
								<div className="hs-overlay-open:mt-0 ti-modal-box mt-10 max-w-full w-full !m-0 lg:hs-overlay-open:!mt-10 lg:!mt-0 lg:max-w-lg lg:!mx-auto">
									<div className="ti-modal-content lg:border lg:rounded-xl lg:shadow-sm lg:dark:border-white/10">
										<div className="ti-modal-header">
											<h3 className="ti-modal-title">
                          Modal title
											</h3>
											<button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-full-screen-modal-below-lg">
												<span className="sr-only">Close</span>
												<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
												</svg>
											</button>
										</div>
										<div className="ti-modal-body">
											<p className="mt-1 text-gray-800 dark:text-white/70">
                          This is a wider card with supporting text below as a natural lead-in to additional content.
											</p>
										</div>
										<div className="ti-modal-footer">
											<button type="button" className="hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10" data-hs-overlay="#hs-full-screen-modal-below-lg">
                          Close
											</button>
											<Link className="ti-btn ti-btn-primary" to="#">
                          Save changes
											</Link>
										</div>
									</div>
								</div>
							</div>

							<button type="button" className="m-1 ti-btn ti-btn-primary" data-hs-overlay="#hs-full-screen-modal-below-xl">
                  Full screen below xl
							</button>

							<div id="hs-full-screen-modal-below-xl" className="hs-overlay hidden ti-modal">
								<div className="hs-overlay-open:mt-0 ti-modal-box mt-10 max-w-full w-full !m-0  xl:hs-overlay-open:!mt-10 xl:!mt-0 xl:max-w-xl xl:!mx-auto">
									<div className="ti-modal-content xl:border xl:rounded-xl xl:shadow-sm xl:dark:border-white/10">
										<div className="ti-modal-header">
											<h3 className="ti-modal-title">
                          Modal title
											</h3>
											<button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-full-screen-modal-below-xl">
												<span className="sr-only">Close</span>
												<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
												</svg>
											</button>
										</div>
										<div className="ti-modal-body">
											<p className="mt-1 text-gray-800 dark:text-white/70">
                          This is a wider card with supporting text below as a natural lead-in to additional content.
											</p>
										</div>
										<div className="ti-modal-footer">
											<button type="button" className="hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10" data-hs-overlay="#hs-full-screen-modal-below-xl">
                          Close
											</button>
											<Link className="ti-btn ti-btn-primary" to="#">
                          Save changes
											</Link>
										</div>
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

export default Modal;
