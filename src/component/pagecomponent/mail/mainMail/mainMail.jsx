import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ALLImages from "../../../../common/imagesData";
import PageHeader from "../../../../layout/layoutsection/pageHeader/pageHeader";

const MainMail = () => {

	const [showFirstDiv, setShowFirstDiv] = useState(true);
	const [showSecondDiv, setShowSecondDiv] = useState(false);
	const [ModelClass, setModelClass] = useState("");
  
	const handleClick = () => {
	  setShowFirstDiv(false);
	  setShowSecondDiv(true);
	};
  
	const handleBackClick = () => {
	  setShowFirstDiv(true);
	  setShowSecondDiv(false);
	};

	const [isChecked, setIsChecked] = useState(true);

	const handleCheckAll = () => {
	  const mailListElements = document.querySelectorAll('.mail-list');
	  const mailCheckboxInputs = document.querySelectorAll('.mail-checkbox input');
  
	  if (isChecked) {
		mailListElements.forEach((element) => {
		  element.classList.add('selected');
		});
  
		mailCheckboxInputs.forEach((input) => {
		  input.checked = true;
		});
	  } else {
		mailListElements.forEach((element) => {
		  element.classList.remove('selected');
		});
  
		mailCheckboxInputs.forEach((input) => {
		  input.checked = false;
		});
	  }
  
	  setIsChecked(!isChecked);
	};

	return (
		<div>
			<PageHeader currentpage="Mail Inbox" activepage="Mail" mainpage="Mail Inbox" />
			<div className= "grid grid-cols-12 gap-x-6">
				<div className= "col-span-12 xl:col-span-4 xxl:!col-span-3">
					<div className= "box">
						<div className= "box-header bg-transparent">
							<Link to="#" className= "hs-dropdown-toggle py-2 px-3 ti-btn ti-btn-primary w-full" data-hs-overlay="#mail-compose">
								<i className= "ri ri-edit-line"></i>Compose
							</Link>
						</div>
						<div className= "box-body">
							<ul>
								<li>
									<Link to="#" className= "p-2 mb-1 flex items-center align-middle justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm bg-gray-100 font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<i className= "ri ri-mail-line"></i>
											<span className= "">Inbox</span>
										</div>
										<div>
											<span className= "">20</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<i className= "ri ri-star-line"></i>
											<span className= "">Starred</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<i className= "ri ri-time-line"></i>
											<span className= "">Snoozed</span>
										</div>
									</Link>
								</li>
								<li >
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<i className= "ri ri-price-tag-3-line"></i>
											<span className= "">Important</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<i className= "ri ri-send-plane-line"></i>
											<span className= "">sent</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<i className= "ri ri-draft-line"></i>
											<span className= "">Drafts</span>
										</div>
										<div>
											<span className= "">2</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<i className= "ri ri-alert-line"></i>
											<span className= "">Spam</span>
										</div>
										<div>
											<span className= "">12</span>
										</div>
									</Link>
								</li>
								<li className= "py-2 mb-1 justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal">
									<Link to="#" className= "hs-collapse-toggle inline-flex justify-center items-center gap-2 rounded-sm border border-transparent transition-all text-sm" id="more" data-hs-collapse="#more-heading">
										<i className= "ri ri-arrow-down-s-line "></i> <span>More</span>
									</Link>
								</li>
								<li id="more-heading" className= "hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="more">
									<ul>
										<li>
											<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
												<div className= "flex space-x-3 rtl:space-x-reverse">
													<i className= "ri ri-inbox-archive-line"></i>
													<span className= "">Archived</span>
												</div>
												<div>
													<span className= "">5</span>
												</div>
											</Link>
										</li>
										<li>
											<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
												<div className= "flex space-x-3 rtl:space-x-reverse">
													<i className= "ri ri-contacts-book-2-line"></i>
													<span className= "">Contacts</span>
												</div>
												<div>
													<span className= "">200</span>
												</div>
											</Link>
										</li>
										<li>
											<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
												<div className= "flex space-x-3 rtl:space-x-reverse">
													<i className= "ri ri-delete-bin-line"></i>
													<span className= "">Trash</span>
												</div>
												<div>
													<span className= "">25</span>
												</div>
											</Link>
										</li>
									</ul>
								</li>
							</ul>
							<h3 className= "text-gray-500 dark:text-white/70 my-3 font-semibold">Labels+</h3>
							<ul>
								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<span className= "w-2.5 h-2.5 inline-block bg-primary rounded-full my-auto"></span>
											<span className= "">Notes</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<span className= "w-2.5 h-2.5 inline-block bg-secondary rounded-full my-auto"></span>
											<span className= "">Personals</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<span className= "">Receipts</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<span className= "w-2.5 h-2.5 inline-block bg-info rounded-full my-auto"></span>
											<span className= "">Work</span>
										</div>
									</Link>
								</li>
							</ul>
							<h3 className= "text-gray-500 dark:text-white/70 my-3 font-semibold">Settings</h3>
							<ul>
								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<i className= "ri ri-settings-2-line"></i>
											<span className= "">settings</span>
										</div>
									</Link>
								</li>
							</ul>
							<h3 className= "text-gray-500 dark:text-white/70 my-3 font-semibold">Meet</h3>
							<ul>
								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<i className= "ri ri-vidicon-line"></i>
											<span className= "">Start a Meeting</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<i className= "ri ri-add-circle-line"></i>
											<span className= "">Join a Meeting</span>
										</div>
									</Link>
								</li>
							</ul>
							<h3 className= "text-gray-500 dark:text-white/70 my-3 font-semibold">Online</h3>
							<ul>
								<li>
									<Link to="#" className= "py-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal">
										<div className= "flex space-x-3 rtl:space-x-reverse overflow-auto">
											<div className= "relative">
												<img className= "avatar avatar-xs ring-0 rounded-full" src= {ALLImages('jpg60')} alt="avatar"/>
												<span className= "online"></span>
											</div>
											<div>
												<p className= "text-slate-700 font-semibold text-xs dark:text-white my-auto">Katherina Kat</p>
												<p className= "text-xs xxl:max-w-[250px] max-w-[170px] truncate">Hi! Some quick example text to build</p>
											</div>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#" className= "py-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal">
										<div className= "flex space-x-3 rtl:space-x-reverse overflow-auto">
											<div className= "relative">
												<span className= "avatar avatar-xs ring-0 rounded-full bg-secondary leading-none  p-2 text-center text-lg text-white">B</span>
												<span className= "online"></span>
											</div>
											<div>
												<p className= "text-slate-700 font-semibold text-xs dark:text-white my-auto">Ben Dover</p>
												<p className= "text-xs xxl:max-w-[250px] max-w-[170px] truncate">Hi! Some quick example text to build</p>
											</div>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#" className= "py-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal">
										<div className= "flex space-x-3 rtl:space-x-reverse overflow-auto">
											<div className= "relative flex-none">
												<img className= "avatar avatar-xs ring-0 rounded-full" src= {ALLImages('jpg67')} alt="avatar"/>
												<span className= "online"></span>
											</div>
											<div>
												<p className= "text-slate-700 font-semibold text-xs dark:text-white my-auto">Benz Makit</p>
												<p className= "text-xs xxl:max-w-[250px] max-w-[170px] truncate">😎Hi! Kasd voluptua labore et justo ea 👏</p>
											</div>
										</div>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className= "col-span-12 xl:col-span-8 xxl:!col-span-9">
				{showFirstDiv && (
					<div className= "box main-inbox">
						<div className= "px-4 box-header bg-transparent">
							<div className= "flex items-center justify-between">
								<div className= "flex mail-option space-x-5 rtl:space-x-reverse">
									<div className= "flex">
										<input type="checkbox" className= "border-gray-500 ti-form-checkbox mt-0.5" onClick={handleCheckAll} id="hs-default-checkbox"/>
										<label htmlFor="hs-default-checkbox" className= "text-sm text-gray-500 dark:text-white/70"></label>
									</div>
									<div className= "hs-tooltip ti-main-tooltip">
										<Link to="#" className= "hs-tooltip-toggle text-lg leading-none text-gray-500 dark:text-white/70">
											<i className= "ri-refresh-line"></i>
											<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                          Refresh
											</span>
										</Link>
									</div>
									<div className= "hs-dropdown ti-dropdown hs-tooltip ti-main-tooltip">
										<Link to="#" className= "hs-tooltip-toggle text-lg leading-none text-gray-500 dark:text-white/70" id="snooze-drop2">
											<i className= "ri-more-2-line"></i>
											<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                       More
											</span>
										</Link>
										<div className= "hs-dropdown-menu ti-dropdown-menu "
											aria-labelledby="snooze-drop2">
											<Link className= "ti-dropdown-item" to="#">
                            Read
											</Link>
											<Link className= "ti-dropdown-item" to="#">
                            unread
											</Link>
											<Link className= "ti-dropdown-item" to="#">
                            Mark as Read
											</Link>
											<Link className= "ti-dropdown-item" to="#">
                            Spam
											</Link>
											<Link className= "ti-dropdown-item" to="#">
                            Delete
											</Link>
											<Link className= "ti-dropdown-item" to="#">
                            None
											</Link>
										</div>
									</div>
								</div>
								<div className= "flex space-x-4 rtl:space-x-reverse">
									<div className= " text-gray-500 dark:text-white/70 leading-[0] my-auto">
										<span className= "current-page text-base leading-[0] font-semibold">1</span>
										<span className= "mx-1">Of</span>
										<span className= "total text-base leading-[0] font-semibold">10</span>
									</div>
									<div className= "hs-tooltip ti-main-tooltip">
										<Link to="#" className= "hs-tooltip-toggle text-lg leading-none text-gray-500 dark:text-white/70 opacity-60 flex">
											<i className= "ri-arrow-left-s-line rtl:rotate-180"></i>
											<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                          Prev
											</span>
										</Link>
									</div>
									<div className= "hs-tooltip ti-main-tooltip">
										<Link to="#" className= "hs-tooltip-toggle text-lg leading-none text-gray-500 dark:text-white/70 flex">
											<i className= "ri-arrow-right-s-line rtl:rotate-180"></i>
											<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                          Next
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className= "box-body p-0  overflow-hidden">
							<div className= "overflow-auto">
								<table className= "ti-custom-table ti-custom-table-head">
									<tbody>
										<tr onClick={handleClick} className= "mail-list bg-gray-100 hover:bg-gray-100 dark:bg-black/20 dark:hover:bg-black/20">
											<td className= "py-3 ltr:!pl-4 rtl:!pr-4 ltr:!pr-3 rtl:!pl-3">
												<div className= "flex items-center h-5 mail-checkbox">
													<input id="hs-table-checkbox-12" type="checkbox" className= "border-gray-500 ti-form-checkbox"/>
													<label htmlFor="hs-table-checkbox-12" className= "sr-only">Checkbox</label>
												</div>
											</td>
											<td className= "!px-3"><i className= "ri ri-star-line text-gray-500 dark:text-white/70 hover:text-yellow-500"></i></td>
											<td className= "!px-3"><i className= "ri ri-price-tag-3-line  text-gray-500 dark:text-white/70 hover:text-yellow-500"></i></td>
											<td className= "!px-3 relative">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<div className= "flex space-x-3 rtl:space-x-reverse">
													<img className= "avatar avatar-xs ring-0 rounded-full" src= {ALLImages('jpg57')} alt="avatar"/>
													<p className= "text-slate-700 font-semibold text-sm dark:text-white my-auto">
                              Json Taylor
													</p>
												</div>
											</td>
											<td className= "font-medium !px-3 relative">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<p className= "text-xs text-gray-500 dark:text-white/70 mail-main">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 😊 Cumque optio reiciendis ullam assumenda sapiente. Porro facere alias perspiciatis velit iure, ea quas magnam nisi architecto possimus maiores. Aliquam, quae corporis!.
												</p>
											</td>
											<td className= "!px-3"><i className= "ri ri-attachment-2 text-gray-500 dark:text-white/70"></i></td>
											<td className= "!px-3 w-44">
												<div className= "icons-mail2 text-gray-500 dark:text-white/70">
													<span>30 sept,2022</span>
													<span className= "ltr:ml-3 rtl:ml-3">3:01pm</span>
												</div>
												<div className= "icons-mail">
													<div className= "flex justify-end items-center space-x-4 rtl:space-x-reverse">
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-mail-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    mark as read
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-delete-bin-6-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    delete
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-time-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    Snooze
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-archive-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    archive
																</span>
															</Link>
														</div>
													</div>
												</div>
											</td>
										</tr>
										<tr onClick={handleClick} className= "mail-list bg-gray-100 hover:bg-gray-100 dark:bg-black/20 dark:hover:bg-black/20">
											<td className= "py-3 ltr:!pl-4 rtl:!pr-4 ltr:!pr-3 rtl:!pl-3">
												<div className= "flex items-center h-5 mail-checkbox">
													<input id="hs-table-checkbox-13" type="checkbox" className= "border-gray-500 ti-form-checkbox"/>
													<label htmlFor="hs-table-checkbox-13" className= "sr-only">Checkbox</label>
												</div>
											</td>
											<td className= "!px-3"><i className= "ri ri-star-line text-yellow-500 dark:text-yellow-500 hover:text-yellow-500"></i></td>
											<td className= "!px-3"><i className= "ri ri-price-tag-3-line  text-gray-500 dark:text-white/70 hover:text-yellow-500"></i></td>
											<td className= "!px-3 relative">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<div className= "flex space-x-3 rtl:space-x-reverse">
													<img className= "avatar avatar-xs ring-0 rounded-full" src= {ALLImages('jpg58')} alt="avatar"/>
													<p className= "text-slate-700 font-semibold text-sm dark:text-white my-auto">
                              Socrates Itumay
													</p>
												</div>
											</td>
											<td className= "font-medium !px-3 relative overflow-hidden">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<p className= "text-xs text-gray-500 dark:text-white/70 mail-main truncate">
                              👍Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus cumque explicabo ea libero itaque nam placeat ipsum expedita, consequuntur nihil ad nulla voluptate beatae eius necessitatibus asperiores sunt! Rem, nihil.
												</p>
											</td>
											<td className= "!px-3"></td>
											<td className= "!px-3 w-44">
												<div className= "icons-mail2 text-gray-500 dark:text-white/70">
													<span>29 sept,2022</span>
													<span className= "ltr:ml-3 rtl:ml-3">3:01pm</span>
												</div>
												<div className= "icons-mail">
													<div className= "flex justify-end items-center space-x-4 rtl:space-x-reverse">
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-mail-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    mark as read
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-delete-bin-6-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    delete
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-time-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    Snooze
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-archive-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    archive
																</span>
															</Link>
														</div>
													</div>
												</div>
											</td>
										</tr>
										<tr onClick={handleClick} className= "mail-list hover:bg-gray-100 dark:hover:bg-black/20">
											<td className= "py-3 ltr:!pl-4 rtl:!pr-4 ltr:!pr-3 rtl:!pl-3">
												<div className= "flex items-center h-5 mail-checkbox">
													<input id="hs-table-checkbox-14" type="checkbox" className= "border-gray-500 ti-form-checkbox"/>
													<label htmlFor="hs-table-checkbox-14" className= "sr-only">Checkbox</label>
												</div>
											</td>
											<td className= "!px-3"><i className= "ri ri-star-line text-gray-500 dark:text-white/70 hover:text-yellow-500"></i></td>
											<td className= "!px-3"><i className= "ri ri-price-tag-3-line text-yellow-500 dark:text-yellow-500 hover:text-yellow-500"></i></td>
											<td className= "!px-3 relative">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<div className= "flex space-x-3 rtl:space-x-reverse">
													<img className= "avatar avatar-xs ring-0 rounded-full" src= {ALLImages('jpg59')} alt="avatar"/>
													<p className= "text-slate-700 font-semibold text-sm dark:text-white my-auto">
                              Wiley Waites
													</p>
												</div>
											</td>
											<td className= "font-medium !px-3 relative">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<div className= "flex space-x-2 rtl:space-x-reverse mail-main">
													<span className= "whitespace-nowrap inline-block py-0 px-2 rounded-sm text-xs font-medium border border-primary bg-primary/30 text-primary">Celebration</span>
													<span className= "text-xs text-gray-500 dark:text-white/70">
                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque porro id😋😎, laboriosam, laudantium corporis voluptatum aliquid temporibus accusamus inventore accusantium necessitatibus repellendus natus ipsam quasi, vitae itaque dolorum animi quod!
													</span>
												</div>
											</td>
											<td className= "!px-3"></td>
											<td className= "!px-3 w-44">
												<div className= "icons-mail2 text-gray-500 dark:text-white/70">
													<span>29 sept,2022</span>
													<span className= "ltr:ml-3 rtl:ml-3">5:30am</span>
												</div>
												<div className= "icons-mail">
													<div className= "flex justify-end items-center space-x-4 rtl:space-x-reverse">
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-mail-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    mark as read
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-delete-bin-6-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    delete
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-time-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    Snooze
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-archive-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    archive
																</span>
															</Link>
														</div>
													</div>
												</div>
											</td>
										</tr>
										<tr onClick={handleClick} className= "mail-list hover:bg-gray-100 dark:hover:bg-black/20">
											<td className= "py-3 ltr:!pl-4 rtl:!pr-4 ltr:!pr-3 rtl:!pl-3">
												<div className= "flex items-center h-5 mail-checkbox">
													<input id="hs-table-checkbox-15" type="checkbox" className= "border-gray-500 ti-form-checkbox"/>
													<label htmlFor="hs-table-checkbox-15" className= "sr-only">Checkbox</label>
												</div>
											</td>
											<td className= "!px-3"><i className= "ri ri-star-line text-gray-500 dark:text-white/70 hover:text-yellow-500"></i></td>
											<td className= "!px-3"><i className= "ri ri-price-tag-3-line  text-gray-500 dark:text-white/70 hover:text-yellow-500"></i></td>
											<td className= "!px-3 relative">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<div className= "flex space-x-3 rtl:space-x-reverse">
													<img className= "avatar avatar-xs ring-0 rounded-full" src= {ALLImages('jpg60')} alt="avatar"/>
													<p className= "text-slate-700 font-semibold text-sm dark:text-white my-auto">
                              Alica Nestle
													</p>
												</div>
											</td>
											<td className= "font-medium !px-3 relative">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<p className= "text-xs text-gray-500 dark:text-white/70 mail-main truncate mb-2">
                           🤩🤩Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis neque enim magnam eum molestias dolore, repudiandae ipsa voluptate sapiente, ullam maiores? Culpa rerum obcaecati tenetur provident dignissimos nobis enim omnis.
												</p>
												<div className= "flex space-x-3 rtl:space-x-reverse mt-2">
													<Link className= "py-1 px-3 space-x-2 rtl:space-x-reverse relative inline-flex flex-shrink-0 justify-center items-center rounded-full border font-normal bg-gray-100 text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10" to="#">
														<i className= "ri ri-image-line text-xs"></i>
														<span>Image01..._jpg</span>
													</Link>
													<Link className= "py-1 px-3 space-x-2 rtl:space-x-reverse relative inline-flex flex-shrink-0 justify-center items-center rounded-full border font-normal bg-gray-100 text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10" to="#">
														<i className= "ri ri-file-line text-xs"></i>
														<span>Document.docx</span>
													</Link>
												</div>
											</td>
											<td className= "!px-3"><i className= "ri ri-send-plane-line text-gray-500 dark:text-white/70"></i></td>
											<td className= "!px-3 w-44">
												<div className= "icons-mail2 text-gray-500 dark:text-white/70">
													<span>27 sept,2022</span>
													<span className= "ltr:ml-3 rtl:ml-3">6:30pm</span>
												</div>
												<div className= "icons-mail">
													<div className= "flex justify-end items-center space-x-4 rtl:space-x-reverse">
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-mail-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    mark as read
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-delete-bin-6-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    delete
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-time-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    Snooze
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-archive-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    archive
																</span>
															</Link>
														</div>
													</div>
												</div>
											</td>
										</tr>
										<tr onClick={handleClick} className= "mail-list hover:bg-gray-100 dark:hover:bg-black/20">
											<td className= "py-3 ltr:!pl-4 rtl:!pr-4 ltr:!pr-3 rtl:!pl-3">
												<div className= "flex items-center h-5 mail-checkbox">
													<input id="hs-table-checkbox-16" type="checkbox" className= "border-gray-500 ti-form-checkbox"/>
													<label htmlFor="hs-table-checkbox-16" className= "sr-only">Checkbox</label>
												</div>
											</td>
											<td className= "!px-3"><i className= "ri ri-star-line text-yellow-500 dark:text-yellow-500 hover:text-yellow-500"></i></td>
											<td className= "!px-3"><i className= "ri ri-price-tag-3-line  text-gray-500 dark:text-white/70 hover:text-yellow-500"></i></td>
											<td className= "!px-3 relative">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<div className= "flex space-x-3 rtl:space-x-reverse">
													<span className= "avatar avatar-xs ring-0 rounded-full bg-primary leading-none p-2 text-center text-lg text-white">E</span>
													<p className= "text-slate-700 font-semibold text-sm dark:text-white my-auto">
                              Edgardo Huel
													</p>
												</div>
											</td>
											<td className= "font-medium !px-3 relative">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<div className= "flex space-x-2 rtl:space-x-reverse mail-main">
													<span className= "whitespace-nowrap inline-block py-0 px-2 rounded-sm text-xs font-medium border border-success bg-success/30 text-success">Clients</span>
													<span className= "text-xs text-gray-500 dark:text-white/70">
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo in repellendus ipsum, deleniti nobis asperiores natus quidem possimus, harum dicta autem. Sequi eaque, eligendi quis recusandae voluptatem dignissimos a facere?
													</span>
												</div>
											</td>
											<td className= "!px-3"><i className= "ri ri-links-line text-gray-500 dark:text-white/70"></i></td>
											<td className= "!px-3 w-44">
												<div className= "icons-mail2 text-gray-500 dark:text-white/70">
													<span>27 sept,2022</span>
													<span className= "ltr:ml-3 rtl:ml-3">6:30pm</span>
												</div>
												<div className= "icons-mail">
													<div className= "flex justify-end items-center space-x-4 rtl:space-x-reverse">
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-mail-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    mark as read
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-delete-bin-6-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    delete
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-time-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    Snooze
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-archive-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    archive
																</span>
															</Link>
														</div>
													</div>
												</div>
											</td>
										</tr>
										<tr onClick={handleClick} className= "mail-list hover:bg-gray-100 dark:hover:bg-black/20">
											<td className= "py-3 ltr:!pl-4 rtl:!pr-4 ltr:!pr-3 rtl:!pl-3">
												<div className= "flex items-center h-5 mail-checkbox">
													<input id="hs-table-checkbox-17" type="checkbox" className= "border-gray-500 ti-form-checkbox"/>
													<label htmlFor="hs-table-checkbox-17" className= "sr-only">Checkbox</label>
												</div>
											</td>
											<td className= "!px-3"><i className= "ri ri-star-line text-gray-500 dark:text-white/70 hover:text-yellow-500"></i></td>
											<td className= "!px-3"><i className= "ri ri-price-tag-3-line text-yellow-500 dark:text-yellow-500 hover:text-yellow-500"></i></td>
											<td className= "!px-3 relative">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<div className= "flex space-x-3 rtl:space-x-reverse">
													<img className= "avatar avatar-xs ring-0 rounded-full" src= {ALLImages('jpg61')} alt="avatar"/>
													<p className= "text-slate-700 font-semibold text-sm dark:text-white my-auto">
                              Willie Makit
													</p>
												</div>
											</td>
											<td className= "font-medium !px-3 relative">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<p className= "text-xs text-gray-500 dark:text-white/70 mail-main truncate mb-2">
                            🎂 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error itaque officiis officia recusandae sapiente nam cupiditate voluptatibus dolorum voluptas commodi veritatis fuga inventore ipsam, illo nulla modi ipsa qui obcaecati.
												</p>
												<div className= "flex mt-2">
													<Link className= "py-1 px-3 space-x-2 rtl:space-x-reverse relative inline-flex flex-shrink-0 justify-center items-center rounded-full border font-normal bg-gray-100 text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10" to="#">
														<i className= "ri ri-image-line text-xs"></i>
														<span>Image02..._jpg</span>
													</Link>
												</div>
											</td>
											<td className= "!px-3"></td>
											<td className= "!px-3 w-44">
												<div className= "icons-mail2 text-gray-500 dark:text-white/70">
													<span>27 sept,2022</span>
													<span className= "ltr:ml-3 rtl:ml-3">6:30pm</span>
												</div>
												<div className= "icons-mail">
													<div className= "flex justify-end items-center space-x-4 rtl:space-x-reverse">
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-mail-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    mark as read
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-delete-bin-6-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    delete
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-time-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    Snooze
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-archive-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    archive
																</span>
															</Link>
														</div>
													</div>
												</div>
											</td>
										</tr>
										<tr onClick={handleClick} className= "mail-list hover:bg-gray-100 dark:hover:bg-black/20">
											<td className= "py-3 ltr:!pl-4 rtl:!pr-4 ltr:!pr-3 rtl:!pl-3">
												<div className= "flex items-center h-5 mail-checkbox">
													<input id="hs-table-checkbox-18" type="checkbox" className= "border-gray-500 ti-form-checkbox"/>
													<label htmlFor="hs-table-checkbox-18" className= "sr-only">Checkbox</label>
												</div>
											</td>
											<td className= "!px-3"><i className= "ri ri-star-line text-yellow-500 dark:text-yellow-500 hover:text-yellow-500"></i></td>
											<td className= "!px-3"><i className= "ri ri-price-tag-3-line   text-yellow-500 dark:text-yellow-500 hover:text-yellow-500"></i></td>
											<td className= "!px-3 relative">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<div className= "flex space-x-3 rtl:space-x-reverse">
													<img className= "avatar avatar-xs ring-0 rounded-full" src= {ALLImages('jpg62')} alt="avatar"/>
													<p className= "text-slate-700 font-semibold text-sm dark:text-white my-auto">
                              Katherina Kat
													</p>
												</div>
											</td>
											<td className= "font-medium !px-3 relative">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<p className= "text-xs text-gray-500 dark:text-white/70 mail-main truncate">
                             👜☎ Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum impedit accusantium iste praesentium culpa ipsa sequi molestiae tenetur, consequatur natus aliquid quos eum. Ratione, pariatur recusandae! Labore obcaecati laborum aut.
												</p>
											</td>
											<td className= "!px-3"><i className= "ri ri-attachment-2 text-gray-500 dark:text-white/70"></i></td>
											<td className= "!px-3 w-44">
												<div className= "icons-mail2 text-gray-500 dark:text-white/70">
													<span>27 sept,2022</span>
													<span className= "ltr:ml-3 rtl:ml-3">6:30pm</span>
												</div>
												<div className= "icons-mail">
													<div className= "flex justify-end items-center space-x-4 rtl:space-x-reverse">
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-mail-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    mark as read
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-delete-bin-6-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    delete
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-time-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    Snooze
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-archive-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    archive
																</span>
															</Link>
														</div>
													</div>
												</div>
											</td>
										</tr>
										<tr onClick={handleClick} className= "mail-list bg-gray-100 hover:bg-gray-100 dark:bg-black/20 dark:hover:bg-black/20">
											<td className= "py-3 ltr:!pl-4 rtl:!pr-4 ltr:!pr-3 rtl:!pl-3">
												<div className= "flex items-center h-5 mail-checkbox">
													<input id="hs-table-checkbox-19" type="checkbox" className= "border-gray-500 ti-form-checkbox"/>
													<label htmlFor="hs-table-checkbox-19" className= "sr-only">Checkbox</label>
												</div>
											</td>
											<td className= "!px-3"><i className= "ri ri-star-line text-yellow-500 dark:text-yellow-500 hover:text-yellow-500"></i></td>
											<td className= "!px-3"><i className= "ri ri-price-tag-3-line  text-gray-500 dark:text-white/70 hover:text-yellow-500"></i></td>
											<td className= "!px-3 relative">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<div className= "flex space-x-3 rtl:space-x-reverse">
													<span className= "avatar avatar-xs ring-0 rounded-full bg-secondary leading-none  p-2 text-center text-lg text-white">B</span>
													<p className= "text-slate-700 font-semibold text-sm dark:text-white my-auto">
                              Ben Dover
													</p>
												</div>
											</td>
											<td className= "font-medium !px-3 relative">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<div className= "flex space-x-2 rtl:space-x-reverse mail-main">
													<p className= "text-xs text-gray-500 dark:text-white/70">
                              Kasd voluptua labore et justo ea 👏 clita sit justo, rebum eos elitr duo sit et.
													</p>
													<span className= "whitespace-nowrap inline-block py-0 px-2 rounded-sm text-xs font-medium border border-info bg-info/30 text-info">Social</span>
												</div>
											</td>
											<td className= "!px-3"><i className= "ri ri-send-plane-line text-gray-500 dark:text-white/70"></i></td>
											<td className= "!px-3 w-44">
												<div className= "icons-mail2 text-gray-500 dark:text-white/70">
													<span>27 sept,2022</span>
													<span className= "ltr:ml-3 rtl:ml-3">6:30pm</span>
												</div>
												<div className= "icons-mail">
													<div className= "flex justify-end items-center space-x-4 rtl:space-x-reverse">
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-mail-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    mark as read
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-delete-bin-6-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    delete
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-time-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    Snooze
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-archive-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    archive
																</span>
															</Link>
														</div>
													</div>
												</div>
											</td>
										</tr>
										<tr onClick={handleClick} className= "mail-list bg-gray-100 hover:bg-gray-100 dark:bg-black/20 dark:hover:bg-black/20">
											<td className= "py-3 ltr:!pl-4 rtl:!pr-4 ltr:!pr-3 rtl:!pl-3">
												<div className= "flex items-center h-5 mail-checkbox">
													<input id="hs-table-checkbox-2" type="checkbox" className= "border-gray-500 ti-form-checkbox"/>
													<label htmlFor="hs-table-checkbox-2" className= "sr-only">Checkbox</label>
												</div>
											</td>
											<td className= "!px-3"><i className= "ri ri-star-line text-gray-500 dark:text-white/70 hover:text-yellow-500"></i></td>
											<td className= "!px-3"><i className= "ri ri-price-tag-3-line  text-gray-500 dark:text-white/70 hover:text-yellow-500"></i></td>
											<td className= "!px-3 relative">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<div className= "flex space-x-3 rtl:space-x-reverse">
													<img className= "avatar avatar-xs ring-0 rounded-full" src= {ALLImages('jpg67')} alt="avatar"/>
													<p className= "text-slate-700 font-semibold text-sm dark:text-white my-auto">
                              Benz Makit
													</p>
												</div>
											</td>
											<td className= "font-medium !px-3 relative">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<p className= "text-xs text-gray-500 dark:text-white/70 mail-main">
                              Some quick example text to build on the card title and make up the card's content😊.
												</p>
											</td>
											<td className= "!px-3"><i className= "ri ri-attachment-2 text-gray-500 dark:text-white/70"></i></td>
											<td className= "!px-3 w-44">
												<div className= "icons-mail2 text-gray-500 dark:text-white/70">
													<span>27 sept,2022</span>
													<span className= "ltr:ml-3 rtl:ml-3">6:30pm</span>
												</div>
												<div className= "icons-mail">
													<div className= "flex justify-end items-center space-x-4 rtl:space-x-reverse">
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-mail-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    mark as read
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-delete-bin-6-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    delete
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-time-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    Snooze
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-archive-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    archive
																</span>
															</Link>
														</div>
													</div>
												</div>
											</td>
										</tr>
										<tr onClick={handleClick} className= "mail-list bg-gray-100 hover:bg-gray-100 dark:bg-black/20 dark:hover:bg-black/20">
											<td className= "py-3 ltr:!pl-4 rtl:!pr-4 ltr:!pr-3 rtl:!pl-3">
												<div className= "flex items-center h-5 mail-checkbox">
													<input id="hs-table-checkbox-3" type="checkbox" className= "border-gray-500 ti-form-checkbox"/>
													<label htmlFor="hs-table-checkbox-3" className= "sr-only">Checkbox</label>
												</div>
											</td>
											<td className= "!px-3"><i className= "ri ri-star-line text-yellow-500 dark:text-yellow-500 hover:text-yellow-500"></i></td>
											<td className= "!px-3"><i className= "ri ri-price-tag-3-line  text-gray-500 dark:text-white/70 hover:text-yellow-500"></i></td>
											<td className= "!px-3 relative">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<div className= "flex space-x-3 rtl:space-x-reverse">
													<img className= "avatar avatar-xs ring-0 rounded-full" src= {ALLImages('jpg68')} alt="avatar"/>
													<p className= "text-slate-700 font-semibold text-sm dark:text-white my-auto">
                              Kat Itumay
													</p>
												</div>
											</td>
											<td className= "font-medium !px-3 relative overflow-hidden">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<p className= "text-xs text-gray-500 dark:text-white/70 mail-main truncate">
                              👍Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repudiandae doloremque tenetur? Velit, cum odit minima praesentium quia vel pariatur sapiente esse repellat fuga molestias libero provident qui nihil mollitia.
												</p>
											</td>
											<td className= "!px-3"></td>

											<td className= "!px-3 w-44">
												<div className= "icons-mail2 text-gray-500 dark:text-white/70">
													<span>27 sept,2022</span>
													<span className= "ltr:ml-3 rtl:ml-3">6:30pm</span>
												</div>
												<div className= "icons-mail">
													<div className= "flex justify-end items-center space-x-4 rtl:space-x-reverse">
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-mail-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    mark as read
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-delete-bin-6-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    delete
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-time-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    Snooze
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-archive-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    archive
																</span>
															</Link>
														</div>
													</div>
												</div>
											</td>
										</tr>
										<tr onClick={handleClick} className= "mail-list hover:bg-gray-100 dark:hover:bg-black/20">
											<td className= "py-3 ltr:!pl-4 rtl:!pr-4 ltr:!pr-3 rtl:!pl-3">
												<div className= "flex items-center h-5 mail-checkbox">
													<input id="hs-table-checkbox-1" type="checkbox" className= "border-gray-500 ti-form-checkbox"/>
													<label htmlFor="hs-table-checkbox-1" className= "sr-only">Checkbox</label>
												</div>
											</td>
											<td className= "!px-3"><i className= "ri ri-star-line text-gray-500 dark:text-white/70 hover:text-yellow-500"></i></td>
											<td className= "!px-3"><i className= "ri ri-price-tag-3-line text-yellow-500 dark:text-yellow-500 hover:text-yellow-500"></i></td>
											<td className= "!px-3 relative">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<div className= "flex space-x-3 rtl:space-x-reverse">
													<img className= "avatar avatar-xs ring-0 rounded-full" src= {ALLImages('jpg64')} alt="avatar"/>
													<p className= "text-slate-700 font-semibold text-sm dark:text-white my-auto">
                              Wiley Dover
													</p>
												</div>
											</td>
											<td className= "font-medium !px-3 relative">
												<Link aria-label="anchor" className= "mail-link before:absolute before:inset-x-0 before:top-0 before:bottom-0 before:z-1" to="#"></Link>
												<div className= "flex space-x-2 rtl:space-x-reverse mail-main">
													<span className= "whitespace-nowrap inline-block py-0 px-2 rounded-sm text-xs font-medium border border-danger bg-danger/30 text-danger">Work</span>
													<span className= "text-xs text-gray-500 dark:text-white/70">
                                  Lorem consetetur nonumy sed dolores eos dolores dolores, 🎉 sit et labore.
													</span>
												</div>
											</td>
											<td className= "!px-3"></td>
											<td className= "!px-3 w-44">
												<div className= "icons-mail2 text-gray-500 dark:text-white/70">
													<span>27 sept,2022</span>
													<span className= "ltr:ml-3 rtl:ml-3">6:30pm</span>
												</div>
												<div className= "icons-mail">
													<div className= "flex justify-end items-center space-x-4 rtl:space-x-reverse">
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-mail-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    mark as read
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-delete-bin-6-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    delete
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-time-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    Snooze
																</span>
															</Link>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<Link to="#" className= "hs-tooltip-toggle text-base text-gray-500 dark:text-white/70">
																<i className= "ri-archive-line"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                                    archive
																</span>
															</Link>
														</div>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className= "box-footer bg-transparent">
							<nav className= "flex justify-end items-center space-x-2 rtl:space-x-reverse">
								<Link className= "w-10 h-10 text-gray-500 dark:text-white/70 text-sm justify-center bg-gray-100 dark:bg-black/20 hover:text-primary p-2 inline-flex items-center gap-2 rounded-full" to="#">
									<span aria-hidden="true">«</span>
									<span className= "sr-only">Previous</span>
								</Link>
								<Link className= "w-10 h-10 bg-primary text-white p-2 inline-flex items-center text-sm justify-center font-medium rounded-full" to="#" aria-current="page">1</Link>
								<Link className= "w-10 h-10 bg-gray-100 dark:bg-black/20 text-gray-500 dark:text-white/70 hover:text-primary p-2 inline-flex items-center text-sm justify-center font-medium rounded-full" to="#">2</Link>
								<Link className= "w-10 h-10 bg-gray-100 dark:bg-black/20 text-gray-500 dark:text-white/70 hover:text-primary p-2 inline-flex items-center text-sm justify-center font-medium rounded-full" to="#">3</Link>
								<Link className= "w-10 h-10 text-gray-500 dark:text-white/70 text-sm justify-center bg-gray-100 dark:bg-black/20 hover:text-primary p-2 inline-flex items-center gap-2 rounded-full" to="#">
									<span className= "sr-only">Next</span>
									<span aria-hidden="true">»</span>
								</Link>
							</nav>
						</div>
					</div>
					)}
					{showSecondDiv && (
					<div className= "box mail-view">
						<div className= "px-4 box-header bg-transparent">
							<div className= "md:flex items-center justify-between">
								<div className= "sm:flex space-x-5 rtl:space-x-reverse">
									<div className= "sm:flex space-x-5 rtl:space-x-reverse">
										<div className= "hs-tooltip ti-main-tooltip">
											<Link to="#" onClick={handleBackClick} className= "hs-tooltip-toggle text-lg text-gray-500 dark:text-white/70 mail-btn">
												<i className= "ri-arrow-left-line"></i>
												<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                          Back To Inbox
												</span>
											</Link>
										</div>
										<div className= "hs-tooltip ti-main-tooltip">
											<Link to="#" className= "hs-tooltip-toggle text-lg text-gray-500 dark:text-white/70">
												<i className= "ri-inbox-archive-line"></i>
												<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                          Archive
												</span>
											</Link>
										</div>
										<div className= "hs-tooltip ti-main-tooltip">
											<Link to="#" className= "hs-tooltip-toggle text-lg text-gray-500 dark:text-white/70">
												<i className= "ri-spam-2-line"></i>
												<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                          Report Spam
												</span>
											</Link>
										</div>
										<div className= "hs-tooltip ti-main-tooltip">
											<Link to="#" className= "hs-tooltip-toggle text-lg text-gray-500 dark:text-white/70">
												<i className= "ri-delete-bin-6-line"></i>
												<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                          Move To Trash
												</span>
											</Link>
										</div>
										<div className= "hs-tooltip ti-main-tooltip">
											<Link to="#" className= "hs-tooltip-toggle text-lg text-gray-500 dark:text-white/70">
												<i className= "ri-mail-line"></i>
												<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                          Unread
												</span>
											</Link>
										</div>
										<div className= "hs-dropdown ti-dropdown hs-tooltip ti-main-tooltip">
											<Link to="#" className= "hs-tooltip-toggle text-lg text-gray-500 dark:text-white/70" id="snooze-drop1">
												<i className= "ri-time-line"></i>
												<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                          Snooze
												</span>
											</Link>
											<div className= "hs-dropdown-menu ti-dropdown-menu "
												aria-labelledby="snooze-drop1">
												<div className= "ti-dropdown-divider">
													<span className= "ti-dropdown-title">
                                  Snooze Untill
													</span>
													<Link className= "ti-dropdown-item" to="#">
                                Today
													</Link>
													<Link className= "ti-dropdown-item" to="#">
                                Tomorrow
													</Link>
													<Link className= "ti-dropdown-item" to="#">
                                This week
													</Link>
													<Link className= "ti-dropdown-item" to="#">
                                This weekend
													</Link>
													<Link className= "ti-dropdown-item" to="#">
                                Next weekend
													</Link>
													<Link className= "ti-dropdown-item" to="#">
                                Select Date
													</Link>
												</div>
											</div>
										</div>
										<div className= "hs-tooltip ti-main-tooltip">
											<Link to="#" className= "hs-tooltip-toggle text-lg text-gray-500 dark:text-white/70">
												<i className= "ri-add-circle-line"></i>
												<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                          Add Task
												</span>
											</Link>
										</div>
										<div className= "hs-dropdown ti-dropdown hs-tooltip ti-main-tooltip">
											<Link to="#" className= "hs-tooltip-toggle text-lg text-gray-500 dark:text-white/70" id="move-drop">
												<i className= "ri-share-box-line"></i>
												<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                         Move-to
												</span>
											</Link>
											<div className= "hs-dropdown-menu ti-dropdown-menu "
												aria-labelledby="move-drop">
												<div className= "ti-dropdown-divider">
													<span className= "ti-dropdown-title">
                                Move-to
													</span>
													<Link className= "ti-dropdown-item" to="#">
														<i className= "ri-inbox-line"></i> Inbox
													</Link>
													<Link className= "ti-dropdown-item" to="#">
														<i className= "ri-archive-line"></i> Archive
													</Link>
													<Link className= "ti-dropdown-item" to="#">
														<i className= "ri-draft-line"></i> Drafts
													</Link>
													<Link className= "ti-dropdown-item" to="#">
														<i className= "ri-send-plane-line"></i>Sent
													</Link>
													<Link className= "ti-dropdown-item" to="#">
														<i className= "ri-mail-star-line"></i>Starred
													</Link>
													<Link className= "ti-dropdown-item" to="#">
														<i className= "ri-delete-bin-line"></i>Trash
													</Link>
												</div>
											</div>
										</div>
										<div className= "hs-dropdown ti-dropdown hs-tooltip ti-main-tooltip">
											<Link to="#" className= "hs-tooltip-toggle text-lg text-gray-500 dark:text-white/70" id="label-drop">
												<i className= "ri-price-tag-line"></i>
												<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(1771px, -358px)"}}>
                         Label
												</span>
											</Link>
											<div className= "hs-dropdown-menu ti-dropdown-menu"
												aria-labelledby="label-drop">
												<div className= "ti-dropdown-divider">
													<span className= "ti-dropdown-title">
                                Label as
													</span>
													<div className= "relative flex items-start py-2 px-3 rounded-sm hover:bg-gray-100 dark:hover:bg-black/20">
														<div className= "flex items-center h-5 mt-1">
															<input id="mail-label" name="mail-label" type="checkbox" className= "ti-form-checkbox"/>
														</div>
														<label htmlFor="mail-label" className= "ltr:ml-3.5 rtl:mr-3.5 my-auto">
															<span className= "block text-sm font-semibold text-gray-800 dark:text-white/70">Notes</span>
														</label>
													</div>
													<div className= "relative flex items-start py-2 px-3 rounded-sm hover:bg-gray-100 dark:hover:bg-black/20">
														<div className= "flex items-center h-5 mt-1">
															<input id="mail-label2" name="mail-label2" type="checkbox" className= "ti-form-checkbox"/>
														</div>
														<label htmlFor="mail-label2" className= "ltr:ml-3.5 rtl:mr-3.5 my-auto">
															<span className= "block text-sm font-semibold text-gray-800 dark:text-white/70">Personals</span>
														</label>
													</div>
													<div className= "relative flex items-start py-2 px-3 rounded-sm hover:bg-gray-100 dark:hover:bg-black/20">
														<div className= "flex items-center h-5 mt-1">
															<input id="mail-label3" name="mail-label3" type="checkbox" className= "ti-form-checkbox"/>
														</div>
														<label htmlFor="mail-label3" className= "ltr:ml-3.5 rtl:mr-3.5 my-auto">
															<span className= "block text-sm font-semibold text-gray-800 dark:text-white/70">Receipts</span>
														</label>
													</div>
													<div className= "relative flex items-start py-2 px-3 rounded-sm hover:bg-gray-100 dark:hover:bg-black/20">
														<div className= "flex items-center h-5 mt-1">
															<input id="mail-label4" name="mail-label4" type="checkbox" className= "ti-form-checkbox"/>
														</div>
														<label htmlFor="mail-label4" className= "ltr:ml-3.5 rtl:mr-3.5 my-auto">
															<span className= "block text-sm font-semibold text-gray-800 dark:text-white/70">Work</span>
														</label>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className= "flex space-x-5 rtl:space-x-reverse">
									<div className= " text-gray-500 dark:text-white/70 leading-[0] my-auto">
										<span className= "current-page text-base leading-[0] font-semibold">1</span>
										<span className= "mx-1">Of</span>
										<span className= "total text-base leading-[0] font-semibold">10</span>
									</div>
									<div className= "opacity-60 text-gray-500 dark:text-white/70 leading-[0]">
										<button aria-label="button" type="button" className= "ti-btn p-0 m-0 focus:ring-0 focus:shadow-none focus:ring-offset-0">
											<i className= "ri ri-arrow-left-s-line rtl:rotate-180 leading-none text-lg"></i>
										</button>
									</div>
									<div className= " text-gray-500 dark:text-white/70 leading-[0]">
										<button aria-label="button" type="button" className= "ti-btn p-0 m-0 focus:ring-0 focus:shadow-none focus:ring-offset-0">
											<i className= "ri ri-arrow-right-s-line leading-none text-lg rtl:rotate-180"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className= "box-header border-b-0 pb-0 bg-transparent">
							<div className= "sm:flex justify-between mb-3">
								<div className= "flex items-center space-x-4 rtl:space-x-reverse">
									<div className= "flex">
										<img className= "avatar avatar-lg ring-0 rounded-sm mail-img" src= {ALLImages('jpg57')} alt="avatar"/>
									</div>
									<div>
										<p className= "text-slate-700 text-xs dark:text-white/50 mail-date">
                       Mon 26-09-2022 15:56
										</p>
										<p className= "text-lg">
											<span className= "mail-name">Json Taylor</span>
											<span className= "text-xs text-gray-500 dark:text-white/70 mail-email">(JsonTaylor2022@gmail.com)</span>
										</p>
										<p className= "text-sm font-semibold text-primary mail-subject">
                      Important Notice
										</p>
									</div>
								</div>
								<div className= "flex space-x-4 rtl:space-x-reverse my-auto">
									<div className= "hs-tooltip ti-main-tooltip">
										<Link to="#" className= "hs-tooltip-toggle text-lg text-gray-500 dark:text-white/70">
											<i className= "ri-printer-line"></i>
											<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
                          Printer
											</span>
										</Link>
									</div>
									<div className= "hs-tooltip ti-main-tooltip">
										<Link to="#" className= "hs-tooltip-toggle text-lg text-gray-500 dark:text-white/70">
											<i className= "ri-reply-line"></i>
											<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
                        Reply
											</span>
										</Link>
									</div>
									<div className= "hs-tooltip ti-main-tooltip">
										<Link to="#" className= "hs-tooltip-toggle text-lg text-gray-500 dark:text-white/70">
											<i className= "ri-star-line"></i>
											<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
                         Starred
											</span>
										</Link>
									</div>
									<div className= "hs-dropdown ti-dropdown hs-tooltip ti-main-tooltip">
										<button id="hs-dropdown-custom-icon-trigger" type="button" className= "hs-tooltip-toggle text-lg text-gray-500 hs-dropdown-toggle p-0 ti-dropdown-toggle border-0 shadow-none focus:ring-0 focus:shadow-none">
											<i className= "ri-more-2-fill"></i>
											<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">
                         View More
											</span>
										</button>
										<div className= "hs-dropdown-menu ti-dropdown-menu" aria-labelledby="hs-dropdown-custom-icon-trigger">
											<Link className= "ti-dropdown-item" to="#">
                              Read
											</Link>
											<Link className= "ti-dropdown-item" to="#">
                            Unread
											</Link>
											<Link className= "ti-dropdown-item" to="#">
                              Spam
											</Link>
											<Link className= "ti-dropdown-item" to="#">
                              None
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className= "flex space-x-4 rtl:space-x-reverse">
								<span className= "text-xs font-semibold">To : </span>
								<span className= "text-xs">WileyWaites@gmail.com</span>
							</div>
							<div className= "flex space-x-4 rtl:space-x-reverse">
								<span className= "text-xs font-semibold">CC : </span>
								<span className= "text-xs">SocratesItumay@gmail.com</span>
							</div>
						</div>
						<div className= "box-body">
							<h3 className= "text-lg mb-3">Hi Sir/Madam</h3>
							<p className= "mb-5 text-sm">Clita est et no tempor tempor aliquyam, et aliquyam voluptua duo labore. Sanctus sed magna et amet. Ipsum ipsum consetetur consetetur labore est sadipscing et ea eirmod. Rebum amet consetetur duo no gubergren sanctus. Erat.</p>
							<p className= "mb-5 text-sm">Erat takimata no sea ut diam voluptua et, lorem ut consetetur eirmod sadipscing et dolore vero accusam, labore nonumy no takimata clita at magna et. Dolores aliquyam ipsum est elitr. Et ipsum voluptua ut sea diam sanctus no elitr ipsum aliquyam, dolor et amet sit eirmod labore stet, sed sit.</p>
							<p className= "mb-5 text-sm">Voluptua erat et duo consetetur et et tempor. Lorem sed sed et labore duo, amet aliquyam rebum aliquyam sed kasd. Ea ut invidunt vero et.</p>
							<p className= "mb-5">Thanking you</p>
							<hr className= "border-gray-200 dark:border-white/10 mb-5"/>
							<div className= "sm:grid grid-cols-12 gap-6 sm:space-y-0 space-y-5">
								<div className= "col-span-12 xxl:col-span-2 md:col-span-4">
									<div className= "border dark:border-white/10 rounded-sm overflow-hidden">
										<Link to="#" className= "p-3 relative block text-center">
											<img src= {ALLImages('jpg12')} className= "rounded-sm" alt="Image Description"/>
											<div className= "mt-3">
												<span>Download</span><i className= "ri ri-download-2-line ltr:ml-3 rtl:mr-3"></i>
											</div>
										</Link>
									</div>
								</div>
								<div className= "col-span-12 xxl:col-span-2 md:col-span-4">
									<div className= "border dark:border-white/10 rounded-sm overflow-hidden">
										<Link to="#" className= "p-3 relative block text-center">
											<img src= {ALLImages('jpg10')} className= "rounded-sm" alt="Image Description"/>
											<div className= "mt-3">
												<span>Download</span><i className= "ri ri-download-2-line ltr:ml-3 rtl:mr-3"></i>
											</div>
										</Link>
									</div>
								</div>
								<div className= "col-span-12 xxl:col-span-2 md:col-span-4">
									<div className= "border dark:border-white/10 rounded-sm overflow-hidden">
										<Link to="#" className= "p-3 relative block text-center">
											<img src= {ALLImages('jpg11')} className= "rounded-sm" alt="Image Description"/>
											<div className= "mt-3">
												<span>Download</span><i className= "ri ri-download-2-line ltr:ml-3 rtl:mr-3"></i>
											</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className= "box-footer bg-transparent flex justify-between">
							<button type="submit" className= "py-2 px-3 ti-btn ti-btn-primary">
								<i className= "ri ri-arrow-go-back-line ltr:mr-2 rtl:ml-2"></i>Reply
							</button>
							<button type="button" className= "py-2 px-3 ti-btn ti-btn-danger">
								<i className= "ri ri-arrow-go-forward-line ltr:mr-2 rtl:ml-2"></i>Forward
							</button>
						</div>
					</div>
					)}
				</div>
			</div>

			<div id="mail-compose" className= {`hs-overlay hidden ti-modal ${ModelClass}`}>
				<div className= "hs-overlay-open:!mt-7 !mt-14 ease-out ti-modal-box">
					<div className= "ti-modal-content">
						<div className= "ti-modal-header">
							<h3 className= "ti-modal-title">
                  New message
							</h3>
							<div className= "">
								<button aria-label="button" type="button" className= "ti-modal-max-screen">
									<i className= "ri-fullscreen-line"></i>
								</button>
								<button onClick={()=>{setModelClass(ModelClass == "mail-minscreen open" ? '' :'mail-minscreen open')}} aria-label="button" type="button" className= "ti-modal-min-screen">
									<i className= "ri-fullscreen-exit-line"></i>
								</button>
								<button type="button" className= "hs-dropdown-toggle ti-modal-close-btn"
									data-hs-overlay="#mail-compose">
									<span className= "sr-only">Close</span>
									<i className= "ri-close-line"></i>
								</button>
							</div>
						</div>
						<div className= "ti-modal-body">
							<div className= "space-y-3">
								<div className= "flex rounded-sm shadow-sm mail-to">
									<input type="email" className= "ti-form-input  ltr:rounded-r-none rtl:rounded-l-none focus:z-10" placeholder="To" required/>
									<div className= "btn-cc px-4 inline-flex items-center min-w-fit border ltr:border-l-0 rtl:border-r-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
										<span className= "text-sm text-gray-500 dark:text-white/70">CC</span>
									</div>
									<div className= "btn-bcc px-4 inline-flex items-center min-w-fit  ltr:rounded-r-sm rtl:rounded-l-sm border ltr:border-l-0 rtl:border-r-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
										<span className= "text-sm text-gray-500 dark:text-white/70">BCC</span>
									</div>
								</div>
								<div className= "flex rounded-sm shadow-sm hidden mail-cc">
									<input type="email" className= "ti-form-input  ltr:rounded-r-none rtl:rounded-l-none focus:z-10" placeholder="CC" required/>
									<div className= "btn-cc-bcc px-4 inline-flex items-center min-w-fit  ltr:rounded-r-sm rtl:rounded-l-sm border ltr:border-l-0 rtl:border-r-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
										<span className= "text-sm text-gray-500 dark:text-white/70">BCC</span>
									</div>
								</div>
								<div className= "flex rounded-sm shadow-sm hidden mail-bcc">
									<input type="email" className= "ti-form-input  ltr:rounded-r-none rtl:rounded-l-none focus:z-10" placeholder="Bcc" required/>
									<div className= "btn-bcc-cc px-4 inline-flex items-center min-w-fit  ltr:rounded-r-sm rtl:rounded-l-sm border ltr:border-l-0 rtl:border-r-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
										<span className= "text-sm text-gray-500 dark:text-white/70">Cc</span>
									</div>
								</div>
								<input type="text" id="input-label" className= "ti-form-input focus-visible:outline-none" placeholder="Subject"/>
								<textarea className= "ti-form-input" rows="10" placeholder="Type Your Message Here ......."></textarea>
							</div>
						</div>
						<div className= "ti-modal-footer !block">
							<div className= "sm:flex items-center justify-between">
								<div className= "flex items-center space-x-1 rtl:space-x-reverse">
									<Link aria-label="anchor" to="#" className= "text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i className= "text-lg ri ri-attachment-2"></i></Link>
									<Link aria-label="anchor" to="#" className= "text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i className= "text-lg ri ri-links-line"></i></Link>
									<Link aria-label="anchor" to="#" className= "text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i className= "text-lg ri ri-image-line"></i></Link>
									<Link aria-label="anchor" to="#" className= "text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i className= "text-lg ri ri-printer-line"></i></Link>
									<Link aria-label="anchor" to="#" className= "text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i className= "text-lg ri ri-delete-bin-6-line"></i></Link>
								</div>
								<div className= "">
									<button type="submit" className= "py-2 px-3 ti-btn ti-btn-primary ltr:float-right rtl:float-left">
                    Send
									</button>
									<button type="button" className= "hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
										data-hs-overlay="#mail-compose">
                    Cancel
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MainMail;
